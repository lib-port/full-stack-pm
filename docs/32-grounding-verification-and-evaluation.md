# Chapter 32: Grounding, Verification, and Evaluation

## Find the claim hidden inside the summary

“Customers are leaving Cedar because accounting synchronisation failures repeatedly block invoicing.” The sentence appears in an AI summary of support material. It gives the product manager a clear cause and an apparently obvious priority. Before committing engineering work on that basis, she needs to establish which parts of the sentence the records support.

Consider this short packet from the worked case:

| Source | Recorded information |
| --- | --- |
| T17, customer A support ticket | Owner asks for help importing customer addresses |
| T18, customer B support ticket | Office reports that an invoice has not yet appeared in its accounting system |
| T19, customer C support ticket | Dispatcher asks how to give a colleague access |
| A04, customer B account record | Subscription ended later; no cancellation reason recorded |

T18 supports a reported delay for one invoice. A04 supports the later end of that customer's subscription. Neither establishes that the delay caused the cancellation, that failures were repeated or that the explanation applies to customers generally. A fluent sentence has combined distinct observations and added relationships the packet does not establish.

Break the sentence into claims. Customers left; accounting synchronisation failed; the failure repeatedly blocked invoicing; the failure caused the departures. Each needs its own support. A link to T18 beside the whole sentence would conceal how little of it that source can establish.

A defensible summary would say that customer B reported an invoice-transfer delay and later ended its subscription, with no reason recorded in the supplied account record. The delay is worth investigating. Its contribution to cancellation remains unknown. Correcting the statement does not mean the problem was unimportant or unrelated; it means the causal claim has not been established.

The practical workflow is **generate → trace → challenge → test → verify → decide**. Generate the requested output within a defined task. Trace its consequential claims to sources. Challenge the interpretation and missing alternatives. Test behaviour against meaningful cases and criteria. Verify the result through appropriate evidence and independent checks. Then decide what the output is fit to support.

These steps can be brief for a reversible internal draft and substantial for a consequential action. They describe functions, not a ceremony that every task must follow at equal length. The point is to prevent confidence in presentation from becoming confidence in an unsupported claim.

## Trace the whole sentence to its sources

**Provenance** is an account of where information came from and how it reached its current form. For the churn summary, retain the source record, customer identity within authorised handling, relevant date, version and transformations. If T18 was itself a support employee's paraphrase of a telephone call, that matters when assessing what the customer actually reported.

**Grounding** connects a claim to specified supporting material. Ask the system to link consequential statements to exact passages and to label interpretations separately. NIST's generative-AI guidance calls for verifying sources and citations during evaluation and monitoring.[^c32-n01] A visible link begins the check; it does not complete it.

Open the passage and compare it with the whole claim. Does “invoice has not yet appeared” establish a failed transfer or only an observed absence? Is the passage about the same customer and period? Does the sentence preserve uncertainty and scope? Words such as “because”, “all”, “repeatedly” and “preferred” often carry more evidential burden than the surrounding description.

A **primary source** is material directly connected to the event or work being investigated. The original customer message is primary evidence of what was written; a system record may be primary evidence of a recorded state change. A later presentation that quotes a generated summary is further removed. Which source is closest depends on the claim: the customer message establishes the report, while a relevant technical record may better establish what the software did.

Primary does not mean infallible. A customer can misinterpret a delay, a log can omit an event and an account record can contain an administrative error. **Source quality** includes relevance, completeness, collection method, incentives, time and the ability to inspect the underlying material. An authoritative-looking document cannot repair a mismatch between its contents and your question.

Keep the source boundary visible. The supplied packet contains support contacts and one cancellation record, not a representative study of every customer. People who never contacted support are absent. The ticket count is not a customer count, and a missing reason is not evidence that no reason existed. A summary should carry these limits forward.

