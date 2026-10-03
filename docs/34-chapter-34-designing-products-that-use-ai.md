# Chapter 34: Designing Products That Use AI

## Start with the dispatcher's work

“Add AI dispatch” names a possible implementation. It does not explain which part of organising repair visits needs improvement. Cedar's product manager, Maya, needs to establish that before deciding what an assistant should do, how people would use it or whether AI belongs in the solution.

Consider Leah, the plumbing company's dispatcher, dealing with a repair that will take longer than expected. Another homeowner expects a technician that afternoon. Leah must compare possible changes while preserving promises, matching repair skills, allowing travel time and responding to urgent work. Her problem is coordinating a feasible day as circumstances change.

An assistant might help Leah inspect alternatives. That is a more useful starting proposition than “AI will optimise dispatch”, because the intended assistance can be described and challenged. Which alternatives are difficult to identify? What information does Leah assemble? Where do existing tools slow her down? Which decisions depend on knowledge she has not recorded?

Conventional software could flag overlapping appointments, filter technicians by recorded qualifications or show travel estimates. A human dispatcher could weigh an unusual customer promise and telephone the technician. AI might help interpret varied job notes, assemble relevant information or propose adjustments expressed in ordinary language. Those are candidate contributions, each needing evidence that it improves the work.

The required question is: **why should this capability use AI rather than conventional software or human judgement?** A useful answer identifies a task, a plausible advantage and a way to test that advantage. “Our competitors have AI” gives Maya none of those. Nor does the existence of a capable model prove that dispatch is the best place to apply it.

Start with the smallest useful boundary. Suppose the proposal is to recommend adjustments for Leah to review, without changing appointments. That boundary allows the team to investigate recommendation quality and the effort of checking proposals. It does not establish that later autonomous scheduling would be appropriate. Authority would need a separate decision.

Define whose work should improve. Saving Leah five minutes by asking technicians to make extra calls may merely move effort. Filling every available slot could leave no room for urgent repairs. A useful product objective might be to help dispatchers find feasible adjustments more quickly while preserving customer commitments and avoiding additional coordination burden. Whether the assistant achieves that objective remains unknown.

Research should also reveal when assistance is unwanted. Leah may need a rapid conflict warning during a telephone call and a fuller comparison after the call ends. A chat conversation could be slower than a clear schedule view. Choosing an AI capability does not require making conversation the primary interface.

The same reasoning applies outside dispatch. A public library considering an AI catalogue assistant should distinguish finding an item, interpreting a vague enquiry and confirming availability. Different parts of that work may deserve different combinations of search, language generation and staff judgement.

## Choose the part AI should perform

A product can combine rules, models and people. Cedar does not need to ask a language model to decide whether two stored appointment times overlap. A defined rule can check that condition. The harder questions concern incomplete descriptions, ambiguous preferences and competing feasible arrangements.

**Deterministic behaviour** means that the same relevant inputs and conditions produce the same result. A fixed overlap rule is a simple example. Determinism does not make the rule correct: the software can contain a bug or use stale times. It makes one aspect of behaviour more predictable.

AI models often produce estimates or outputs based on learned statistical relationships. Generative output can also vary with the generation settings. This **probabilistic behaviour** requires evaluation across relevant cases rather than confidence from one successful demonstration. Some AI systems can produce repeatable outputs under fixed conditions; repeatability alone does not establish that those outputs are right.

Assign responsibilities accordingly. A model might extract a possible constraint from a note: “Customer cannot return before three.” The interface could show that interpretation beside the original note for review. Conventional checks could then reject a candidate that starts before the confirmed availability. Model interpretation, recorded constraint and enforced check are distinct steps.

Now consider a candidate adjustment. Leah could move a visit from 2 p.m. to 3 p.m. and assign another qualified technician. The alternative could reduce the original technician's pressure, but qualification alone is insufficient. Does the replacement have the needed part? Has the homeowner agreed? Is travel feasible? Does the replacement already have an urgent commitment?

