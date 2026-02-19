#!/usr/bin/env node
/**
 * Sync marketplace.json with skills directory.
 *
 * Scans skills/ for directories containing SKILL.md
 * and updates marketplace.json to match.
 */

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = "skills";
const MARKETPLACE_FILE = ".claude-plugin/marketplace.json";

/**
 * Parse YAML frontmatter from a SKILL.md file
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    frontmatter[key] = value;
  }

  return frontmatter;
}

/**
 * Get all skills with their metadata
 */
function getSkillsWithMetadata() {
  if (!fs.existsSync(SKILLS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory()) return false;
      const skillFile = path.join(SKILLS_DIR, entry.name, "SKILL.md");
      return fs.existsSync(skillFile);
    })
    .map((entry) => {
      const skillFile = path.join(SKILLS_DIR, entry.name, "SKILL.md");
      const content = fs.readFileSync(skillFile, "utf8");
      const frontmatter = parseFrontmatter(content);

      return {
        dir: entry.name,
        path: `./${SKILLS_DIR}/${entry.name}`,
        name: frontmatter.name || entry.name,
        description: frontmatter.description || "",
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Update skill count in description
 */
function updateSkillCount(description, count) {
  return description.replace(/\d+ creator marketing skills/, `${count} creator marketing skills`);
}

/**
 * Update marketplace.json with skills list
 */
function updateMarketplace(skills) {
  const marketplace = JSON.parse(fs.readFileSync(MARKETPLACE_FILE, "utf8"));
  const plugin = marketplace.plugins[0];
  const existingSkills = plugin.skills || [];
  const currentSkills = skills.map((s) => s.path);

  if (JSON.stringify(currentSkills) === JSON.stringify(existingSkills)) {
    return { updated: false };
  }

  plugin.skills = currentSkills;
  plugin.description = updateSkillCount(plugin.description, currentSkills.length);

  fs.writeFileSync(MARKETPLACE_FILE, JSON.stringify(marketplace, null, 2) + "\n");

  const added = currentSkills.filter((s) => !existingSkills.includes(s));
  const removed = existingSkills.filter((s) => !currentSkills.includes(s));

  return { updated: true, added, removed };
}

function main() {
  const skills = getSkillsWithMetadata();

  const result = updateMarketplace(skills);

  if (!result.updated) {
    console.log(`Everything is already in sync (${skills.length} skills)`);
    return;
  }

  if (result.added.length) {
    console.log(`Added: ${result.added.join(", ")}`);
  }
  if (result.removed.length) {
    console.log(`Removed: ${result.removed.join(", ")}`);
  }
  console.log(`Updated marketplace.json (${skills.length} skills)`);
}

main();
