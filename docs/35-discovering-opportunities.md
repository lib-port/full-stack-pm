# Chapter 35: Discovering Opportunities

## Read the environment before naming the opportunity

A repair visit is recorded as a customer no-show. The technician found nobody at the property. The dispatcher says the homeowner had agreed to a later time. Before Cedar chooses a response, its product manager, Maya, needs to establish what happened. A reminder, a clearer schedule and a different handover procedure address different explanations of the same recorded failure.

Return to the earlier investigation, when the response to scheduling disruption was still open. An **opportunity** is a plausible way to improve a consequential situation for particular people under workable constraints. It is more than an attractive feature idea. Cedar needs reason to believe that a problem matters, that something can improve it, and that pursuing the improvement is worth the resources it would consume.

Begin with the **environment**: how service businesses arrange work, who makes commitments, which systems carry information and what can change during the day. Repairs take uncertain amounts of time. People travel between properties. Customers have their own commitments. Some changes arise from urgent new work; others from incorrect information or preventable coordination failures. These conditions shape what an improvement can realistically accomplish.

Maya can review existing research, support records, appointment events and the current commercial offer before commissioning new work. Each source reveals a different part of the environment. Support tickets show problems people reported through that route. Product events show what Cedar recorded. A company owner's account can explain priorities and purchasing constraints. None gives a complete view alone.

A useful **observation** records something noticed or documented: the visit was marked unavailable, the dispatcher changed the time, or a technician opened an earlier schedule. The claim “customers forget appointments” is an interpretation that requires additional support. Keeping those categories separate prevents the initial label from choosing the solution.

The Government Digital Service's discovery guidance similarly starts by examining the problem, wider context and constraints before committing to a service. It explicitly allows discovery to reveal that a non-software response or no further investment is preferable.[^c35-n01] Cedar can apply that reasoning without adopting a particular delivery process or timetable.

Set a decision for the investigation. Here it is whether Cedar should invest in reducing avoidable scheduling disruption, and which narrower problem deserves design work. The question leaves open whether the response involves information, communication, operating practice or a new capability. “Find evidence for an AI scheduler” would instead turn investigation into support for a decision already made.

## Follow observations through people and problems

Next identify the **actors** whose actions and information shape the outcome. The service-business owner pays for Cedar and cares about profitable, dependable work. The dispatcher coordinates visits. The technician performs the repair. The homeowner needs an agreed and usable appointment. Cedar's support staff handle questions and failures. Their interests overlap without being identical.

Map one disrupted visit across those people. Who agreed the original time? Who changed it? What information did each person receive? What did they do next? When accounts disagree, retain the disagreement and seek the records or observation that could clarify it. The goal is an account of the work, rather than a diagram that merely connects job titles.

The earlier Cedar research offers a useful starting point. Owners wanted less rearrangement work. A dispatcher checked customer commitments, skills and urgency before moving a visit. Technician shadowing exposed an update unavailable at a particular moment. These observations support further investigation of coordination. They do not establish the frequency of the problem across the market or prove a particular technical defect.

A **problem** is a consequential gap between the current situation and what people need to achieve. “The scheduler has no AI” describes an absent implementation. “Dispatchers cannot establish whether changed assignments have reached technicians before sending them elsewhere” describes a gap that could lead to missed visits and repeated calls. The second formulation supports several possible responses.

Keep distinct problems distinct long enough to understand them. A homeowner unavailable under the agreed appointment conditions differs from a technician following an outdated time. A cancellation notified in advance differs from an unrecorded cancellation. Counting all four as no-shows can inflate the apparent benefit of a reminder, because a reminder may not address all four mechanisms.

Maya and a researcher should hear from the people affected by these events, including service customers who do not buy Cedar. Ask about recent sequences, inspect appropriate records and observe the work where possible. Include cases that went smoothly: they may reveal effective practices or conditions absent from disrupted visits. Also consider people excluded by the current communication channel or working arrangement.

GDS's user-needs guidance emphasises research with actual users and the people supporting them, and framing needs around problems rather than particular solutions.[^c35-n02] That is particularly relevant when the buyer requests automation but someone else must handle its exceptions.

The output at this point is a sharper question: when appointments change after technicians leave the office, what prevents all affected people from working from the same agreed plan? It is narrow enough to investigate and broad enough to include human procedures alongside software.

## Compare existing alternatives and evidence

An **alternative** is an arrangement people could use instead of the proposed change. For Cedar's customers, the current alternative may combine telephone calls, messages, paper and dispatcher memory. It already performs useful work. A discovery that records only its failures will miss why people retain it and what a replacement must preserve.

Leah, the plumbing company's dispatcher, might prefer a call for a complicated change because she can resolve a question immediately. A visible confirmation status could help her track routine updates, while the call remains useful for exceptions. The opportunity may involve strengthening the existing arrangement rather than replacing every part.

