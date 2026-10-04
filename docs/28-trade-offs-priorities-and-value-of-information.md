# Chapter 28: Trade-offs, Priorities, and Value of Information

## A priority is a commitment of scarce capacity

Cedar has four proposals competing for attention: route optimisation, improved payments, architectural remediation and a new integration. Each has advocates and a plausible benefit. The product manager needs to decide what the organisation should commit to now, what should wait and what it should learn before making the larger commitments.

A list ordered from one to four can conceal these different decisions. An investigation is not the same commitment as a production rollout. A repair required for dependable operation is not interchangeable with an optional growth experiment. Before ranking proposals, define the decisions and constraints they actually contain.

**Opportunity cost** is the value of the best alternative forgone when a resource is committed. If the engineers needed for route optimisation could instead improve payments, the comparison includes the payments benefit being delayed or abandoned. Do not add the full benefits of every rejected project as though the same people could have delivered them all at once.

Scarce capacity includes attention, specialist time, customer access and the organisation's ability to absorb change. Two projects with separate engineering teams may still compete for the same dispatcher research participants or support staff. A plan that ignores these shared demands can promise parallel progress that the organisation cannot deliver.

Start by describing each option at comparable resolution. “Fix architecture” is too broad to compare with a bounded payment improvement. Ask which failure or constraint the proposed repair addresses, what minimum change is needed and what evidence shows the consequence of deferring it. Likewise, specify which routing problem and which integration workflow are under consideration.

Then state the direction the product is trying to serve. **Strategic fit** concerns how a choice contributes to an intended position, set of customers or capabilities. If Cedar wants to make complex service coordination more dependable, explain how each option supports that aim. Calling every proposal strategic gives the word no discriminating power.

Strategy does not make operational obligations disappear. A modest repair may preserve the ability to serve current customers while a new capability explores future value. Make both roles visible. The decision can then concern a feasible sequence of commitments, rather than a contest in which only the most exciting proposal receives attention.

## Compare consequences without hiding judgement in a score

Build a short decision table that exposes the argument for each proposal. It should help colleagues see what is known, assumed and unresolved.

| Option | Intended benefit | Important uncertainty | Commitment question |
| --- | --- | --- | --- |
| Route optimisation | Reduce avoidable travel while preserving workable appointments | Whether actual constraints leave useful room to change routes | Investigate constraints and attainable benefit before a large build |
| Improved payments | Make payment completion and reconciliation easier | Which failures create the most customer and operational cost | Define the bounded problem and compare remedies |
| Architectural remediation | Reduce a specified reliability or change-delivery risk | Severity, timing and minimum effective repair | Establish whether any work is necessary before other changes |
| New integration | Remove repeated work between Cedar and another system | Demand, permissions, maintenance and partner dependence | Verify the workflow and strategic relevance before commitment |

This table contains questions, not measured Cedar results. Its value is that disagreement has somewhere precise to land. A commercial colleague may have evidence about payment failures; an engineer may know that the proposed integration depends on a fragile component. Those contributions can change the decision without pretending all considerations use one unit.

Where numerical outcomes and probabilities are defensible, expected value can help compare uncertain consequences. Keep costs and benefits on a consistent basis and inspect the distribution, not just its average. **Risk** concerns possible adverse consequences and their significance for the people or organisation exposed to them. A positive average cannot make every possible loss acceptable.

Scoring systems can structure discussion by making criteria visible. They cannot decide which criteria matter, whether scores mean the same thing or whether the inputs are supported. A score of four for customer benefit is usually a judgement on an ordinal scale, not a quantity known to be twice a score of two. Adding such scores may be a chosen convention, but it is not a discovered law of value.

Weights express priorities. A larger weight for near-term revenue favours different choices from a larger weight for operational resilience. Explain who chose those priorities and why. Avoid counting the same benefit twice under labels such as strategic fit and growth if both scores reflect the same expected customer adoption.

Test how sensitive the ranking is to plausible changes. If a minor adjustment reverses the top two options, describe them as close under current assumptions. If the leader remains ahead across reasonable estimates, more precision in an unimportant input may add little. A table should expose the judgement required, not create an excuse to avoid it.

## Sequence work to preserve useful choices

A **dependency** is a condition that must be satisfied for another action to succeed or proceed. Cedar may need reliable address information before assessing route suggestions, or a defined permission model before exchanging records with a partner. Ask whether the dependency is necessary, merely helpful or an assumption that can be tested.

Avoid turning every related improvement into a prerequisite. An engineer may identify a bounded change that makes a trial safe without requiring a complete architectural redesign. Conversely, calling a dependency “technical detail” does not remove its effect on feasibility. Product and engineering judgement should determine the smallest responsible sequence together.

**Reversibility** concerns the ability and cost of undoing a decision. Removing an unused prototype is relatively easy. Reversing a partner commitment, migrating records back or restoring customer trust after a broken promise can be much harder. Technical rollback is only one part of reversal.

