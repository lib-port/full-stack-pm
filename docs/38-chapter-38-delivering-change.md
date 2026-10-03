# Chapter 38: Delivering Change

## Make the intended behaviour shared

“Change the appointment and notify everyone” sounds like an understandable requirement. Priya, Cedar's engineer, asks whether everyone includes the homeowner, the assigned technician and a connected office system. Leah, the plumbing company's dispatcher, asks whether notified means a message was sent or the people accepted the new arrangement. The sentence conceals decisions that implementation cannot safely make by guessing.

**Shared understanding** means that the people responsible for the change have a sufficiently consistent account of its purpose, behaviour, limits and consequences. It does not require every colleague to know every implementation detail. It requires them to recognise the same important situation and agree what the product should do.

A **requirement** communicates behaviour or a condition the change must satisfy. For Cedar, one requirement could say that a dispatcher can propose a new time while customer agreement remains pending. Another could state that saving the proposal must not display it as an agreed appointment. These statements distinguish the necessary behaviour from a particular screen layout or technical mechanism.

Explain the reason alongside the rule. If pending agreement is hidden, another employee may treat a proposal as a promise and dispatch a technician incorrectly. That consequence helps designers, engineers and testers assess an alternative implementation without losing the purpose.

NASA's systems-engineering guidance similarly emphasises requirements that can be verified and records of their rationale, assumptions and relationships to operations.[^c38-n01] Cedar can use those principles without copying an aerospace programme's documentation or approval process. The communication should be proportionate to the uncertainty and consequence.

Use examples to uncover disagreement. A homeowner accepts a proposed time after Leah has already offered another. A technician loses access during the change. A message fails after the appointment is saved. Ask what each person should see and which action remains valid. Concrete cases expose gaps more effectively than asking colleagues whether the specification looks complete.

State **constraints** and their sources. Customer information must remain within the appropriate company. Existing commitments may limit which appointments can move. A partner may support only certain operations. Some constraints are fixed for this decision; others can be changed through negotiation or additional work. Treating every preference as immovable makes the solution unnecessarily narrow, while ignoring a real boundary makes the plan infeasible.

Requirements are therefore an evolving shared account, not a substitute for conversation. Keep the authoritative version accessible and record consequential changes. Colleagues should not have to choose between a recent discussion, an old diagram and an AI-generated summary with no indication of which decision now applies.

## Divide the work without losing its purpose

**Decomposition** divides a large change into manageable pieces. The useful boundary is not always a screen or technical layer. Cedar could finish a polished calendar while having no reliable way to represent a pending agreement. The screen would be completed work, but the coordination capability would remain incomplete.

Describe the first useful increment through a task. For example, an authorised dispatcher can propose a change to an eligible appointment, see the unresolved agreement and identify the next action. The increment needs enough underlying data, permissions, interface and operational support to make that behaviour meaningful. It need not include every future communication channel or scheduling option.

Keep enabling work visible too. Establishing appointment version information may provide no immediate customer-facing feature, yet be necessary to distinguish a reply about an older proposal. Engineers should explain that dependency and the evidence needed to establish it. Product colleagues should assess how it changes sequence and scope rather than demanding that every task produce a visible button.

**Sequencing** determines the order in which work proceeds. Examine uncertain or difficult dependencies early enough that their answers can still change the plan. If the chosen design relies on a partner reporting the current appointment reliably, verify that behaviour before investing heavily in the final confirmation experience.

Some work can proceed independently. Content and interaction questions might be explored while engineers inspect the integration, provided everyone knows which states remain assumed. Other work must wait. Finalising a claim that an appointment is confirmed depends on knowing what the system can establish. Parallel activity saves time only when it does not bury unresolved dependencies.

**Scope** states which behaviour, people and situations the current change covers. Narrow scope can create a responsible first release when excluded situations remain clearly supported elsewhere. “Only appointments managed entirely in Cedar” might be coherent if the product can identify them accurately and customers understand the limit. “All appointments, except the difficult parts of confirmation” may remove the very purpose of the change.

Do not confuse cutting scope with silently lowering an essential standard. Fewer supported channels can be a deliberate boundary. Exposing customer records to the wrong company is not an acceptable simplification. Product, engineering and relevant specialists must distinguish optional breadth from conditions necessary for trustworthy use.

Review progress through demonstrated behaviour and resolved uncertainty as well as completed tasks. A growing number of finished items can conceal an untested assumption that threatens the whole change. Ask what the organisation can now do, what it has learned and what still prevents the intended first use.

## Respond to what implementation reveals

Halfway through delivery, Cedar's engineers connect the proposed flow to an existing office-system integration. A test exposes a problem: after Leah saves a changed appointment in Cedar, an older appointment record arriving from the connected system can replace the newer time. The new confirmation view would then describe a state that may not persist.

