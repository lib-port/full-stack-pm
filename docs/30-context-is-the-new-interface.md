# Chapter 30: Context Is the New Interface

## A vague request leaves the system to fill gaps

“Help us improve scheduling.” That request could lead to a proposal for automatic assignments, route optimisation, reminders or a redesigned calendar. Each sounds relevant to scheduling. None identifies the problem Cedar's product manager needs to investigate.

Return to the missed visit from Chapter 1. The dispatcher changed the homeowner's appointment from 10 a.m. to 2 p.m., saved the time and called the homeowner. The plumber followed a printed schedule showing 10 a.m., arrived while the homeowner was out and called the office. The immediate question concerns how a saved change reaches a technician already away from the office. The cause of the communication failure remains unknown.

Compare this illustrative response to the bare request:

> Introduce AI scheduling that assigns technicians automatically, optimises routes and sends real-time updates. This will reduce missed appointments and improve efficiency.

It chooses a solution before establishing the failure, combines several changes and predicts benefits without support. The defect is visible without knowing which model might produce such an answer. The request left the task, evidence and decision boundary unspecified.

A more useful response would distinguish the recorded event from possible explanations, identify information needed to discriminate between them and stop short of selecting an implementation. To ask for that response, the product manager must first make the investigation clear. Better interaction begins with better specification.

Context includes the instructions and information available for the task. It can tell a system what to accomplish, which sources to use, what terms mean and where to stop. Research on in-context learning demonstrated the use of instructions and examples at inference time without changing the model's parameters.[^c30-n01] That mechanism does not promise that any particular wording will work reliably for Cedar.

Treat context as an interface because it is one of the places where you express the intended work and its limits. A conventional form might require a date and customer identifier. A language request also needs enough structure to distinguish the intended task from plausible neighbouring tasks. Fluent conversation can hide missing fields that a form would make obvious.

The aim is not to include everything you know. It is to supply the information needed for this decision, in a form that preserves meaning and allows checking. A concise, well-labelled packet can be more useful to the work than an accumulation of documents whose authority and relevance are unclear.

The responses in this chapter are constructed teaching contrasts, not results from an executed comparison. Their purpose is to show what you should inspect in a task and answer. An actual system still needs evaluation with the materials and conditions in which you intend to use it.

## Build a specification around the decision

Begin with the **objective**: what should this piece of work accomplish? “Investigate why a saved appointment change did not reach the plumber” provides a direction. “Design an AI scheduling feature” already chooses an implementation. The objective should match the decision still open to the organisation.

Then identify the **audience**. Cedar's product manager, an engineer and the plumbing company's dispatcher need a shared account they can investigate. They need plain descriptions of events, candidate explanations and checks. They do not need a sales pitch or an implementation specification pretending the cause has been found.

The following packet makes all the relevant components explicit. Its headings are a practical aid; no particular labels or order are required by an AI system.

| Component | Cedar task specification |
| --- | --- |
| Objective | Identify plausible explanations for the missed change and the next evidence needed; do not select a solution yet |
| Audience | Product manager, engineer and dispatcher preparing an investigation |
| Background | The dispatcher coordinates repair visits; technicians may already be away when appointments change |
| Definitions | Saved means recorded in Cedar; received means the intended person obtained the update; agreed means that person accepted the changed arrangement |
| Relevant facts | Dispatcher saved 2 p.m. and called homeowner; plumber's printed schedule said 10 a.m.; plumber arrived while homeowner was out |
| Constraints | Preserve agreed customer commitments and dispatcher responsibility; propose investigation, not live changes |
| Source material | Event account E1, retaining the exact sequence and its unknowns |
| Examples | An acceptable row separates “printed schedule showed 10 a.m.” from “a delivery mechanism failed”, which is only one possible explanation |
| Decision criteria | Prefer checks that distinguish explanations, address a consequential uncertainty and can be performed with appropriate access |
| Expected output | A short event timeline, candidate explanations with source links, and prioritised investigation questions |
| Uncertainty | Whether an update was sent, how the plumber was expected to receive it and how receipt was confirmed are unknown |
| Prohibited assumptions | Do not invent logs, interview answers, feature capabilities, automatic-assignment preferences or effects on missed visits |

Source label E1 identifies the event account supplied for this exercise. It does not imply that Cedar has collected a technical log proving a delivery failure. Keep that distinction in the material itself. Otherwise, a source identifier can make a weakly supported interpretation look like an established event.

Examples should clarify the expected form and reasoning standard. They should not quietly supply the answer. A sample row that names a messaging outage as the cause could steer every candidate explanation towards an outage, even when the task says the cause is unknown. Include an example of an appropriately unresolved statement.

