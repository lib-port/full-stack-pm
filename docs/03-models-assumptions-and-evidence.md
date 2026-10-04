# Chapter 3: Models, Assumptions, and Evidence

## Say what kind of claim you are making

Maya, Cedar's product manager, writes a sentence in a scheduling proposal: “Dispatchers want Cedar to assign jobs automatically.” The sentence follows conversations about the time dispatchers spend resolving conflicts. It seems a reasonable summary. Yet complaining about a difficult task does not establish a wish to surrender control over the task.

In a subsequent interview, Leah, the plumbing company's dispatcher, explains the difference. She wants Cedar to flag overlapping appointments and missing technician qualifications immediately. She still wants to choose the final assignment. She sometimes knows that a customer needs a familiar technician or that an apparently available plumber must collect a part. Those details do not all appear on the schedule. Other dispatchers interviewed for the proposal also ask for rapid conflict detection while retaining assignment control.

Maya now has a reason to revise the proposal. She does not yet have proof that every dispatcher wants the same thing, or that conflict alerts will improve a working day. To explain what she has learned without overstating it, she needs to distinguish several kinds of statement.

An **observation** is something noticed or recorded: Leah asked to retain final assignment control during the interview. An observation has a setting and a means of collection. A note taken from memory deserves different checking from a recording that can be replayed. Neither escapes questions about what was asked or omitted.

A **fact** is something that is the case. A factual claim asserts that something is the case; its wording does not establish its truth. In practical product work, call a claim established only to the extent that its supporting evidence warrants that confidence. Leah's recorded request can establish what she said. It cannot, on its own, establish what she will do when a working tool is available.

An **interpretation** assigns meaning to observations: Leah values control because the scheduling screen omits relevant information. That explanation fits her account, but other explanations could also matter. An **assumption** is a proposition treated as true for some piece of reasoning without having established it adequately for that purpose. Cedar's proposal assumed that reducing scheduling effort meant automating assignment.

A **hypothesis** is a claim framed so that investigation could support or challenge it. “Dispatchers will resolve conflicts faster when Cedar identifies them without changing assignments” suggests something to test. Specify whose conflicts, which tasks and what counts as faster before treating that sentence as a useful test plan.

An **estimate** approximates an unknown quantity, such as the time Leah currently spends resolving conflicts. A **forecast** estimates a future condition, such as next month's use of an alert feature. Forecasts therefore depend on assumptions about what happens between now and then. A **preference** expresses what someone wants or values. A **decision** commits someone to an action, such as funding a prototype.

These categories describe the work a statement is doing; they are not nine sealed boxes. A forecast is a kind of estimate. An observed statement can express a preference. The distinction matters because evidence for one category can be quietly promoted into another. The Government Digital Service's research guidance separates recording what people said or did, interpreting findings, and deciding actions.[^c03-n01] Preserve those transitions in your own reasoning.

## Find the model inside the plan

Cedar's initial proposal contains a simple account of scheduling: collect job requirements, match them with technician availability, then assign the best available person. That account is a **mental model**, a simplified representation used to reason about a situation. Models make thought manageable by selecting some relationships and leaving others out.

The initial model is useful for detecting certain conflicts. A technician cannot attend two distant appointments simultaneously. But a matching model that includes only time and qualifications misses the customer relationship and the parts collection Leah described. The model's usefulness depends on the question. A model can help identify overlapping bookings while being inadequate for making final assignments.

You cannot remove all simplification. A perfect description of the entire service business would be too cumbersome for a scheduling decision. Instead, ask which omissions could reverse the proposed choice. If missing information regularly changes who should attend, that omission matters to automatic assignment. The colour of the office walls probably does not.

To uncover assumptions, read a plan backwards from its promised outcome. “Automatic scheduling saves dispatcher time” depends on Cedar having sufficiently complete information, proposing assignments that meet real constraints, and avoiding corrective work that consumes the time saved. It also depends on dispatchers understanding and adopting the workflow. None of those dependencies becomes true because a planning document presents them in one smooth paragraph.

Make the most consequential assumptions visible. An **assumption register** is simply a maintained record of propositions on which a decision depends. A shared note can be sufficient; the value lies in the reasoning and follow-up, rather than a particular template.

| Assumption supporting Cedar's proposal | Why it matters | Next check |
| --- | --- | --- |
| Cedar contains the constraints needed for assignment | Missing constraints could make proposed assignments unusable | Compare a dispatcher's actual choices with the information recorded |
| Dispatchers want assignments made without approval | Rejected automation would fail to remove work | Explore control preferences through specific tasks |
| Correcting suggestions takes less effort than manual planning | An apparently faster tool could add work | Observe correction as well as initial assignment |