The dependency was previously understood as routine synchronisation. The investigation now reveals an unresolved question about which system may authoritatively change the appointment and how newer and older versions are distinguished. This is **technical discovery** with a product consequence: Cedar cannot make its intended promise merely by completing the remaining screens.

Priya should explain the sequence and known limits. Which records trigger the overwrite? Can the affected accounts be identified? Is the behaviour repeatable? What remains uncertain about the partner's capabilities? Maya needs this evidence to choose a response, not a reassuring statement that engineering has found “some integration complexity”.

Several responses are possible:

| Response | What it changes | Evidence needed before commitment |
| --- | --- | --- |
| Resolve the integration first | Delay the broader capability while establishing ownership and version handling | A feasible joint design, partner commitment and tests of conflicting updates |
| Narrow the first release | Include only workflows unaffected by the integration | Reliable eligibility detection and a useful remaining customer task |
| Use a temporary controlled procedure | Assign explicit reconciliation work for a limited setting | Manageable volume, trained owner, visible exceptions and checks against divergence |
| Change the proposed experience | Expose unresolved synchronisation and limit permitted actions | Users can understand the limitation and still perform valuable work safely |
| Pause or stop the change | Avoid further commitment until value or feasibility is clearer | Cost of delay or stopping compared with credible alternatives |

The table does not identify a universal best answer. A manual procedure that works for one supported company may fail at larger volume. A narrow release may exclude the customers who most need the capability. A partner redesign may be worthwhile, but its delivery date cannot be controlled by Cedar alone. Compare the actual commitments and operating consequences.

Do not hide the problem by suppressing an error message or instructing staff to ignore discrepancies. A design must communicate the state it can support. If a temporary route is chosen, assign an owner, an expiry or review condition, and a way to detect when its limits are exceeded.

The revised plan must reach people whose commitments depend on it. If sales has promised integrated customers the new capability, narrowing eligibility changes that promise. If support prepared guidance for every account, it must revise the instructions. Maya should identify those consequences promptly, explain the known problem and distinguish a revised estimate from a dependable commitment. Concealing uncertainty to protect the original date only moves the surprise to customers and colleagues.

A deadline still matters. Delaying can prolong existing coordination problems or miss a valuable opportunity. Compare that cost with the consequences of releasing under each available boundary. The choice may be a smaller useful change now and further work later, or a delay because no smaller change preserves the essential task. Neither follows automatically from the amount of implementation already completed. Remaining costs, obligations and attainable benefit should determine the next commitment.

This discovery also warrants learning about the delivery process. Could the dependency reasonably have been checked earlier? What information was missing, and how should future work find it? Ask without pretending every uncertainty can be eliminated in advance. The immediate responsibility is to revise the decision using what is now known.

## Agree acceptance and gather evidence

**Acceptance** is a judgement that the agreed conditions for the change have been met sufficiently for its intended use. It is not a ceremony that turns unresolved behaviour into correctness. The conditions should connect back to the problem, scope and known risks.

After the integration discovery, “appointment saves successfully” is an inadequate acceptance condition. Cedar needs to examine what happens when an older external update arrives, when the same event arrives twice and when agreement refers to an earlier proposal. The expected response must be settled with domain and engineering knowledge before a test can determine whether it occurs.

For a release limited to appointments managed entirely in Cedar, acceptance includes the boundary itself. An affected integrated appointment must not enter the new flow accidentally. The dispatcher needs an understandable explanation and an appropriate route to continue work. Customer support needs to recognise that boundary too. Scope is part of behaviour, not merely a paragraph in a project document.

**Testing** gathers evidence about specified behaviour under specified conditions. Engineers may check individual rules, interactions among components and the complete task. Designers and researchers may examine whether dispatchers understand the result. Security and accessibility specialists may need to assess consequential controls and interactions. These investigations answer related but different questions.

A passing check does not establish all future behaviour. It shows what happened in that check, given its data, environment and assertions. A simulated partner that always sends updates in order cannot demonstrate correct handling of delayed updates. Review the realism and limits of the evidence, especially where the dependency produced the original surprise.

Record failed checks and changed expectations accurately. If the team changes a requirement because a better understanding makes the original inappropriate, update its rationale and tests. If the implementation fails a still-valid requirement, changing the expected test result to match it would erase the problem. The difference should be visible to the people accepting the change.

Acceptance also includes operational preparation. Who investigates a mismatch? Can support identify the relevant appointment and explain what the user should do? Is there a way to stop further exposure if the boundary fails? Can staff reconcile work already affected? These questions apply the earlier reliability principles to this particular release.