Spot checking is useful for discovering whether a summary's claims survive contact with the originals. Start with a consequential conclusion, then inspect supporting, contrary and ambiguous examples. If one source link fails, examine whether the defect is local or part of a repeated pattern. Checking only the easiest sentence is a poor test of the conclusion that will drive the decision.

Sampling cannot establish that every unchecked claim is correct. For a short, consequential report, checking all decision-bearing claims may be practical. For a large body of material, agree a sampling and escalation approach with an analyst or researcher. State what was checked and what confidence that process can reasonably support.

Trace transformations as well as final references. The original T18 may have been shortened for a weekly support report, which was then supplied to the summariser. If the weekly report changed “has not yet appeared” to “sync failure”, the final model could reproduce an earlier interpretation faithfully. Checking only against the intermediate report would miss that change. Follow the chain far enough to assess the claim that matters, retaining a clear distinction between an event, a report of it and an explanation.

## Challenge with a different route to evidence

The next step asks what else could explain the observation. Customer B may have cancelled because of the invoice delay, another product difficulty, a business closure or a decision unrelated to Cedar's performance. These are possibilities, not findings. Their role is to expose why the available sequence does not isolate a cause.

Identify what would discriminate between explanations. A cancellation conversation, additional account history or the customer's own explanation might clarify the decision. Even an explicit customer account would establish a stated reason in context; it would not automatically quantify the effect of invoice delays across Cedar's customer base. The question and population determine what evidence is needed.

**Independent verification** uses a route that does not simply reproduce the same unchecked reasoning or source. Recalculating a total with a separate calculation method can test arithmetic. Opening the original ticket tests whether the summary preserves its meaning. Asking a colleague with relevant domain knowledge to inspect a causal claim can expose assumptions the first reviewer missed.

A second AI response agreeing with the first is not automatically independent. It may use the same sources, similar learned patterns or the first answer itself. A useful critic can identify questions, but agreement is not new empirical support. Ask what distinct error the checking route could detect.

**Corroboration** occurs when additional evidence supports a claim. Examine whether the sources are genuinely additional. Three reports may all quote T18. They then provide three copies of one report, not three independently observed delays. Another invoice-transfer incident from a different customer can support the existence of a broader problem, but still does not establish that the problem caused customer B's cancellation.

Challenge omissions as well as additions. A summary may accurately quote complaints while excluding records where the same issue was resolved and the customer stayed. Those cases could change the interpretation. Ask which material would weaken the conclusion and whether it was considered. Do not require every source to fit one theme.

Keep uncertainty specific enough to guide action. “The summary may be wrong” is less useful than “the packet contains no recorded cancellation reason, and the repetition claim rests on one ticket”. The second statement tells Cedar what to correct immediately and what to investigate next. It also allows action on a demonstrated invoice problem without pretending the churn explanation is established.

When verification finds an unsupported claim, correct the documents that depend on it. If the causal sentence has already entered a planning proposal, fixing the original summary alone leaves the proposal misleading. Record the narrower finding and explain which recommendation now needs reconsideration. This is another reason to retain provenance: it helps locate where a generated claim acquired practical influence.

## Test the task you intend to rely on

**Evaluation criteria** describe the qualities the output must have for its intended use. For a support summary, Cedar might require fidelity to sources, coverage of consequential exceptions, correct customer attribution, clear uncertainty and usable links. Concision matters, but a shorter summary that invents a cause fails the more important requirement.

A **rubric** makes criteria and assessment levels explicit. For source fidelity, Cedar could distinguish: every consequential claim supported; a minor wording issue requiring correction; and a consequential unsupported or contradicted claim. Define examples for reviewers. Do not average a serious false causal claim away by awarding high marks for grammar and formatting.

**Test cases** are inputs and conditions chosen to examine expected behaviour. Include ordinary material resembling the intended use and cases designed to expose particular weaknesses. A few hard cases cannot estimate everyday performance, while a collection of easy examples may never exercise the distinction that matters.