Some of this information may be missing from Cedar. Missing information should remain visible as a condition to resolve. The system must not turn an absent parts record into “part available”, or treat an unrecorded promise as proof that no promise exists. A persuasive recommendation assembled from incomplete inputs remains incomplete.

Competing objectives also need explicit treatment. Less travel, earlier arrival, technician continuity, lower overtime and urgent-job capacity may favour different arrangements. Some conditions are firm constraints; others are preferences that can be traded. Maya should agree those distinctions with dispatchers and service managers rather than let a model invent priorities from a vague instruction to optimise.

The assistant could present two candidate adjustments with their differences. One keeps the familiar technician but requires a later visit; another preserves the time but requires checking whether the substitute has the part. If neither is currently feasible, identifying the unresolved conditions may be more useful than selecting a winner.

Agree how the assistant should respond when objectives conflict. If preserving an agreed arrival window takes priority over reducing travel, that priority should be explicit and reviewable. Leah can then recognise a recommendation that applies the wrong preference. Leaving the priority implicit would make disagreement look like a mysterious model error when the product has never defined the choice.

Model quality matters within this allocation of work. Can the model preserve a negation in a note, distinguish an agreed time from a suggested one and recognise when an essential fact is missing? Those capabilities matter more than whether it writes an elegant explanation. The complete product must then preserve their meaning through the interface, checks and operational process.

## Make recommendations inspectable and rejectable

Leah needs to understand enough about a recommendation to decide what to do. Show the current arrangement, proposed adjustment, people affected and unresolved conditions together. Avoid making her reconstruct the difference by comparing a long generated paragraph with a separate schedule screen.

A useful explanation might state that the proposed technician has the recorded qualification, identify the available time window and show the source of the travel estimate. It should also state that possession of the replacement part has not been confirmed. The explanation helps Leah inspect the proposal's basis and limits.

Do not present generated reasons as a faithful account of how a model reached its answer. A plausible sentence can describe a justification without establishing that the system actually used it. Where possible, build explanations from verified inputs, explicit checks and recorded selection criteria. Label an inferred interpretation and let Leah inspect its source.

Research on human–AI interaction offers practical guidance about making capabilities and limitations understandable, enabling correction and dismissal, and providing explanations.[^c34-n01] Applying those principles requires testing the actual interaction. A dense panel of evidence can be as difficult to use as an unexplained recommendation if Leah cannot find the one unresolved condition that changes her decision.

Be equally careful with **confidence**. “85% confident” is incomplete without specifying what the number concerns. Is it confidence in interpreting the note, predicting travel time or the whole adjustment being feasible? Those are different claims. A model's likelihood for generated text is not automatically the probability that an appointment plan will work.

If Cedar presents a numeric probability, data specialists need to establish how it was produced and whether it is calibrated for the relevant outcome and situations. Calibration asks whether events assigned a given probability occur at roughly that frequency across suitable cases. A convincing badge cannot replace that work. Without a defensible number, show concrete checked conditions and remaining uncertainty.

Leah should be able to reject a proposal, edit a candidate and continue scheduling manually. Rejection must not erase her earlier work or require a lengthy justification. A short optional reason can support later investigation, but collecting feedback should not obstruct the immediate task. An override is meaningful only if the system respects it.

Distinguish rejecting one recommendation from turning assistance off. Dispatchers may need both. Also make clear whether an edit changes only this proposal or influences future suggestions. Do not imply that every correction immediately retrains a model when no such mechanism exists.

Test the interaction with missing information and plausible errors, not only correct recommendations. Ask a dispatcher to identify what remains unconfirmed before accepting the 3 p.m. candidate. Observe whether the explanation directs attention to that gap and whether rejection is practical under pressure. A high acceptance rate could reflect good assistance, unclear alternatives or hurried approval; its meaning needs investigation.

## Design the service around the model

