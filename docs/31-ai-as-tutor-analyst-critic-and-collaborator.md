# Chapter 31: AI as Tutor, Analyst, Critic, and Collaborator

## Choose the job before the role

Cedar's pricing proposal needs several kinds of work. Someone must explain an unfamiliar cost concept, compare the effect of alternative charges, examine what customer evidence supports, and challenge the proposed change. Asking an AI system to “help us choose the best price” bundles those jobs together while leaving their evidence and checks unclear.

The seasonal-business problem provides a starting point. Charging per active technician has encouraged account changes that interfere with dependable access and records. Cedar is considering alternatives, including technician bands, completed visits, seasonal allowances and locations. The pricing decision remains open. A useful AI contribution should advance a particular part of that decision without inventing customer preferences or commercial results.

Select a **working mode**: a bounded description of the contribution required. Tutor, analyst and critic name different kinds of work. They are not credentials, personalities or claims about the model's internal architecture. One system might perform several modes, but each requires appropriate inputs and its own verification.

For every mode, establish four things: what it is useful for, what information it needs, how it commonly goes wrong in the task, and how you will check the result. “Act as an expert” answers none of them. A specialist-sounding voice may make an unsupported answer harder to challenge.

The eleven modes below offer a practical vocabulary. Use only those that help the current decision. Their demonstrations are illustrative requests and possible contributions, not reported model-test results. Quality must be established in the intended setting; NIST's generative-AI profile cautions against extrapolating capability from narrow anecdotes and calls for source verification.[^c31-n01]

Choose the mode by the gap in the work. If you cannot explain the cost distinction, begin with learning. If you understand it but lack current information, find evidence. If the evidence is adequate but the options are narrow, generate alternatives. Requesting a forceful critique when the underlying question is still undefined can produce elaborate objections to a proposal nobody actually intended.

## Learn, translate and find material

As a **tutor**, AI is useful for developing enough understanding to ask better questions. Cedar's product manager could ask it to explain contribution margin through a customer account: revenue less the variable costs associated with serving that account. Supply the learner's existing knowledge, the precise confusion and an example with stated costs. Ask for a contrasting case where higher revenue does not mean higher contribution.

The failure is a convincing simplification that removes an essential distinction. A tutor might call contribution profit while ignoring fixed costs. Check the explanation against a reliable source, calculate the example independently and explain it back without copying the answer. A useful next request is “Give me a case that would expose whether I have confused contribution with profit.” The result supports learning; it does not qualify the reader to approve consequential financial forecasts alone.

As a **translator**, AI is useful for carrying meaning across languages or professional vocabularies. Cedar could translate an engineer's description of metered usage into wording an owner can understand. Supply the exact source, audience, required terms and distinctions that must survive. “A charge is triggered when an account is enabled during the month” must not become “you pay only when a technician works”.

The failure is fluent wording that changes the condition or certainty. Compare each consequential statement with the source and have a knowledgeable colleague check technical meaning. For customer-facing language in a language the team cannot assess, involve a competent speaker or professional translator. Translating back through the same system may reveal a problem, but agreement between its two versions is not independent confirmation.

As a **researcher**, AI is useful for finding candidate sources and organising an inquiry. Cedar might investigate how a particular usage measure is defined in a supplier's documentation. Supply the question, product version or relevant date, required source quality and what counts as an answer. If the system has no retrieval access, treat suggested sources as leads until they are actually obtained.

The failure is a plausible citation, outdated passage or chain of summaries mistaken for evidence. Ask for the original publisher and exact supporting passage, then open it. Check scope, date and whether the source supports the whole claim. For Cedar's own customers' willingness to pay, published sources cannot replace relevant customer evidence. The researcher mode helps locate material; it cannot manufacture an answer to a question for which no adequate material exists.

These three modes can work together without being interchangeable. A researcher finds a pricing definition, a tutor explains its meaning, and a translator helps communicate it to colleagues. Each transformation can introduce error, so preserve access to the original. The polished final explanation should not become the only surviving evidence.

Let the tutor ask you questions too. For example, if support costs increase with active accounts but the account charge stays fixed, what happens to contribution? Your answer exposes whether you can use the concept. An assistant that merely praises a correct-looking phrase is a weak tutor. Request a concrete counterexample and verify its logic; the learning goal is your ability to reason about a new case.

## Organise evidence and produce alternatives

As a **synthesiser**, AI is useful for bringing supplied material into a coherent account while retaining its important differences. Give Cedar's support notes source identifiers, dates and the customer circumstances relevant to the pricing question. Ask for themes such as account administration, seasonal predictability and access interruption, with a passage supporting each proposed theme.