This makes the form of the initial commitment important. Cedar could first inspect real routing constraints, then test suggestions without automatically changing appointments. That sequence can reveal whether useful improvements exist while limiting the consequences of a poor suggestion. It still requires appropriate data handling, participant agreement and staff effort.

**Optionality** is the value of preserving meaningful future choices. A small investigation may allow Cedar to choose routes, payments or neither after learning more. A modular interface may keep later integration options open. Flexibility matters when relevant information will arrive before the larger decision becomes unavoidable.

Options have costs. Maintaining two technical paths can create ongoing work; postponing a partner decision can close a commercial window. Ask which future choices are actually preserved, when they expire and whether Cedar will be able to act on the information. Vague flexibility is not automatically worth buying.

The Green Book's discussion of sequential decisions and real options connects flexibility with uncertainty and choices that are expensive to reverse.[^c28-n01] The underlying reasoning extends beyond public expenditure: design a commitment so that useful evidence can affect the next step before the largest costs are locked in.

For Cedar, a defensible sequence begins by establishing whether a specific architectural risk requires immediate attention. Scope any necessary repair with engineers. In parallel, where capacity permits, investigate whether routing constraints leave meaningful room for improvement. Keep payments as a concrete alternative, and require the integration proposal to establish its user workflow and continuing obligations.

That is a conditional plan. If the architectural concern is minor, it should not automatically consume the whole budget. If routing offers little attainable benefit, stop treating it as the inevitable next feature. Sequencing is useful when later actions truly depend on what the earlier work reveals.

## Ask what information could change the choice

**Value of information** is the improvement in a decision's expected value made possible by obtaining information before choosing. Information is valuable for a decision when it can change an available action in a beneficial way. Uncertainty alone is not enough.[^c28-n02]

Suppose Cedar is choosing between a bounded routing investment and a payment improvement after handling any mandatory constraints. The following simplified numbers are teaching assumptions, not company forecasts. They use incremental net financial benefit over the same twelve months, with the relevant implementation and operating costs already included.

Assume a 40% probability that routing conditions are favourable and a 60% probability that they are unfavourable. The routing option yields £100,000 in the favourable case and loses £20,000 in the unfavourable case. The payment option yields £30,000 in either case. These two states exhaust this simplified model; other real-world uncertainties are deliberately excluded.

The expected routing benefit is:

**(0.40 × £100,000) + (0.60 × −£20,000) = £28,000.**

On expected net money alone, payments is preferable at £30,000. Now suppose perfect information could reveal the routing state before commitment. Cedar would choose routing when conditions were favourable and payments when they were unfavourable. Its expected benefit with that information would be:

**(0.40 × £100,000) + (0.60 × £30,000) = £58,000.**

The expected value of perfect information is therefore **£58,000 − £30,000 = £28,000**. Compare the best choice after learning with the best choice available now. Do not compare only the routing option with itself, because the ability to choose payments is part of the information's value.

This £28,000 is an upper bound on the value of research resolving this uncertainty under the stated model, before research costs and delay. Real research is imperfect. It may not identify the state reliably, and a small study may leave the decisive uncertainty largely intact. The calculation does not justify spending £28,000 on any investigation called routing research.

It also assumes a decision criterion based on expected money, an ability to choose after learning and no additional consequences omitted from the comparison. Risk tolerance, customer effects and capacity constraints can alter the practical choice. The arithmetic clarifies one relationship; it does not replace the full decision.

For the actual routing question, ask what observation would discriminate between useful freedom to rearrange visits and a schedule already tightly constrained by promises, skills and urgency. Observing representative dispatch work and testing proposed routes against those constraints may be more useful than asking whether people like the idea of optimisation.

The assumed ranking is close. Routing exceeds the payment option when its favourable-state probability is above about 41.7%, holding the monetary outcomes fixed. That threshold comes from solving £100,000 multiplied by the favourable probability, minus £20,000 multiplied by the remaining probability, equal to £30,000. The current 40% assumption is near the threshold. Rather than arguing over the second decimal place, investigate whether the evidence can distinguish materially different routing conditions.

A finding can also change the design instead of simply selecting an existing option. If travel can be reduced only for flexible appointments, Cedar might narrow the routing proposal to those visits. That creates a new alternative with different costs and benefits; it requires updating the comparison. Do not retain the original broad benefit estimate while quietly reducing the scope that could produce it.

Information has little immediate decision value if every plausible finding leads to the same action. It can still have value for later decisions or safer implementation, but name that purpose. Do not justify an investigation using a decision it cannot influence.

## Put a limit on investigation and delay

Learning consumes resources. **Decision cost** includes the analysis, coordination and attention spent choosing. A small reversible content change should not automatically require the process appropriate to a major platform migration. Match the investigation to what could go wrong and how much its answer could change the commitment.

