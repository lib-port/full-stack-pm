# Chapter 40: Operating, Maintaining, and Evolving Products

## Start with what live work is revealing

At a later stage, Cedar has launched AI scheduling recommendations that dispatchers review before making changes. The recommendations met the agreed launch criteria for the original customer workflows. After Cedar acquires customers managing multi-visit maintenance, their dispatchers encounter more unsuitable suggestions, and the service costs more to operate than expected. The original launch assessment no longer describes the whole operating situation.

Some new customers coordinate sequences of visits in which an inspection or access-preparation stage must finish before another task can begin. A suggested appointment can fit a technician's calendar while violating one of those dependencies. Other difficulties may have different causes. Product manager Maya needs to distinguish what has been observed from an explanation of why it happened.

“AI quality has dropped” is too broad to guide a response. Which suggestions fail, for which work, under which conditions? Were necessary constraints absent from Cedar's records, omitted from the model's input, misinterpreted during generation or overlooked during review? Has the underlying service changed? Does the same problem appear for existing customers? Each answer points towards different product work.

The cost increase needs similar examination. More customers can increase total spending even if the cost of each useful task is stable. Longer records, repeated generation, additional review and support can change the cost per task. A provider price change is another possibility, not an explanation to assume. Compare the operating account with the assumptions used before launch.

This is the beginning of **operation**: supporting the product as people depend on it, observing what happens and responding to the consequences. It includes routine assistance, reliability, security, costs and continued development. Operations does not wait until all innovation is finished. It supplies information that demonstrations and launch tests cannot provide on their own.

Cedar's new evidence challenges both product fit and operating design. The appropriate response might involve better data, clearer eligibility, different recommendations, a revised service model or a decision not to offer the capability for some work. Replacing the model is only one candidate. A product manager should keep the problem open long enough to identify the change that addresses it.

The initial judgement can have been reasonable and still need revision. Launch criteria applied to particular workflows and evidence. Expanding use changes the claim the organisation needs to support. The question now is what Cedar can responsibly provide to the people actually relying on it.

## Connect signals and contain harmful failures

Start with the connection between support, usage and actual work. A support ticket saying “the suggestion ignores the inspection visit” gives a specific event to trace. Obtain the relevant authorised records, the information supplied to the recommendation system, the output and what the dispatcher did. Protect sensitive information while preserving enough detail to investigate.

Do not rely only on acceptance rates. Dispatchers may accept an unsuitable suggestion under pressure or reject a useful one because its explanation is unclear. A change in the rate can identify something to investigate, but the meaning requires task evidence. Similarly, fewer complaints can reflect improvement, abandonment or users correcting problems without reporting them.

A consequential live failure may need **incident** handling before its cause is fully understood. Cedar could temporarily disable recommendations for the affected workflow while preserving manual scheduling. The containment must be workable: dispatchers need to know which work is affected and what reliable alternative remains. Restricting exposure can reduce further harm without proving the cause or completing recovery.

Name who coordinates the response, investigates the system, communicates with customers and reconciles affected work. Priya can inspect technical behaviour while support identifies appointments that require attention. Maya can help decide the temporary product boundary and the conditions for resuming use. Unclear authority delays action even when the warning itself is obvious.

**Reliability** concerns dependable behaviour under relevant conditions, not only whether the service responds. Cedar can return a fast recommendation every time while failing the user's task because the recommendation violates a job dependency. Monitor service availability and latency alongside meaningful output and workflow checks. The technical and product signals answer different questions.

After containment, reconstruct events and contributing conditions. Google's account of post-incident reviews emphasises documenting impact, mitigation, causes and follow-up actions, with learning rather than personal blame as the purpose.[^c40-n01] Cedar should ask why the missing constraint was not represented, detected or made visible, rather than simply instructing dispatchers to be more careful.

