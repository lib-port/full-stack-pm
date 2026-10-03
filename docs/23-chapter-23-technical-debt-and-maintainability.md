# Chapter 23: Technical Debt and Maintainability

## Follow the cost of one more exception

One Cedar customer allows technicians to accept overlapping appointments when a dispatcher approves them. Another blocks overlaps entirely. A third treats provisional bookings differently from confirmed visits. Over several years, Cedar's engineers have added customer-specific scheduling exceptions to satisfy these requests. Each exception solved an immediate problem. Together, they now make every scheduling release slower to check and more dangerous to change.

Priya, a Cedar engineer, is asked to add a new appointment status. Before estimating the visible feature, she must discover which old rules apply to the new status. Some rules live in the scheduling service, others in screen behaviour, and others in instructions support staff follow. A change that appears local can alter what several companies are allowed to book.

The problem is not simply that Cedar has many customers. Different businesses may legitimately need different behaviour. **Complexity** comes from the number of things that must be understood and the relationships between them. Some complexity belongs to the work itself. Some has been added by inconsistent implementations, duplicated rules or hidden dependencies. Removing all differences could simplify the software while making the product unsuitable for its customers.

**Maintainability** concerns how readily people can understand, modify, verify and support the system. A maintainable product can still be complicated. Its rules have understandable locations and relationships; engineers can investigate a change without reconstructing the entire history of every customer request. The issue is the effort and uncertainty involved in keeping the product useful.

**Technical debt** is a metaphor for implementation choices and accumulated deficiencies that impose future costs. Ward Cunningham's original account connected rapid incremental development with the need to consolidate an implementation as understanding improves. When that consolidation is neglected, later work carries an extra burden.[^c23-n01]

For Cedar, the burden appears in repeated investigation, manual checking, support interventions and reluctance to touch scheduling. A shortcut may have saved time when the first exception was added. That saving did not eliminate work; it changed when and where some work would occur. As further rules accumulated, the cost became harder to attribute to one original decision.

Maya, Cedar's product manager, therefore needs a different conversation from “Should engineers have time to tidy the code?” She needs to ask which product changes the present design obstructs, which failures it makes harder to prevent, and what a bounded improvement would enable. Those questions connect maintainability to customers, operating costs and future choices.

The debt metaphor helps make that burden visible, but should not become a verdict on every old component. Age, unfamiliarity and unattractive code are not by themselves a business case for replacement. First establish what work is harder, what risk matters and whether the product is likely to keep needing that part of the system.

The same reasoning applies to software controlling a museum installation. Suppose each new exhibition adds a separate exception to the timing of lights and audio. Staff must check every older sequence whenever an exhibition changes. The burden concerns maintaining the visitor experience, even though there are no subscriptions or customer accounts. Making the timing rules easier to understand could help; replacing the controller is justified only if its benefits outweigh the transition and ongoing work.

## Distinguish a choice from drift

Consider an early customer request for a special booking rule. Cedar can support one trial customer with a temporary manual approval step while investigating whether the requirement is common. Maya and Priya record the limitation, the person who performs the approval, and the conditions for reviewing the arrangement. They keep the affected volume within what that person can handle. This is a deliberate compromise with a bounded operating model.

Now imagine the same arrangement spreading to twenty customers without anyone revisiting it. Sales treats the exception as an ordinary capability. Support discovers each new account only after an appointment fails. Nobody owns the list of customers or the decision to replace the manual step. The original shortcut has become unmanaged deterioration, even if taking it initially was reasonable.

The distinction depends on behaviour, not the label in a backlog. Writing “technical debt” on a ticket does not establish that someone understands the cost or will revisit it. A deliberate compromise needs a reason, known limits, an accountable owner and a credible trigger for reconsideration. That trigger might be a rise in customer volume, an approaching dependency deadline or a planned change in the affected area.

Martin Fowler distinguishes deliberate from inadvertent debt and prudent from reckless choices. He also describes debt becoming apparent through learning: a design can have been reasonable with earlier knowledge and still require revision later.[^c23-n02] That distinction keeps the discussion from turning into blame. The important question is what the organisation now knows and how it will respond.

Suppose Cedar originally represented every visit as one technician attending one property. Later, customers need teams working across several days. The old model is no longer adequate for some legitimate work. This mismatch is not evidence that the original engineers should have predicted every future market. It is a reason to examine whether continued exceptions are now more costly than changing the model.

Conversely, “we will fix it later” is weak reasoning when the deadline is predictable, the limitation is already obstructing current work, and no future capacity is assigned. A short release target does not make the consequences temporary. Product managers help create this situation when they reward every visible addition while repeatedly deferring work that protects the ability to deliver the next one.

