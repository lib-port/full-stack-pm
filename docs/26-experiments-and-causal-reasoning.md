# Chapter 26: Experiments and Causal Reasoning

## The decline is real; its cause is still a question

After Cedar launches automated appointment reminders, the recorded no-show rate falls. A service company's homeowner customers are unavailable for fewer scheduled visits. The chart is encouraging, and the product team wants to say that reminders caused the improvement. The timing supports that possibility. It does not settle it.

The causal question is: what would the no-show rate have been during the same period, for the relevant appointments, without the new reminder routine? Perhaps it would have stayed higher. Perhaps it would have fallen anyway. The observed chart contains only the world that occurred.

That missing alternative is the **counterfactual**. Causal reasoning compares what happened under an intervention with what would have happened under a specified alternative. For the same appointment, Cedar cannot observe both outcomes at once. It needs a design that provides a credible comparison.

**Correlation** describes association: quantities vary together. Reminder use and attendance can be associated even when another factor explains part or all of the relationship. **Causation** concerns whether changing one thing changes another relative to the relevant alternative. A plausible story about how a reminder helps memory is useful, but does not by itself establish the effect in this setting.

Define the claim before choosing a method. Is Cedar asking about adding the automatic message to existing contact, replacing a telephone call, or changing the reminder's timing? Those are different interventions. A trial that adds a message cannot automatically justify removing the call.

Define the outcome too. For this investigation, a no-show means the homeowner is unavailable when the service company attends under the agreed appointment conditions. A technician failing to arrive, a cancelled visit and an unrecorded completion are separate events. If the definition changes around launch, part of the apparent improvement may be a change in recording.

The decision determines how strong the evidence needs to be. Cedar may be deciding whether to expand a modest trial, replace an established contact process or make a large investment based on claimed savings. Those commitments have different consequences. A suggestive association can justify investigation without justifying the strongest commitment.

This discipline applies outside software. Complaints may fall after a public service introduces a new form, while eligibility rules or staffing change at the same time. The question is not whether the chart moved. It is what comparison supports the claim about why it moved, and whether that claim is strong enough for the intended decision.

## Give alternative explanations a fair test

Cedar's product manager begins by listing changes that could affect no-shows independently of the reminder. The list should contain testable possibilities, not an unlimited invitation to doubt every observation.

Seasonal conditions may have changed. Different months can bring different appointment types, workloads or patterns of availability. Customer mix may have changed too: a greater share of recurring appointments with established customers could alter the overall rate without improving any particular group's attendance.

Selection creates another problem. Companies that volunteer for a reminder trial may already manage appointments more carefully. Homeowners choosing text messages may differ from those who do not. Comparing these groups as though the only difference were receipt of a message can attribute their existing differences to the feature.

A **selection effect** arises when how people or observations enter a group changes the comparison. A **confounder** is a factor that affects the intervention or exposure and the outcome, creating an alternative explanation for their association. For example, a service company's organisational capacity could influence both whether it adopts reminders and whether it keeps reliable contact records. The exact causal structure needs investigation; a variable is not a confounder merely because it appears in the dataset.

Rollout activity can also matter. Cedar's support staff may help participating companies clean contact information and review appointment practices. If attendance improves, the result may reflect the combined change. A claim about the message alone would then go beyond the intervention actually delivered.

An unusually poor starting period introduces **regression to the mean**. When a measure contains ordinary variation, an extreme observation will often be followed by one closer to the usual level without a corrective intervention. If Cedar selects companies after their worst month and introduces reminders immediately, a subsequent improvement can look more impressive than the intervention warrants.

This does not mean the effect is unreal. Several mechanisms can operate together. A reminder could help while seasonal change also improves attendance. The task is to estimate the contribution relevant to the decision, not to pick one convenient explanation and declare the others impossible.

