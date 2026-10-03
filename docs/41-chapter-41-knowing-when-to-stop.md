# Chapter 41: Knowing When to Stop

Cedar's old scheduling interface serves a declining minority of customers. Keeping it available still requires engineering changes, compatibility checks and support knowledge. A change to scheduling behaviour must work through both interfaces, and support staff must establish which version a dispatcher is using before explaining what to do. The remaining customers receive something useful; everyone maintaining the product carries the additional work.

The team proposes retirement. Before agreeing, the product manager needs to know what those customers would lose, what replacing that work would require and what Cedar would gain. A small number of users can depend heavily on a capability. Equally, preserving every existing capability indefinitely can prevent improvements that many customers need.

The choice is an allocation of future effort. Continuing the old interface requires a decision just as retiring it does.

## Recognise the investment hidden in continuation

An established feature can become difficult to question because its costs are dispersed. Engineering spends a little longer on each change. Support maintains another set of instructions. Designers account for another interaction pattern. A dependency receives an urgent security update, and someone must remember whether the old interface uses it. None of these activities necessarily appears in a proposal labelled “keep the old screen”. Together, they consume real capacity.

Begin by making that work visible. Ask engineering which changes require duplicate implementation or testing, support which questions depend on the old interface, and operations which systems would remain after its removal. Separate the burden caused by this interface from work that Cedar would still need to perform. Removing a screen does not automatically remove the underlying scheduling service.

Declining value also needs interpretation. Fewer active users might reflect successful migration, customers leaving Cedar, seasonal work or a capability used infrequently but at a critical moment. A monthly login count cannot tell those stories apart. Examine which tasks remain, how important they are, and whether the replacement lets those people complete them.

Retirement can concern different objects. **Feature retirement** removes a capability or an old way of using a continuing product. **Product retirement** ends the product's service more broadly. Cedar can retire one scheduling interface while continuing scheduling. Closing Cedar itself would create a much larger problem involving job records, integrations, payments and customers' continuity of work. Be precise about the boundary before estimating benefits or announcing an end date.

Deletion is narrower again. Removing code, erasing records and ending access are separate actions. A retired interface might leave records that must remain accessible through another route. Conversely, a screen can disappear while its unused infrastructure continues to generate costs. A complete decision names what will stop, what will continue and who remains responsible.

The initial question is therefore not whether the interface is old. It is whether its future contribution justifies its future demands, given realistic alternatives and the responsibilities Cedar has already incurred.

## Compare the futures available

The money spent building the old interface cannot be recovered merely by continuing to use it. That irrecoverable past expenditure is a **sunk cost**. It should not determine which future option is preferable. **Opportunity cost** concerns the value of the best alternative forgone when resources are committed to a choice.[^c41-n01]

For Cedar, engineers maintaining two interfaces cannot use the same hours to improve reliability elsewhere. But saying “the new work is more exciting” does not establish that its value is higher. Name the alternative, explain the expected benefit and acknowledge uncertainty. Capacity released from maintenance only creates value if the organisation can use it effectively.

Compare options over a common period. These might include maintaining the current arrangement, simplifying the old interface, improving the replacement and migrating customers, or supporting a smaller set of customers through a different route. Immediate removal is only one possible form of retirement, and often an implausible one.

Consider an illustrative twelve-month comparison. Suppose keeping the old interface for the full year requires £60,000 of additional engineering and support work. A migration programme would require £35,000 of transition work, £10,000 to maintain the old interface during the transition and £5,000 of continuing record-access support afterwards. Under these assumptions, the migration option costs £50,000 over the same year, which is £10,000 less than continuation.

That is a comparison of specified costs, not a complete business case. It assumes the replacement supports the relevant work and that estimates cover the same cost categories. Customer disruption, lost revenue, contractual liabilities and benefits from released capacity have not yet been valued. If an uncovered customer dependency adds £20,000 to migration, its first-year cost becomes £70,000. The apparent saving disappears. A longer period might change the comparison again, but future savings depend on the work actually ending.

Keep arithmetic honest. Do not add the original development bill to only one future option. Do not count an engineer's salary as a saving if the person remains employed, then also count the entire value of their alternative work without explaining the accounting. Separate cash expenditure, capacity and estimated benefits before combining them. A finance colleague can help make the comparison consistent.

