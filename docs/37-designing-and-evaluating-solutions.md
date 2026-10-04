# Chapter 37: Designing and Evaluating Solutions

## Hold the problem steady while opening the solution

One Cedar proposal gives dispatchers a clearer view of changed appointments and outstanding replies. Another proposes automatically rearranging the day when work overruns. Both respond to scheduling disruption, but they change different parts of the work. Choosing between them requires more than comparing how impressive their demonstrations look.

Start with the problem the design should address. Leah, a plumbing company's dispatcher, needs to recover a workable schedule when a visit changes, while preserving customer commitments and technician constraints. She needs to know which information is current, what alternatives are feasible and what coordination remains unfinished. The design must help her reach that state, rather than merely produce another schedule.

Next expose the **assumptions** behind each proposal. A visibility improvement assumes that missing or unclear information causes consequential difficulty and that people can act on a clearer view. Automatic rearrangement assumes that the system knows enough about skills, travel, promises and urgency to propose or make acceptable changes. Both also assume that the required information is available when needed.

Some assumptions concern value: will the intervention reduce important work or prevent a harmful failure? Others concern behaviour, technical feasibility, cost, safety or adoption. Keep them distinct. A dispatcher understanding a prototype does not establish that its data can be kept current. A fast scheduling calculation does not establish that customers will accept the resulting appointments.

Describe the desired outcome and important limits before comparing designs. Cedar wants fewer avoidable coordination failures without removing necessary dispatcher control or transferring unreasonable work to service customers. An intervention that reduces screen time while increasing telephone repair work would require a different assessment from one that reduces both.

The problem can change as the team learns, but record that change. If research shows that the main difficulty is incomplete job-duration information rather than communication, a better status view may be insufficient. Continuing to refine its colours would not answer the newly understood problem.

This gives the design work a stable reference without freezing it. Product manager Maya can ask every proposal: which part of the problem would this change, what must be true for it to help, and what evidence would make us choose another approach? Those questions make alternatives comparable while leaving room for a surprising answer.

## Generate different ways to change the work

**Divergence** means deliberately exploring different possibilities. **Convergence** means narrowing them using criteria, constraints and evidence. The Design Council's account of design encourages different answers to a defined problem, followed by small-scale testing, rejection and improvement.[^c37-n01] Cedar can use that reasoning without treating design as a rigid sequence of named stages.

Begin with six different mechanisms:

- **Better visibility:** show the current plan, recent changes and unresolved communication so dispatchers can coordinate with less searching.
- **Conflict alerts:** point out a specific incompatibility, such as an assignment that cannot meet a known time or skill constraint.
- **Optimisation:** search for a schedule that improves a defined objective while respecting represented constraints.
- **Customer self-service:** allow service customers to choose or request an acceptable change within clear limits.
- **AI recommendations:** produce suggested adjustments or explanations for a dispatcher to assess.
- **Process change:** alter who confirms changes, how responsibilities are handed over or when capacity is reserved for urgent work.

These approaches are not interchangeable. Optimisation can use conventional algorithms and does not necessarily involve a generative model. An AI recommendation is not automatically an optimal schedule, and recommending a change does not authorise executing it. A new procedure may work without new software, although software can help people follow it.

Keep the differences visible during discussion. Several screen layouts of the same automated proposal are variations, but they do not represent the breadth of this solution space. Include a simpler intervention and an intervention outside the interface. Otherwise, the first idea can become the assumed answer merely because it receives the most attention.

Divergence should still serve the problem. Asking for hundreds of unrelated ideas can produce more sorting work without revealing a useful alternative. Seek mechanisms that change a plausible cause or constraint. A shared status view addresses uncertainty about state; reserved capacity addresses limited room to absorb disruption. Their usefulness depends on which difficulty the evidence supports.

Some options can work together. Visibility might support a revised handover procedure. Conflict alerts might help people inspect optimisation results. Combining options, however, also combines costs, assumptions and operating responsibilities. Do not transform the list into a promise to build everything.

Set initial criteria together with the people who understand the work. Can the approach preserve customer commitments? Can dispatchers see and correct relevant limitations? What information does it need? What effort shifts to technicians, customers or support? These questions help narrow the candidates before expensive implementation while keeping the reasons for rejection inspectable.

## Prototype the assumption and inspect feasibility

A **prototype** represents enough of a proposed design to investigate a question. For visibility, a sequence of screens might show a changed appointment, a pending response and the next action. For customer self-service, the critical representation might be a homeowner choosing from permitted windows and discovering that none works. For a process change, it might be a rehearsal of a dispatcher handing unresolved work to a colleague.

Match the representation to the uncertainty. A sketch can reveal a missing decision. An interactive flow can expose a misunderstanding about state. Testing whether a live integration supplies timely information needs a technical investigation. A polished clickable screen cannot answer that engineering question simply because it appears to work.