Use a short causal account to guide evidence collection. If improved contact records explain the decline, examine when records were corrected and whether attendance changed among appointments unaffected by the new message. If customer mix explains it, inspect comparable groups rather than only the combined total. Such checks can challenge explanations, although statistical adjustment cannot automatically remove every unobserved difference.

Do not investigate only alternatives that are easy to dismiss. Ask someone who understands service-company operations which explanation would most threaten the team's preferred conclusion. A strong causal claim survives serious comparisons; it does not acquire strength from repeatedly restating the original sequence of events.

## Design a comparison that answers the decision

Cedar can plan a stronger test before extending the reminder routine. State the intervention, alternative, eligible population, outcome and observation period in advance. Then choose an assignment method that makes the comparison credible and workable.

The **treatment group** receives the intervention being evaluated. The **control group** receives the specified comparison condition. Here, treatment could mean adding one automatic reminder to the company's existing agreed contact routine; control continues that routine without the additional automatic message. This tests the added message. It does not test replacing all human contact.

**Randomisation** assigns eligible units using a chance mechanism. Because assignment is not chosen according to expected attendance, it helps separate the intervention from factors that otherwise influence who receives it. Random allocation is a central feature of experimental design.[^c26-n01] It creates comparability in expectation, not a guarantee that every characteristic will be exactly balanced in a finite sample.

An **A/B test** is a common two-condition experiment. The important feature is the comparison design, not the letters. Randomly displaying two variants without reliably recording assignment and outcomes does not produce a trustworthy result simply because a tool calls it an experiment.

Choose the unit of assignment carefully. Individual appointments seem convenient, but the same homeowner may have repeated appointments, and one dispatcher manages many visits. If the dispatcher changes behaviour for everyone after seeing the reminder process, treatment can affect control appointments. Assigning at service-company level may reduce this interference, but fewer independent companies can make estimation harder. A statistician can help choose a design that reflects these relationships.

Keep eligibility and communication preferences explicit. The study should include only appointments for which the proposed contact is appropriate and authorised. Preserve essential communication and agreed safeguards. A business desire to test a feature does not make every possible control condition acceptable.

Record allocation before delivery. A failed send is part of what happens when the routine is offered or assigned. Removing failed sends from treatment analysis can create a selected group with better contact information. The primary comparison should normally preserve the original assignment, with delivery and engagement examined as separate implementation questions. Ask an analyst to explain which effect each analysis estimates.

Choose the main outcome and guardrails before seeing results. Cedar can assess no-shows while watching unwanted messages, cancellations, dispatcher effort and support problems. Decide how each will be recorded and what would trigger an operational pause. A feature that changes the classification of a missed visit into a late cancellation needs interpretation beyond the principal percentage.

Agree the observation period, analysis plan and reporting of deviations. Let the period capture the relevant appointment cycle, rather than ending when the chart first looks favourable. Repeatedly checking results and stopping at a convenient threshold can invalidate an analysis that assumed a fixed plan. Some designs support sequential decisions, but those rules need appropriate statistical design.

Describe what the experiment will not resolve. Adding an automatic reminder tests a package of timing, content, delivery and existing support. If the package helps, the experiment does not necessarily identify which component produced the benefit. A later investigation can compare components when that distinction matters. Trying to answer every question in the first trial can spread a limited sample across too many conditions and leave none adequately informative.

Practical preparation also includes planning for disappointment. If the trial is inconclusive, decide whether the next action is to extend observation under an appropriate analysis plan, redesign the intervention, collect better data or stop. Do not define every ambiguous result as a reason to continue indefinitely. The analyst can explain what further information is realistically obtainable; the product manager must connect that information to the remaining decision.

Finally, verify that the experiment ran as intended. Confirm that allocation worked, messages used the planned content, control conditions were maintained and outcomes were collected comparably. A carefully written plan cannot rescue an unnoticed implementation failure. Investigate the execution before interpreting its result.

## Interpret size, uncertainty and significance together

Even with a sound experiment, observed groups will vary. **Sample variability** is the variation that arises because a sample or random allocation is one of many that could have occurred. A small difference can appear without a meaningful underlying effect; a real effect can be difficult to detect with limited information.

