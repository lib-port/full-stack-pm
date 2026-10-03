# Chapter 39: Launching and Creating Adoption

## Access is only the beginning

Cedar invites selected service businesses to use its new scheduling capability. Soon, support receives questions the announcement did not answer. Does the new flow apply to appointments already booked? Do technicians need to change how they acknowledge an update? Can the dispatcher choose when the company begins? The software is available, but the customer transition is still being negotiated through support calls.

This is a major change to how customers coordinate appointments, not simply another screen. Dispatchers can track proposed changes and unresolved agreement, while technicians and service customers participate in the resulting workflow. Cedar needs those people to understand what has changed, what remains their responsibility and where they can get help.

A **technical release** makes the capability available under defined conditions. A **launch** coordinates its introduction to the intended audience, including the offer, communication, preparation and support. **Adoption** means people take it into use. For a scheduling capability, that requires real appointments, workable responsibilities and continued reliance during ordinary exceptions. An invitation, enabled account or completed tour is evidence of a narrower event.

Product manager Maya should therefore define what customers must become able to do. A dispatcher can use current records to propose a changed visit, recognise outstanding agreement and coordinate the next action. Technicians can identify which plan to follow. Support can help when the process breaks. That account gives launch preparation a purpose beyond an announcement date.

The first launch is deliberately limited to selected customers. This creates an opportunity to learn with manageable exposure and support demand. It does not make incomplete essential controls acceptable or imply that the first customers represent the whole market. Selection affects both what Cedar can observe and how far the findings can travel.

The Government Digital Service describes beginning real use with a limited invited group, gathering feedback and ensuring capacity to support and improve the service.[^c39-n01] The underlying principle is useful here without requiring Cedar to follow government phase names or assessment procedures.

Treat the launch as a transition between operating arrangements. Customers still have tomorrow's visits to manage while they learn. Cedar's release plan should explain how work moves, what remains valid during the transition and who resolves a discrepancy. The next customer email should reflect that plan, not stand in for it.

## Choose a first audience and establish readiness

The **target audience** for a first rollout should have the relevant problem and conditions the capability can responsibly support. Choose service businesses whose scheduling workflows and integrations fit the current scope. Include people able to participate in feedback, but do not mistake their willingness or available support time for a typical customer characteristic.

Make the selection rationale explicit. If Cedar starts with companies using a particular supported information path, the early evidence concerns that path. If experienced dispatchers receive personal setup help, later expansion to less experienced staff with lighter support needs another assessment. A successful first group can justify learning more without proving that all customers are ready.

**Readiness** has several connected meanings. Technical readiness concerns the behaviour, reliability, permissions and recovery required for the intended exposure. Customer readiness concerns usable records, staff availability and clear responsibility. Commercial readiness concerns an accurate offer, eligibility and any changed terms. Operational readiness concerns monitoring, support capacity and authority to act when something goes wrong.

Ask each responsible person for evidence rather than a reassuring colour on a status chart. Priya, the engineer, should explain which integration cases have been checked. A support lead should demonstrate how staff identify an eligible account and handle a missing acknowledgement. A customer contact should establish who will prepare records and brief technicians. An unresolved critical dependency should remain visible even when other work is complete.

Readiness also includes exclusion risks. A launch that requires every homeowner to use a new online channel may prevent some from completing their part. A technician who was absent during training still needs a usable path when returning. Designers, accessibility specialists and customer-facing colleagues should examine those cases before the rollout turns them into urgent support problems.

Define the first decision boundary. Cedar might expand only after eligible customers can complete the central task, important failure routes work, and support demand remains within the planned capacity. Set reasons to pause, such as incorrect agreement states or an eligibility failure exposing unsupported appointments. The organisation must know who can make that call.

Timing should reflect customer work. A company may have trained its dispatcher but be entering a period when technicians cannot absorb a changed routine. Another may have a suitable quiet window but lack the person authorised to reconcile old records. Ask about those conditions when arranging the first use. A date convenient for Cedar's announcement is not automatically convenient for a customer's transition. Where delaying creates its own cost, make that trade-off explicit with the customer instead of treating readiness as a private internal judgement.

These conditions are contextual, not a universal launch score. Their purpose is to prevent enthusiasm about the date or the first positive comment from replacing a reasoned decision about exposure.

## Help people move their work