The resulting action needs an owner and a way to verify improvement. “Improve evaluation” is too broad. “Add reviewed cases involving dependent visits, establish the expected safe response and check the revised system before restoring that workflow” identifies work whose completion and result can be examined.

Preserve the **operational knowledge** gained. Support staff may discover a phrase customers use for a dependency that engineers named differently. An incident investigator may identify a misleading status that complicated recovery. Put that knowledge where future design, onboarding and evaluation can use it. A closed ticket alone does not ensure the organisation has learned.

## Maintain the product people now depend on

**Maintenance is product development under accumulated reality.** The product now has customers, records, integrations, promises and operating history. A change must account for those relationships. Keeping the service useful may require work that creates no immediately marketable feature, yet preserves the value of every existing one.

Security updates are one example. A dependency may need a supported replacement or a fix assessed by security and engineering specialists. The product manager should understand the affected capability, exposure, timing and customer consequence. “No visible feature” does not mean no product value. Equally, a request labelled maintenance still needs a clear account of its purpose and priority.

Technical debt appears when earlier compromises or accumulated inconsistencies make current operation and change more costly. Cedar might be tempted to add a separate prompt rule for every multi-visit customer. Some variation may be legitimate. An unmanaged collection of exceptions can make evaluation and future changes difficult, just as customer-specific scheduling code did earlier.

Ask whether the new cases reveal a missing shared concept. Perhaps the scheduling model needs an explicit dependency between visits, with a clear source and responsible person. That change could support the interface, conventional checks and AI context together. More elaborate instructions to the model cannot reliably supply a fact the product never captures.

Access and ownership also need maintenance. An employee may change role, a customer may connect another service, or a temporary diagnostic credential may remain active after an incident. The feature's permission model can be correct at launch while the operating inventory becomes outdated. Assign routine responsibility for reviewing these changes, removing authority that is no longer justified and retaining appropriate records. Security specialists determine the controls and review depth required.

The same principle applies to knowledge ownership. If only one engineer knows why a dependency is restricted, their absence can turn an ordinary repair into a delay. Useful documentation identifies the reason, the boundary and the person or service responsible today. Verify that recovery instructions still match the operating system before relying on them in an incident.

Maintenance also includes updating explanations, training and recovery procedures. If the system begins rejecting suggestions with incomplete information, dispatchers need to understand what to supply and what can proceed manually. Support instructions must match the actual behaviour. A correct technical change can still increase difficulty if the operating arrangement remains designed for the old one.

Costs should include that arrangement. Examine generation, retrieval, storage, monitoring, evaluation, customer support and human review. Choose a meaningful unit and period, such as the cost of supporting a completed scheduling task for a defined workflow. Cost per model request can fall while cost per useful result rises because people need more attempts and corrections.

Use a small example to check the denominator. Suppose an illustrative month costs £3,000 for the defined operating activities and supports 1,000 completed scheduling tasks: £3 per task. The next month costs £4,000 and supports 2,000 comparable tasks: £2 per task. Total cost rose while average cost fell. If the second month instead supports only 800 tasks, the average becomes £5. These are teaching assumptions, not Cedar measurements.

Even those calculations need interpretation. Are the tasks comparable? Were failed attempts and review effort included? Did support complete work after the reporting window? Has more demanding work shifted to the service business? A reduction in Cedar's recorded cost can hide a transfer to dispatchers. Define the scope before describing either month as more efficient. The same discipline helps distinguish a commercially manageable increase from a failure that requires redesign.

Separate total and unit costs when deciding what to change. Higher total spending may be a planned consequence of beneficial adoption. Higher cost for each comparable task may reflect more complex inputs, wasted calls, extra support or changed supplier terms. A cheaper model might reduce one component while worsening review effort. Evaluate the whole service before claiming a saving.

The operating budget and development plan should make these responsibilities visible. If every available person is committed to new features, necessary maintenance becomes an unplanned interruption. The product still pays for it through incidents, delayed work or declining quality. Treat ongoing care as part of the commitment made when the capability is offered.