A recommendation that arrives after Leah has resolved the problem offers little help. Measure latency from her request to a usable result, including retrieval, model calls, checks and display. Inspect slow cases as well as typical ones. If the underlying schedule changes while the request is running, the returned proposal may need another check before it is useful.

Cedar should show progress without implying that the schedule has changed. Leah must be able to cancel or continue with other work. If a late response arrives after she has made a different arrangement, it should not overwrite that arrangement or appear to describe the current schedule.

Cost also belongs to the complete task. Suppose, purely for planning, that each model call costs £0.02, each proposal uses three calls and the system handles 500 proposals daily. The assumed model-call cost is £0.02 × 3 × 500 = £30 per day. That excludes retrieval, infrastructure, evaluation, support and human review. It is not a vendor price or a Cedar forecast.

Compare that total effort with the value of useful assistance. A cheap call that produces proposals requiring extensive correction can be expensive in practice. Conversely, reducing model cost by removing a necessary check may undermine the reason to offer the capability. Economics, quality and operational consequences need to be considered together.

Privacy decisions begin with the task's required information. The assistant may need a customer's availability without needing unrelated account history. Limit retrieval and access accordingly. Establish how inputs and outputs are handled, retained and exposed before choosing a service arrangement. Security and privacy specialists should inspect those boundaries with engineering.

Treat job notes and retrieved material as information to inspect, not authority to change the assistant's permissions. The controls from Chapter 33 still apply. Also consider misuse of outputs: a recommendation designed to coordinate visits should not quietly become a score of individual technicians' performance. That would introduce another purpose, evidence requirement and set of affected people.

Plan failure before launch. If the model is unavailable, Leah should retain an understandable manual scheduling route. If current records cannot be obtained, the assistant should say that it cannot establish a current recommendation. Displaying an old candidate without its age can create false confidence.

Fallback is useful only if people can actually carry on. Test the manual route with the assistant disabled, check that necessary records remain accessible and establish who helps when the underlying scheduling service also fails. AI availability and scheduling availability are separate operational concerns.

## Evaluate the complete decision

Evaluation should compare the proposed assistance with credible alternatives. Cedar could compare unaided scheduling, a conventional conflict-and-filter view and the proposed AI assistant. Use tasks reflecting actual dispatcher work, with comparable information and clear outcome definitions. A favourable comparison against an unnecessarily weak baseline would provide poor grounds for investment.

Separate model-level checks from product-level outcomes. The model may extract a time constraint correctly, yet the product may display it against the wrong visit. A feasible recommendation may still take longer to inspect than Leah's existing process. Evaluate the route from information through interpretation, recommendation, review and resulting coordination.

For each candidate, ask whether required skills, availability, travel and customer commitments are respected. Record unsupported assumptions and missing conditions. Measure the time required to reach a usable decision, including checking and correction, rather than generation speed alone. Include the effort imposed on technicians, homeowners and support staff where the proposed change affects them.

Set severity rules before evaluating. Recommending an unavailable technician is different from using an awkward phrase. An average quality score must not hide a failure that makes a proposal unacceptable. Specify which conditions block a recommendation, which require a visible warning and which can be corrected during normal review.

Review errors that a dispatcher catches as well as errors that escape review. Frequent successful correction can conceal an exhausting product. Record how much inspection prevented each consequential mistake and whether the necessary information was actually visible. Human review should be evaluated as part of the working system, including the time and attention it demands.

Build cases around ordinary work and consequential exceptions. Include a complete record, missing part information, contradictory notes, an urgent repair, a customer who has declined a change and a schedule altered while the request is running. Include people whose needs are not well represented in the easiest demonstrations, such as dispatchers using assistive technology or working with multilingual notes.

AI can help the product team draft variations of these test situations. A useful instruction is to change one constraint at a time and state the expected effect on the recommendation's acceptability. A dispatcher and relevant specialists should check those expectations against the task. Generated variations broaden a test set only after someone establishes that they describe coherent, useful cases.