| Case | Expected behaviour |
| --- | --- |
| Complaint followed by cancellation with no reason | Preserve both events; do not assert causation |
| Several tickets about one continuing incident | Avoid presenting them as independent incidents |
| Explicit correction of an earlier complaint | Preserve the correction and event order |
| Similar names belonging to different companies | Keep customer histories separate |
| “Invoice was not delayed” | Preserve the negation |
| Source cannot be retrieved | Report the missing support instead of inventing its contents |

A **reference answer** describes an acceptable result where the task permits one. For T18/A04, it should require the reported delay, later subscription end and unknown reason, and forbid a proven causal connection. Several phrasings can satisfy those conditions. Comparing exact strings would reject legitimate wording while potentially missing a subtly changed meaning in a familiar sentence.

Use targeted changes to test a property. Replacing customer B's display name should not change whether causation is supported. Adding an explicit, authenticated cancellation explanation should change what the summary can report about the customer's stated reason. Research on behavioural testing has used such invariance and expected-change tests to examine language-system capabilities.[^c32-n02] The useful principle is to state which result should remain stable or change, and why.

**Adversarial testing** deliberately challenges important limits. Try conflicting records, misleading headings, irrelevant persuasive text or a document containing instructions to ignore the requested task. Use authorised test material and an isolated environment where actions could have consequences. The purpose is to discover failures before people rely on the system, not to collect theatrical examples unrelated to the work.

Check uncertainty behaviour too. If no source supports a cause, the system should be able to say so. A response that assigns a precise probability without a defensible basis has not handled uncertainty merely because it includes a number. Evaluate whether the uncertainty statement matches the missing evidence.

Quality changes with the task. A marketing-copy draft needs review for accurate claims, intelligibility, audience fit and potentially misleading promises. Several creative alternatives may be acceptable. Changing a customer's payment status requires verified account identity, an authorised operation, a valid basis in the relevant records, correct state handling and confirmation of what actually happened. A persuasive paragraph is irrelevant to whether those conditions hold.

Involve domain and technical specialists when selecting payment-state tests and other consequential cases. The product manager must explain the intended use and consequences, while specialists establish the relevant state transitions, obligations and controls. An evaluation suitable for draft wording cannot authorise financial changes.

Agree what counts as an unacceptable result before comparing candidate systems. For a source summary, an unsupported causal statement that drives action may block use even if most sentences are accurate. For a brainstorming task, an infeasible suggestion may be tolerable when it is clearly presented for screening. The same error label can therefore carry different consequences. Specify the intended handling, and examine whether the interface helps people recognise the limitation in practice.

## Make review and repetition possible

**Reproducibility** concerns whether another appropriately equipped person can repeat an evaluation and understand how its result was obtained. Record the task, source snapshot or controlled references, instructions, model or system version, relevant settings, tools, outputs, criteria and reviewer decisions. The record should be sufficient to investigate a disagreement without copying unnecessary sensitive data everywhere.

Identical wording is not always guaranteed. Retrieved sources may change, model services may be updated and generation can vary. Capture those conditions and repeat runs where variation matters. Report the observed range of behaviour instead of showing only the best response. A fixed test input and a clear expected property remain useful even when individual sentences differ.

Keep a set of reviewed cases that were not used to tune every instruction. Otherwise, a system can appear improved because the team repeatedly adjusted it to the known examples. Add failures discovered in use to the regression set, while preserving fresh cases to assess whether the change transfers. Record why each case matters.

**Human review** needs more than a button marked approve. The reviewer needs access to the source, enough time, relevant competence and the ability to reject or correct the result. A product that presents only the fluent summary while hiding the ticket makes source verification unnecessarily difficult.

For Cedar's report, show the claim and linked passage together. Let the reviewer mark supported, overstated, contradicted or unresolved, and record the correction. If reviewers disagree, inspect the cause: ambiguous source, different criterion or domain interpretation. Do not settle every disagreement by averaging scores. Some reveal a rubric defect or a question requiring specialist judgement.