The failure is a tidy consensus that erases exceptions or combines separate events. A note about disabling an account does not alone show whether the cause was price, staff departure or a permission problem. Check each theme against original records and inspect cases that do not fit. Count customers separately from messages where that distinction matters. The synthesis should show what the evidence supports and where classification is uncertain; it creates no new observation.

As a **generator**, AI is useful for producing alternatives before the organisation commits to one. Supply the pricing problem, constraints, baseline and assumptions that may be challenged. Cedar could request three different ways to accommodate seasonal work: a seasonal allowance, a technician band or a charge tied to another meaningful unit. Ask what behaviour each might encourage and what operational work it would require.

The failure is superficial variety: several names for the same pricing unit, or an attractive option that ignores an essential constraint. Compare the underlying mechanisms, not the slogans. Check whether Cedar can measure the unit, explain the charge and handle exceptions. Bring commercial, support and engineering colleagues into feasibility assessment. A generated alternative deserves investigation because it offers a plausible different arrangement, not because the assistant describes it enthusiastically.

As an **analyst**, AI is useful for comparing supplied data under explicit rules. It needs the dataset, units, relevant period, formula and treatment of missing values. For a small illustration, suppose one proposed charge is £20 per active technician each month. Five active technicians imply £100; twenty imply £400. Another proposed charge is a flat £200 for a month covering up to twenty technicians. The flat charge costs more for five active technicians and less for twenty.

The arithmetic does not establish which proposal customers prefer or which is viable for Cedar. These are teaching assumptions, not actual prices. The analyst's failure could be counting enabled accounts as hours worked, comparing different periods or calling revenue a margin. Recalculate selected cases independently, inspect the underlying rows and check the definition of active. Where records are incomplete, require an explicit treatment rather than an invented value.

Notice the division of work. The synthesiser can identify reported difficulties; the generator can propose architectures; the analyst can compare bills under stated assumptions. None determines whether the proposed architecture is acceptable to customers. Combining three outputs does not supply evidence absent from all three inputs.

Ask the analyst to show intermediate quantities when they carry meaning. In the pricing illustration, the number of chargeable accounts belongs beside the rate and period. A final total without those inputs hides whether the calculation included seasonal workers who were enabled only briefly. Before expanding the calculation across customers, have someone responsible for billing confirm that the chosen definition matches the proposed rule. Correct arithmetic and correct business interpretation are separate checks.

## Challenge and assess the proposal

As a **critic**, AI is useful for examining weaknesses in an actual proposal. Give it the proposal, its supporting evidence, constraints and criteria. Ask it to identify the assumption most likely to undermine the intended benefit and the check that would expose the weakness. For a completed-visit charge, a useful objection is that disagreements about what counts as completed could create billing and support work.

The failure is criticism that sounds rigorous but is generic, irrelevant or based on invented facts. “Customers may dislike change” does not identify which customers, change or consequence. Check whether an objection follows from the proposal and whether its possible effect is consequential. A valid concern may call for a narrower design or investigation; it does not automatically justify rejecting the entire option.

As an **adversary**, AI is useful for deliberately examining a proposal from an opposing position or under pressure. Unlike a general critic, it pursues a stated challenge. Cedar could ask it to examine how a cost-conscious seasonal owner might respond to a visit-based charge, given specific operational facts and a desire to keep invoices predictable.

Supply the actor's known incentives, powers and constraints; forbid invented customer quotations. A possible contribution is that an owner might postpone closing records if closure triggers billing. That is a scenario to investigate, not evidence that owners will behave that way. The failure is a stereotype dressed as stakeholder knowledge. Check the mechanism with domain colleagues and real research, and keep the hypothetical reaction clearly separate from anything a customer actually said.

As an **evaluator**, AI is useful for applying agreed criteria consistently to alternatives. Give it the options, criterion definitions, evidence and permitted treatment of unknowns. Cedar might compare customer predictability, connection to value, supplier cost, harmful incentives and operational practicality. An acceptable evaluation can say that customer preference is unknown while pointing to the specific evidence needed.

The failure is false precision or quiet substitution of the system's preferences. Scores such as 8.7 for fairness are meaningless without an explained scale and supporting judgement. Review both the criteria and their application. Inspect close comparisons, unsupported scores and any conclusion that changes when priorities change. The responsible people choose priorities and make the commitment; the evaluator helps expose the comparison.