Examine other approaches at the same level of purpose. A competing product may provide change notifications. An outsourced office service may coordinate visits. A company may reduce disruption by reserving capacity for urgent work or changing how it promises arrival windows. Each has costs and limits. A longer list of software features would not capture these alternatives.

A market map should record the customer situation, the work each alternative performs, its adoption requirements and the evidence behind the description. Check relevant supplier documentation and current terms when actual suppliers affect the decision. A vendor's claim establishes what it advertises; it does not independently demonstrate performance in Cedar's customers' conditions. A blank comparison cell should mean unknown, not automatically absent.

Now ask which claims need **evidence**, meaning information used to assess them. “Dispatchers spend substantial time checking receipt” requires observation or credible records of that work. “Companies would pay for less checking” requires purchasing evidence and an understanding of their alternatives. “Cedar can detect receipt reliably” requires technical investigation. One enthusiastic interview cannot establish all three.

Use methods matched to those claims. Interviews can reveal how a recent decision was made. Observation can uncover steps omitted from accounts. Records can help estimate patterns if the events are defined consistently. A technical investigation can establish whether an integration exposes the needed status. Combining methods helps only when each adds relevant information, rather than repeating one source in several forms.

Look deliberately for conditions that weaken the opportunity. If dispatchers already have a reliable confirmation practice, another status view may add little. If most failed visits arise from circumstances nobody could reasonably influence, the attainable improvement may be smaller than the headline failure count. If an existing tool solves the problem but customers cannot configure it, enablement might be the better response.

Evidence can justify further exploration before it justifies a large build. The question is not whether every uncertainty has disappeared. It is whether the evidence supports the next commitment, with an honest account of what that commitment would still leave unresolved.

## Connect benefit to economics and feasibility

The potential benefit depends on what can actually change. Suppose, as an illustrative calculation, a service business has twelve disrupted visits in a month. Investigation suggests four might involve the particular update problem Cedar is examining. Even a perfect response to that mechanism would not directly prevent all twelve. Four is a scenario-specific upper bound before considering adoption, incomplete effectiveness and other consequences, not a forecast of saved visits.

The example identifies the next evidence needed: how consistently the causes can be classified, how often the mechanism occurs, and whether a practical intervention changes it. A large total for “scheduling disruption” is weak investment support when only a small and uncertain part is reachable by the proposed work.

Separate benefit to the service business from benefit to Cedar. A business may gain usable technician time, fewer rearrangement calls and more dependable customer commitments. Released time does not automatically become payroll savings or additional revenue. Cedar may gain a stronger reason for customers to adopt or remain, but that commercial effect also needs evidence. The company's costs include development, messaging or other usage charges, support, maintenance and customer onboarding.

**Opportunity cost** is the value of the best feasible use of the same resources that would be forgone. Investigating scheduling disruption may delay a payment improvement or essential maintenance. The comparison should concern the next useful commitment, such as a bounded research effort, rather than the largest imagined version of every project.

Bring engineering into the investigation before promising outcomes. What does Cedar know about appointment versions, delivery states and membership permissions? Can another system report that a message was delivered, and would that show that the technician understood or agreed to the change? Does the required information exist, arrive in time and have an accountable owner? These are feasibility questions about the work, not merely whether someone can build a screen.

Feasibility also includes operating arrangements. If the proposed improvement depends on dispatchers resolving every unanswered update, who performs that work during busy periods? If homeowners need to respond, can people using different channels or needing assistance do so? A technically functioning intervention can fail because its required behaviour is impractical.

Research, economics and engineering can now revise one another. A communication limitation may narrow the eligible visits. Narrower eligibility reduces the attainable benefit. An observed dispatcher practice may suggest a simpler response with lower operating cost. A privacy concern may change which information can be shared. An opportunity becomes more credible through these interactions, even when it becomes smaller.

## Spend investigation on consequential uncertainty

List the assumptions on which the next commitment depends. An **assumption** is something being treated as true without adequate support for the present purpose. Cedar may assume that the update problem occurs often enough to matter, that dispatchers want a shared status view, that trustworthy state information can be obtained, and that enough customers can adopt a changed routine.

Not every unknown deserves equal attention. Ask which plausible answer would change the decision. If the needed information cannot be obtained without a costly integration, Cedar may choose another intervention. If the work already happens reliably through a simple existing practice, Cedar may improve onboarding instead. Investigating those possibilities can prevent a much larger mistaken commitment.

AI can help organise the inquiry across several tasks. For **research planning**, ask it to compare questions with proposed methods and flag leading language. For **domain vocabulary**, ask for candidate meanings of terms such as provisional booking or arrival window, then verify them with actual practitioners. Similar words can mean different things across service businesses.