Existing obligations are not sunk merely because they arose from a past decision. A promised period of support may create future work. A customer's cost of changing an integration is a future consequence. An irrecoverable historical bill and an outstanding responsibility belong on different sides of the reasoning.

The purpose of the comparison is to expose which assumptions determine the choice. If retirement only looks attractive when migration is effortless and every customer stays, the team has identified what it still needs to investigate.

## Find the dependencies that usage numbers miss

Treat remaining customers as people doing work, not rows to be reduced to zero. An account owner may welcome the new interface while dispatchers still use an old export to prepare a morning briefing. Someone may rely on a keyboard sequence because using a pointer is difficult. Another business may have written instructions around a screen that changes only once a year. These are possibilities to investigate, not reasons to assume that every customer requires permanent compatibility.

Build a dependency picture from several kinds of evidence. Usage records can identify accounts and tasks that still touch the interface, subject to instrumentation limits. Support records reveal some difficulties and workarounds. Conversations and observation can explain why a task remains there. Contract review identifies explicit commitments. Engineering examination identifies integrations, stored links and shared components. No single source covers all of these questions.

For each important dependency, identify the work, the affected people, the replacement route and the evidence that the route works. “Export exists in the new version” is weaker than “the dispatcher can produce the file their accounting colleague needs, with the required fields and permissions”. A capability name does not establish compatibility with a customer's process.

Pay attention to people who do not complain. The person receiving retirement emails may be a commercial contact who never uses scheduling. A departing employee may have created an integration that nobody now recognises. Absence from support tickets establishes little about either situation. Reach the people responsible for the work and the people who must approve its change.

Contracts require qualified interpretation of actual commitments, including amendments and promises made through commercial arrangements. The product manager should gather the relevant documents and questions, then involve legal and commercial colleagues. A general announcement does not by itself change a contractual obligation. Nor should an AI summary be treated as an authoritative determination of what Cedar owes.

Data retention needs its own decision. Identify which information customers must export, which Cedar must retain, who may access it, and when deletion is appropriate. Establish those requirements with the responsible privacy, legal, security and records specialists using the applicable rules and agreements. This chapter cannot supply one retention period for every record or business.

Also distinguish an export from a usable migration. Customers need to interpret the fields, preserve essential relationships and confirm that records arrived correctly. A file they cannot open or understand is a poor substitute for access to their history. The receiving service's ability to use information matters as much as Cedar's ability to produce it.

This investigation can change the decision. Cedar may find that a modest improvement to the new interface resolves most dependencies, while one customer needs a longer transition. It may discover a critical capability that the proposed retirement would remove entirely. Either finding is more useful than announcing a date and learning about the dependency through a crisis.

## Make retirement a supported transition

Once the appropriate decision-maker approves retirement, give the transition its own resources and ownership. A date without people available to resolve migration problems is an aspiration. The product manager coordinates customer impact and priorities; engineering, support, commercial teams and specialists retain responsibility for the work that needs their expertise.

Public-service guidance on retirement makes a useful general point: consider how users' needs will be met afterwards, communicate the change and required actions, and plan for information responsibilities. It also recognises that people using an API may need time to change their own software.[^c41-n02] Cedar must work out the appropriate details for its customers rather than copy a government service's procedure.

A retirement message should say which interface is ending, why, who is affected, what remains available, what the customer needs to do and where to obtain help. Give dates whose meaning is unambiguous: a final date for creating new work may differ from the final date for viewing records. Explain what happens to data. Have the relevant owners verify those commitments before sending them.

Use channels that reach the affected people. An account email may need to be reinforced by an in-product notice, a conversation with an administrator or direct support for an integration owner. Ensure accessibility and language needs are considered. Receiving a message is not the same as understanding it, and understanding it is not the same as completing migration.

Observe progress through completed work. Have customers successfully used the replacement for the tasks that mattered? Have integration owners checked their changes? Can support recognise and resolve the remaining problems? Agree criteria for proceeding, extending support or pausing a particular step. An extension should state its reason, owner and review point so that temporary coexistence does not quietly become indefinite.