Review effort also has an operating cost. If checking every summary takes longer than reading the original, the feature may not help in its current form. Narrower extraction, clearer source presentation or restricting the initial use could improve the arrangement. Measure the work of correction as well as initial reading speed when evaluating the product.

AI can assist evaluation by finding candidate unsupported claims or applying a draft rubric. Treat its assessment as another output to assess. Compare a selection with knowledgeable human judgements, inspect disagreements and check whether the evaluator saw the same sources. Letting the same untested system generate a statement and certify its correctness creates an appearance of control without a demonstrated checking method. Automated checks are most useful when their scope and failure modes are understood.

Assign ownership for detected failures. Someone must correct an overstated report, assess whether earlier decisions relied on it and decide whether use should pause. A record of an error has limited value if no one can act on it. Verification belongs to an operating process, not only a test conducted before launch.

## Decide what the evidence permits

After tracing the churn summary, Cedar can correct the causal sentence and investigate the reported invoice delay. It can seek better cancellation evidence before making a churn claim. Those are concrete next steps, even though the original conclusion has failed verification. Learning what the records do not establish is useful progress.

State the proposed use and the evidence supporting it. A reviewed internal summary used to plan research differs from an unattended report used to allocate staff, contact customers or change accounts. Passing one evaluation does not grant permission for every later use. Reassess when the task, population, sources, system or consequences change.

Verification effort should rise with consequence and irreversibility. An editable internal heading can tolerate a quick check. A claim that shapes a large investment needs stronger source and reasoning review. A payment mutation needs reliable authority and operational controls as well as correct interpretation. Reversal may involve customer confusion, reconciliation and trust, even when a database value can be changed back.

Make the decision explicit: proceed for a limited use, revise and retest, obtain missing evidence, involve a specialist or stop. Include who accepts remaining uncertainty and how problems will be detected. An evaluation report with no resulting decision can become documentation that nobody uses.

Preserve failures alongside improvements. If a revised instruction fixes false causal claims but starts omitting explicit customer reasons, the change has traded one defect for another. Re-run the relevant cases and describe the trade-off. “New version” is a description of change, not evidence of improvement, and a previous approval should not conceal a newly important weakness.

For practice, take the opening churn sentence and mark every claim that exceeds the packet. Write a corrected summary and one question that could establish a stated cancellation reason. Then design three tests: an ordinary case, a case with a misleading temporal sequence and a case where an essential source is unavailable. Specify acceptable content and a failure that would block use.

Finally, name the checking route and reviewer for an internal research summary, then repeat the exercise for a proposed payment-status change. If the two plans are identical, examine the consequences more carefully. The discipline is complete when you can explain what the output is supported to do, how that support was checked and where reliance must stop.

## Notes

[^c32-n01]: NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (July 2024), MEASURE 2.3/2.5, especially MS-2.5-003; human evaluation in MEASURE 1.3. [Profile](https://doi.org/10.6028/NIST.AI.600-1). The chapter's worked tickets and evaluation criteria are original.

[^c32-n02]: Marco Tulio Ribeiro, Tongshuang Wu, Carlos Guestrin and Sameer Singh, “Beyond Accuracy: Behavioral Testing of NLP Models with CheckList” (2020), §2.2, printed p.4904. [Original paper](https://aclanthology.org/2020.acl-main.442.pdf). Cited for test design distinctions, not historical failure rates or a claim about current model performance.

## References

National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*. NIST AI 600-1. July 2024. [DOI and publication](https://doi.org/10.6028/NIST.AI.600-1).

Ribeiro, Marco Tulio, Tongshuang Wu, Carlos Guestrin and Sameer Singh. “Beyond Accuracy: Behavioral Testing of NLP Models with CheckList.” *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 2020, pp.4902–4912. [Publisher record and paper](https://aclanthology.org/2020.acl-main.442/). DOI:10.18653/v1/2020.acl-main.442.
