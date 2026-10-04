# Chapter 7: Understanding Users

## Start with what the decision requires you to learn

“How should dispatchers handle a disrupted schedule?” cannot be answered by asking only the people who buy scheduling software. Company owners can explain staffing costs, customer complaints and commercial priorities. Dispatchers can explain how they repair a plan during the day. Technicians can show how a revised assignment reaches them while they are working. Each perspective concerns the same service, but each person has access to different events and information.

Cedar's product manager initially interviews service-company owners. They want less time spent rearranging work and describe automatic scheduling as a promising answer. The product manager summarises the interviews as evidence that users want the software to make assignments automatically. That conclusion exceeds the evidence: the owners have expressed a preference, while the people making and carrying out assignments have not yet been heard.

The next research question should expose the gap. “What information do dispatchers use when a job must move, and what prevents them from resolving the conflict?” could change whether Cedar builds automatic assignment, clearer warnings or better communication. “Do you like our automatic scheduling idea?” mainly invites a reaction to the team's proposal. Both questions can produce answers; only the first directly investigates the unresolved work.

Write the intended decision before selecting a method. Then list what you need to learn, what you already have evidence for and what remains an assumption. A conversation may explain the reasons behind a recent choice. Watching work may reveal steps that nobody mentions. Product records may show how often a recorded event occurs. The method should follow the question, rather than follow the tool that is easiest to arrange.

The Government Digital Service's research guidance starts planning with questions and recommends turning unsupported assumptions into questions to investigate.[^c07-n01] This is a useful discipline for product managers in any setting. “Dispatchers resist automation” becomes “Which assignments do dispatchers want to review, and what information influences that preference?” The revised question allows several answers and points to observable decisions.

Research does not hand the product manager a finished product strategy. It supplies evidence about people, activities and circumstances. The product manager must still consider costs, technical feasibility, commercial choices and consequences for other groups. Research literacy helps you understand the strength and limits of this input, so that neither a vivid quotation nor a large dashboard becomes more authoritative than its basis allows.

## Choose ways to hear and see the work

An **interview** is a conversation planned around what you need to learn. Ask about concrete experiences before inviting general predictions. “Tell me about the last appointment you had to move” gives the dispatcher an event to reconstruct. “Would you trust an intelligent scheduling assistant?” asks the dispatcher to imagine an undefined future and may invite an answer they believe you want to hear.

Follow the sequence: what triggered the change, what the dispatcher knew, whom they contacted, what they considered and what happened. Ask for examples of records or tools when appropriate and permitted. An account remains an account; memory can be incomplete and the person may omit steps they consider obvious. The GDS interview guide recommends open, neutral questions and specific examples, with follow-up where meaning is unclear.[^c07-n02]

**Observation** lets you see activity as it unfolds. In Cedar's investigation, the researcher watches a dispatcher pause before moving a repair visit. The dispatcher checks a customer's agreed time, checks the technician's skill and calls about an urgent job. Those actions reveal constraints absent from the owners' high-level request for automation. They do not yet reveal how often every constraint matters or why every dispatcher acts similarly.

**Contextual inquiry** combines observing work with questions about what the person is doing and why. The researcher can ask the dispatcher what prompted the call after the immediate pressure has passed. Interrupting during a difficult customer conversation would change the situation and burden the participant. GDS guidance on contextual research emphasises allowing activities to unfold and asking for clarification where the observation is unclear.[^c07-n03]

Shadowing a technician adds another view. During a visit, the researcher sees the technician consult an earlier assignment because a later update is not yet available on the device. The researcher records what was visible and asks how the technician normally checks changes. They should not declare a network defect without technical evidence. The observation establishes an information gap in that event; the cause requires further investigation.

A **diary approach** asks participants to record experiences over time, often shortly after an event. It can help investigate irregular schedule disruptions that may not occur during a planned visit. Keep the request manageable: what changed, what the person did and what consequence followed. Missing entries and selective recording limit the account. A diary is neither continuous observation nor an automatic measure of prevalence.

Your presence and questions affect the evidence. A technician may avoid discussing a workaround while their manager listens. A dispatcher may explain an action differently after hearing your proposed design. Introduce the research purpose without selling a solution, establish how the material will be used, and make participation conditions clear. Compare “How frustrating is this outdated screen?” with “What happens when you reach this screen?” The first supplies both an emotion and a judgement before the participant answers.

Use a guide to maintain useful coverage, while leaving room for unexpected information. A researcher who follows a script despite a consequential surprise can collect consistent answers to the wrong question. Record important changes to the guide so that later readers understand why different sessions explored different topics.

## Learn who is represented in the numbers

A **survey** collects responses to a structured set of questions. It can help describe reported practices or preferences across a defined group, provided you understand how the group was reached and what respondents interpreted the questions to mean. A survey asking whether scheduling is “easy” may combine speed, confidence, familiarity and workload in one answer. Separate the dimensions that matter to your decision.

Test questions with relevant people before relying on the responses. Ask what they thought a term meant and how they chose an answer. Provide options for situations you have not anticipated where appropriate. If a respondent cannot express “I do not do this task”, forcing a satisfaction rating creates data with an unclear meaning. More responses will not repair that meaning.

**Behavioural data** records events such as opening a screen, changing an appointment or submitting a form. It can establish patterns in what the system recorded. It does not automatically establish intention, experience or events outside the system. Cedar may record an appointment change without recording the telephone calls that made the change possible. A short on-screen duration could accompany a long period of coordination elsewhere.

**Sampling** means choosing which people or events contribute to the research. Begin by defining whom the decision affects. Cedar's buyers, dispatchers, technicians and service customers are not interchangeable. Within those groups, consider experience, access needs, working hours, company size and operating conditions where these differences may change the task. You do not need a demographic portrait of everyone; you need a reasoned account of relevant variation.

Recruitment creates practical exclusions. Sessions during office hours may omit people on late shifts. A sign-up form in the software cannot reach someone who has stopped using it. A manager may nominate confident employees who present the company well. GDS's recruitment guidance explicitly identifies activity, timing, location and recruitment route as sources of inclusion and exclusion.[^c07-n04] Ask which missing group could make the recommendation fail.

Small qualitative studies can reveal important mechanisms and unmet needs without estimating their frequency in the whole population. A survey of a convenient group can still be useful, but its percentages describe those respondents unless the sampling and analysis justify a broader claim. Do not turn “most people we spoke to” into “most customers” through a change of wording.

Consider a survey sent through Cedar's owner newsletter asking how often schedules change. The answers may describe the owners' estimates, rather than counts made by dispatchers. Owners who read the newsletter and respond may differ from those who do neither. Before presenting a percentage, identify its denominator: the people answering that question, all survey respondents, or the customers invited. Those groups are different. Also distinguish a report of “frequent changes” from the recorded number of changed appointments. Neither is automatically superior: the report can reveal perceived burden, while the event count can omit coordination outside Cedar. If the product decision depends on whether a pattern extends across the customer base, involve someone able to design and assess the sampling and measurement. An attractive chart cannot answer a question that the collection method left unresolved.

Combine questions about scale with questions about consequence. A rare failure that prevents a technician from obtaining essential job information may deserve attention even when a more common annoyance is easier to count. Research helps describe both; priority requires judgement. Record the population, recruitment route, missing perspectives and relevant limitations beside the finding, where decision-makers will see them.

## Build findings that preserve their evidence

**Triangulation** means examining a question through different sources or methods. The purpose is to test and enrich an account, including by finding disagreement. Three summaries derived from the same interview do not provide three independent confirmations. Nor does an AI-generated persona corroborate the material from which it was generated.

Cedar now has owners' accounts of time spent on scheduling, observation of dispatcher decisions and technician shadowing that exposes an update gap. These findings can fit together: owners want less coordination work, dispatchers need to preserve commitments, and technicians need a dependable account of their next assignment. Automatic allocation could address some work while creating difficulty elsewhere. The investigation has improved the question rather than merely voted for or against a feature.

Disagreement is useful when you preserve it. An owner may say that technicians always receive changes immediately, while shadowing reveals a change unavailable at one particular time. Establish what each person means by “receive”, which event each is describing and what the system records. The owner could be describing a normal procedure; the technician could be experiencing an exception. Choosing the more senior account would erase the issue that needs investigation.

**Synthesis** organises observations into an account useful for a decision. A theme is a proposed pattern in the material, not an extra fact created by naming it. Keep the path back to individual observations. For example, “dispatchers check commitments before reassignment” should link to the observed actions that support it, distinguish direct observation from interview reports, and state where the pattern has not been investigated.

Separate what was seen or heard from its interpretation and the action proposed in response. GDS analysis guidance makes this distinction when extracting observations and then developing findings.[^c07-n05] A record that says “dispatcher opened customer notes before moving the visit” differs from “dispatcher distrusts the optimiser”. The second needs evidence about interpretation or motivation that the first alone does not supply.

Do not discard a minority case simply because it does not fit the dominant theme. Suppose one dispatcher manages appointments through an interpreter and needs additional time to confirm changes. The case may be uncommon in the current sample but consequential for an inclusive design. Keep a separate account of exceptions, unresolved contradictions and groups insufficiently represented. A single average persona can hide those differences.

A useful finding includes its scope, basis and implication. “In the observed reassignment, the dispatcher checked customer commitments before selecting a technician; test whether proposed reassignment options expose those commitments” is more defensible than “Users need smarter scheduling”. The first permits a colleague to examine the source, challenge the interpretation and understand the next design question.

## Give AI access to evidence, then audit its work

AI can assist several parts of research, provided its output remains distinguishable from participant evidence. Before a session, ask it to critique an interview guide for leading questions, unexplained terms and questions that combine several issues. Supply the learning objective. Review its suggestions yourself: a rewritten question can sound neutral while dropping the decision you need to investigate.

Transcription support can reduce the work of producing a searchable record. Check the recording where a phrase influences a finding, where names or specialist terms occur, and where the transcript is uncertain. Do not silently repair an unclear sentence into the quotation you expected. Mark uncertainty or paraphrase accurately, with a trace to the original material.

For synthesis, ask AI to propose candidate codes: short labels attached to passages describing similar issues. Supply only approved material and stable passage identifiers. Request supporting excerpts, counterexamples and alternative interpretations for each candidate theme. Search assistance can help find mentions across a large collection, but verify that relevant wording was not missed because different participants used different terms.

Consider a proposed summary: “Dispatchers want scheduling fully automated.” If the linked passages show a desire to reduce repetitive checking alongside insistence on approving final assignments, the summary has removed a material condition. Revise the finding to preserve both points. Then inspect passages that the system did not include. Checking only the selected evidence will not reveal every omitted contradiction.

Ask the assistant to compare at least two interpretations of an ambiguous action. Reopening a job might reflect uncertainty, a search for new information or an accidental navigation. The resulting alternatives are hypotheses. Their usefulness lies in directing a follow-up question or observation, not in increasing the volume of apparent evidence.

An AI-generated participant is not a recruited person. A synthetic persona can help a team notice assumptions or prepare a discussion, but its statements do not show what actual users experience. Likewise, a generated quotation is never a participant quotation. Keep quotations linked to their original records and confirm wording before sharing them. Fluency is especially misleading when it makes a summary appear more conclusive than the material permits.

Privacy is part of method selection. Explain recording and processing arrangements to participants, use approved systems, minimise the information shared, restrict access and establish suitable retention arrangements. The GDS guidance treats secure handling and participant information as part of managing research data.[^c07-n06] Removing a name may not remove identifying details from an account of a distinctive job. Obtain appropriate research and privacy expertise before sending sensitive material to an external system.

## Know when the investigation needs a researcher

A product manager can participate in research without claiming professional research competence. Work with a trained researcher when the subject is sensitive, participants are vulnerable, the consequences are high, or the method materially affects a major commitment. Complex sampling, difficult interpretation and conflicting evidence can also warrant specialist help. The boundary depends on the question and potential harm, not simply on whether you can book interviews.

For Cedar, observing routine scheduling may be manageable with appropriate guidance. Investigating disciplinary monitoring of technicians creates a different relationship between employer, participant and researcher. Employees may face consequences from what they disclose. Consent, confidentiality, recruitment and reporting need careful design. A general-purpose interview script is insufficient preparation.

Bring the researcher a clear brief: the decision, unresolved questions, existing evidence, affected groups, constraints and what would change the team's next action. Ask them to explain the strengths and limits of the proposed method. This lets you assess how the work supports the product decision while respecting the expertise needed to conduct it responsibly.

Try a small evidence audit before starting more research. Take a current product claim and locate its basis. Who contributed? What did they actually say or do? Which method produced the material? What interpretation links it to the claim? Identify one absent perspective and one plausible alternative explanation. Then choose the next question and a method suited to answering it.

For the Cedar case, an owner interview can support a claim about that owner's priorities. It cannot establish that dispatchers welcome automatic reassignment. Observation can reveal a constraint in a particular event. It cannot alone estimate how often every customer faces that constraint. A useful audit preserves what each source establishes while identifying what further work is needed.

Decide how the evidence should change action, as well as what further research would be interesting. Cedar might have enough evidence to prototype a clearer view of appointment constraints, while lacking enough evidence to automate reassignment. That is a useful distinction between two commitments. Write the claim at the level the evidence supports and keep the larger question open. Set a reason to revisit the finding, such as reaching a different customer group or seeing contradictory behaviour during a test. A finding should not become permanent merely because it appears in a well-designed presentation. When sharing the result, include one representative example, one important qualification and the decision it informs. Give colleagues access to the underlying material within the agreed privacy arrangements. This makes challenge possible without expecting every colleague to replay every session.

The exercise is complete when a colleague can trace the claim to real material and see what remains unknown. If the only source is a convincing generated persona, you have a prompt for research. You do not yet have evidence about users. That distinction allows AI to help the investigation while keeping actual people, their circumstances and their consequences at the centre of product judgement.

## Notes

[^c07-n01]: Government Digital Service, “Plan user research for your service”, “Agree research questions”.
[^c07-n02]: GDS, “Using in-depth interviews”, “Do the interview”.
[^c07-n03]: GDS, “Contextual research and observation”, guidance for conducting a visit and follow-up questions.
[^c07-n04]: GDS, “Finding participants for user research”, “Avoiding bias in recruitment”.
[^c07-n05]: GDS, “Analyse a research session”, “Extract observations” and “Determine findings”. The chapter retains consequential minority cases rather than treating an isolated note as automatically disposable.
[^c07-n06]: GDS, “Managing user research data and participant privacy”, research-data handling guidance. This chapter provides methodological safeguards, not jurisdiction-specific legal advice.

## References

- Government Digital Service. [Plan user research for your service](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service).
- Government Digital Service. [Using in-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews).
- Government Digital Service. [Contextual research and observation](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation).
- Government Digital Service. [Finding participants for user research](https://www.gov.uk/service-manual/user-research/find-user-research-participants).
- Government Digital Service. [Analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session).
- Government Digital Service. [Managing user research data and participant privacy](https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy).

All pages in the *Service Manual*, accessed 3 October 2026.
