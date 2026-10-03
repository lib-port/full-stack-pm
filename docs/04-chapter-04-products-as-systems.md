# Chapter 4: Products as Systems

## A fuller diary can produce a worse service

Cedar's product team introduces a planned technician-utilisation figure to help service businesses reduce idle time. The display divides hours booked for repairs by available paid hours. Dan, the plumbing company's service manager, sees six booked repair hours in an eight-hour day: 75 per cent. He asks Leah, the dispatcher, to fill another hour. The display will then show 87.5 per cent.

The calculation is correct for its definition. The problem is what the definition leaves out. Travel also consumes paid time, as do collecting parts, writing job records and dealing with unexpected complications. A blank space between appointments is not necessarily wasted capacity.

To fill the gap, Leah assigns Arun, a plumber, to a repair across town. Arun now travels farther. When his first repair takes longer than expected, the remaining schedule has little room to absorb the delay. He hurries through the next visit and leaves without checking a symptom the homeowner mentioned. Leah calls later customers to move their arrival windows while answering Arun's questions about which visit to attempt next. The homeowner is dissatisfied with the incomplete attention and asks for another visit.

The schedule is fuller, but the service has become less dependable. Excessive travel consumes the apparent gain. Reduced margin makes a single overrun disturb later appointments. Rushed work creates another customer problem. Leah spends more time repairing the schedule. The utilisation display shows only part of what happened.

This is **local optimisation**: improving a selected part or measure without adequately accounting for the wider result. **System optimisation** asks how the interacting parts contribute to the overall purpose. Here the purpose is not to keep every appointment slot occupied. It is to complete useful work reliably, at an acceptable cost, while meeting obligations to customers and staff.

The distinction does not make utilisation useless. Unused capacity can be a real problem. It means the figure needs an interpretation that includes the work it excludes and the consequences of changing it. Nor should the team conclude that all scheduling gaps are valuable. Some are avoidable waste; others provide necessary travel time or room for uncertainty. Investigation must distinguish them.

Maya, Cedar's product manager, now faces a different choice from simply making the utilisation figure more prominent. Should Cedar show travel requirements, protect time between uncertain jobs, change how managers review the figure, or investigate why particular gaps occur? Each option intervenes in a different relationship. Choosing among them requires seeing more than the screen and its calculation.

## Draw the boundary around the decision

A **system** is a set of interacting elements considered together for a purpose of analysis. The elements can include people, processes, software, physical objects and organisations. The relationships matter as much as the elements. Listing dispatcher, plumber and customer tells you who is present; explaining who promises an arrival time, who receives revisions and who can authorise a change shows how work happens.

A **system boundary** identifies what you will examine together for a particular question. For correcting a display calculation, the immediate boundary may include scheduling records and the reporting code. For improving repair reliability, the boundary must also include dispatch decisions, travel, job duration, parts and customer availability. The wider question demands a wider explanation.

A useful boundary is selective. Maya does not need to model every road or every supplier to investigate the scheduling problem. She does need to acknowledge that travel times and parts availability constrain the schedule even though Cedar does not control them. Draw external dependencies at the edge rather than pretending they disappear when placed outside the product team's authority.

Start with a few relationships that could change the decision:

| Relationship | What passes between people or components | Question for Cedar |
| --- | --- | --- |
| Dan reviews Leah's schedule | A target and an instruction to fill gaps | Does the review account for necessary non-repair work? |
| Leah assigns Arun a visit | Time, address, job requirements and customer commitment | Can Leah see whether travel makes the assignment feasible? |
| Arun reports a delay | Revised information about the day's work | Who receives it, and soon enough to act? |
| The homeowner requests another visit | Information about an unresolved problem | Can repeat work be connected to the original assignment? |

These relationships expose consequences beyond the first action. Filling a gap is the direct change. Longer travel and reduced recovery time follow from how the added visit fits among existing appointments. Extra calls and repeat work follow from the disruption. Calling them **second-order effects** directs attention to consequences caused through an intermediate change. The numbering is a reasoning aid, not a fixed property of the event.

Some consequences are intended; others are **unintended consequences**. “Unintended” does not mean unknowable or nobody's responsibility. Once a plausible pathway has been identified, the product team can investigate it, monitor for it or change the proposal before exposure grows.

The boundary also determines whose costs remain visible. If Maya considers only Cedar's support workload, Leah's additional calls can vanish from the analysis. If Dan considers only his company's invoice total, customers' time waiting can vanish. Ask whose experience would contradict the claim that the system improved. The answer can reveal an omitted person or outcome that belongs inside the decision.