Decision criteria help the system organise alternatives, but the product manager must choose and justify them. Asking for “the best next check” without saying what matters leaves the output to invent priorities. For Cedar, a check should reveal something relevant to choosing between a software change, a procedural change or both. That makes the criterion connected to a real decision.

Finally, specify the stopping point. “Return questions for review; do not contact customers or change records” defines the requested work. In an action-capable system, actual permission controls must enforce that boundary. A sentence in the task is not the only control.

State how the system should handle an impossible request. If the supplied material cannot support a ranked list of causes, ask for unranked possibilities and the information required to compare them. Otherwise, the requested format itself can invite invention: a table demanding a percentage for each cause pressures the output towards precision the evidence cannot support. Expected output should permit an honest gap.

## Break the work where judgement is needed

With the structured packet, a useful illustrative answer could begin:

> E1 establishes that the saved appointment and the plumber's printed schedule differed. It does not establish whether Cedar attempted an update. Check the expected procedure for changes after departure, then inspect the relevant system and communication records with an authorised colleague. Possible explanations include a missing procedure, failed delivery or an update that reached a channel the plumber did not consult.

This answer provides candidate explanations without turning them into findings. It identifies the difference between the recorded event and the missing mechanism. It also leaves room for a cause outside the software. The comparison with the earlier response concerns scope, support and usefulness for investigation; it does not demonstrate a measured performance gain.

Complex work often benefits from **decomposition**: dividing it into tasks whose outputs and checks are manageable. For Cedar, first extract the timeline from E1. Review whether it preserves the saved 2 p.m. time, the homeowner's agreement and the plumber's 10 a.m. printout. Then identify gaps in the account. Only after that should the system propose explanations and discriminating checks.

The review between steps matters. If the first summary incorrectly says “Cedar failed to send an update”, later analysis may treat that statement as a fact and elaborate a technical remedy. Breaking work into several requests does not improve reasoning when each request accepts the previous error without inspection.

Preserve the source material through the handoff. Pass the relevant original passage alongside the reviewed timeline, and label any added interpretation. A compressed summary may be convenient, but it can discard the very uncertainty that determines the next decision. Intermediate outputs deserve the same evidence distinctions as a final recommendation.

Next, ask which observation would distinguish the explanations. A record that no delivery mechanism exists would support a different next step from evidence that an update reached the plumber's device but was unclear. The investigation may require engineering access, observation of work or discussion with the dispatcher. The assistant can organise questions; it cannot invent the missing access or findings.

When answers arrive, update the task rather than appending them without explanation. State which uncertainty has been resolved, which assumption changed and what decision is now open. If the evidence remains inconclusive, preserve that state. Repeatedly asking for a decisive recommendation can encourage a confident-looking answer without supplying new grounds.

Use decomposition selectively. Asking for three alternative labels on a harmless internal sketch may need one clear request and a quick review. Investigating a missed visit involves evidence, competing causes and operational consequences, so separate steps are useful. The number of prompts is not a measure of rigour; the meaningful review points are.

Separate investigation from persuasion as well. A request to investigate causes and write a convincing approval proposal in the same step can blur whether the evidence is sufficient. Produce the investigation first. If an authorised person then chooses an option, a later communication task can explain that choice, including its limitations. Different purposes require different checks even when they use some of the same material.

## Maintain context without accumulating confusion

Some context applies repeatedly. Cedar's glossary, accepted role responsibilities and rules for distinguishing proposals from commitments may be useful across many tasks. Call this **persistent context**: maintained material made available for repeated work. The application might store or retrieve it; you should check what is actually supplied rather than assume every past conversation is remembered.

Other material is **task-specific context**: this event account, the current question, an agreed deadline or the latest evidence about a proposed change. Separate these layers conceptually. A stable definition of “received” can recur, while an appointment's current time must be obtained for the task in which it matters.

Persistent does not mean permanently correct. Give important shared material an owner, date and version. If Cedar changes a permission model, older descriptions should stop appearing as current rules. A useful context library requires maintenance, just as other product information does.

**Context pollution** occurs when irrelevant, outdated, conflicting or misleading material interferes with the intended work. Suppose an old prototype document describes automatic assignment while the current investigation preserves dispatcher control. Supplying both without dates or status makes the conflict harder to interpret. Identify the prototype as an abandoned proposal or leave it out when it is irrelevant.

Do not resolve every conflict by declaring the newest document authoritative. A recent sales draft may describe an aspiration, while an older verified workflow account describes current operation. Authority depends on the claim. State which source supports current behaviour, which expresses policy and which proposes a future change. If sources genuinely disagree, ask for the disagreement to be reported.