For **source discovery**, request candidate technical documentation, public statistics or relevant research, with enough identifying information to inspect the originals. Check existence, date, population and the exact claim supported. A source about hospital appointments might suggest a question about reminders; it cannot by itself establish their effect in plumbing visits. Relevance requires a reasoned connection.

For **synthesis**, provide approved, labelled research material and ask for themes linked to specific passages, with contradictions retained. Inspect both the cited passages and omitted cases. For **competitor mapping**, ask for alternatives and comparison questions, then verify current claims from suitable sources. These outputs organise evidence; they do not add new observations.

For **hypothesis generation**, ask for several explanations of the same recorded disruption and what would distinguish them. For **assumption identification**, ask which conditions must hold for a proposed benefit to occur. Require the assistant to mark supplied facts, interpretations and unsupported possibilities separately. Do not let a polished opportunity summary silently convert the last category into established knowledge.

Maya might ask: “Given these appointment records and research notes, identify three explanations for failed coordination, the evidence supporting each, and the most useful next investigation. Do not recommend a solution yet.” The prompt is an illustrative working aid. Researchers and engineers must judge whether the proposed inquiries can answer the questions, and sensitive material must remain within approved handling arrangements.

Set a stopping point linked to a decision. After examining the agreed set of workflows and checking the critical integration question, Maya should recommend proceeding, narrowing, changing approach or stopping. Further research is worthwhile when its likely effect on a decision justifies its cost and delay, not because the team can always imagine another question.

## Write an opportunity brief that supports a decision

A short **opportunity brief** can bring the investigation together. Its purpose is to expose the reasoning behind the next commitment. The following example is one possible form; its headings are useful only if they help Cedar decide.

**Situation and people.** Service-company dispatchers must coordinate changed appointments with technicians and service customers. The investigation focuses on changes made after technicians leave the office. Owners want fewer failed visits; dispatchers need dependable information; technicians and homeowners need workable commitments.

**Problem and current alternative.** Changes can leave affected people working from different plans. The current arrangement combines Cedar records, calls and messages. Some calls resolve complex exceptions effectively. The opportunity is to reduce avoidable uncertainty and repeated checking while preserving that ability.

**Evidence and limits.** Existing research shows a dispatcher checking commitments and a technician lacking an update at one observed moment. These cases establish reasons to investigate, not market prevalence or a technical root cause. Recorded no-show labels need examination before they can describe the target problem reliably.

**Potential value and economics.** Fewer coordination failures could reduce wasted travel, repeat calls and disrupted customer time. Cedar needs evidence about attainable improvement, adoption work and ongoing support cost. Customer benefit is not yet a revenue forecast. The illustrative twelve-visit calculation shows why the addressable mechanism must be separated from all disruption.

**Feasibility and risks.** A useful response needs sufficiently current appointment information, appropriate access and an operating route for unresolved changes. Important risks include treating delivery as agreement, shifting excessive checking to dispatchers, excluding communication needs and solving a problem already addressed by existing configuration.

**Next commitment.** Conduct a bounded investigation of changed appointments across differing operating conditions and verify the relevant information paths with engineering. Compare smoother and disrupted cases. Keep visibility, communication and process changes open; an AI feature has not been selected.

**Decision conditions.** Proceed to solution comparison if the work reveals a consequential, reachable gap and plausible benefit after adoption and operating costs. Narrow or redirect if the problem is concentrated in a different workflow. Stop this line of investment if the gap is insignificant, adequately addressed by an existing alternative, or unreachable within acceptable constraints.

Name who will assess the remaining questions. A researcher should review consequential sampling and interpretation; an engineer should inspect the information path; finance colleagues can assess a material commercial commitment. Maya remains responsible for bringing their findings into the product decision. Integrated judgement means connecting these contributions while recognising where specialist competence is necessary.

The brief is stronger because it can support more than one outcome. Its recommendation is to learn before a larger commitment, and it names what that learning could change. An opportunity document that only justifies proceeding has lost part of its purpose.

Practise by taking a current feature request and reconstructing the chain: environment, observations, actors, problems, alternatives, evidence, economics, feasibility, uncertainty and opportunity. Write two plausible findings that would lead to different next actions. If you cannot identify such a difference, clarify the decision before gathering more material. Opportunity discovery earns its place through better commitments, including commitments the organisation wisely declines.

## Notes

[^c35-n01]: Government Digital Service, “How the discovery phase works”, problem definition, wider context, constraints, alternatives and the decision to continue. The chapter applies its discovery reasoning without imposing its government delivery phases.
[^c35-n02]: Government Digital Service, “Learning about users and their needs”, researching users, supporting actors and validating problem-focused needs.

## References

- Government Digital Service. [How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works). Updated 21 June 2021.
- Government Digital Service. [Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs). Updated 23 March 2017.
