# Chapter 21: Quality, Reliability, and Failure

## Name the failure the user experiences

On Monday morning, Leah, the plumbing company's dispatcher, opens Cedar while technicians prepare to leave. She cannot establish which assignments are current. The immediate problem is not an abstract availability percentage. She must decide who should travel to which customer, and whether she can trust the information used to send them.

That task can fail in several ways. A total outage prevents Leah opening the schedule at all. Slow performance leaves her waiting while technicians ask for instructions. Stale information shows a plausible schedule that omits a recent reassignment. Delayed messages mean the office has the right plan while a technician still follows the old one. Inaccessible customer histories leave a technician without information needed to prepare for the visit.

These failures require different responses. An unavailable screen makes the interruption obvious. A responsive screen displaying an old assignment can conceal the problem. A delayed notification can leave two people with different accounts of the same appointment. Saying that Cedar is “up” because a server responds does not establish that dispatch works.

**Correctness** means behaving according to the relevant rules and intended results for the specified situation. If Cedar assigns the same technician to incompatible appointments despite a rule preventing that conflict, the result is incorrect. But software can calculate the correct assignment and deliver it too late to be useful.

**Quality attributes** describe other important properties of the product's behaviour, such as responsiveness, accessibility, security, reliability and maintainability. The distinction helps separate what the system should do from how well it must do it under relevant conditions. The categories interact: a delay can become a correctness problem if the user acts on obsolete information.

Start with the consequence for work. How long can Leah wait before dispatch breaks down? How old can the displayed information be before she needs confirmation? Which history details are necessary before a technician enters a property? These questions identify requirements that “the application must work” leaves hidden.

They also prevent indiscriminate demands. A monthly management report may tolerate a delay that would be unacceptable for a live reassignment. A cosmetic image can fail while the essential task continues. A missing access instruction may justify stopping a particular visit. Product judgement includes distinguishing those cases before engineers are asked to provide an undifferentiated level of quality everywhere.

Maya, Cedar's product manager, should discuss the work with Leah and the engineering response with Priya. Neither conversation alone establishes a sufficient requirement. Users explain the consequences and practical alternatives; engineers explain what can be detected, preserved and restored. Together they can decide which failures need prevention, which need containment and which need an explicit fallback.

## Define reliability around the work

**Reliability** concerns whether the product performs its required functions dependably over time under stated conditions. The conditions include workload, environment, dependencies and patterns of use. A successful demonstration with one dispatcher provides limited evidence about Monday morning use across many businesses.

**Availability** concerns whether the required service is usable when needed. It may be measured as a proportion of time or as a proportion of relevant requests that succeed. The definition must say which capability, population and observation period are included. An aggregate for all requests can hide the fact that a small customer's dispatch workflow fails repeatedly.

**Latency** is the time taken for an operation or response. **Throughput** is the amount of work completed in a period. **Capacity** is the workload the system can support while meeting its required behaviour. A service can complete many background reports per hour while still making each interactive schedule change painfully slow.

Google's account of service objectives distinguishes measures such as availability, latency and throughput and emphasises selecting them around users' needs.[^c21-n01] For Cedar, a meaningful discussion begins with a specific action: can a dispatcher retrieve current assignments and save a valid change within an acceptable time during the dispatch period?

Suppose the team proposes that most schedule changes should be confirmed within two seconds under a stated peak workload. That is a candidate target, not an established requirement or universal threshold. Leah's tasks and engineering evidence must determine whether it is useful and feasible. The target also needs to say how many slower operations are acceptable and what the user sees when confirmation does not arrive.

An average is insufficient on its own. Nine changes taking one second and one taking eleven seconds average two seconds, yet the last dispatcher waits much longer. Distribution matters because a small group of poor experiences can be consequential. Ask which users, operations and time periods appear in the slow or unsuccessful group.

Freshness deserves separate attention. A schedule returned in a fraction of a second may still be yesterday's copy. Define what current means for the action and how the product communicates uncertainty. A timestamp helps only if it describes the relevant update, rather than the moment the screen happened to load.

Requirements also need a time horizon. Brief interruptions spread across quiet periods differ from one interruption during the busiest dispatch window, even if total downtime matches. Avoid treating a percentage as the whole promise. State the task, the tolerable interruption and the recovery needs alongside the measure.

Targets involve costs and trade-offs. Additional engineering and operational capacity may improve service, but resources are finite. Choose priorities through the harm of failure and the value of more dependable work. Engineering specialists should help assess feasibility; a product manager should not invent an impressive availability figure and assume a team can deliver it at no additional cost.

