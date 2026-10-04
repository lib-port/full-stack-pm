# Chapter 8: Problems, Needs, Jobs, and Context

## What is hidden inside a request

“Dispatchers need automatic scheduling.” The sentence appears to describe a need, but it has already selected an intervention. If Cedar's product manager accepts it unchanged, the remaining discussion concerns how to automate. Questions about what dispatchers are trying to accomplish, why the present arrangement is difficult and which decisions require their knowledge become secondary.

A better investigation separates the event prompting the request from its proposed remedy. A dispatcher may spend time checking technician availability because information is scattered. Another may have all the information but need to negotiate a new appointment with a customer. Automatic assignment could affect these situations differently. Their shared label, “scheduling problem”, does not establish a shared cause or solution.

Product work uses several overlapping terms to describe such situations. Different disciplines use these words differently. Agreeing what distinction you mean is more useful than correcting every colleague's vocabulary. The following working meanings help separate claims that otherwise become mixed together.

| Term | Useful distinction | Scheduling example |
| --- | --- | --- |
| Symptom | An observable sign that prompts concern | The dispatcher repeatedly calls technicians while revising the day. |
| Problem | A consequential gap between the present situation and one people seek | Resolving a conflict takes so much coordination that other customers wait for answers. |
| Need | A capability or condition required to make useful progress | The dispatcher needs dependable information about feasible assignments. |
| Goal | What a person is trying to achieve | Restore a workable plan after a repair overruns. |
| Task | A particular action undertaken towards a goal | Check whether another technician has the required skill. |
| Job | The broader progress or purpose that makes several tasks worthwhile | Keep the day's service commitments workable as circumstances change. |
| Pain point | A specific difficulty or frustration in the experience | Re-entering an agreed time in several places. |
| Constraint | A condition limiting feasible or acceptable choices | The customer is available only during the agreed window. |
| Desired outcome | The improvement sought in behaviour or circumstances | Resolve conflicts promptly while keeping commitments visible and under control. |
| Solution | An intervention proposed to change the situation | A conflict alert, shared status view or assignment recommendation. |

These distinctions are not ten boxes that every document must contain. Use them when they prevent confusion. A pain point can be real without being the most consequential problem. A goal can be reasonable while the proposed solution fails to achieve it. A task can disappear after redesign without eliminating the broader job the person needs done.

For example, calling a technician is a task. Knowing whether the technician can accept a changed assignment is the need that may explain the call. Eliminating calls is not automatically an improvement if the replacement leaves availability uncertain. The desired outcome concerns dependable coordination, alongside the time and effort required, rather than simply reducing the count of a visible activity.

The Government Digital Service's guidance on user needs recommends grounding them in research and focusing on the user's problem rather than a possible solution.[^c08-n01] That principle does not forbid proposing solutions early. It asks you to keep a proposal distinguishable from the evidence and reasoning that might justify it.

## Context gives the need its meaning

“Resolve a scheduling conflict” means different things when a customer can accept any afternoon slot and when an urgent repair requires a particular technician immediately. The actor's knowledge, authority, available time and consequences all affect what assistance is useful. A product manager who strips away those details can produce an elegant statement that guides almost no decision.

Cedar's dispatcher investigation reveals that people need to inspect commitments and retain control over final assignments. A more useful frame is:

> Dispatchers need to resolve frequent scheduling conflicts quickly while preserving control over customer, technician, travel, skill, and urgency constraints.

Each part does work. “Dispatchers” names the people making the decision. “Resolve” identifies progress rather than a screen action. “Quickly” identifies an important desired improvement, though it still requires an operational meaning. “Preserving control” states a requirement emerging from the work. The five constraint categories prevent speed from becoming the only criterion.

The statement should lead to questions, not claim completion. Which conflicts recur? What makes an assignment acceptable? When does the dispatcher need to override a suggestion? Does control mean choosing every assignment, reviewing exceptions, or being able to recover from an unwanted change? These are different requirements. Ask for events in which the distinction matters.

Consider two local situations. In the first, a routine visit can move within a window already agreed with the customer. The dispatcher needs to identify a suitable alternative and communicate the change. In the second, the proposed move breaks a specific promise made after an earlier cancellation. The dispatcher needs the promise and its history before deciding whether to move the visit at all. The same nominal task requires different information.