GDS's prototyping guidance describes different levels of representation and distinguishes prototype code from the standards required for a production service.[^c37-n02] Record what is simulated. If a researcher supplies perfect data and instant replies, participants' performance does not demonstrate that the real system can produce either.

Give participants a believable task with a consequential exception. Leah needs to move a repair after another visit overruns. The homeowner has a limited arrival window, and the proposed replacement technician lacks a required skill. Watch how she interprets the options, what she checks and what she believes has been agreed. Asking whether she likes the design would miss important differences in her understanding.

In parallel, Priya, Cedar's engineer, investigates **feasibility**. Where are skills recorded? What does an empty calendar slot establish? Which system owns the current appointment? Can a reply be matched to the correct version of a changed visit? Are the necessary permissions and failure states understood? The questions should follow the candidate's mechanism rather than a generic technical checklist.

A feasibility check can narrow the design. If trustworthy customer agreement cannot be obtained automatically, the prototype should not label a proposed time confirmed. It could preserve a pending state and a manual contact route. That changes usability, operating effort and attainable value. Engineering contributes to design rather than only estimating a finished proposal.

The GDS account of testing risky assumptions includes integration feasibility as a question to investigate early.[^c37-n03] Cedar need not settle every implementation detail at this point. It needs enough evidence about the assumptions that could invalidate the approach or substantially change its cost.

Include accessibility and real operating conditions in the investigation. A technician may read the result on a phone while working outside. A homeowner may need a telephone route. Researchers, designers and engineers should decide which conditions the prototype can examine and which need another method. An untested condition remains open; it should not disappear from the assessment because the prototype cannot represent it.

## Compare six candidates across the whole product

**Value** concerns an improvement that matters to particular people relative to an alternative, alongside costs and harms. Evaluate each candidate through user experience, economics, engineering, operations, adoption and evidence. The following comparison identifies questions to investigate, rather than asserting that one approach has already won.

**Better visibility.** For the dispatcher, a clear status can reduce searching, but more information can also increase visual burden. Economically, the potential saving is coordination effort, while development and continuing data-quality work consume resources. Engineering must provide meaningful, sufficiently current states. Operations must assign responsibility for unresolved items. Adoption requires staff to consult the shared view rather than maintain conflicting private lists. Evidence should show whether people interpret states correctly and whether checking work actually falls; a screen preference alone is insufficient.

**Conflict alerts.** The experience depends on warnings being understandable, timely and relevant to the decision. Economic benefit depends on avoiding consequential conflicts without creating excessive review work. Engineering needs valid rules and suitable input data. Operations needs an override route and ownership of disputed rules. Adoption may weaken if staff repeatedly encounter warnings they cannot act on. Evidence should examine both missed conflicts and unnecessary alerts, including what dispatchers do after seeing them. The number of alerts generated is not the number of failures prevented.

**Optimisation.** A dispatcher needs to understand enough about a proposed plan to assess important trade-offs. Potential travel or coordination gains must justify computing, implementation and maintenance costs. Engineering must represent the objective and constraints adequately; a result is optimal only relative to the specified model and search conditions. Operations needs a response when reality changes or no acceptable plan exists. Adoption depends on fitting the decision into daily work. Evidence should compare feasible plans under realistic promises and measure relevant consequences, not merely show a lower distance in a simplified dataset.

**Customer self-service.** Homeowners may gain control and avoid waiting for an office reply, while some may find the channel difficult or unsuitable. Economics includes office work potentially avoided and the cost of assisted alternatives. Engineering must expose genuinely available choices and handle competing bookings. Operations needs to manage requests outside the permitted choices. Adoption depends on access, trust and understanding among people who may rarely use the service. Evidence should follow completion, failed attempts and downstream coordination, including people who choose telephone help. A high completion rate among successful online entrants omits those excluded earlier.

**AI recommendations.** Suggested alternatives may help dispatchers inspect options, but lengthy explanations or plausible mistakes can increase assessment effort. Economics includes generation, evaluation and human review costs. Engineering needs appropriate context, permission boundaries and a reliable route for validating constraints. Operations needs accountability for rejected, incomplete or harmful suggestions. Adoption depends on calibrated reliance rather than automatic acceptance or blanket rejection. Evidence should assess recommendation quality and actual dispatcher decisions on realistic cases, including missing information. Fluent reasoning is not proof that a proposed visit is workable.

**Process change.** A clear confirmation owner or structured handover can reduce uncertainty, while extra steps may burden busy staff. Economics includes training and recurring human effort as well as possible avoided failures. Engineering may only need modest support, but existing information limits still matter. Operations must make the procedure feasible across shifts and absences. Adoption requires managers and staff to use it consistently. Evidence should observe the procedure under pressure and examine whether responsibility remains clear. A written policy or completed training session does not show that daily practice changed.