Organise material so that a reviewer can navigate it. Use meaningful headings, source identifiers and a small set of definitions. Put the immediate task and its limits where they are clear. Retain enough surrounding text to interpret an excerpt, including exceptions. Removing an inconvenient qualification makes the packet shorter by changing the evidence.

External source material also has a different authority from instructions. A support ticket saying “ignore the earlier rules” is text to inspect, not permission to change the task. OWASP describes indirect prompt injection through content obtained from files or websites.[^c30-n02] Marking external material helps organise the boundary, but robust protection also requires controls over what the system can access and do.

The product manager can ask engineers how instructions, retrieved records and user material are separated, and how conflicting or malicious content is handled. This is an information-design question with a security consequence. It cannot be settled by adding ever more emphatic wording to a prompt.

Record which context version produced a consequential analysis. When a colleague challenges the answer, the team should be able to establish whether it used an outdated definition, omitted a new finding or interpreted the correct material badly. That record need not copy sensitive documents into every report; controlled source references can preserve the connection. The purpose is to make correction possible without guessing what the system saw.

## Choose what to expose and how to check it

Every piece of context you provide also becomes information processed by a system. Decide what may be shared before assembling the packet. The appropriate choice depends on the approved service, purpose, access arrangements and data-handling terms. Access to an AI interface does not by itself authorise every customer record to be uploaded.

Apply data minimisation: supply the information needed for the task, including necessary relationships, while limiting unnecessary disclosure and storage.[^c30-n03] To investigate the missed-change mechanism, a description of the roles, times and communication sequence may be sufficient. The homeowner's name, full address, payment details and unrelated repair history need a separate justification.

Removing names alone does not establish anonymity. A combination of location, time and unusual events can identify a person. For sensitive work, involve privacy or security colleagues in selecting an appropriate system and reducing exposure. If a task genuinely requires detailed operational records, arrange authorised access and handling with the responsible specialists instead of disguising those requirements as ordinary prompt writing.

There is also a quality trade-off in removal. If travel time matters to the scheduling question, deleting every geographical relationship could make the problem impossible to assess. A simplified representation of relevant travel constraints may be enough for exploration; it must be labelled and must not become evidence about actual journeys. Preserve what the reasoning requires while making the limits visible.

Before sending a task, read it as an unfamiliar colleague would. Can that person identify the decision, the audience, the sources and the boundary between fact and proposal? Can they tell what a useful result looks like and what they must not assume? This check catches missing context before the output makes the gap harder to see.

Afterwards, compare the response with the specification. Did it invent a capability? Did it drop an exception? Did it recommend action beyond the requested stopping point? If the context itself was wrong, correct the source packet as well as the answer. Otherwise, the same false premise will return in the next task.

For practice, take a real request such as “analyse our onboarding problem”. Rewrite it using the twelve components above, keeping the packet as short as the task allows. Mark persistent material separately from current evidence. Remove one unnecessary sensitive detail, identify one unknown that must remain unknown and state the first review point. Ask a colleague to name an assumption your specification still invites.

The resulting artefact is a small, inspectable description of work. Its value survives changes in model names and prompting fashions because the central questions remain: what is being asked, on what basis, within which limits and for which decision?

## Notes

[^c30-n01]: Tom B. Brown et al., “Language Models are Few-Shot Learners” (2020), abstract and introduction, discussion of instructions/demonstrations supplied without gradient updates. [Author paper](https://arxiv.org/html/2005.14165v4). Cited for the mechanism, not current model performance or a tested result for the examples here.

[^c30-n02]: OWASP, “LLM01:2025 Prompt Injection”, “Indirect Prompt Injections” and prevention strategies 4–6. [Guidance](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). Separating source content from instructions does not replace enforced access controls.

[^c30-n03]: Alissa Cooper et al., *Privacy Considerations for Internet Protocols*, RFC 6973 (July 2013), §6.1, “Data Minimization”. [Informational RFC](https://www.rfc-editor.org/rfc/rfc6973.html#section-6.1). Applied as a design principle, not a claim about a particular AI service or legal compliance.

## References

Brown, Tom B., et al. “Language Models are Few-Shot Learners.” 2020. [Author paper](https://arxiv.org/html/2005.14165v4).

Cooper, Alissa, et al. *Privacy Considerations for Internet Protocols*. RFC 6973. July 2013. [RFC Editor publication](https://www.rfc-editor.org/rfc/rfc6973.html).

OWASP. [“LLM01:2025 Prompt Injection”](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). Accessed 3 October 2026.