Ask what would happen if the compromise lasted twice as long as planned. Could support still perform the workaround? Would customers become dependent on its peculiar behaviour? Would additional code begin relying on the temporary model? The answers reveal whether the organisation is preserving an option or silently making reversal harder.

Documentation should record this reasoning in language future colleagues can use. “Temporary scheduling fix” gives little help. “Manual dispatcher approval for overlapping provisional visits, limited to these accounts; review before expanding the trial” preserves intent, boundaries and a decision point. The record supports management of the compromise without promising that every planned revisit will justify a rewrite.

## Make the burden observable

An engineer's concern deserves investigation, but “the code is a mess” does not yet explain which product decision follows. Work with engineers and support colleagues to trace the burden through actual tasks. For Cedar's scheduling rules, a small sample of recent changes can show where time went: understanding old behaviour, changing it, checking interactions, deploying and correcting unexpected effects.

Avoid turning that inquiry into a competition between developers. Difficult work may be concentrated in one area or assigned to people who know it best. A slower change does not prove lower individual productivity. The aim is to understand the system's constraints and identify an intervention worth trying.

**Workarounds** are alternative steps people take because the normal route does not meet a need. Leah, a dispatcher, may record an extra note so support knows which booking rule to apply. That may keep work moving, but it also transfers responsibility from software into human memory and coordination. Count the operating burden where it occurs, including customer effort, rather than only engineering hours.

**Inconsistent models** create another burden. If one screen treats “confirmed” as customer agreement while an export treats it as technician assignment, staff must translate between meanings. Documentation alone cannot make both meanings identical. Engineers and product colleagues must determine the intended distinction, affected records and compatibility requirements before changing the representation.

**Testability** is the ease with which relevant behaviour can be checked. Cedar's exceptions are harder to maintain if reproducing one customer's rule requires a fragile production-like setup and specialist memory. Better testability might mean explicit examples of each supported rule, controlled test data and clearer separation of the decision being checked. More tests help only when their expected results express the right behaviour.

Documentation contributes by explaining why a rule exists, where it applies and how it interacts with others. Stale documentation can increase uncertainty by contradicting the running system. A useful maintenance change therefore includes the knowledge people need after the original author is unavailable, rather than treating a document as a one-time deliverable.

Dependencies also age. A library can continue functioning after its maintainers stop supporting it. That creates questions about future fixes, compatibility and who now carries the maintenance responsibility. NIST's secure-development guidance calls for checking component maintenance status and planning for components that will no longer be maintained or available.[^c23-n03] An upgrade may require product capacity even when customers see no new feature.

These burdens need different responses. A harmful ambiguity may require a model change; a repetitive support task may need a safer workflow; an obsolete dependency may require replacement. Grouping them under one enormous “technical debt” item hides the decision. Describe the affected work, consequence, evidence and smallest credible improvement separately.

## Compare maintenance, purchase and migration

Maintenance competes for scarce time, but the comparison should include the cost of continued use. Suppose Priya estimates that separating Cedar's scheduling rules would take eight engineer-days. She expects the change to save two engineer-days on each of the next six relevant features. Under those illustrative assumptions, twelve days of avoided effort exceed eight days of improvement work by four days.

That arithmetic gives a question, not a promise. Are six relevant features actually planned? Does the eight-day estimate include checking old behaviour and deploying safely? Is the two-day saving plausible? If only two features need the affected rules, the projected saving is four days and does not recover the eight-day effort within that horizon. Other benefits may still matter, but they require their own explanation.

Fowler uses the debt metaphor to compare extra change effort with improvement work, while warning that these costs are difficult to estimate reliably.[^c23-n04] Keep ranges and assumptions visible. Do not add a guessed outage probability to a guessed revenue impact merely to make a maintenance request look precise. Some risks warrant specialist action without a defensible monetary forecast.

Agree how the proposed improvement will be assessed. Finishing the refactoring task shows that work was completed; it does not establish the expected reduction in effort. For Cedar, useful evidence could include whether the next status change requires fewer separate rule edits, whether support can explain the supported variants, and whether existing appointments retain their intended behaviour. Compare similar work where possible and record other changes that could affect the result.

Also decide what happens to the capacity the improvement releases. If every saving is immediately consumed by another customer exception, the product may return to the same constraint. Maintenance can support a more coherent product policy: offer a defined set of scheduling choices, examine proposed additions against that model, and price or decline work that creates obligations the organisation cannot sustain. Engineering improvement and commercial discipline then support each other. Neither requires promising that all future maintenance will disappear.