There may be no single change that improves every outcome. A wider arrival window can make dispatch easier while forcing a homeowner to stay in all afternoon. More spare technician time can improve recovery from overruns while increasing the company's cost per completed job. System optimisation therefore requires an explicit account of which outcomes matter and which trade-offs are acceptable. Calling an outcome global does not make the underlying priorities neutral. Maya should present the conflict so the responsible people can decide, rather than conceal it inside a composite score whose weights nobody has discussed.

## Follow the loop and wait for the response

A chain becomes a **feedback loop** when its consequences return to influence the condition that started it. A line from fuller schedules to customer complaints is a pathway. It becomes a loop only when something about those complaints changes subsequent scheduling or the pressures driving it.

Consider a possible cycle after Arun's rushed visit. Incomplete work creates a return visit. Return visits consume capacity that could have served new jobs. Dan sees pressure on the remaining schedule and asks Leah to fit more work into each day. Less margin increases the pressure to rush, which can create further return visits. This is a **reinforcing loop**: a change produces effects that amplify the original change. It can reinforce deterioration as readily as improvement.

The loop is not inevitable. It depends on rushed work increasing repeat visits, return visits taking meaningful capacity, and Dan responding by compressing the schedule. If the company reserves capacity for corrections or changes its response to demand, the cycle can weaken or break. Naming those conditions makes the explanation investigable.

A **balancing loop** counteracts a change and moves a condition towards a target or limit. Suppose Dan monitors overdue appointments and temporarily stops accepting additional visits when overdue work rises. Leah uses the released capacity to clear outstanding work. As the backlog falls, normal booking resumes. The response opposes the growth of the backlog.

Neither label is a moral judgement. Reinforcing does not mean good, and balancing does not guarantee a desirable target. A company could maintain a consistently poor service through rules that resist improvement. Donella Meadows describes reinforcing feedback as self-amplifying and balancing feedback as corrective; she also emphasises that corrective behaviour requires a way to detect a departure and a mechanism to respond.[^c04-n01]

A **delay** separates an action from its consequence or from information about that consequence. Turning up a room thermostat does not make the room warm immediately. Repeatedly turning it higher before the heating has taken effect can create an overshoot. The missing consideration is the time required for the earlier action to work.

Cedar's utilisation figure changes as soon as Leah fills the diary. Arun's extra travel appears during the day. A request for a repeat visit may arrive later. A lost customer may become apparent only when another service would have been due. If Dan reviews success before these consequences can be observed, the immediate signal can encourage further schedule compression.

Distinguish a delay in the work from a delay in the information. A repair takes time even with perfect reporting. A completed repair may also reach the office late because the technician has not yet updated the record. Faster reporting can address the second delay while leaving the first intact. Meadows identifies delays as important features of feedback and cautions that changing their length or responding too quickly can alter system behaviour.[^c04-n02]

For each important loop, ask what is measured, who receives the information, what action that person can take and how long each step takes. A dashboard by itself closes no loop. Someone must use its information to change the work, and the effect must eventually return to the decision.

## Find the constraint and the useful intervention

Even a well-informed schedule can fail if one necessary activity cannot keep pace. A **bottleneck** is a constraint that limits the rate at which the relevant work can be completed. If every reassignment requires Leah's approval and she cannot review requests quickly enough, faster generation of suggested assignments may simply produce a longer waiting list.

Consider an hour in which six reassignment requests arrive and Leah can complete four reviews. If every request requires one review, none is withdrawn and no other reviewer helps, two requests remain waiting. Repeating those conditions grows the queue by two per hour. This simple arithmetic does not predict the actual office; it identifies what the team must measure before claiming that faster suggestions increase completed assignments.

The constraint can move. Improving approval may reveal that customers take longer to confirm new times. Removing that delay may expose a shortage of technicians with the required qualification. Ask where work is currently waiting and what prevents it progressing, rather than assuming the most visible screen is the limiting step.

Interactions can also create **emergent behaviour**: an overall pattern that no single component specifies or person intends. Dan seeks fuller schedules, Leah complies by using available gaps, and Arun tries to preserve later appointments by rushing. Together their responses produce a fragile service. No instruction explicitly says to create fragile schedules. The pattern arises through the combination of targets, information and individual decisions.

