# Chapter 25: Measurement and Metrics

## Decide what the number is supposed to mean

Cedar's dashboard shows more jobs scheduled. The product manager reads the increase as evidence that service companies are getting more value. A dispatcher, who organises repair visits, gives a different explanation: cancelled appointments are being booked again, sometimes more than once. More scheduling activity can accompany less dependable service.

The count is not necessarily wrong. Its interpretation is. “Jobs scheduled” records an action in the system; the product manager has treated that action as a reliable representation of something broader. Before asking whether a metric went up, ask what its movement would mean and why.

A **construct** is the idea you want to understand or assess. Reliable scheduling, customer trust and dispatcher workload are constructs. They are useful ideas, but they are not single events waiting in a database. You must decide what observable information would support a claim about them.

A **proxy** is a measurable stand-in for something you cannot observe directly or conveniently. The number of scheduled jobs might serve as a proxy for productive use of Cedar. The assumed link is that more scheduling activity means more useful work arranged. Rebooking, duplicate records and business growth can weaken that interpretation in different ways.

A metric therefore embeds a theory: when this recorded quantity changes, we expect something meaningful to have changed. Make the theory explicit enough to question. If the goal is dependable visits, successful scheduling should help the service company and homeowner agree an achievable appointment and carry it through. Counting bookings captures only an early part of that process.

This does not make counts useless. A scheduling count can help estimate system demand or investigate an operational incident. Its value depends on the question. The same quantity can be suitable for capacity planning and unsuitable as the principal measure of customer benefit.

Research on user-experience metrics describes a useful progression from goals to observable signals and then to specific measures.[^c25-n01] Start with what should become better for whom, then identify what you would expect to see. Starting with whichever events are easiest to count tends to reverse that reasoning.

For Cedar, the first decision is whether to improve the current booking flow, investigate schedule changes or pursue another capability. A measure should help distinguish those possibilities. A rising number without an interpretable connection to the decision gives the team activity to report but little reason to act.

## Turn an idea into an operational definition

**Operationalisation** means specifying how an idea will be represented through observable procedures or data. “Measure reliable scheduling” is an intention. A definition that identifies eligible visits, an agreed appointment, an observation period and a completion rule is something colleagues can implement and challenge.

Consider a candidate measure: the proportion of eligible repair visits completed within their agreed arrival window. The numerator counts visits meeting the rule; the denominator counts the eligible visits under assessment. Both need definitions. Does “completed” mean the technician arrived, the repair was finished or an administrative record was closed? Those events answer different questions.

For a first operational definition, choose verified arrival. The denominator is all confirmed, non-emergency visits whose originally agreed arrival window starts in the calendar week being assessed. The numerator is those visits with a verified technician arrival between that window's start and end. Keep cancellations in the denominator but report their reasons separately; this describes fulfilment of the original schedule rather than assigning blame. Report missing arrival evidence as a separate count, never silently as on-time arrival. This candidate measures one promise. Repair completion needs a separate definition and may occur later.

An arrival window also can change. If a dispatcher revises the agreed time after the technician is already late, measuring against the latest recorded window can make a missed promise disappear. Cedar needs to decide which agreement the measure evaluates and retain the information needed to assess it. The product question concerns promises experienced by people, not merely the final state of a record.

Cancellations require similar care. Removing every cancelled appointment from the denominator can make reliability look better when failures increase. Including every cancellation as a failure can punish a service company for a homeowner's timely change of plans. Separate cancellation reasons where the records support doing so, and show cancellations alongside completion rather than quietly choosing the treatment that produces a favourable rate.

Define the population and time window. Emergency work, recurring maintenance and flexible appointments may involve different promises. A weekly figure for one group should not be compared with a monthly figure for another as though the definitions match. Record exclusions, missing data and changes to eligibility.

The definition is a model, not a perfect copy of reality. A visit can meet its window while the homeowner receives confusing messages. A technician can arrive on time but lack the required equipment. The metric answers one bounded question. Other evidence must examine the parts of reliable service that it leaves out.

Test the definition against actual examples before relying on a dashboard. Ask a dispatcher and analyst to classify a small set of visit records, then investigate disagreements. If the people cannot consistently distinguish completion from administrative closure, a larger dataset will reproduce the ambiguity at greater scale.

A useful metric specification states the purpose, event definition, population, numerator, denominator, observation period, source and known limitations. It also names who can resolve a disputed interpretation. This is enough structure to make the measurement reviewable without turning every product question into a documentation project.

## Build a small system of measures

A single metric rarely captures a product decision's benefits and costs. Cedar needs a small set of measures whose relationships are understood, rather than a dashboard filled with unrelated numbers.