No single measure captures this comparison. A cheaper option can require more customer effort; a more powerful one can depend on information Cedar cannot obtain. Some requirements are firm constraints rather than preferences to average away. An unacceptable disclosure risk does not become acceptable because a design scores highly on convenience.

## Use evidence to revise the choice

Convergence should produce a justified next commitment. Cedar might initially combine a clearer status view with an explicit confirmation procedure, while keeping an optimisation proposal for separate investigation. That is a conditional design direction: it follows if coordination uncertainty is the relevant problem and the combined approach proves usable and operationally feasible.

Consider a prototype session in which Leah sees a delivery symbol beside the changed appointment and assumes the homeowner has agreed. The prototype only represents delivery of a message. The observed misunderstanding challenges the design's state communication. It does not establish that the underlying delivery service is unreliable or that every dispatcher will make the same mistake.

The designer replaces the ambiguous symbol with distinct information about the proposed appointment, delivery and outstanding agreement. The flow then shows the action Leah needs to take. Cedar should test the revised interpretation, including a later reply about an earlier proposal. This is **iteration**: evidence changes the design, and the changed design creates a new question to investigate.

A cosmetic revision would be insufficient if the real issue were that nobody had authority to confirm the change. In that case, Cedar must revise the operating arrangement or problem definition. Iteration can alter a process, an assumption or the selected mechanism, not only the interface.

Evaluate **risk** alongside the expected benefit. What happens if the information is stale, the recommendation violates a commitment, the customer cannot respond or the dispatcher overrides a warning? Decide which consequences need prevention, which need detection and recovery, and which make a candidate unsuitable. Involve security, accessibility or other specialists where the consequences exceed the team's competence.

Choose evidence suited to the next stage. A usability session can support a conclusion about observed understanding. A technical test can support a claim about a particular integration under stated conditions. A carefully designed operational trial can investigate actual workflow consequences. None should be represented as answering questions it did not examine.

Also compare against the current arrangement. A new flow that performs well in isolation may still add work to a process already functioning effectively. Record what participants currently do and what help the prototype session supplied. The comparison must represent a credible alternative, not an artificially weakened version of existing practice.

The decision record should state the chosen candidate, reasons, rejected alternatives, remaining assumptions and next evidence. It should identify what would lead Cedar to revise or stop. This preserves the reasoning when later colleagues see only the design and assume that all other possibilities were ruled out permanently.

## Use AI to improve comparison

AI can generate alternatives and critiques quickly, making it useful for opening a discussion and challenging a familiar design. Supply the actual problem, actors, evidence, constraints and existing proposals. Ask for different mechanisms rather than a larger number of cosmetic variants.

A useful request could be: “Compare these six responses to changed appointments. For each, identify the behaviour it changes, its most consequential unsupported assumption and an observation that could challenge it. Include customer effort, operating responsibility and failure recovery. Do not invent user quotations or claim that the options have been tested.”

Review the output for omitted people and duplicated ideas. An assistant may repeatedly suggest notifications while overlooking how responsibility transfers between dispatchers. It may label a manual procedure inefficient without considering whether the procedure resolves ambiguous exceptions well. Bring the critique back to actual work and evidence.

AI can also propose prototype tasks, failure cases and counterarguments. Check that tasks do not tell participants which controls to press, that failures are technically plausible, and that counterarguments address the proposed design rather than an exaggerated version. Designers and engineers can help turn a broad concern into a question a prototype or test can answer.

Idea volume is not evidence quality. Ten generated arguments for self-service are not ten observed customers who can use it. A simulated dispatcher reaction may reveal an assumption to investigate, but cannot show whether a real dispatcher understands the flow. Keep generated material visibly separate from research and test results throughout the comparison.

Try an exercise with the visibility-and-process combination and the AI-recommendation option. For each, name one important user benefit, one recurring cost, one necessary technical condition, one operating owner and one adoption obstacle. Then specify the evidence needed before expanding beyond a limited trial. State one finding that would reverse your preference.

A sound answer can favour either candidate under different conditions. What matters is that the choice reflects several objectives and a credible account of the work. Solution design becomes product judgement when the organisation can explain both why it selected an approach and what it still needs to learn about making that approach useful.

## Notes

[^c37-n01]: Design Council, “The Double Diamond”, Develop, Deliver and discussion of returning to earlier understanding.
[^c37-n02]: Government Digital Service, “Making prototypes”, Types of prototype and Using code prototypes, including production limitations.
[^c37-n03]: Government Digital Service, “How the alpha phase works”, Focus on testing your riskiest assumptions. The underlying reasoning is applied without requiring a named delivery phase.

## References

- Design Council. [The Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/).
- Government Digital Service. [Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes). 18 October 2016.
- Government Digital Service. [How the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works).