## Keep AI evaluation matched to the operating system

An AI **evaluation** examines the system against defined tasks, expected behaviours and criteria. Cedar's original set may contain ordinary repair appointments with relatively independent visits. Passing that set after expansion would show continued performance on those cases. It would not establish suitability for multi-visit workflows absent from the set.

Here, **evaluation drift** means that the evaluation increasingly fails to represent the operating task, population or consequences it is meant to assess. Distinguish that problem from the system itself changing. Cedar could use exactly the same model and instructions while its new customers make the old evaluation inadequate. Conversely, the customer mix could remain stable while a changed model produces different results.

Review the cases, criteria and judging process. Add relevant new situations without silently discarding difficult historical ones. Record why expected behaviour changed. If a human review rubric or automated evaluator changes, a different score may partly reflect the measurement change. Preserve enough version information to compare like with like and investigate disagreements.

NIST's AI Risk Management Framework calls for evaluation during operation, monitoring of system components, and regular assessment of whether metrics and controls remain appropriate to the deployment context.[^c40-n02] Those principles give Cedar a reason to maintain the evaluation itself as the product evolves. They do not supply a universal pass mark.

**Data changes** can alter behaviour without a model update. New customers may use unfamiliar terminology, leave fields empty or describe dependencies in long notes. A changed import may omit a field that used to be present. Follow the information from its source through retrieval and context construction to the recommendation. Seeing the fact somewhere in Cedar does not prove that the model received it.

**Model and provider changes** require their own controls. Record the model or service version where available, relevant configuration, instructions and connected tools. Review announced changes and evaluate a replacement under Cedar's tasks before relying on it broadly. Where a provider limits version control or notice, include that uncertainty in dependency management and contingency planning. Do not assume identical model names imply an unchanged service.

**Changed failure patterns** matter as much as a blended score. A system might become better at ordinary suggestions while more often overlooking rare, consequential prerequisites. Separate failures by mechanism, workflow and impact. Look for missing-information cases, impossible sequences, unjustified certainty and errors introduced by retrieving the wrong record. Avoid letting abundant easy examples hide a smaller group facing unacceptable outcomes.

**Monitoring** connects these concerns to action. Track relevant input changes, service behaviour, reviewed output samples, overrides, unresolved work and cost. Establish who investigates a signal and which conditions require restricted use. Logging everything is neither necessary nor appropriate; engineers, privacy and security colleagues should design useful, limited records and access.

NIST also includes management of third-party resources and post-deployment plans for feedback, override, incidents, recovery and change.[^c40-n03] For Cedar, that means an operating plan for the whole recommendation feature, including the dispatcher and provider relationship. A dashboard without authority or capacity to respond is an incomplete control.

## Let the evidence change the product

Cedar now has a more specific choice than “improve the AI”. Suppose the investigation establishes that dependent visits are missing from the structured scheduling information and that some dispatchers repeatedly request another suggestion after receiving an unsuitable one. The missing relationship and repeated requests would be distinct findings with connected consequences. They are possibilities to verify, not facts implied by the original decline.

One response is to restrict recommendations to workflows the system can adequately represent, while keeping manual coordination available elsewhere. Another is to introduce explicit dependencies, require their review and supply them to the relevant checking and recommendation components. A third is to change the interaction so that the system asks for missing information rather than generating a confident answer. Compare these options with the cost of supporting the new segment at all.

The evidence can also change the commercial offer. If certain workflows require substantial setup and specialist support, Cedar must decide whether that service fits its strategy and pricing. Continuing to sell a broad promise while support quietly supplies expensive bespoke work would conceal the product decision. A smaller supported scope may be more honest and sustainable than an unbounded recommendation claim.

Plan the next evaluation around the revised purpose. Include old and new workflows, known failure cases and situations where the correct response is to withhold a suggestion. Assess the resulting dispatcher decisions and effort, not only the wording of the recommendation. Reintroduce affected use through controlled exposure once the responsible specialists judge the evidence sufficient for that commitment.