**Messaging** should explain the improvement in terms the intended audience can use. An owner needs to understand the operational purpose, eligibility and preparation required. A dispatcher needs to know what changes in the task. A technician needs to know where to find the current assignment and how to respond. Different messages can serve those needs while preserving the same factual promise.

Avoid language that overstates what the capability establishes. “Every appointment automatically confirmed” would be false if customer agreement remains outstanding. “See which changes still need agreement” is narrower and actionable. Marketing, support and the interface should use compatible meanings for proposed, saved, delivered and agreed.

**Enablement** equips people who help others use the change. Cedar's sales and support colleagues need demonstrations that include limitations and failures, not only the ideal path. They should know whom the capability suits, how to recognise an unsupported case and where to escalate a discrepancy. GDS's live-service guidance similarly identifies training and familiarisation for people supporting users.[^c39-n02]

**Onboarding** helps the customer become able to perform useful work. For the scheduling capability, this may involve selecting a start point, assigning responsibility for unresolved changes, preparing records and practising a realistic exception. A tour that shows every control but never explains who follows up an unanswered proposal leaves the task unfinished.

Existing appointments need attention. **Data migration** may mean translating records into the new scheduling representation, even when the customer already uses Cedar. An old “confirmed” field may combine several meanings that the new flow separates. Automatically mapping every old record to customer agreement would create false information. Engineers and the customer need a plan for ambiguous states, with appropriate checks and ownership.

Rehearse a manageable set of records before moving live work. Compare important details, inspect unresolved cases and establish which representation is authoritative at each point. The right checks depend on the data and consequence; matching the number of rows alone cannot show that appointment meanings survived. Specialists should design consequential migrations and recovery procedures.

Parallel use can help a transition, but it creates risks if employees update different records without reconciliation. Explain which system or view is used for each task and when the old route stops accepting changes. If Cedar permits a staged transition, the boundary needs to be understandable to users as well as technically enforceable.

Customer communication should state the action required, who should take it, the relevant timing and the help available. Keep a route for people who cannot complete the preparation as expected. Their difficulty is evidence about the launch arrangement, not automatically resistance to the product.

## Control exposure and prepare recovery

A **rollout** is the controlled expansion of availability and use. Cedar can begin with the selected companies, inspect what happens, improve the arrangement and decide whether to include another group. Each expansion should be a new commitment supported by the evidence available at that point.

Choose boundaries that operations can actually identify and maintain. A list of eligible account identifiers may control access, but staff also need to recognise the relevant appointment conditions. A customer can start in an eligible situation and later connect another system. Decide how the product responds when those conditions change rather than assuming eligibility is permanent.

Prepare **support** for the work the launch creates. Who receives a scheduling discrepancy? What information can they inspect appropriately? How do they distinguish a misunderstanding from an incorrect stored state? When must engineering intervene? Give support staff a way to record recurring issues so that the product team can improve the underlying experience.

Operational readiness includes monitoring the service and assigning authority to contain problems. The first customer group should not discover that nobody is watching a failure signal outside the development team's working hours. Match coverage and response arrangements to the commitments the product makes, with reliability specialists assessing what is required.

A **rollback** needs a clear meaning. Cedar might disable the new flow for further changes while preserving visibility of appointments already handled. Reverting the software does not retract a message a homeowner read or automatically reconcile data written in a new form. Recovery must cover those effects and give customers an accurate next action.

Plan communication for a pause before one becomes necessary. A useful message explains who is affected, which work can continue, what people should avoid and when another update will be provided. Avoid promising a resolution time without a sound basis. An honest statement of current action can be more useful than an unsupported assurance that everything will be fixed shortly.

After a problem, distinguish resuming technical availability from being ready to expand. Cedar may have corrected the defect while support is still reconciling affected appointments. That unfinished customer work belongs in the launch decision. Expansion should not consume the capacity needed to restore the first group's operation.

## Read early signals without inventing success

**Instrumentation** records the events needed to understand use and outcomes. Define those events before launch. An enabled account, opened screen, created proposal and completed coordination task describe different states. If a dashboard combines them as “adoption”, it will be difficult to tell where customers need help.

For Cedar, examine a path from eligibility through preparation, first useful task and repeated use. Include unresolved changes and recovery attempts. Check that records correspond to the defined events and that failed or abandoned attempts do not vanish from the data. An event called confirmation should not fire merely because a dispatcher saved a proposal.