Name who will investigate an assumption and when its status will be reconsidered. Also retain the result. Otherwise, an assumption can disappear from discussion after a workshop and return later disguised as a requirement.

NIST's account of exploratory data analysis explicitly includes checking underlying assumptions and developing economical models.[^c03-n02] The corresponding product habit is to allow evidence to challenge the representation you began with. Leah's account should change the scheduling model before the team invests further in a design built around its omissions.

## Choose evidence for the question

**Evidence** is information used to assess a claim. Its strength depends on the claim, the way the information was obtained and the circumstances in which you want to apply it. Asking whether interviews are “stronger” than analytics without stating the question is like asking whether a thermometer is better than a ruler.

For the question “What did Leah mean by wanting scheduling help?”, an interview can provide relevant detail. For “How often do dispatchers encounter overlapping bookings?”, records of actual bookings could be useful, provided overlap is defined and recorded reliably. For “Can Leah use the proposed alerts while answering calls?”, observing her perform the task can reveal difficulties that either an interview or a usage total leaves unresolved.

Each method also has limits. A person may describe an exceptional day as though it were typical. A log may record a saved booking while missing a conflict resolved by telephone. A successful task in a quiet demonstration does not establish successful use during a busy morning. Calling a method rigorous does not remove those differences in context.

Inspect evidence along several dimensions. Is the source close to the event? Can someone trace the claim to the underlying material? Does the collection method suit the question? Which people or events are missing? Could a different explanation produce the same observation? How different is the proposed use from the setting in which the evidence was collected?

The number of observations matters for some questions, but more observations do not repair a systematically wrong measurement. Thousands of saved schedules cannot reveal information that the software never records. Equally, one detailed account can expose a missing constraint without establishing how common that constraint is. Treat discovery of a possible failure and estimation of its prevalence as different achievements.

**Triangulation** means examining a question through different sources, methods or perspectives. Cedar could compare dispatcher interviews, observation of schedule changes and records of assignment corrections. Agreement would be more informative if these routes had different weaknesses. Repeating the same interview summary in a presentation, a support report and an AI answer does not produce three independent sources.

Disagreement is useful too. Suppose interviews suggest conflicts are frequent, while booking records show few overlapping appointments. The correct response is not automatically to trust the larger dataset. Dispatchers may prevent conflicts before saving. Alternatively, the interviewees may be describing unusually difficult days. Those competing explanations suggest the next investigation: watch how candidate assignments are rejected before they become saved bookings.

Outside Cedar, a council redesigning a benefits application might see fewer calls after shortening its online form. That observation could fit improved clarity, but it could also fit people abandoning applications or failing to find help. The relevant evidence must distinguish those explanations. A count that answers one operational question does not necessarily answer the question about public benefit.

Evidence is stronger when it rules out important alternatives for the decision at hand. It need not remove every imaginable doubt. The aim is enough justified confidence for a particular commitment, with the remaining uncertainty visible.

Keep contrary evidence alongside supporting material. If one dispatcher welcomes automatic assignment, do not hide that account beneath the majority theme. Investigate the difference: perhaps this dispatcher handles predictable recurring jobs, has more complete records or faces different approval requirements. These are possible explanations to examine, not excuses for dismissing the exception. The difference could define where automation is useful and where retained control matters.

Record when evidence was collected as well. A preference expressed before an office hires a second dispatcher may not describe the later workflow. Evidence does not become worthless with age, but the conditions supporting its relevance can change. Ask whether a new customer group, working practice or product capability has weakened the connection between the original observation and today's proposal.

## Explain the step from evidence to action

After the interviews, Maya replaces “dispatchers want automatic scheduling” with a narrower finding: the dispatchers interviewed want help spotting conflicts while retaining final assignment control. That revision preserves what the conversations support. It also changes the useful next choices: explore conflict visibility, investigate missing constraints, or test recommendations that require approval.

The interviews do not choose among those options. Cedar must still consider engineering effort, the urgency of other problems, the risk of disrupting dispatch and the value of learning more. Evidence can inform those judgements without supplying Cedar's priorities.

Imagine that a prototype makes conflicts easier to notice but requires dispatchers to maintain additional qualification records. Whether the trade-off is acceptable depends partly on the amount of maintenance, partly on who bears it, and partly on the importance of the conflicts prevented. A finding about task performance does not settle the preference for speed over administrative effort.