Constraints also deserve examination. A technician's qualification may be essential to the work. A rule that changes require a manager's approval may be an organisational choice. A travel limit may be a planning assumption rather than a physical impossibility. Record the constraint's source and who can change it. Otherwise, the product may preserve an unnecessary restriction or ignore a necessary one.

Context extends beyond the person operating the screen. A homeowner may need enough notice to arrange access; a technician may need to know whether travel has already begun; the accounts team may need to know whether the revised job changes a charge. A useful frame selects the context relevant to the decision without pretending that only the dispatcher's clicks determine success.

Make the desired outcome concrete enough to assess. “Quickly” could refer to the dispatcher finding an option, obtaining agreement or completing the whole change. A design that shortens the first step while extending the customer call may not improve the result that matters. Identify the beginning and end of the work you want to improve and the consequences you must preserve. For Cedar, a possible assessment follows the period from noticing a conflict to establishing an agreed, communicated arrangement, while also examining broken commitments and additional work. That does not yet specify a numerical target or claim that the software caused an improvement. It establishes what the product manager means by success and which evidence would be relevant.

Also ask who gets to define success. An owner may favour fewer paid coordination hours; a dispatcher may favour confidence that the day is workable; a homeowner may favour keeping the promised visit. These interests can align, but the frame should expose a conflict when they do not. Writing “improve scheduling efficiency” would conceal the choice about whose time counts and which promise can be moved. A useful frame brings that choice into the discussion before an implementation makes it implicitly.

## Break the problem into parts you can investigate

A broad problem is difficult to investigate because several failures can produce the same symptom. Decomposition separates parts while preserving their relationships. For Cedar, examine how the dispatcher identifies a conflict, determines feasible alternatives, agrees a change, communicates it and confirms that the right people are working from the new arrangement.

At each step, ask what information is required and what prevents progress. A dispatcher may not see an overrun early enough to act. They may see it promptly but lack current availability. They may find a suitable technician but be unable to reach the customer. They may agree a change while the technician continues to follow an earlier assignment. Each obstruction suggests a different investigation.

Avoid decomposing only by screens or departments. “Improve scheduling screen”, “improve notifications” and “improve reporting” are product areas, not explanations of how a conflict remains unresolved. A step-based account can reveal a gap between areas that individually appear to work. It can also show that a procedural change belongs alongside a software change.

A compact investigation table can connect each part to evidence:

| Part of the work | Question | Evidence to seek |
| --- | --- | --- |
| Identify the conflict | When does the dispatcher learn that the plan cannot work? | Event sequence and available status information |
| Find an alternative | Which constraint rules out the apparently obvious assignment? | Actual options considered and reasons for rejecting them |
| Agree the change | Who must agree before the new plan is usable? | Customer/technician communication and authority |
| Confirm the arrangement | How does each person know which plan to follow? | Received information and subsequent actions |

Causal questioning asks what could explain the observed sequence. Repeatedly asking “why?” can be useful, but it can also turn the first plausible answer into an apparently deep explanation. If someone says “the dispatcher lacks confidence”, ask what was observed and what other explanations fit. Missing information, unclear authority and previous incorrect suggestions could produce the same hesitation.

Use questions that discriminate between explanations. Was the information unavailable, present but hard to find, or visible but judged unreliable? What would you expect to observe if each account were true? Which case would challenge the preferred explanation? Stop expanding the causal story when the next branch no longer informs the decision at hand, or when answering it requires evidence you do not have.

Suppose repeated calls are the symptom. The calls could compensate for stale availability, confirm customer preferences, or resolve an ambiguous instruction. Counting calls will not distinguish those purposes. Observe their content with suitable permission and examine the information available at the time. The appropriate change follows from the purpose and failure, not from the fact that calls occur.

A problem frame can remain useful while a cause is unresolved. “Dispatchers cannot reliably establish whether a technician has received a changed assignment” identifies a consequential uncertainty. Adding “because the notification service is defective” would be unjustified without technical evidence. Keep the causal hypothesis beside the frame until the investigation supports it.

Ask an engineer to help distinguish a failed send, delayed receipt and an unclear interface when those explanations would lead to different repairs. Bring the event sequence and the unresolved question. If a proposed frame depends on a safety requirement or legal obligation, involve the relevant specialist before treating that constraint as settled. Framing identifies the investigation; it does not qualify you to resolve every question it exposes.

## Find the function behind a workaround

