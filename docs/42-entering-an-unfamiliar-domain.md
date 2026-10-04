# Chapter 42: Entering an Unfamiliar Domain

## Begin with a decision and a boundary

“Has the work been approved?” sounds like a familiar scheduling question. When Cedar explores serving insurance-restoration contractors, that question becomes less straightforward. Approval of a proposed repair, permission to enter a property, an insurer's coverage decision and agreement about payment may be different decisions made by different people. A screen with one approved status could conceal the distinctions that matter most.

Cedar's product manager already understands appointment coordination. That foundation helps identify the question, but does not answer it. The immediate task is to learn enough about the new setting to decide which workflow Cedar could responsibly support and what must be investigated before building.

Bound the inquiry. Specify the kind of restoration work, the intended contractor customers, the location under consideration and the proposed product role. Exploring documentation for a contractor is different from deciding insurance coverage or advising a property owner on a claim. A broad label such as insurance restoration contains several professions and institutional arrangements.

Start with one consequential handoff. For example, a contractor records completed work and sends supporting information to another party. Who creates the record? Who checks it? What does the recipient need to decide? What happens if the record is incomplete or the scope changes? These questions connect unfamiliar terminology to an action Cedar may eventually support.

AI can create a candidate domain map quickly. Give the assistant the bounded inquiry, your current understanding and the aspects that remain unspecified. Ask it to identify actors, activities, information, rules and uncertainties, with possible source types for verification. Require it to mark assumptions rather than choosing an unmentioned jurisdiction or inventing a universal workflow.

Treat that first map as a **research agenda**, not acquired expertise. Its immediate purpose is to suggest where to look and whom to ask. A coherent map can still combine incompatible jurisdictions, confuse occupational roles or present a vendor's preferred process as standard practice.

Decide which existing knowledge transfers and which parts need checking. Cedar's experience with scheduling can help the product manager ask about changing appointments and communication. It does not establish who may authorise restoration work or which evidence another organisation will accept. Write these transfer assumptions beside the first map. Otherwise, familiarity with the software problem can make the unfamiliar institutional problem seem solved.

Define a useful first deliverable: an explanation of one workflow, the people and decisions involved, the principal uncertainties and a proposed next investigation. Avoid setting “understand the industry” as the completion condition. The bounded deliverable makes progress assessable and gives specialists something concrete to correct.

Keep your own competence boundary visible. You are preparing a product investigation, not qualifying yourself to assess structural damage, determine insurance coverage or give legal advice. Useful orientation should improve your ability to recognise those boundaries and involve the appropriate people earlier.

## Map the field around actual work

A domain map is a provisional account of how a field works. It should connect concepts and people to the product decision, rather than become an encyclopaedia. Fourteen areas provide a useful breadth check for Cedar's first inquiry.

| Area | Questions for the restoration investigation |
| --- | --- |
| Terminology | What do claim, scope, estimate, authorisation and completion mean to each participant? |
| Actors | Which contractor employees, property owners, occupants, insurers, adjusters and other specialists participate? |
| Goals | What outcome does each person seek, and which outcomes can conflict? |
| Workflows | How does a job move from initial contact through assessment, work, documentation and payment? |
| Institutions | Which regulators, professional bodies, standards organisations, insurers and contracting organisations shape the work? |
| Incentives | Who gains from speed, detailed evidence, lower costs or a particular interpretation of scope? |
| Economics | Who contracts, who pays, who finances delay and who bears the cost of disputed work? |
| Technology | Which existing systems support estimates, field records, communication and financial reconciliation? |
| Data | What records exist, who creates them, what they mean and who may access or change them? |
| Regulation | Which rules may apply to the location, activity and actor under consideration? |
| Risks | What physical, financial, privacy and customer consequences could follow from a mistake? |
| Professional norms | Which practices competent practitioners expect, including practices not expressed as legal rules? |
| Failure modes | Where do records, responsibilities, handoffs or decisions break down? |
| Authoritative sources | Which primary documents or qualified people can answer each type of question? |

Do not investigate every cell to equal depth. Use the proposed handoff to identify connections. If Cedar could help assemble job documentation, data provenance and the recipient's requirements may matter immediately. If the product would recommend restoration actions, professional competence and safety questions become much more central.

Distinguish actors from job titles. Two people called adjusters may have different relationships to the parties in a claim. A contractor's customer may be a property owner, while another organisation reviews information relevant to payment. Ask who has authority for each decision rather than inferring it from who receives an email.