Specify where timing begins and ends. Measuring from the server receiving a request to sending its response omits delays on Leah's device and network. Measuring until the interface confirms the change is closer to her experience, while measuring until Arun receives the update answers another question. Both may be useful, but they are different measures. If the product promise concerns coordination between dispatcher and technician, a fast server response alone cannot demonstrate that promise. Select evidence that follows the actual boundary of the work.

## Gather evidence before and beyond release

**Testing** deliberately exercises a system or part of it and compares the result with an expectation. The expectation matters as much as the input. A test that confirms a schedule screen opens does not establish that the appointments are current, properly authorised or safe to change.

Different tests answer different questions. A focused test can check a calculation or scheduling rule. An integration test can check an exchange between components. A broader workflow test can follow a user action through several parts of the system. Tests under load can examine behaviour when many operations compete for resources. None is a substitute for all the others.

For Cedar's dispatch task, useful cases include two dispatchers changing the same job, a technician reconnecting after working offline, a notification provider refusing a request, and a history lookup failing while the schedule remains available. Each case needs an expected outcome: which information remains visible, which action is accepted and how unresolved work is represented.

Test environments also set limits on interpretation. A simulated provider may always return immediately, while the real dependency can be slow or unavailable. A small dataset may omit awkward historical records. Ask which production conditions the test represents and which remain untested, rather than treating a green result as universal assurance.

The SRE chapter on reliability testing explicitly notes that passing tests does not necessarily prove reliability.[^c21-n02] Tests provide evidence about selected behaviour under selected conditions. Operational observation provides additional evidence about what happens in use, including combinations the test designers did not anticipate.

**Resilience** is the ability to withstand disruption, adapt appropriately and recover useful service. It may involve detecting a failed dependency, limiting its effect, preserving work or shifting to another path. Each mechanism needs testing, including its behaviour when the system is already under stress.

**Redundancy** supplies additional components or copies that can take over when another fails. Two servers can protect against some single-server failures, but not a defect deployed to both or a shared dependency that stops both. Ask what failures the redundancy is independent of. A second copy is not automatically a second independent path.

Recovery mechanisms need evidence too. A backup is useful only if the organisation can restore appropriate data and resume the work within the needed conditions. A fallback screen is useful only if people can find and interpret it. Rehearse relevant recovery steps in a safe environment and record what was actually demonstrated.

The product manager's contribution is to bring consequential scenarios and expected user outcomes into the testing conversation. Engineers decide how to implement meaningful checks and interpret technical results. Counting test cases or demanding an arbitrary coverage percentage is weaker than asking whether the most harmful failures have credible evidence of prevention or containment.

Check the result the test treats as success. A notification test could pass because Cedar submitted a message to a provider, even though the requirement concerns delivery to the technician's device. The test may be correctly implemented for its narrower purpose while leaving the product promise untested. Ask what each important test establishes and which evidence would be needed for the remaining steps. This is a scope question rather than an accusation that the engineering work is inadequate.

## Prepare to degrade, diagnose and recover

**Graceful degradation** means preserving useful, clearly bounded behaviour when the full service cannot be provided. Cedar might allow dispatchers to read a clearly labelled recent schedule while preventing edits that cannot be safely confirmed. A delayed historical report might simply show its last successful refresh. Different tasks justify different fallbacks.

A fallback must not quietly replace a stronger promise with a weaker one. If an old schedule is displayed, Leah needs to know its age and limitations. If critical access information cannot be retrieved, allowing a technician to continue as though nothing is missing may be worse than an explicit interruption. Decide what should stop as well as what should continue.

**Monitoring** collects and evaluates signals about the system's behaviour. **Observability**, in practical product terms, concerns whether available signals let people understand the system's internal condition and investigate relevant questions. A dashboard can show that errors increased without providing enough information to discover which appointments or dependencies are affected.

Useful evidence can include measurements, records of events and traces that connect one operation across components. Priya may need to distinguish a request that never arrived from one accepted before its reply was lost. She also needs a way to identify affected customer work without exposing unnecessary personal data. Those questions influence what the software should record before an incident occurs.

Google's monitoring guidance distinguishes user-visible symptoms from possible causes and combines external checks with information from inside the system.[^c21-n03] For Cedar, “dispatchers cannot save assignments” is a symptom. “The database is overloaded” is a hypothesis requiring evidence. Confusing the two can direct recovery towards the wrong component.

An **incident** is a disruption that needs coordinated attention. The response should establish impact, responsibility for technical work, communication and decision authority. Maya can help identify customer consequences and keep explanations aligned with known facts while Priya and the engineering responders investigate. Repeatedly asking every engineer for updates can interfere with the work needed to restore service.

**Recovery** includes restoring the ability to operate and dealing with incomplete or incorrect work left behind. If a message queue resumes, the team must still consider whether delayed appointment messages are now misleading. If records are restored from an earlier state, someone must identify changes that need reconciliation. The service returning a successful response is not always the end of the customer problem.