**Delay cost** is the consequence of waiting: benefit forgone, continuing exposure to a problem or an opportunity that expires. If payment failures are causing avoidable work now, deferring a remedy while studying routing has a cost. If an architectural risk is growing, that exposure matters even when its timing is uncertain.

Compare the likely improvement in the decision with the full cost of obtaining the information. A study with promising informational value may still be poor timing if it consumes the only people who could address an urgent operational problem. Conversely, a brief feasibility check can prevent a much larger mistaken commitment.

Set **stopping rules** before the investigation expands. State the decision deadline, resource limit, evidence that supports proceeding, evidence that rules out the option and the response to an inconclusive result. The rule should connect learning to action rather than merely define when a report is due. These are investigation and commitment conditions; an experiment still needs an agreed analysis and statistical stopping design.

For Cedar, the routing investigation can have a bounded set of workflows to examine and a defined question about achievable improvements under existing promises. If those workflows expose an essential constraint the proposed approach cannot handle, redesign or stop. If attainable value remains plausible but one important dependency is unresolved, decide whether one further focused inquiry is worth its cost.

An inconclusive result does not always justify more research. Evidence may be unobtainable in time, the difference between options may be too small to matter or the decision may be easy to reverse after a limited commitment. State the remaining uncertainty and choose a proportionate action.

Review the stopping rule when the world changes, but record the reason. A newly discovered obligation or severe operational failure can warrant a different decision. Disliking the answer is not sufficient reason to reset the investigation indefinitely.

Name the person who will receive the findings and make the next commitment. Research can arrive on time yet have little practical value if the relevant decision has already been made elsewhere, or if no one has authority to change it. Confirm that the choice remains open and that the evidence will reach the decision-maker before the resource or contractual commitment occurs.

Also identify what can proceed while the inquiry runs. Work that is valuable across all plausible findings may be a reasonable early commitment, provided it does not consume the capacity needed to act on the result. Preparing trustworthy appointment records could help several options, but that claim needs its own cost and dependency check. Useful common work is specific; a broad platform programme should not be smuggled into the plan as preparation.

Keep separate the decision to learn, the decision to build and the decision to expand. Each can have different evidence needs and costs. This helps the organisation move while preventing a small approved inquiry from quietly becoming an unreviewed long-term commitment.

## Use AI to expose the inputs behind the ranking

AI can organise proposals into a decision table, identify missing assumptions and calculate how a ranking changes as inputs vary. Give it the actual alternatives, decision horizon, constraints and evidence. Ask it to label every input as supplied data, estimate, preference or unsupported assumption.

For Cedar, request separate columns for expected benefit, downside, dependencies, reversibility and information needed. Do not ask the assistant to invent precise customer-impact and strategic-fit scores merely to fill the table. If a judgement is necessary, identify who should make it and what evidence would inform it.

Ask for sensitivity tests around the most consequential uncertainty. In the numerical example, change the probability of favourable routing conditions and identify when the preferred option changes. Check the arithmetic independently and verify that costs remain included once, horizons match and the alternatives remain feasible. A correct calculation on an impossible sequence is not a useful priority.

AI can also suggest investigations, but the product manager must assess whether the proposed findings could change an action. A generated survey that measures enthusiasm may not resolve routing feasibility. Ask a researcher or engineer to review the method against the actual uncertainty, and involve financial or risk specialists where consequential estimates exceed the team's competence.

For practice, choose three competing commitments. Define the best alternative forgone for each, its most important downside and one condition that must hold for its benefit to occur. Identify the uncertainty most likely to reverse your current preference.

Design a bounded inquiry into that uncertainty. Write two plausible findings and the action each would support. Estimate the inquiry's cost and the consequence of waiting, then specify a stopping rule. If both findings lead to the same commitment, revise the inquiry or explain the different decision it serves.

The resulting recommendation should state what to do now, what to learn and what remains conditional. Cedar can make a responsible commitment without pretending the four proposals have a single objective ranking. The quality of the decision depends on making its reasoning and its next opportunity to learn visible.

## Notes

[^c28-n01]: HM Treasury (2026), “Advanced methods for analysing risk and uncertainty”, discussion of decision trees and real options. No public-sector appraisal requirement is imposed on Cedar.
[^c28-n02]: UC Berkeley CS188, “The Value of Perfect Information”, definition through improvement in maximum expected utility. The monetary example is an original, simplified calculation under the stated assumptions.

## References

- HM Treasury (2026). *The Green Book*. Updated 5 February 2026. [Guidance](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).
- UC Berkeley, CS188. “7.3 The Value of Perfect Information.” *Introduction to Artificial Intelligence*. [Teaching text](https://inst.eecs.berkeley.edu/~cs188/textbook/vpis/vpi.html). Accessed 3 October 2026.