Separate goals from incentives. A contractor may want dependable restoration work and a sustainable business; the payment arrangement may also reward or penalise particular activities. The product manager needs to understand both without assuming bad faith. A process that appears unnecessarily detailed may exist because another participant needs evidence to accept responsibility or release payment.

Follow the economics through time. A useful workflow diagram can still conceal the burden of buying materials, paying staff and waiting for a disputed amount. Ask which delay matters to which participant, what can be resolved operationally and what depends on a contract or professional determination.

Technology and data belong in the same map as people. A photograph may show work at a property without establishing when it was taken, which job it concerns or who may reuse it. A field called approved in one system may not mean what Cedar's team expects. Investigate the meaning and authority of the information before planning an integration.

Risks and failure modes turn the map into a useful product inquiry. An incorrect state can cause work to begin before the relevant decision, expose private information or lead someone to believe payment is assured. These are possibilities to examine with specialists, not claims that the industry follows one defective process. The map should make such questions visible early.

## Find authority, then verify the language

The next step is to identify authoritative sources for the questions that matter. Authority is specific to a subject and context. A regulator's rule can establish an obligation within its scope; it does not describe every contractor's daily practice. A practitioner can explain their own work; that account does not establish what every insurer requires.

For terminology, the US National Association of Insurance Commissioners provides a glossary, while explicitly noting that its definitions describe common usage and may not apply in every context. Its adjuster entry concerns investigating claims and recommending settlement options.[^c42-n01] That is a useful starting point for understanding a role, not a licence to assume identical authority across locations and arrangements.

For technical practice, consult the relevant professional standards body. IICRC's public description of its water-damage-restoration standard includes technical procedures, safety, documentation, risk management and specialised experts.[^c42-n02] The breadth itself challenges the idea that restoration is ordinary scheduling with some additional photographs. The public description does not provide the complete standard or establish that every provision applies to Cedar's proposed workflow.

For regulation, start with the primary rule and its applicability. The UK FCA's claims-handling rules include requirements directed at insurers.[^c42-n03] A product manager should not copy an insurer's obligation into a contractor's software specification merely because both organisations participate in a claim. Ask a qualified adviser which actor, activity and jurisdiction the relevant rule concerns.

Keep legal rules, contractual obligations, standards and customary practice distinct. Each can affect a product requirement, but their authority, flexibility and means of change differ. A customer's internal documentation preference may be negotiable; a legal restriction may not be. Do not decide which category applies from the forcefulness with which someone says “must”.

Consider what a source is designed to accomplish. A software supplier's workflow description can reveal the supplier's terminology and supported actions, while omitting work outside its product. A contractor association may explain members' concerns without representing property owners' experiences. These sources can be useful when their perspective is visible. Compare them with sources addressing the same question from another position, rather than treating an apparent consensus among similar suppliers as independent confirmation.

Do not confuse the absence of a found rule with evidence that no rule applies. Search terminology may be wrong, the relevant activity may fall under a different category, or the requirement may be contractual. Record the search and ask a qualified specialist where a competent practitioner would look next. That is a better orientation result than an unsupported claim that the proposed workflow is unrestricted.

For each important source, record who issued it, its date or version, the relevant passage and the scope of the claim it supports. Open the passage rather than accepting an AI-generated citation. Check whether a summary refers to current guidance, an older edition or another jurisdiction. Where the full material is unavailable, record that access gap instead of implying that the requirements have been verified.

Then verify vocabulary against the work. Ask what a term includes, excludes and permits someone to do. Compare the same term across documents and roles. Cedar may discover that “complete” refers to physical work in one conversation, a complete evidence package in another and an administratively closed file in a third.

Mark contested concepts. A disagreement about what counts as satisfactory documentation may concern evidence quality, professional practice, commercial negotiation or a contractual rule. Preserve the disagreement and its source. Replacing it with a single smooth definition would make the domain map easier to read and less useful for designing the product.

## Ask specialists to walk through a real sequence

After the initial source and vocabulary check, speak with people who perform and govern the work. Prepare enough to ask precise questions, while making it easy for a specialist to correct the map. Explain the proposed product role and the decision the conversation should inform.

For Cedar, a contractor's operations lead can walk through a recent job using appropriately handled or redacted records. Ask what happened first, what information was available, who made the next decision and what happened when the plan changed. Follow one actual sequence before asking whether it is typical.

A second perspective may explain a handoff differently. Someone receiving the contractor's evidence can show which information they need, what prompts clarification and which decision lies outside their authority. A qualified domain or legal professional can identify interpretations that the product team should not resolve by interviewing more people informally.