Suppose an illustrative trial records eight no-shows among one hundred treatment appointments and twelve among one hundred control appointments. The observed rates are 8% and 12%, a difference of four percentage points. Relative to the control rate, that is a one-third reduction. These assumed counts demonstrate arithmetic, not a Cedar finding or a statistically established effect.

The two descriptions can sound very different. Reporting only the relative reduction can obscure the absolute change and the small number of events. An analyst should quantify uncertainty using a method suited to the assignment and data, including dependence between appointments. Two hundred appointment records are not automatically two hundred independent observations.

**Statistical significance** describes a result meeting a specified statistical criterion under a model. In common testing, a p-value assesses how incompatible the observed data are with a specified null model, using a defined calculation. It does not give the probability that the product hypothesis is true, and it does not measure the size or importance of an effect.[^c26-n02]

A threshold such as five per cent is a decision convention within an analysis, not a dividing line between truth and falsehood. A result just on one side of the threshold is not fundamentally different from a very similar result on the other side. Ask for the estimated effect, uncertainty, assumptions and full set of relevant analyses.

A statistically non-significant result does not establish that the feature has no effect. The evidence may be too imprecise to distinguish a useful benefit from no benefit or harm. Conversely, a very large dataset can make a tiny difference statistically detectable even when the difference does not justify the implementation and operating costs.

**Practical significance** concerns whether the effect matters for the decision. Cedar needs to consider the number of failed visits potentially avoided, the costs of messages and support, the burden of unwanted contact and whether the benefit reaches the intended users. Statistical analysis informs that judgement; it cannot choose the organisation's priorities.

Avoid analysing many outcomes and presenting only the most favourable one as though it were the sole planned test. Exploratory findings can be useful, but label them and investigate their reliability. Likewise, a favourable overall average may conceal an important problem for a subgroup. Subgroup claims need enough evidence and appropriate analysis, not a search for whichever small slice supports the preferred story.

The product manager should be able to ask these questions and understand the answer. High-stakes experiments, consequential statistical decisions, small samples and advanced methods warrant involvement from a statistician or data scientist before the test begins. Specialist review is most valuable while the design can still be improved.

## Check what the result can travel to

**Experiment validity** concerns whether the study supports the inference being made. Internal validity asks whether the observed comparison credibly estimates the intended causal effect within the study. External validity asks how far that inference can apply to other people, conditions or periods.

Cedar should check whether people left the study differently across groups, whether missing outcomes conceal failures and whether staff changed the treatment during the trial. It should also inspect whether a reminder affected appointments in the control group through shared dispatcher behaviour. These are threats to the comparison, not minor administrative details.

Check the mechanism as well as the overall comparison. If reminders were rarely delivered, an inconclusive outcome does not test the intended communication as strongly as it tests the actual delivery process. Conversely, high delivery does not prove that recipients read, understood or acted on the message. Operational evidence can explain why a design needs revision while leaving the causal effect uncertain. Preserve those different conclusions in the report.

Be specific about the alternative when carrying a result into a decision. A reminder can outperform an inconsistent existing routine while adding little to a carefully maintained one. If Cedar expands to companies with stronger existing contact, the benefit may differ. “The control group” is a label for an actual experience, not a universal state of doing nothing. Describing that experience lets a future reader assess whether the comparison resembles their own situation.

A well-conducted trial among enthusiastic companies with accurate contact records may establish something useful about that setting. Expansion to companies with different records, staffing or appointment patterns remains another judgement. Describe the trial population and support provided so that others can assess what is likely to transfer.

The effect can change over time. Novelty, staff learning and repeated exposure may influence behaviour. An early trial can justify further use with monitoring while leaving the durability of the benefit uncertain. Avoid converting “worked during this period under these conditions” into a permanent property of the feature.