Keep the roles distinct when their outputs disagree. A critic may expose an important risk in the option that currently evaluates best. That need not be a contradiction: the option can remain preferable while needing a mitigation. An adversarial scenario may reveal a missing criterion. Revise the comparison openly instead of choosing whichever output supports the desired answer.

Record the disposition of a useful objection. Cedar could accept it as a design constraint, investigate its likelihood or explain why it does not apply. Leaving every generated criticism unresolved produces a long risk list without better judgement. Dismissing every criticism as hypothetical loses the purpose of exploration. The product manager should connect each consequential concern to a reasoned next action.

## Explore scenarios and carry out bounded work

As a **simulator**, AI is useful for exploring what follows if stated conditions hold. It needs an explicit model, assumptions, ranges and the outputs to compare. Using the hypothetical charges above, suppose a business has five active technicians for six months and twenty for six months. The per-technician annual bill is six times £100 plus six times £400, or £3,000. The flat charge gives twelve times £200, or £2,400, within the stated capacity limit.

The failure is treating an assumed scenario as a forecast. The calculation says nothing about actual seasonal patterns, customer acceptance, Cedar's costs or use above twenty technicians. Verify the equations, vary the assumptions and identify where the model stops applying. If the system generates code to run scenarios, review and test that code before relying on its results. A larger table cannot repair unsupported inputs.

Simulated personas are another kind of scenario. An imagined owner objecting to a bill can help formulate an interview question or expose a possible concern. That persona has supplied no empirical user evidence. Ten generated owners agreeing with a proposal are still generated material, not a sample of customers. Compare the possibilities with real behaviour, accounts and appropriately designed research.

As an **operator**, AI is useful for carrying out a defined action through authorised tools. Cedar's product manager might ask an approved system to create a draft comparison document from reviewed material. Inputs must include the destination, permitted content, identity, scope and stopping condition. Creating that draft does not authorise sending it to customers or updating their subscription terms.

The failure now includes changes to external state: a wrong destination, overwritten document or unauthorised message. Check the proposed action where approval is required, enforce permissions in the surrounding system, inspect the tool's result and verify the resulting state. A generated statement that the document was created is insufficient. For consequential or difficult-to-reverse actions, involve the responsible operational and technical colleagues before granting capability or authority.

Moving from simulator to operator is therefore a change in responsibility. Exploring a possible price produces an account of consequences under assumptions. Applying that price to customer accounts creates consequences. The transition requires an explicit authorised decision, not merely the next turn in a productive conversation.

## Combine contributions into a decision

A useful sequence for Cedar could begin with tutoring on the unfamiliar economic distinction, then synthesis of actual customer material. Generation supplies options; analysis compares specified cases; criticism and adversarial scenarios reveal questions. Simulation explores sensitivities, and evaluation organises the evidence against agreed criteria. The product manager then recommends a bounded next step, with appropriate specialist review.

Judge the combined workflow by the work it enables and the review it requires. A lengthy sequence that produces no new distinction may cost more attention than it saves. A short analysis that exposes an unsupported assumption can be valuable even when it ends with a question. Useful collaboration advances the decision's evidence or reasoning, rather than merely adding polished material.

This is one possible sequence, not a compulsory process. Stop when another generated output will not improve the decision. Sometimes the next useful action is to ask a customer, inspect a record or obtain an accountant's advice. Switching the assistant's role does not create independent evidence or replace missing professional competence.

At each handoff, retain the supported findings, assumptions and unresolved questions. The analyst should not receive a generated persona's objection labelled “customer research”. The evaluator should not receive a simulator's assumed retention rate labelled “forecast”. The names of the roles matter less than the integrity of those transfers.

Choose one live decision and select three modes that could help. For each, write the specific contribution, minimum inputs, likely failure and verification method. Name one mode you do not need and explain why. Finish by stating the decision that remains with an accountable person and the specialist input it requires.

The exercise succeeds when the proposed assistance has clear boundaries and checks. You are then using AI as a set of deliberate contributions to product work, with the evidence and responsibility for the final judgement still visible.

## Notes

[^c31-n01]: NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (July 2024), MEASURE 2.3 and actions MS-2.5-001/MS-2.5-003, printed pp.30–31. [Profile](https://doi.org/10.6028/NIST.AI.600-1). The eleven working modes are this chapter's practical taxonomy, not NIST categories or a claim about model architectures.

## References

National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*. NIST AI 600-1. July 2024. [DOI and publication](https://doi.org/10.6028/NIST.AI.600-1).