Use the map as a hypothesis to test. Cedar's first version may show a single approval before work begins. The walkthrough can reveal separate permissions or decisions at different stages in the chosen organisation's process. Revise the diagram to show who makes each decision and what it covers. Do not turn that local discovery into a universal industry rule.

Ask about exceptions with consequences. What happens when urgent work precedes a final scope agreement? When new damage becomes visible? When a property owner disputes the record? These are questions for the specialist to explain within the relevant context, not instructions for Cedar to handle such situations automatically.

Investigate professional norms as well as formal requirements. Ask what a competent practitioner would find misleading, incomplete or unsafe in the proposed information flow. A document can satisfy a field checklist while obscuring an important qualification. The explanation can help Cedar preserve that qualification in its design.

Respect access and competence limits during the investigation. Do not request unnecessary claimant details, upload identifiable records to an unapproved assistant or ask a professional to endorse a design they have not assessed. If the proposed product crosses into technical restoration judgement, security-sensitive processing or regulated activity, bring the relevant expertise into the product work before treating the map as a basis for implementation.

End by paraphrasing what you understood and asking the specialist to correct the consequential parts. Record what they established, what they judged likely and what remains outside their remit. A conversation is useful when it changes the map or improves its support, not merely when it confirms that you can use the vocabulary.

## Revise the map into the next investigation

A useful first pass ends with a revised model and visible gaps. Cedar can now distinguish the contractor's work records from decisions about scope, coverage or payment; identify the particular handoff worth investigating; and name the sources and specialists needed for unresolved claims. The product opportunity may become narrower and more credible.

Make the revision explicit. Keep the original assumption, the evidence that challenged it and the resulting change. For example, replace a generic approved state with separate candidate states whose meanings and authority still need validation. This preserves learning and prevents another colleague from reintroducing the original simplification without seeing why it was rejected.

Next, identify gaps that could change the product decision. Cedar may understand the terminology while lacking evidence about the frequency of rejected records. It may know a contractor's workflow while lacking the recipient's perspective. It may have a promising interaction concept while not knowing whether the necessary data can be used for that purpose.

Turn each consequential gap into an action: inspect an applicable primary document, observe another workflow, ask a specialist or run a bounded technical investigation. Name the person responsible and the decision the answer will inform. Not every gap must be closed before any progress; the important ones must be recognised before an irreversible commitment depends on them.

Use AI again to compare the first and revised maps, identify unsupported links and suggest questions missing from the investigation. Require the assistant to retain disagreements and evidence status. Its revision can help organise learning, but the source passages, observed work and specialist corrections remain the basis for trusting particular claims.

For practice, choose a domain adjacent to your current product. Bound one prospective capability, build the fourteen-part candidate map and select the three gaps most likely to affect feasibility or value. Identify an authoritative source and a relevant specialist for each. Explain how a possible finding would change the proposed capability.

Then test your understanding without the generated map in front of you. Explain the key handoff in ordinary language, identify the decision authority and state where your explanation remains uncertain. If you cannot do that, return to the relevant evidence rather than polishing the diagram.

Repeat the sequence as the inquiry develops: map, locate authority, verify language, preserve contested ideas, consult specialists, revise and identify the next gaps. The result is useful orientation with a learning path. It equips Cedar's product manager to investigate the new opportunity responsibly while making clear which judgements still belong to qualified practitioners.

## Notes

[^c42-n01]: NAIC, “Glossary of Insurance Terms”, introductory scope caveat and Adjuster entry. US terminology example only; no licensing or jurisdiction-wide legal conclusion.
[^c42-n02]: IICRC, public S500 description, scope and listed components. The full standard was not used to establish detailed requirements.
[^c42-n03]: FCA Handbook, ICOBS 8.1.1R, insurer claims-handling duties. This is an example of checking the actor addressed by a rule, not advice on applicability to a particular Cedar implementation.

## References

- National Association of Insurance Commissioners. “Glossary of Insurance Terms.” [Glossary](https://content.naic.org/glossary-insurance-terms). Accessed 3 October 2026.
- Institute of Inspection, Cleaning and Restoration Certification. “ANSI/IICRC S500: Standard for Professional Water Damage Restoration.” [Public description](https://iicrc.org/s500/). Accessed 3 October 2026.
- Financial Conduct Authority. *Handbook*, ICOBS 8, “Claims handling.” [Current chapter](https://handbook.fca.org.uk/handbook/icobs8?timeline=true). Accessed 3 October 2026.
