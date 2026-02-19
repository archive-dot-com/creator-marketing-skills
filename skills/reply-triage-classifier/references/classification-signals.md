# Reply Classification Signals Reference

> Signal library for the reply-triage-classifier skill. Use this to identify classification categories and map specific language patterns to each.

## Table of Contents

1. [Classification Categories](#classification-categories)
2. [Signal Phrases by Category](#signal-phrases-by-category)
3. [Ambiguous Signals](#ambiguous-signals)
4. [Platform-Specific Patterns](#platform-specific-patterns)
5. [Follow-Up Timing Benchmarks](#follow-up-timing-benchmarks)
6. [Next Action Templates by Category](#next-action-templates-by-category)

---

## Classification Categories

| Category | Definition | Typical Share of Replies |
|----------|-----------|------------------------|
| **Interested** | Creator expresses clear willingness to collaborate. May ask logistics questions but intent is positive. | 15-25% |
| **Negotiating** | Creator is interested but wants different terms — rate, deliverables, timeline, usage rights, or exclusivity. | 10-20% |
| **Declined** | Creator explicitly says no. Reasons vary: brand fit, schedule, exclusivity conflict, rate mismatch. | 10-15% |
| **Needs Info** | Creator hasn't committed or refused — they need specifics before deciding. Asking about product, campaign details, compensation, or timeline. | 15-25% |
| **Ghosted** | No reply after initial outreach + at least one follow-up. Not a true "reply" but included because triage must account for silence. | 30-50% |

---

## Signal Phrases by Category

### Interested

Strong positive signals — creator is ready to move forward or nearly there.

| Signal Type | Example Phrases |
|-------------|----------------|
| Direct acceptance | "I'd love to work together," "I'm in," "This sounds great," "Count me in" |
| Logistics questions (positive) | "When would you need the content by?" "Where should I send my address?" "What's the next step?" |
| Enthusiasm markers | "I've been using your product already," "I'm a big fan," "This is right up my alley" |
| Rate acceptance | "That rate works for me," "Your offer sounds fair," "Happy with those terms" |
| Forwarding to manager | "Let me loop in my manager — they handle partnerships" (positive because they're advancing it) |

**Key distinction:** Logistics questions with positive framing are Interested, not Needs Info. "When do you need this by?" = interested. "What exactly would I be posting?" = needs info.

### Negotiating

Creator is interested but wants to change the deal structure.

| Signal Type | Example Phrases |
|-------------|----------------|
| Rate counter | "My rate for a Reel is usually $X," "That's a bit below my standard rate," "I typically charge..." |
| Deliverable adjustment | "Could we do 1 Reel instead of 2?" "Would you be open to Stories only?" "I could do a TikTok instead" |
| Usage rights pushback | "I don't usually grant usage rights at that rate," "Whitelisting would be additional," "How long would you need usage?" |
| Exclusivity concerns | "I'm already working with [competitor]," "I'd need a higher rate for exclusivity," "Can we limit the exclusivity window?" |
| Timeline negotiation | "That timeline is tight — could we push to [date]?" "I'm booked through [month]" |
| Value-add asks | "Would you also gift product to my [friend/family]?" "Could I get an affiliate link too?" "Any chance of a longer-term deal?" |

**Key distinction:** Negotiating requires the creator to show interest in working together while requesting changes. "That's below my rate" alone could be a decline — context matters. If they offer an alternative, it's negotiating.

### Declined

Creator is saying no. Capture the reason for future reference.

| Signal Type | Example Phrases |
|-------------|----------------|
| Direct decline | "I'll pass on this one," "Not a good fit right now," "I'm going to decline" |
| Brand fit | "Not really aligned with my content," "My audience wouldn't connect with this," "Not my niche" |
| Schedule/capacity | "I'm fully booked," "Not taking on new partnerships right now," "My schedule is packed through Q2" |
| Exclusivity conflict | "I have an exclusive with [competitor]," "I'm under a non-compete" |
| Rate mismatch (firm) | "That's significantly below my rate and I can't adjust" (no counter offered) |
| Polite non-answer | "Thanks for thinking of me but I'll have to pass," "Appreciate it but not this time" |

**Key distinction:** A decline with a reason is more useful than one without. Always note the stated reason — it informs whether to re-approach in future campaigns.

### Needs Info

Creator hasn't decided — they need clarity before committing.

| Signal Type | Example Phrases |
|-------------|----------------|
| Compensation questions | "What's the budget?" "Is this paid or gifted?" "What are you offering for this?" |
| Campaign detail questions | "What would the deliverables be?" "What's the campaign about?" "When would this go live?" |
| Product questions | "Can you tell me more about the product?" "I'd want to try it first," "Do you have samples?" |
| Usage/rights questions | "Would you want usage rights?" "Where would the content be used?" "For how long?" |
| Process questions | "How does your collab process work?" "What does the timeline look like?" "Do you use contracts?" |
| Conditional interest | "Depends on the product," "Would need to see the brief first," "Interested if the rate is right" |

**Key distinction:** Needs Info is NOT soft interest. Treat it as neutral until answered. The creator is doing due diligence — a fast, clear response converts many Needs Info replies to Interested.

### Ghosted

No response despite outreach attempts. Classification depends on outreach history.

| Criteria | Classification |
|----------|---------------|
| Initial message sent, no reply, < 3 days | Too early to classify — wait |
| Initial message sent, no reply, 3-7 days | Soft ghost — send follow-up |
| Initial message + 1 follow-up, no reply, 7+ days | Ghosted |
| Initial message + 2 follow-ups, no reply | Ghosted (final) — move on |
| Message opened/read but no reply (if trackable) | Ghosted (confirmed read) |
| DM "seen" but no reply | Ghosted (confirmed read) |

---

## Ambiguous Signals

Some replies don't fit neatly into one category. Use these tiebreaker rules:

| Ambiguous Reply | Default Classification | Reasoning |
|----------------|----------------------|-----------|
| "Sounds interesting, let me think about it" | Needs Info | No commitment yet — follow up in 3-5 days |
| "I'll check my schedule" | Needs Info | Positive lean but no commitment |
| "Send me more info" | Needs Info | Explicitly requesting details |
| "Maybe for the right price" | Negotiating | Conditional interest with rate signal |
| "I don't usually do gifting-only" | Negotiating | Implicit rate counter |
| "Not sure this is a fit but tell me more" | Needs Info | Skeptical but still engaging |
| Auto-reply / OOO | Ghosted (temporary) | Re-classify after they return |
| Manager/agent response on behalf | Classify based on content | Treat agent replies with same framework |
| Emoji-only reply (fire, heart, thumbs up) | Needs Info | Positive signal but no actionable commitment |
| "Thanks!" (no other content) | Needs Info | Acknowledge but follow up with specifics |

---

## Platform-Specific Patterns

### Instagram DMs
- Replies tend to be shorter, more casual, emoji-heavy
- "Seen" indicators provide ghost confirmation
- Voice messages count as replies — classify by content
- Story replies to your outreach (reacting with emoji) = soft interest, classify as Needs Info

### Email
- Longer, more formal replies
- Manager/agent replies more common
- Auto-replies and OOO messages are frequent
- Read receipts unreliable

### TikTok DMs
- Very casual, short replies
- Often get lost in creator inboxes — higher ghost rate
- Video replies occasionally happen — classify by content

### Twitter/X DMs
- Least common outreach channel
- Short replies, casual tone
- Quote-tweets of outreach = public signal, treat carefully

---

## Follow-Up Timing Benchmarks

| Situation | Wait Before Follow-Up | Maximum Follow-Ups |
|-----------|----------------------|-------------------|
| No reply to initial outreach | 3-5 business days | 2 follow-ups total |
| No reply after "let me think about it" | 3-5 business days | 1 follow-up |
| Needs Info — you sent the requested info | 2-3 business days | 1-2 follow-ups |
| Negotiating — ball is in your court | Reply within 24 hours | N/A — keep the conversation moving |
| Negotiating — ball is in their court | 3-5 business days | 1 follow-up |
| Declined — but left door open | Re-approach next campaign | 0 follow-ups on this campaign |
| Ghosted (final) | Next campaign cycle | 0 — move on |

**Best send times:** Tuesday-Thursday, 10-11 AM or 2-3 PM in creator's timezone. Avoid Monday mornings and Friday afternoons.

---

## Next Action Templates by Category

### Interested — Lock It Down
- Send contract/agreement within 24 hours
- Confirm deliverables, timeline, and compensation in writing
- Ship product immediately if gifting is involved
- Add to active campaign tracker

### Negotiating — Respond Strategically
- Acknowledge their counter within 24 hours
- If rate counter: check against budget, consider adjusting deliverables or offering usage rights bundle
- If deliverable counter: evaluate whether adjusted scope still meets campaign goals
- If timeline counter: check campaign flexibility
- Always counter with a specific alternative — never just say "we can't do that"

### Declined — Close Gracefully
- Thank them genuinely (no guilt-tripping)
- Ask if they'd be open to future campaigns (if brand fit was the issue, don't ask)
- Log the decline reason in your tracker for future reference
- Remove from current campaign pipeline

### Needs Info — Respond Fast
- Reply within 24 hours with clear, specific answers
- Pre-attach campaign brief or rate card if relevant
- Don't oversell — answer what they asked, concisely
- Set a mental timer: if no reply in 5 days after you answer, send one follow-up then reclassify

### Ghosted — Follow Up Then Move On
- First follow-up: 3-5 days after initial message, reference original note briefly
- Second follow-up: 5-7 days after first follow-up, keep it very short ("Just bumping this up — still interested?")
- After two follow-ups with no reply: mark as Ghosted (final), move on
- Consider switching channels (email to DM or vice versa) for one follow-up