A **workaround** is an alternative way people get something done when the normal arrangement is inadequate or inconvenient. It can reveal a need the product team has not recognised. In a local scheduling example, the dispatcher writes a customer's promised arrival window on paper and keeps the note beside the telephone. Before designing a digital notes feature, ask what the paper enables.

The note might keep a promise visible during calls, distinguish an exceptional agreement from the ordinary schedule, or help the dispatcher resume after an interruption. Each interpretation suggests a different product question. Copying the paper into a hidden text field could preserve the words while losing the function that made the workaround useful.

A **latent need** is a need that has not been explicitly articulated. It may become apparent through difficulty, improvisation or comparison between what people seek and what the current arrangement permits. Treat an inferred latent need as a hypothesis to examine with people. The fact that a product manager can invent a convincing explanation does not give them privileged access to what another person needs.

Workarounds can also create costs and risk. A paper note may be unavailable to another dispatcher or remain after the appointment changes. Investigate both its benefit and its limits. Do not romanticise every improvised practice, and do not remove one merely because it sits outside the software. The aim is to preserve useful capability while addressing the weakness.

The reframed Cedar problem allows several interventions. A clearer view of constraints may reduce searching. Conflict alerts may help the dispatcher notice trouble earlier. Suggestions may make feasible alternatives easier to compare. Customer self-service may help in circumstances where customers can safely choose among acceptable options. A change in how technicians report overruns may improve the information on which every option depends.

These are possibilities, not an implied recommendation to build them all. Compare each with the problem's components and constraints. Which obstruction would it address? Which information does it require? Who gains control, loses control or gains extra work? Which consequence would show that the intervention helped? A larger solution space is useful because it allows a better choice, not because variety is an end in itself.

The same reasoning applies to a library asked for more reminder emails. The difficulty may concern understanding a return date, renewing an item or reaching a branch during opening hours. A request for a communication channel is evidence of a proposed remedy. Understanding the underlying situation lets the library assess whether that remedy fits.

## Ask AI to challenge the frame

AI can help identify a solution hidden inside a need statement and generate alternative ways to organise the problem. Give it the original request, the observations, the affected people and the decision you are considering. Ask it to preserve constraints and distinguish evidence from interpretation. Require an assumption and a missing-evidence question for every generated frame.

For Cedar, the instruction could be: “Compare frames centred on identifying conflicts, evaluating alternatives and confirming changed arrangements. For each, state what observation supports it, what it assumes and what evidence could show that it is the wrong priority.” The useful output is a set of inspectable alternatives, not a more persuasive version of the original request.

| Candidate frame | Assumption to check | Missing evidence |
| --- | --- | --- |
| Dispatchers need earlier visibility of conflicts | Late detection is a material obstacle | When conflicts become knowable and when staff notice them |
| Dispatchers need to compare feasible alternatives | Finding an acceptable assignment causes delay | Options considered, constraints applied and time spent |
| Staff need confirmation that a changed plan was received | Uncertain receipt disrupts coordination | Receipt information, subsequent actions and recovery work |

Check the candidates against the actual material. A generated frame that adds “customers demand instant rescheduling” has introduced a new claim. Remove or investigate it. A frame that omits travel or skill constraints may sound more concise while becoming less useful. Ask the assistant which facts it dropped, then inspect the omission yourself.

Keep multiple frames temporarily when they describe different parts of the problem. Choose the next investigation by the decision it can improve. If Cedar already knows that suitable alternatives exist but cannot establish whether changes reach technicians, another optimisation exercise may be less useful than tracing communication. That judgement comes from the evidence, not from the order in which the assistant lists ideas.

Try reframing one request in your own work. Underline the words that name a solution. Identify the symptom, actor, desired progress and important constraints. Write a frame that permits at least two substantially different interventions. Decompose it into a short sequence, name an unresolved causal question and specify an observation that would change your interpretation.

The result need not fit a mandatory sentence template. It should let another person understand whose situation matters, what prevents progress, what you know and what remains to be investigated. A polished problem statement that cannot guide a question or rule out an irrelevant solution has done little work. A modest statement with a clear evidential basis can substantially improve the next product decision.

## Notes

[^c08-n01]: Government Digital Service, “Learning about users and their needs”, especially “Validating user needs”. The chapter uses its own working distinctions among problem, need, goal, task and job; it does not claim a universal professional taxonomy.

## References

- Government Digital Service (2016; updated 2017). “Learning about users and their needs.” *Service Manual*. [Guidance](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs). Accessed 3 October 2026.