Sequence irreversible actions carefully. Disabling new entries can reveal remaining dependencies before access ends. A limited read-only period may help in some situations, provided its cost and information obligations are understood. Deleting records may be harder to reverse than disabling a route. Engineering and information owners should establish what restoration is possible before relying on it as a contingency.

Keep an exception record during the transition. An exception might allow a particular customer to retain access while an agreed export is completed. Record the task, reason, responsible person and ending condition. Otherwise each private promise can undermine the public plan, leaving support to reconcile incompatible expectations. Review exceptions together so that a repeated problem becomes a product decision, rather than a growing collection of favours that nobody has the authority or capacity to maintain.

After retirement, verify that the intended work has actually stopped. Remove obsolete documentation and internal instructions, close unused access, and retire infrastructure when its dependencies permit. Preserve the information and support that remain necessary. Assign someone to monitor customers arriving through old links or contacting support with an unexpected dependency. The final switch does not end accountability.

Communicate the outcome internally too. If compatibility work remains, explain why. If the freed capacity is committed elsewhere, make that choice visible. Retirement has achieved its purpose when Cedar can support the remaining service responsibly and the promised reduction in burden is real.

## Preserve judgement at the point of exit

An AI assistant can help organise a large dependency investigation. Provide approved, source-labelled usage summaries, support records and relevant documents. Ask for a table of affected tasks, customers, proposed replacement routes, unresolved questions and links to supporting passages. Require the assistant to separate an explicit commitment from an inferred dependency and to identify material it could not inspect.

Review important rows against their originals. Multiple support tickets may describe one customer's repeated problem rather than several independent dependencies. An unsigned draft may be mistaken for the operative contract. Missing instrumentation can turn “not observed” into “not used”. These errors would distort who receives attention and which migration work gets funded.

Use the resulting summary to guide investigation and human review. The assistant should not independently choose whose service ends, send binding promises, approve exceptions or delete customer information. Those actions can have irreversible effects, and the summary does not contain every relevant responsibility. Decision authority and tool permissions should reflect that boundary. A person must understand and authorise the specific consequential action, not merely endorse a broad instruction to finish retirement.

Stopping also challenges organisational identity. The old interface may have won Cedar's first customers. Its creators may see retirement as a judgement on their competence. Recognise what the work accomplished and preserve useful learning without turning gratitude into a permanent support obligation. Past success and a present decision to stop can both be reasonable.

The same issue arises outside software. A community organisation might retire a volunteer transport service after another provider takes over the journeys. Its vehicles and booking procedure can stop while responsibility for passengers' transition remains. If the organisation's identity is bound to operating the service, leaders need to separate the valued purpose from the particular arrangement that once fulfilled it. Whether the need is now met is more important than preserving the familiar activity.

Try a short retirement review for something in your own product. Describe the value still delivered, the future cost of continuation and the strongest realistic alternative. List one dependency that current usage data would miss. State what customers would need to complete the transition, who must assess obligations and what evidence would make you postpone or reject retirement. Include a named decision-maker and a review date.

Then reverse the default. If the capability did not already exist, would you commit the necessary future resources to provide it under today's conditions? Existing customers and obligations still matter, so this is a diagnostic question rather than a permission to abandon them. It makes the investment visible. Responsible product judgement includes ending arrangements whose future value no longer justifies their demands, and doing the transition work that allows people to continue without them.

## Notes

[^c41-n01]: OpenStax, *Principles of Economics 3e*, §2.1, “The Concept of Opportunity Cost” and “Sunk Costs”. The Cedar comparison is original illustrative arithmetic, not a reported result.
[^c41-n02]: Government Digital Service, “Retiring your service”, “Consider user needs”, “Telling your users” and “Protecting information”. Government-specific procedures and retention/notice periods are not generalised here.

## References

- Government Digital Service. “Retiring your service”. Service Manual. Updated 26 August 2025. https://www.gov.uk/service-manual/agile-delivery/retiring-your-service
- OpenStax. *Principles of Economics 3e*. §2.1, “How Individuals Make Choices Based on Their Budget Constraint”. https://openstax.org/books/principles-economics-3e/pages/2-1-how-individuals-make-choices-based-on-their-budget-constraint