Sometimes randomisation is infeasible or inappropriate. A **natural experiment** uses circumstances outside the researcher's assignment process that create a potentially informative difference in exposure. For example, an externally determined eligibility boundary might provide a useful comparison if people near either side are otherwise comparable. The word “natural” does not mean the comparison is automatically unconfounded.

Observational approaches can also compare changes over time between groups, exploit boundaries or adjust for measured differences. Each requires assumptions that deserve explicit examination. Official evaluation guidance describes experimental and quasi-experimental methods as distinct ways to address attribution, with conditions and limits.[^c26-n03] Choosing among them is specialist work when the causal conclusion is consequential.

If no credible effect estimate is currently possible, report what is known. Cedar can say no-shows declined after launch, describe the supporting operational evidence and identify unresolved alternatives. It can then choose proportionate monitoring or a stronger study. That is more useful than either declaring causal success or discarding every observation because certainty is unavailable.

## Make the counterfactual explicit in AI-assisted work

Give an AI assistant the decision, intervention, proposed comparison, eligible population, outcome definition and known rollout changes. Ask it to state the counterfactual in one sentence before suggesting a design. Then require it to identify how the proposed data could approximate that missing comparison and what assumptions would remain.

For Cedar, a useful critique would ask whether companies volunteered, whether contact records were cleaned during rollout, whether appointment mix changed and whether the same dispatcher influenced both groups. Check these suggestions against actual operational knowledge. An invented confounder can be a research question; it is not an established fact about the trial.

AI can help draft an analysis plan, review a table for inconsistent denominators or explain an analyst's result. Provide the actual definitions and approved data handling constraints. Independently verify calculations and ask a qualified analyst to review statistical choices. A polished explanation can still confuse association, assignment, receipt of treatment and causal effect.

If the assistant concludes that reminders “reduced no-shows” from a before-and-after chart, require a revision that separates the observation from the inference. Ask what evidence would support the stronger wording. Do not let a generated causal diagram or a familiar test name substitute for a defensible comparison.

For practice, audit a claim that a product change caused an improvement. Write what happened, the alternative condition and the population to which the claim applies. Identify three concrete explanations that could account for the observation without the claimed effect. For each, name evidence that would help assess it.

Then outline a stronger comparison, including its main outcome, assignment or selection process and most serious validity threat. State the conclusion the proposed evidence could support, and one conclusion it would still leave unjustified. For Cedar, testing an added message could inform expansion of that routine while leaving replacement of telephone calls unresolved.

The purpose of causal reasoning is to make action more accountable to evidence. A product manager can move forward under uncertainty while preserving the distinction between a promising sequence of events and an intervention whose contribution has been credibly assessed.

## Notes

[^c26-n01]: NIST/SEMATECH, *e-Handbook of Statistical Methods*, §5.3.3.1, completely randomised designs. Randomisation is described here with its finite-sample limitation.
[^c26-n02]: American Statistical Association (2016), six principles in its statement release, especially principles 1–3 and 5. The numerical reminder example is an author-created illustration and has no computed significance test.
[^c26-n03]: HM Treasury and Evaluation Task Force (2026), *Magenta Book*, Annex A, §A2. The chapter does not adopt the guidance's loose wording that randomisation ensures identical observed and unobserved characteristics in a realised sample.

## References

- NIST/SEMATECH. “Completely randomized designs.” *e-Handbook of Statistical Methods*, §5.3.3.1. [Reference](https://www.itl.nist.gov/div898/handbook/pri/section3/pri331.htm). Accessed 3 October 2026.
- American Statistical Association (2016). “American Statistical Association Releases Statement on Statistical Significance and P-Values.” 7 March. [Statement release](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf).
- HM Treasury and Evaluation Task Force (2026). “Magenta Book Annex A: analytical methods for use within an evaluation.” Updated 15 May 2026. [Guidance](https://www.gov.uk/government/publications/the-magenta-book/magenta-book-annex-a-analytical-methods-for-use-within-an-evaluation-html).