**Inputs** are resources committed: staff time spent arranging visits, engineering effort or messaging expenditure. **Outputs** are produced activities or deliverables: appointments booked, reminders sent or a capability released. **Outcomes** are changes in people's behaviour, circumstances or operating results: fewer failed visits, more predictable working days or less time spent repairing schedules. An output can contribute to an outcome, but producing it does not demonstrate that the outcome followed.

These distinctions depend on the question and level of analysis. A delivered message is an output of a notification process; the recipient understanding the appointment is a different event. Avoid treating one label as a universal property of a number. Explain the role the measure plays in the argument being made.

Cedar can arrange its candidate measures in a **metric tree**, a map connecting a broad objective with the quantities thought to contribute to it. Some connections are arithmetic identities; others are hypotheses about behaviour. Label the difference.

| Measurement question | Candidate measure | Relationship or limitation |
| --- | --- | --- |
| Were agreed arrival windows met? | Share with verified arrival within the originally agreed window | Candidate outcome measure; depends on trustworthy agreement and arrival records |
| Where do plans fail? | Cancellation and rescheduling rates, with reasons where reliable | Diagnostic signals; a timely customer-requested change differs from a failed visit |
| What effort does coordination require? | Dispatcher time on scheduling and recovery, sampled consistently | Workload guardrail; system clicks alone omit calls and informal work |
| What cost reaches technicians? | Travel time per completed eligible visit | Travel guardrail; geography and job mix affect interpretation |
| Is the mechanism operating? | Eligible appointments with usable contact and agreement information | Possible leading signal; predictive link needs evidence |

A **guardrail** is a measure watched to prevent a pursued improvement from causing an unacceptable deterioration elsewhere. If completed visits rise because dispatchers work longer hours or technicians travel much farther, the principal metric alone hides a trade-off. Agree what deterioration requires investigation or a change in plan, and who has authority to make that decision.

A **leading indicator** gives information before the outcome of interest is fully observable. A **lagging indicator** records a result after the relevant activity. Usable appointment information may be available before a visit; completion is known afterwards. Earlier availability does not guarantee predictive usefulness. Check whether the proposed leading signal actually relates to the later outcome under relevant conditions.

Use arithmetic relationships where they help. Completed visits equal eligible visits multiplied by their completion proportion, if the definitions and period match. More completed visits can therefore reflect more demand, a better completion proportion or both. That identity does not explain what caused either component to change.

Keep qualitative evidence beside the tree. A dispatcher describing an unrecorded round of telephone calls can reveal why an apparently efficient process is burdensome. A homeowner's confusing cancellation experience can expose a missing category. These observations help test the measurement model rather than competing with the numbers for credibility.

## Establish the reference point and trust the collection

A **baseline** is the reference state against which a later observation is compared. Before changing scheduling, Cedar might describe completion, cancellations, coordination effort and travel over a suitable recent period. The baseline needs stable definitions and enough context to interpret unusual weeks.

A baseline is not automatically the outcome that would have occurred without the change. Seasonal demand, staffing and customer mix may change too. Measurement establishes what was observed; causal analysis asks what difference the intervention made. Keep those questions separate when reporting progress.

A **target** is a desired level or direction. A forecast states what you expect; a target states what you want to achieve. Cedar can have a demanding target and an uncertain forecast at the same time. Explain why the target matters, whether it is feasible and what costs would be unacceptable in reaching it.

Avoid selecting targets only because the numbers look tidy. Ask what change would matter to service companies, what performance is already possible under comparable conditions and what constraints affect improvement. Some guardrails may require no material deterioration; others may allow an explicit trade-off. Those are decisions about value and risk, not properties discovered inside the metric.

**Instrumentation** is the means of recording events or observations for measurement. It includes what is captured, when, with which identifiers and under what rules. A dashboard can calculate its formula perfectly while using incomplete or misleading events.

For example, an offline technician may finish a visit before the completion record reaches Cedar. If the metric uses server receipt time as the visit's completion time, poor connectivity can resemble poor service. Record the event's intended meaning and investigate how device clocks, delayed transmission and later corrections affect it. An engineer can explain the system behaviour; a dispatcher can explain whether the recorded state matches the work.

Check missing and duplicate records. Are failed sends absent from the denominator? Does retrying an operation create another apparent booking? Did a software release rename an event or change when it fires? Investigate abrupt changes before congratulating or blaming a team.

Use small reconciliations to build trust: follow a known visit from its actual sequence through the recorded events and the final calculation. Compare manual observations with instrumented data where appropriate and permitted. Record unresolved gaps instead of silently assigning them to the most convenient category.