**Operational readiness** means having the people, information, tools and procedures needed to operate and recover the capability. Who notices a dispatch failure? Who can act? How will affected customers learn what to do? Can responders access the relevant systems when the normal path is unavailable? These are launch requirements, not matters to invent during Monday's disruption.

After recovery, reconstruct the sequence from available evidence. Separate the triggering event from conditions that allowed it to spread, delayed detection or complicated restoration. If an engineer made a mistaken change, stopping at that fact leaves questions about checks, access, documentation and recovery unanswered. Record concrete improvements with owners and verify that they are completed. Also revisit the product assumption: perhaps dispatch now depends on a capability originally treated as optional. Operational use can reveal that the agreed reliability priorities no longer match the work.

## Make failure reasoning part of product judgement

AI can broaden a team's list of tests or failure scenarios. Give it the actual requirements, authorised architecture information and known constraints. Ask for cases that challenge the expected behaviour, not merely more examples of the ordinary path:

> Propose failure tests for current-assignment retrieval, schedule changes and notifications. Include delay, stale data, partial failure, duplicate action and recovery. State the expected user-visible behaviour for each case. Mark assumptions about the architecture and identify which requirements remain ambiguous. Do not claim coverage of behaviour not described in the inputs.

Treat the output as test-design material. A generated list is not executed evidence. Generated test code may check an irrelevant condition, reproduce the implementation's mistaken assumption or omit the interaction that causes failure. Engineers must review the expectations, run appropriate tests and inspect results. A large suite can still share one blind spot.

AI can also propose explanations during an incident, but those explanations are hypotheses. Ask what observation would distinguish a slow dependency from a client-side problem, and check the available records. Do not turn a fluent diagnosis into an operational command without the responsible engineer's assessment and appropriate authority. Incident conditions make unsupported certainty particularly costly.

Use a short exercise to connect failure behaviour to user needs. Compare two Cedar failures: the current schedule may be stale, and a monthly report is delayed. For each, state what the product should display, which actions remain available, who should be notified and what confirms recovery.

A sound schedule response might label the last verified state, prevent or carefully constrain unconfirmed changes, and direct the dispatcher to an agreed operational fallback. The delayed report might remain available with a clear reporting period and refresh status. Neither answer is universal. The choices depend on the consequences of using stale information and the alternatives available to the people doing the work.

Then add a recovery complication: appointment updates accumulated while service was unavailable. Identify which can still be applied, which need review and how people learn that their earlier action did or did not take effect. You have completed the exercise when the return to service is as understandable as the initial failure.

Apply the same questions to a public library's self-service checkout. A network interruption could allow reading a catalogue while preventing confirmation that a book has been borrowed. The useful fallback depends on how staff can authorise and later reconcile loans. Keeping every screen responsive would not be enough if users left believing an unrecorded loan had been completed.

Production reliability engineering requires engineering expertise. Product managers still have a substantial role: define consequential behaviour, make trade-offs explicit, ask what evidence exists and ensure operational work has an owner. A product is dependable when people can use it under the conditions that matter and can respond appropriately when those conditions are disrupted. Ask how it must fail before failure supplies the answer.

## Notes

[^c21-n01]: Chris Jones, John Wilkes and Niall Murphy, with Cody Smith, “Service Level Objectives”, in *Site Reliability Engineering* (2016), “Indicators”, “What Do You and Your Users Care About?” and “Choosing Targets”. [Read the chapter](https://sre.google/sre-book/service-level-objectives/).

[^c21-n02]: Alex Perry and Max Luebbe, “Testing for Reliability”, in *Site Reliability Engineering* (2016), introduction and “Relationships Between Testing and Mean Time to Repair”. [Read the chapter](https://sre.google/sre-book/testing-reliability/).

[^c21-n03]: Rob Ewaschuk, “Monitoring Distributed Systems”, in *Site Reliability Engineering* (2016), “Symptoms Versus Causes” and “Black-Box Versus White-Box”. [Read the chapter](https://sre.google/sre-book/monitoring-distributed-systems/).

## References

Jones, Chris, John Wilkes, and Niall Murphy, with Cody Smith. “Service Level Objectives.” In *Site Reliability Engineering*. O'Reilly, 2016. https://sre.google/sre-book/service-level-objectives/

Perry, Alex, and Max Luebbe. “Testing for Reliability.” In *Site Reliability Engineering*. O'Reilly, 2016. https://sre.google/sre-book/testing-reliability/

Ewaschuk, Rob. “Monitoring Distributed Systems.” In *Site Reliability Engineering*. O'Reilly, 2016. https://sre.google/sre-book/monitoring-distributed-systems/