A useful decision explanation therefore contains more than “the research says”. State the alternatives considered, the evidence bearing on each, the assumptions still carrying weight, the objective being pursued and the constraints that limit the choice. Then name the person responsible for the commitment.

Maya could recommend a limited conflict-alert prototype because the interviews challenge unattended assignment, the prototype would investigate a narrower question, and the team can observe whether alerts create corrective work. That is a reasoned recommendation. It remains a recommendation even if everyone agrees with it.

Before testing, Maya should describe what would change her mind. If dispatchers routinely ignore accurate alerts because the conflicts are already obvious, better detection may not solve the difficult part of their work. If alerts expose problems they cannot resolve, the next need could concern staffing or customer commitments. Recording these possibilities prevents a team from interpreting every response as support for its preferred feature.

The required confidence also depends on the commitment. Exploring an inexpensive prototype can be justified by incomplete evidence. Removing manual control across every customer's schedule requires much stronger grounds, operational preparation and a way to recover. This is not a numerical rule about how many interviews count. It is a relationship between uncertainty and the consequences of being wrong.

When decisions depend on representative population estimates, causal attribution or sensitive research, involve a researcher or relevant specialist. The product manager's responsibility is to recognise the question, explain the stakes and inspect the reasoning. Knowing the vocabulary does not establish competence to design every investigation alone.

## Make AI expose its reasoning status

An AI system can turn rough notes into a persuasive proposal. The danger here is specific: its output can give assumptions and deductions the grammatical shape of facts. “Dispatchers struggle with conflicts; therefore they need autonomous scheduling” conceals a change from a problem account to a proposed solution. Fluent connective words do not supply the missing evidence.

Use AI to make those transitions easier to inspect. Provide only material you are authorised to share, label each input with a source identifier, and ask for a structured account such as this:

> Review these scheduling notes. Separate source-supported facts, deductions, assumptions, uncertainties and recommendations. For each source-supported fact, cite the exact note and passage. Do not generalise beyond the people and situations described. Explain which additional evidence would challenge each important deduction. Keep a recommendation distinct from evidence for it.

Those five labels are a checking aid. They do not guarantee that the system has classified statements correctly. Begin verification with the most consequential claim, not the neatness of the table. Open the cited passage and ask whether it supports the whole sentence, including its population and certainty.

For example, an output might label “Dispatchers prefer manual control” as source-supported. Leah's note supports her expressed preference in the discussed circumstances. Unless the other supplied material justifies a broader statement, revise the sentence accordingly. If the output recommends conflict alerts, ask which parts of that recommendation come from the notes and which are deductions about a possible design.

Also check what has disappeared. A summary can preserve the request for speed while dropping the requirement for control. Compare the proposed action with the source passages that could undermine it. This check matters more than obtaining a second fluent summary that repeats the first.

Try the same discipline without AI. Take this short proposal:

> The interviewed dispatchers asked for faster conflict detection. They spend about an hour a day checking schedules. Alerts will halve that time. We should build alerts before improving payments.

The first sentence reports a stated preference and requires interview support. The second is an estimate whose collection method is missing. The third is a forecast, resting on assumptions about both detection and the work that follows. The fourth is a recommendation about priorities; becoming a decision would require an authorised commitment. None follows automatically from the sentence before it.

Rewrite the proposal so each sentence identifies its status and support. Then add one question that could overturn the recommendation. “Does the hour include resolving conflicts that alerts cannot prevent?” would expose a material assumption. Merely asking whether people like the idea would leave that assumption untouched.

You have completed the exercise when another person can tell what is known, how it is known, what remains inferred and why a particular action is proposed. That is the practical foundation of product judgement: giving a decision enough structure to be challenged and improved.

## Notes

[^c03-n01]: Government Digital Service, “Analyse a research session” (2016), sections “Extract observations”, “Determine findings” and “Decide actions”. The guidance distinguishes recorded observations, interpreted findings and resulting actions. [Read the guidance](https://www.gov.uk/service-manual/user-research/analyse-a-research-session).

[^c03-n02]: NIST/SEMATECH, *e-Handbook of Statistical Methods*, section 1.1.1, “What is EDA?”, especially the approach list and philosophy. The chapter applies its assumption-checking principle to product reasoning; it does not prescribe statistical analysis for every product question. [Read the handbook section](https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm).

## References

Government Digital Service. “Analyse a research session.” *Service Manual*. Published 24 May 2016. https://www.gov.uk/service-manual/user-research/analyse-a-research-session

NIST/SEMATECH. *e-Handbook of Statistical Methods*. Section 1.1.1, “What is EDA?” https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm
