# Chapter 44: Collaborating With Specialists

## Make the question clear enough to answer

An engineer tells Cedar's product manager that sharing a restoration record is straightforward. A security specialist says the proposed sharing arrangement is not ready. A domain professional questions what the recipient will understand from the record. These recommendations appear to conflict, but the specialists may be answering different questions: can the system transmit the information, should this person receive it and what does the information establish?

The product manager's task is to connect the questions and clarify the decision. Technical feasibility does not settle permission or meaning. Professional caution does not, by itself, establish that no useful product is possible. A well-prepared conversation makes each contribution easier to use.

Before meeting a specialist, write the proposed capability in ordinary language. Name the person acting, the information or action involved, the intended recipient, the expected benefit and the commitment under consideration. Include the relevant constraints, current evidence and alternatives. Distinguish what is established from what the team has assumed.

For Cedar, the proposal might be to let a contractor prepare a documentation package and send it to a specified recipient. That is more answerable than “Can we support insurance restoration?” It also exposes questions about identity, access, record provenance, professional interpretation and the effect of later corrections.

Learn enough vocabulary to understand the conversation, then check it with an example. “By approved, do you mean this person agreed the scope, or that payment is authorised?” is useful preparation. Repeating unfamiliar terminology to sound knowledgeable makes it harder for the specialist to detect a misunderstanding.

Start with an open question that invites the specialist's model: what are the main risks or constraints in this proposal? Follow with precise questions about consequences: which part of the workflow creates the concern, what evidence supports it and what change would address it? Avoid embedding the answer you want in a request for confirmation.

Provide context early enough to influence the work. A specialist asked to endorse a nearly finished design may discover a problem when correction is expensive. The UK Service Standard's multidisciplinary-team guidance connects access to relevant expertise with participation by people involved in decisions.[^c44-n01] The general lesson is to make specialist knowledge available while the product choice can still change.

## Work through the problem with different disciplines

Consider the engineer first. Cedar's product manager explains who sends the package, what it contains and how the recipient is expected to use it. The engineer can examine whether current identifiers, storage, permissions and interfaces support that sequence. Ask for the distinction between a known system limitation and an estimate of implementation effort.

Suppose the engineer says the package can be exported but later changes would not update the copy already sent. The product implication is concrete: Cedar must decide whether a dated snapshot is adequate, whether recipients need access to a current version and how corrections will be communicated. The product manager does not need to design the storage system to understand that decision.

Ask what assumptions the recommendation depends on. Does it assume one recipient, no access expiry or a small volume of attachments? What would change the estimate or preferred design? A brief investigation may be needed before a confident commitment. Record that dependency rather than turning the first estimate into a delivery promise.

Now work with a UX researcher. The product manager wants to know whether the proposed package reduces repeated administrative work. The researcher asks whose work, at which handoff and compared with what arrangement. A contractor saying the idea sounds useful does not establish whether the recipient can interpret the package or whether staff can assemble it under actual conditions.

Prepare the research question together. A useful study could examine how contractors currently assemble records and how recipients identify missing information, using an appropriate method and data safeguards. Ask which claim the planned research can support, which participants are missing and what observation would challenge the proposal.

The product implication may be to investigate both sides of the exchange before refining the interface. Respect the researcher's methodological judgement while contributing commercial context and the intended decision. “We need to choose a trial scope this month” is relevant context; “please prove this design works” is a predetermined conclusion.

A security specialist examines another relationship: who can see or change the package and how that authority is established. Explain the data and intended access, including what happens when a recipient changes role or a link is forwarded. Ask which threats matter, which controls address them and what residual risk remains.

If a generated link grants access more broadly than intended, the issue is not merely whether the link works. The product decision may require authenticated access, narrower contents, a different sharing method or no sharing until the arrangement is assessed. The specialist should explain the relevant risk in terms the decision-maker can understand; the product manager should not translate “possible to implement” into “approved to release”.

Bring the specialists together when their recommendations depend on each other. The researcher may propose observing recipients using a package; the security specialist can help establish an appropriate research arrangement; the engineer can explain which behaviours a prototype does and does not represent. Agree those conditions before treating the study as evidence about the eventual product. Otherwise, research may evaluate a convenient demonstration that omits the very access restrictions the real workflow must handle.

Make requests proportionate to the specialist's role. Ask the engineer to explain the consequences of a design choice, not to determine customer demand from intuition. Ask the researcher how to investigate behaviour, not to certify a legal interpretation. Ask the security specialist to assess a defined data flow, not to approve an entire market entry with unknown scope. Precise boundaries improve the quality of advice and reveal where another perspective is needed.

Across these relationships, use a common pattern: context, evidence, assumptions, options, recommendation and limits. Each specialist contributes a different account of the same proposed behaviour. The product manager integrates those accounts into a coherent choice, rather than collecting isolated approvals that refer to incompatible designs.

## Find the source of disagreement

Cedar also receives differing advice about restoration documentation requirements. One practitioner wants a broad record of activity; another wants a smaller package aimed at a particular decision. Before choosing between them, establish whether they are discussing the same recipient, purpose and circumstances.

Disagreement about **facts** concerns what is the case. Does the existing system record who changed a field? Which document does this organisation currently request? Seek direct evidence, inspect the record or ask the person responsible. A confident recollection is a claim to check, not a substitute for an available primary record.

Disagreement about **assumptions** concerns premises used in the recommendation. The engineer may assume the recipient belongs to a known organisation; the security specialist may assume an unrestricted external link. Both recommendations can be reasonable under their own premises. Put the assumptions side by side and agree which proposed arrangement is actually being assessed.

Disagreement about **risk tolerance** concerns the acceptability of possible consequences. Two specialists may agree on a failure mode and still recommend different precautions. Ask about likelihood, severity, reversibility and who bears the harm. Then identify who has authority to accept the remaining risk within applicable constraints. A product manager cannot make an unacceptable practice permissible by assigning it a favourable score.

Disagreement about **scope** concerns what the capability is intended to do. A domain professional reviewing a record of contractor observations may give different advice from one reviewing a system that declares a property ready for use. Those outputs make different claims. Clarify the intended meaning in the interface, documentation and commercial promise, not only in an internal meeting.

Disagreement about **professional interpretation** can remain even after facts and scope are aligned. A lawyer may need to interpret an applicable rule or contract; a qualified restoration professional may need to assess whether a proposed statement carries a technical implication. The product manager should understand the reasoning and its conditions while preserving the need for appropriately qualified judgement.

Ask each adviser what would change their recommendation. A different data flow, a narrower statement, verified recipient identity or a clarified contract may resolve the concern. Sometimes the answer is that the proposed activity falls outside an acceptable boundary. That answer should shape the product scope rather than trigger a search for someone willing to approve the unchanged idea.

**Triangulating expert views** means comparing relevant perspectives and their supporting evidence. It does not mean taking a majority vote. Check each person's experience with the specific problem, the sources they rely on and the limits of their remit. Several advisers repeating the same unexamined assumption do not provide independent support.

Return to the apparent contradiction at Cedar. The product manager writes a single proposed sequence, showing the contractor preparing a dated record, the intended recipient and the proposed access method. Each adviser checks that same sequence. The engineer's feasibility claim may survive while the access arrangement requires redesign and the record's wording needs professional review. The team can retain the useful part of the proposal and name the conditions that prevent commitment to the rest.

Some disagreement will remain. If the unresolved issue concerns whether a statement implies a professional determination, changing a button label without changing the product's promise may not address it. Ask the qualified advisers to explain the concern in the context of what users will actually do. Record the unresolved question and defer that part of the capability until the appropriate assessment is available. Progress does not require pretending the whole disagreement has disappeared.

Where a second professional opinion is warranted, provide the same complete facts and state the disagreement openly. Do not remove inconvenient details or conceal the first assessment. The aim is to improve understanding, identify an error or resolve a material interpretation, not to obtain a preferred answer through selective briefing.

## Keep authority and reasoning visible

Clarify **decision rights** before the disagreement becomes urgent. Who recommends a design, who validates a specialist assessment, who authorises expenditure, who accepts an operational risk and who can stop a release? The answers depend on the organisation and activity. A product title alone does not determine them.

A specialist's advice and an organisation's decision are related but distinct. An engineer may recommend an approach while another person controls investment. A security or legal requirement may constrain what the organisation is permitted to choose. Ask whether the advice is a factual finding, professional recommendation, binding requirement or internal policy, and verify that classification where necessary.

Document enough reasoning for another person to reconstruct the choice. Record the decision, options considered, relevant evidence, key assumptions, specialist assessments, unresolved concerns, responsible authority and conditions for review. NASA's decision-analysis guidance emphasises documenting assumptions and limitations to support the decision authority.[^c44-n02] A product team can apply that principle without adopting NASA's processes.

For Cedar, the record might state that a documentation trial is limited to a specified purpose and recipient arrangement, while a broader interpretation remains unresolved. The record should identify who assessed those boundaries and what change would require another review. Do not use a generic “legal approved” label to cover future behaviours that were never discussed.

Check your paraphrase with the specialist. Explain the recommendation and its consequence in your own words, then invite correction. If “feasible with controlled access” becomes “feasible”, the condition has been lost. If “no issue found within this review” becomes “safe in every context”, the conclusion has expanded beyond its support.

Make the record useful to the people who will implement and operate the decision. An engineer needs to see which access restriction is required; a support colleague needs to know which questions must be escalated; a commercial colleague needs to avoid promising an unassessed capability. Share the relevant reasoning in an appropriate form, with confidential professional advice handled according to the organisation's arrangements. A decision known only to the people in the review meeting can be lost during delivery.

Also record responsibility for following up. If a recommendation depends on confirming the recipient's identity process, name who will obtain that evidence and who will assess it. An unresolved action attached to no owner is easily mistaken for a condition already satisfied. Close the action with the evidence and assessment, not merely a tick in a list.

Return when relevant facts change. New recipients, additional data, a different jurisdiction or an automated action can alter the assessment. Specialist collaboration is part of continuing product operation, not a one-time signature that follows the feature forever.

Respect the time needed for a sound answer. State deadlines and their consequences, but do not force a specialist to replace an unresolved question with false certainty. If the necessary assessment cannot be completed in time, the responsible choice may be a narrower commitment or a changed schedule.

## Use AI to prepare and translate, then verify

AI can help prepare a concise briefing, explain unfamiliar terms and suggest questions for an engineer, researcher or domain professional. Give it the actual product context and ask it to distinguish questions you can investigate yourself from those requiring qualified assessment. Check any claimed standard or legal source before relying on it.

After a conversation, an assistant can help turn approved notes into a plain-language account of the recommendation, assumptions and open issues. Compare the result with the notes and ask the specialist to check consequential interpretations. A fluent summary may drop a condition or turn a judgement into a fact.

Do not ask AI to manufacture counterarguments simply to override inconvenient advice. “Find reasons our lawyer is wrong” invites advocacy without establishing relevant competence or complete context. A legitimate task is to identify unclear premises, locate a primary source for review or formulate a precise question about a possible contradiction.

For example, if Cedar's security specialist raises uncontrolled access, ask the assistant to help describe alternative access arrangements for discussion. Do not treat its assurance that a technique is secure as a replacement for assessment. The useful output is a better question and a reviewable alternative, not simulated professional approval.

For practice, prepare one specialist conversation around a current product decision. Write the context, evidence and assumptions in a short brief. Include an open question about the specialist's main concerns and a precise question about the consequence of a particular condition.

During the conversation, ask what would change the recommendation. Afterwards, record a factual finding, a professional judgement and an unresolved issue separately. Paraphrase the proposed action and its limits for correction, then identify who will make the decision.

The exercise succeeds when the specialist can see the real problem and the product manager can explain the advice without erasing its conditions. That is active collaboration: enough understanding to ask, assess and integrate, combined with a clear recognition of where professional competence and authority remain necessary.

## Notes

[^c44-n01]: Government Digital Service, Service Standard point 6, “Why it's important” and “What it means”, including decision-making participation and access to specialist expertise.
[^c44-n02]: NASA, *Systems Engineering Handbook*, §6.8, opening discussion of assumptions, limitations and decision authority. The chapter applies that narrow principle, not the agency's governance requirements.

## References

- Government Digital Service. “6. Have a multidisciplinary team.” *Service Manual*. [Guidance](https://www.gov.uk/service-manual/service-standard/point-6-have-a-multidisciplinary-team). Accessed 3 October 2026.
- NASA. “6.8 Decision Analysis.” *Systems Engineering Handbook*. [Guidance](https://www.nasa.gov/reference/6-8-decision-analysis/). Accessed 3 October 2026.