Cedar need not redesign every scheduling rule at once. It could make one frequently changed rule explicit, add checks around its existing behaviour, and observe the effort required for the next change. It could also retire an unused exception after checking customer obligations. A bounded step may reveal whether the assumed source of difficulty is real before the company commits to a large programme.

Buying software changes the responsibility rather than ending it. A commercial scheduling component may provide capabilities Cedar would otherwise maintain. Cedar must still assess whether the component represents its booking rules, how it connects to existing data, how updates behave and what support commitments cover. Subscription price is one part of the ongoing cost.

Building internally offers control over fit and evolution, alongside responsibility for staffing, testing, security, operations and future change. **Vendor dependence** arises when continued operation or adaptation relies on a supplier's product, terms, availability or cooperation. Internal development has its own dependence on particular knowledge and organisational capacity. Compare these concrete dependencies rather than assuming ownership guarantees independence.

**Migration cost** includes moving data, preserving meanings, adjusting integrations, teaching users, running old and new arrangements together, and resolving discrepancies. Cedar's customer exceptions must go somewhere: into supported configuration, changed customer practices, explicit retirement agreements or another set of hidden rules. A replacement does not automatically erase those obligations.

Before approving a purchase or rewrite, ask someone to describe the first real customer's transition. Which appointments move? Who checks the result? What happens to an unsupported exception? When can the old route safely stop? An appealing destination is incomplete without a credible path from the operating product.

## Use AI to recover understanding

AI can assist with the slow work of investigating a legacy system. Given authorised access to selected code and documentation, it can draft an account of where booking rules appear, identify apparently repeated patterns, and propose questions about inconsistent terminology. The useful output is a map to inspect, with references to specific files and unresolved assumptions.

A focused request might say: “Find the places where provisional bookings affect overlap checks. For each, identify the relevant code or document, describe the apparent rule, and state what context is missing. Do not infer customer intent from implementation alone.” Priya can follow the references, compare the account with actual behaviour and ask support which customers depend on each rule.

A generated explanation is not a substitute for that investigation. The model may see only part of the repository, miss configuration loaded elsewhere or interpret an accidental behaviour as a deliberate requirement. It may invent a neat common abstraction that discards meaningful customer differences. Treat conflicting evidence as a reason to investigate, not to choose whichever account reads more smoothly.

AI can also propose tests or assist a carefully scoped change. Engineers must establish expected outcomes, review the modification and execute relevant checks in an appropriate environment. Approval to inspect code does not automatically permit exposing proprietary material or credentials to an external system. The tool's data handling and access must fit the task.

The same speed can increase hidden debt. Generating several versions of a booking rule may be faster than understanding and extending the existing model. Each version can look plausible while introducing another meaning, dependency or failure path. If nobody understands the resulting code well enough to change it safely, rapid production has enlarged the maintenance problem.

Use the saved effort to improve understanding, not merely to increase the volume of changes awaiting review. Require a clear explanation of the intended behaviour, how the change fits existing rules, and what evidence supports it. An AI-generated document that repeats code without preserving reasons does little to help the next person make a product decision.

For an exercise, select one Cedar exception and write a short maintenance proposal. Name the customer need it serves, the burden it creates, one forthcoming change affected by that burden and a bounded response. State what evidence would make you keep the current arrangement instead. Then identify the people needed to judge the response: engineering for implementation, support for operating effects, and the relevant customer representative for changed behaviour.

A strong proposal may recommend retaining the exception. Another may recommend consolidation or removal. What makes the judgement useful is a traceable connection between the condition of the software and the work the organisation needs to do. Technical debt belongs in product decisions because the product's present construction shapes the cost and reliability of its future promises.

## Notes

[^c23-n01]: Ward Cunningham, “The WyCash Portfolio Management System” (1992), discussion of consolidation and the debt analogy.
[^c23-n02]: Martin Fowler, “Technical Debt Quadrant” (2009), distinction between deliberate/inadvertent and prudent/reckless, including learning-driven debt.
[^c23-n03]: NIST SP800-218 v1.1 (2022), PW.4.4, examples4–5, printed p.13.
[^c23-n04]: Martin Fowler, “Technical Debt” (2019 revision), extra change effort, improvement cost and estimation limitations. Cedar's numbers are illustrative assumptions, not measured findings.

## References

- Cunningham, Ward. [The WyCash Portfolio Management System](https://c2.com/doc/oopsla92.html). OOPSLA experience report, 1992.
- Fowler, Martin. [Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html). 2009.
- Fowler, Martin. [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html). 2019 revision.
- Souppaya, Murugiah, Karen Scarfone and Donna Dodson. [Secure Software Development Framework, Version1.1](https://doi.org/10.6028/NIST.SP.800-218). NIST, 2022.