Before exposing real customers to consequences, test proposed outputs without allowing them to change live appointments. Such a comparison can reveal feasibility and review problems, but it cannot establish all effects of real use. People may behave differently when they depend on the system during a busy day. Any subsequent trial needs boundaries, monitoring and a way to stop.

Do not equate an accepted recommendation with a successful visit. Acceptance is an interaction event; arrival, repair completion and customer satisfaction are different outcomes. Establish which result the product is intended to improve and how to observe it without making causal claims from a simple before-and-after change.

The decision might be to continue, narrow the assistant to interpreting notes, improve the conventional schedule view or abandon the proposal. Evaluation should support that choice. A test process that can only justify more AI has already lost sight of the original question.

## Own behaviour after release

A successful evaluation describes a particular system under particular conditions. The product can change when a model, prompt, retrieval source, tool, policy or customer workflow changes. Record those versions and repeat the relevant checks when the change could affect behaviour. A familiar interface does not imply an unchanged capability.

The evaluation itself can become outdated. If Cedar starts serving businesses with different repair categories or commitments, a previously useful set of test cases may no longer represent their work. Revisit the cases and criteria with those businesses rather than repeatedly passing an unchanged test that answers an earlier question.

NIST's generative AI guidance includes reassessment, user feedback, monitoring and escalation as ongoing responsibilities.[^c34-n02] For Cedar, a practical plan would identify which conditions trigger investigation: increased constraint violations, missing information, unusually slow responses, rising costs or a pattern of dispatchers correcting the same interpretation. Each signal needs an owner and an available response.

Feedback should retain the reason where possible. “Rejected” is less informative than “replacement technician lacks the part”, but neither is automatically a verified training label. Someone must investigate the circumstances, distinguish product failure from changed preferences and decide what should change. Preserve privacy when collecting the evidence needed for that investigation.

Accountability spans disciplines. Product defines intended benefit and acceptable scope; engineering owns implementation and recovery; data specialists assess model behaviour, uncertainty and evaluation design. Security examines access and misuse. Legal or compliance specialists assess applicable obligations and agreements. UX specialists investigate whether people understand and control the assistance, while dispatchers and other domain experts judge operational feasibility.

The product manager coordinates those contributions without substituting a checklist for their expertise. Escalate an unexplained pattern of invalid recommendations to engineering and data colleagues; bring misleading controls to UX; involve security promptly when records cross an access boundary. Name who can disable recommendations and who communicates operational changes. The dispatcher should not carry responsibility for defects that the product gives them no practical way to detect.

For practice, review the proposed assistant in a one-page decision note. State the dispatcher need, the task assigned to AI, the strongest conventional alternative and the evidence that would favour either. Specify the unresolved part and customer-agreement conditions in the 3 p.m. proposal. Describe what Leah sees, what she can override and what happens when the service fails.

Finish the note with evaluation criteria, a cost assumption, a monitoring owner and a condition for stopping. If those details expose a narrower useful capability, revise the proposal. The product decision is to provide worthwhile, dependable assistance within understood limits. “Add AI” becomes meaningful only when it serves that decision.

## Notes

[^c34-n01]: Saleema Amershi et al., “Guidelines for Human-AI Interaction”, CHI 2019, Table 1, especially G1–G2 and G8–G11. [Author paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf). Cited for design guidance; no measured Cedar benefit or universal effect is claimed.

[^c34-n02]: NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, AI 600-1 (July 2024), MG-3.1-003, MG-3.2-004, MANAGE 4.1 and MG-4.1-007, printed pp. 42–45. [Profile](https://doi.org/10.6028/NIST.AI.600-1). The proposed Cedar signals and responsibilities are applications, not an implemented monitoring system.

## References

Amershi, Saleema, et al. (2019). [“Guidelines for Human-AI Interaction”](https://doi.org/10.1145/3290605.3300233). *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems*. [Author manuscript](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf).

National Institute of Standards and Technology (2024). [*Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1). NIST AI 600-1. July.