Maintain a clear distinction between **customer feedback** and product direction. Requests are valuable evidence about needs and experience, but implementing each one separately can recreate the exception burden. Compare patterns, consequences and fit. A customer describing a difficult constraint may reveal an important product concept even when their preferred implementation is unsuitable.

The environment changes outside Cedar too. Competitors can alter their offer, customers can reorganise their work, and suppliers can change services or terms. Applicable regulation may also change. Assign responsibility for identifying relevant developments, verifying them through current authoritative sources and obtaining legal or regulatory interpretation where required. This chapter makes no claim about a specific obligation or jurisdiction.

Bring those changes into the same review as operating evidence. A previously adequate product boundary can become insufficient because customers use the capability differently or because an external dependency changes. The organisation can improve, narrow, replace, reprice or retire parts of the offer. Product evolution is a choice informed by accumulated evidence, not a promise to add functionality indefinitely.

## Turn operating knowledge into the next decision

A useful operating review connects a signal to a decision. Start with the observed behaviour, affected population and consequence. Describe competing explanations, current containment and the evidence that would distinguish them. Then identify the next bounded change or investigation, its owner and the condition for reconsidering it.

For Cedar, the review should keep recommendation quality and cost connected without assuming they share one cause. Repeated attempts could contribute to spending; complex customers could require more context; provider terms could change independently. Check usage records, invoices and review effort on consistent units and periods. Neither a total bill nor a single expensive request explains the economics of the feature.

AI can help organise approved support records, incident notes and evaluation results. Ask it to group failures by observed mechanism, link every statement to a source and preserve cases that fit several explanations. Require unknown causes to remain unknown. A generated narrative that blames a provider update is not evidence that the update occurred or caused the decline.

It can also propose competing explanations and checks. For example, compare missing source data with failed retrieval and faulty interpretation of correctly retrieved data. Engineers should verify that the proposed checks distinguish those possibilities. Supply only material appropriate to the system's authorised access and data handling; sensitive maintenance records do not become safe to share merely because the purpose is troubleshooting.

Human expertise remains central. Dispatchers assess what makes a sequence workable. Engineers inspect the data and service path. Evaluation specialists examine representativeness and scoring. Finance helps understand important cost changes. Security and legal colleagues assess relevant exposure and obligations. Maya connects their evidence to the scope and priority of the next product commitment.

Practise with three observations: the original evaluation score is unchanged, new-segment dispatchers reject more suggestions, and total operating cost has increased. Write one possible explanation that does not require a model change and one that does. State what evidence would distinguish them, what temporary restriction might be necessary and which customer work must remain supported.

Then propose a product response and a way to assess it. A good answer does not leap from the three observations to retraining, a new provider or a higher price. It locates the uncertainty, protects current work and makes a testable next commitment. Operational behaviour becomes a rich source of product evidence when the organisation preserves that chain from what happened to what it chooses to change.

## Notes

[^c40-n01]: John Lunney and Sue Lueder, “Postmortem Culture: Learning from Failure”, *Site Reliability Engineering* (2016), incident record, preventive actions and contributing-cause discussion.
[^c40-n02]: NIST, *AI Risk Management Framework 1.0* (2023), Measure1.2, Measure2.1–2.4 and Measure4.1–4.3, official online core text.
[^c40-n03]: NIST, *AI Risk Management Framework 1.0*, Manage3.1–3.2 and Manage4.1–4.3. The framework is guidance, not proof that a system is safe or compliant.

## References

- Lunney, John, and Sue Lueder. [Postmortem Culture: Learning from Failure](https://sre.google/sre-book/postmortem-culture/). *Site Reliability Engineering*. O'Reilly, 2016.
- National Institute of Standards and Technology. [AI Risk Management Framework 1.0: Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/). 2023 framework, official online excerpt.