Maya should understand and challenge the evidence without pretending to conduct a professional security assessment or certify the implementation herself. Engineers and other specialists need clear authority for their parts of readiness. When disagreement remains, record the issue, consequence and decision owner rather than smoothing it into a general statement that the release is ready.

## Release a change people can operate

**Deployment** installs a version of the software in its operating environment. **Release** makes a capability available to an intended group under defined conditions. They can occur together, but separating them can allow technical preparation before wider customer exposure. Neither alone establishes that customers adopt the changed way of working.

GDS deployment guidance stresses knowing which version is running, tracing its changes and checking important behaviour after deployment.[^c38-n02] The product implication is that a release should leave the organisation able to identify what changed, observe its effects and respond. Frequency by itself cannot provide that ability.

For Cedar's narrowed release, identify eligible accounts, the observation period and the person who can pause expansion. Monitor the boundary that justified narrowing: do integrated appointments remain outside the new flow? Examine unresolved agreements and support questions, not only whether the page loads. A successful technical check and a confusing customer experience can coexist.

**Feedback during delivery** should arrive while it can still affect decisions. A dispatcher reviewing a working increment may expose a missing handover action. Support may discover that the proposed explanation implies a guarantee Cedar cannot make. Engineering may identify a limitation in recovery. Keep those findings connected to their consequences and revise the appropriate behaviour, scope or communication.

Recovery needs more than reinstalling an earlier version. If customers have received messages or records have changed, those effects remain. Engineers should establish compatibility and restoration options; operations needs a plan for affected work and communication. A release should not be described as easily reversible solely because the code can be switched back.

Preserve a short **decision record**. For this case: the older integration can overwrite a newer time; broad release is deferred; the first release excludes affected appointments through a checked eligibility rule; Priya owns the technical check and Maya owns the revised customer scope; the decision will be revisited after the partner behaviour is resolved. This example records the reason, choice, responsibilities and trigger. It does not require a particular template.

A colleague joining later can then distinguish an intentional limit from an accidental omission. That knowledge prevents the next feature from quietly removing a boundary on which the release's acceptability depends.

## Use AI to clarify, not freeze, the specification

AI can help **explain technical discoveries**. Give it Priya's approved account of the update sequence and ask for an explanation of the product consequence, separating known behaviour from unresolved causes. Priya should verify that the simplified explanation preserves the important conditions. A smoother story is harmful if it turns a particular conflict into a claim that every integration is unreliable.

It can **generate test scenarios** for old updates, duplicate events, withdrawn permissions or interrupted confirmation. Require each scenario to state its preconditions and expected result. Engineers and domain colleagues must check those results and execute appropriate tests. A generated scenario is preparation, not evidence that the behaviour has been tested.

AI can **summarise decisions** from approved notes, retaining the chosen scope, rejected alternatives, unresolved questions and owners. Compare the summary with the source discussion before publishing it. In particular, check that “investigate whether we can narrow eligibility” has not become “eligibility narrowing approved”. The difference changes what people are authorised to build.

It can **compare scope alternatives**, organising the five responses around customer value, dependency, recurring work and risk. Ask it to preserve unknown costs and partner dates. It can also **draft requirements**, turning agreed situations into clearer statements and flagging ambiguity.

AI-generated requirements remain hypotheses about necessary behaviour until validated against the intended task, actual constraints and responsible people's decisions. A model might add automatic confirmation because it makes the flow look complete, even though Cedar lacks evidence of customer agreement. Trace each consequential requirement to its reason and examine what the generated text assumes.

For practice, rewrite “change the appointment and notify everyone” after learning about the overwrite. Define one supported situation, one excluded situation, the visible state and the evidence needed for acceptance. Compare two possible responses to the dependency, naming who would decide and what finding would change the choice.

The exercise succeeds when another colleague can understand both the behaviour being delivered and why its boundaries exist. Delivery continues product discovery because implementing an idea exposes information about its feasibility, meaning and consequences. Good coordination allows that learning to improve the commitment while the organisation still has choices.

## Notes

[^c38-n01]: NASA, *Systems Engineering Handbook*, §4.2.1.2.3 on rationale and assumptions, §4.2.1.2.4 on requirement validation and verifiability, and §4.2.1.2.7 on decision records.
[^c38-n02]: Government Digital Service, “Deploying software regularly”, “Use auditable deployments” and “Using smoke tests after you deploy”. Source practices inform the questions here; no universal release cadence is prescribed.

## References

- NASA. [Systems Engineering Handbook: 4.0 System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/). Section 4.2.
- Government Digital Service. [Deploying software regularly](https://www.gov.uk/service-manual/technology/deploying-software-regularly). Updated 23 October 2024.