**Early signals** help choose the next action; they rarely establish every claimed benefit. A dispatcher completing several real changes is more informative about initial adoption than logging in. It still does not show that the capability reduces missed visits or remains useful during a busy period. Those outcome claims need suitable observation, comparison and time.

Keep denominators and support conditions visible. “Most participating dispatchers completed setup” concerns participants, not everyone invited or everyone eligible. If Cedar staff manually resolved every difficult record, record that work. The launch may have demonstrated a successful assisted service while leaving the feasibility of lighter onboarding unresolved.

Combine usage records with **feedback**. A technician may report that the new state is clear while the dispatcher reports extra checking work. Support may see repeated questions from one account rather than a widespread issue. Investigate the sequence and affected groups before generalising. People who never begin, abandon setup or return to the old process are important contributors, even if they submit no ticket.

This distinction also applies to a physical product. Installing a new ticket machine at a community venue makes the equipment available. Actual adoption requires staff to load suitable fares, visitors to understand the purchase flow and someone to help when payment fails. The venue might initially place an employee beside the machine. Successful transactions under that arrangement do not establish that the machine can operate without assistance. Record the support that makes early use possible before deciding how to expand.

Cedar faces the same evidential question: what contribution came from the product and what came from unusually intensive launch support? The answer can justify retaining that support, improving the design or changing the expected cost of adoption. It need not invalidate the first launch.

A launch review can distinguish three decisions: fix a harmful failure before further use; improve a limiting adoption step; or expand to learn in another appropriate setting. Record which evidence supports the chosen action. A small enthusiastic group and a quiet support inbox do not automatically justify a broad announcement.

GDS's beta guidance combines user research with service measures and continued improvement.[^c39-n03] The same discipline keeps Cedar from treating a successful deployment as proof of a successful change in customer work.

## Use AI to prepare and interpret the transition

AI can help **tailor communications** for owners, dispatchers and technicians. Supply approved facts about eligibility, behaviour, limitations, preparation and support. Ask for role-specific actions while preserving those facts. Compare the drafts side by side so that one audience is not promised automatic agreement while another is told agreement remains pending.

It can **prepare enablement material**, such as a practice scenario, explanation of state meanings or draft support response. A product specialist should test the instructions against the actual released flow, including an exception. Generated screenshots, controls or policies must not be invented to make the instructions easier to follow.

For **early-feedback analysis**, give an approved system appropriately minimised, source-labelled material. Ask it to distinguish reported difficulties, observed behaviour and inferred explanations. For **support summaries**, require links to the original records, separate incidents from duplicate follow-ups and preserve consequential minority cases. Inspect samples and contradictions before using a theme to justify wider rollout.

Human review is essential for consequential communication. Suppose a draft tells a customer that existing appointments have been migrated safely and that technicians need no preparation. Those are operational claims requiring verification, not matters of tone. The responsible people must check data status, obligations and intended actions before anyone sends the message. AI assistance does not change who owns the promise.

Keep sensitive appointment and customer details within approved handling arrangements. A summary request rarely needs every address, contact detail or access instruction. Where those details matter to investigation, appropriate controls and specialist input should govern their use.

For practice, assess this launch position: the capability is available, dispatchers log in, several complete a first task, but Cedar staff still reconcile ambiguous records manually and technicians frequently ask which plan to follow. Decide whether to expand, pause or narrow the next group. Name the missing evidence and the person responsible for obtaining it.

A useful answer recognises partial progress without disguising the remaining transition. Technical release makes use possible. Launch brings the people and arrangements together. Adoption becomes credible when those people can perform meaningful work with the change, and continued evidence determines whether its promised value follows.

## Notes

[^c39-n01]: Government Digital Service, “How the beta phase works”, The stages of beta and What you need in place for beta.
[^c39-n02]: Government Digital Service, “How the live phase works”, Providing a joined up experience across channels.
[^c39-n03]: Government Digital Service, “How the beta phase works”, What to focus on during beta. The chapter applies research and measurement principles without imposing government assessment rules.

## References

- Government Digital Service. [How the beta phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works). Updated 19 February 2021.
- Government Digital Service. [How the live phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works). Updated 8 May 2019.
