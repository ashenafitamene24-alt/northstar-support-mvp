Client: Northstar Retail Co. 
Component: Customer Support Chatbot (Order Status & Returns/Refunds) 
Prepared by: Engineering Team 
Date: August 13, 2026 
Status: Pre-launch — pending database integration
⸻
Purpose

This note is a summary of the chatbot's current readiness for production use. It is intended for the Northstar team (technical and non-technical stakeholders alike) to understand what the chatbot can do today, where its current limits are, and what needs to happen before it goes live with real customers.
⸻
1. What Works

The chatbot has been built and tested against a set of representative support scenarios. It currently handles:

- Order status inquiries — e.g., "Where is my order?", "Has my order shipped yet?", "What's the estimated delivery date?"
- Return and refund inquiries — e.g., "How do I return an item?", "When will I get my refund?", "What's your return policy?"
- Consistent, automated responses to these repetitive question types, reducing the manual load on the support team for the highest-volume ticket categories.

All of the above have been validated in a test environment using sample data and are functioning as expected at the conversational level.

2. What Is Known to Be Broken or Missing

- No live data connection. The chatbot is currently running against fake/test order data, not Northstar's real database. Any order numbers, statuses, or refund amounts it returns right now are placeholders, not real customer records.
- Not production-ready for real orders. Because of the above, the bot cannot yet be trusted to give accurate answers to actual customers — it should not be exposed to live traffic until this is resolved.

3. What the Chatbot Cannot Do (Out of Scope / Known Limitations)

To set expectations clearly, the chatbot does not currently:

- Process or execute a return/refund — it can explain the policy and steps, but cannot initiate a return or issue a refund on a customer's behalf.
- Handle requests outside its two supported topics (order status, returns/refunds) — e.g., product recommendations, billing/payment issues, account changes, or general complaints.
- Verify customer identity or authenticate a user before sharing order details, since it is not yet wired into any real customer/order system.
- Escalate to a human support agent automatically. There is currently no handoff path for cases the bot can't resolve.
- Guarantee accuracy, since — until the live database connection is made — every answer it gives is based on test data, not real order records.

These are not necessarily flaws to be fixed immediately, but the Northstar team should be aware of them when deciding what the chatbot is (and isn't) presented as capable of at launch.

4. What Northstar Needs to Do Next

- Connect the chatbot to the live order management system. Northstar's tech team needs to provide access/integration so the bot pulls real order, shipping, and refund data instead of test data.
- Re-test with real order scenarios once connected, to confirm response accuracy before opening the bot up to real customers.
- Decide on a human escalation path for questions the bot can't answer (e.g., a fallback to a live agent or support email).
- Confirm scope expectations internally — i.e., align support/CX teams on the fact that the bot only covers order status and returns/refunds at this stage, so customers aren't routed to it for unsupported issues.