A **leverage point** is a place where an intervention can substantially affect system behaviour. Meadows directs attention beyond numerical settings to information, rules and goals, while warning that her account is not a recipe for finding the right intervention.[^c04-n03] For Cedar, possible interventions include making travel visible before assignment, changing Dan's review from occupancy alone to reliable completion, or preserving room for jobs whose duration is uncertain.

These candidates address different mechanisms. Travel visibility helps Leah reject an infeasible addition. A changed management review reduces pressure to treat every gap as waste. Reserved time gives an overrun somewhere to go. Each costs something: information must be maintained, reviews require attention, and spare capacity may reduce the work initially booked. The task is to compare those costs with the disruption they may prevent.

Maya can begin with one dispatch period and a small set of jobs, recording the original plan, added travel, changes made during the day and unresolved work. Leah should also record time spent recovering the schedule. A review immediately after dispatch can reveal feasibility problems; later follow-up is needed for repeat visits. Before expanding the intervention, compare these observations with the proposed explanation and inspect competing causes, such as unusually difficult repairs. A favourable day is a reason to investigate further, rather than proof that the new policy caused an improvement.

Involve dispatchers and technicians when mapping the work. Ask an operations specialist for help when interacting constraints, variable demand or costly service failures make informal reasoning inadequate. A diagram can expose a question; it cannot establish the right buffer size or scheduling policy through appearance alone.

## Test the arrows before trusting the picture

AI can help expand a causal map when the people preparing it have overlooked a relationship. Supply the proposed change, the system boundary, relevant roles, known events and uncertainties. Then request a bounded analysis:

> Examine the proposal to increase booked repair hours per technician. List plausible causal pathways, reinforcing and balancing loops, downstream people affected, and failure scenarios. For each relationship, state what would have to be true for it to exist. Label supplied facts separately from proposed explanations. Identify a delay and an observation that could challenge each important pathway.

Treat the resulting diagram or list as a set of hypotheses. A plausible arrow from greater utilisation to staff turnover does not establish that Cedar's proposal will cause resignations. The relationship would require intermediate mechanisms, such as sustained workload pressure, and competing explanations would need consideration. A map that skips those steps creates confidence without an adequate account.

Choose one consequential arrow and inspect it with someone close to the work. For “extra booked hours increase travel”, ask whether the additional jobs are farther apart, whether routes can be reorganised and whether travel was already allowed for. If new visits occur in the same building, that particular pathway may be weak. If they are across town, it becomes more plausible. Location and sequence decide the usefulness of the explanation.

Verify the loop's return link too. Complaints do not automatically change booking policy. Identify who receives them, whether that person can alter the policy, and whether the manager interprets them as a scheduling issue. A generated loop that relies on a response nobody makes is an unfinished hypothesis.

Practise with a library's proposal to shorten the time a reserved book waits for collection. Trace a first-order consequence, a second-order consequence and a third-order consequence. Then add one possible feedback loop and one delay. Identify a person who benefits and a person who may bear an additional cost.

One chain is: a shorter collection window releases uncollected books sooner; more waiting readers receive offers; staff process more transfers and notifications. A different branch is that readers who cannot visit quickly miss their reservation and request it again, increasing repeat handling. Neither chain is guaranteed. Check existing collection patterns, travel constraints and staff work before treating either as the result.

Your exercise succeeds when each step names an action or condition, the connection has a stated reason, and at least one important link has an observable check. Suggest a limited change and identify what would make you stop or revise it. Avoid expanding the map until every conceivable consequence appears; concentrate on consequences that could reverse the decision.

A product change enters an existing arrangement of people, information, incentives and physical limits. Useful systems thinking makes that arrangement easier to question. Before declaring an improvement, ask what else changes if it works, who absorbs the change and when the consequences become visible.

## Notes

[^c04-n01]: Donella Meadows, “Leverage Points: Places to Intervene in a System”, sections 8 and 7, on corrective and reinforcing feedback. The Cedar loops are proposed applications whose conditions require investigation. [Read the essay](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/).

[^c04-n02]: Meadows, “Leverage Points”, section 9, “The lengths of delays, relative to the rate of system changes”. The chapter uses qualitative reasoning; it does not claim to predict the stability of a quantified system.

[^c04-n03]: Meadows, “Leverage Points”, revised list of intervention points and introductory caveat that the list is an invitation to think broadly, not a recipe. No universal ranking of interventions is asserted here.

## References

Meadows, Donella. “Leverage Points: Places to Intervene in a System.” The Donella Meadows Project, online archive of the original essay. https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/