Maintain the definition as the product changes. Version the measurement rule when its meaning changes, mark the discontinuity and avoid presenting incompatible figures as one smooth trend. Someone must own this continuing care; otherwise the dashboard can outlive the assumptions that made it interpretable.

## Consider how the measure changes behaviour

Measures do more than describe work when people are rewarded, challenged or funded according to them. They can change what people do. The warning commonly called **Goodhart's Law** concerns a measure losing usefulness when it becomes a target. Marilyn Strathern's discussion of audit gives the familiar formulation and connects it to Goodhart's earlier monetary-control observation.[^c25-n02] Treat it as a warning to investigate mechanisms, not a claim that every target inevitably fails.

Suppose Cedar's team is assessed only on jobs scheduled. Making it easier to create bookings may increase the number, including bookings that are poorly specified or repeatedly replaced. The team need not deliberately manipulate data. Good-faith effort to improve the visible target can neglect the consequences that the target leaves out.

A service company facing the same pressure might divide one visit into several records or favour easily scheduled jobs. Whether either behaviour occurs is an empirical question. The useful design question is whether the metric would reward it and whether the wider measurement system would reveal the damage.

Guardrails help, but adding more targets is not an unlimited solution. Competing targets can create confusion or encourage people to optimise whichever is easiest to defend. Retain room for explanation and investigation. Review examples where the metric and experienced quality disagree, and revise the model when the disagreement exposes a weakness.

A **vanity metric** looks impressive without helping the relevant decision. A cumulative total almost always grows when new activity is added; growth alone says little about current performance. The problem is not that a large number is inherently useless. It is that the presentation invites an unsupported inference of success.

In an internal expense tool, fewer sessions might mean employees complete claims more quickly and return less often to repair mistakes. An engagement target could reward the opposite. Start from the job people need to finish and the costs they experience, rather than assuming more interaction is always better.

Review measures when incentives, workflows or populations change. A proxy that was useful during an early trial can become misleading during expansion. Ask what the people being measured know about the work that the measurement cannot see. Their explanation can identify a defect in the model before the defect becomes a management argument.

## Ask AI to challenge the measurement theory

AI can propose candidate metrics when given the decision, affected people, intended outcome, available records and known constraints. Ask for each candidate's construct, operational definition, expected relationship to value and a situation in which the metric would improve while the experience worsened. This makes generated suggestions easier to inspect.

For Cedar, ask the assistant to critique the scheduled-job count and the replacement measures. Require it to consider cancellations, dispatcher effort and technician travel separately. Ask which events would be needed to calculate each candidate, and which activities would remain invisible. Treat proposed data fields as requirements to investigate, not as fields that the system already contains.

Then ask for unintended incentives: what behaviour would a reasonable person adopt if judged only by this number? Check the answer with the people doing the work. An assistant can describe a plausible workaround, but cannot establish that dispatchers use it or that a record represents the intended construct.

An analyst can test a calculation and investigate distributions or missingness. Researchers can compare the measurement with observed experience. Engineers can verify instrumentation. The product manager brings these perspectives together and owns the product decision within the organisation's decision rights. No single generated metric definition replaces that collaboration.

For practice, choose one number your organisation currently treats as evidence of value. Write the claim it is being used to support. Identify the construct, then describe the exact observation, denominator and time window. Name one way the number could improve without the intended benefit occurring.

Next, add one complementary observation and one guardrail. Explain what each would reveal and what action a concerning result would trigger. Avoid fixing every weakness by adding another dashboard tile; sometimes the right next step is observing work or repairing the collection process.

Finally, state what evidence would make you stop trusting the original metric. For Cedar, repeated bookings alongside rising cancellation and recovery effort would challenge the claim that scheduling volume represents dependable service. The resulting decision may be to change the product, change the measure or investigate further. Measurement becomes useful when the team can explain which of those responses the evidence supports.

## Notes

[^c25-n01]: Rodden, Hutchinson and Fu (2010), “Goals–Signals–Metrics”, pp.3–4 of the author copy. The chapter applies the general mapping principle without adopting the paper's complete framework.
[^c25-n02]: Strathern (1997), p.308. The familiar target/measure wording appears in this essay; it is not presented here as a direct quotation from Goodhart's original paper.

## References

- Rodden, K., Hutchinson, H. and Fu, X. (2010). “Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications.” *Proceedings of CHI 2010*. [Publication and author copy](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/).
- Strathern, M. (1997). “‘Improving ratings’: audit in the British University system.” *European Review*, 5(3), 305–321. [Article copy](https://gwern.net/doc/statistics/decision/1997-strathern.pdf).
