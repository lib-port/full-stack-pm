# Chapter 29: What AI Can and Cannot Do

## A fluent summary can change the job

“Valve inspected. Replacement recommended. Part unavailable. Return visit required.” A technician has entered that note after a repair visit. Cedar's product manager is considering an AI summary to help the next technician prepare. The distinction between work completed and work still required must survive the shortening.

Compare two illustrative summaries:

> The valve was inspected. Replacement remains outstanding because the part was unavailable; a return visit is required.

> The technician replaced the valve and arranged a follow-up visit.

The first preserves the recorded work and its limits. The second invents both a completed replacement and an arranged appointment. A subsequent technician relying on it could prepare for the wrong task. Both sentences are clear English. Reading smoothly is not the quality that separates them.

These examples show a product decision, not the result of a model test. Cedar needs to establish whether a proposed system can preserve consequential information across the notes it will actually receive, and what should happen when it cannot. A demonstration containing one good summary would not settle that question.

Generative AI produces content, such as text, images or audio, using learned patterns and the information available to it. Producing a summary is one possible task. The system's ability to write a plausible account does not mean it has checked what happened at the property. The technician's original record and any other authorised evidence remain necessary to assess the account.

An unsupported generated statement is commonly called a **hallucination**; NIST uses **confabulation** for confidently presented erroneous or false content.[^c29-n01] The useful question is concrete: what did the output claim, what supports that claim, and what would happen if someone relied on it? A missing negation can matter more than an obviously bizarre paragraph.

The capability and the limitation arise together. A system that reorganises rough language can make a handover easier to read. That same freedom to compose language allows it to add, omit or alter meaning. Restricting the task, supplying relevant material and checking results can help, but each is part of a designed working arrangement. None follows automatically from calling the feature a summary.

To reason about that arrangement, separate the model from the product surrounding it. The model produces outputs. The product selects inputs, obtains records, handles permissions, presents results and determines what actions become possible. A failure may originate in any of those places.

## What was learned, and what happens now

An AI **model** is a computational structure whose parameters help determine how it maps inputs to outputs. In machine learning, **training** adjusts those parameters using examples and a training objective. **Inference** uses the trained model to produce an output for a supplied input.[^c29-n02] Here, inference means running a model; it does not certify that a conclusion follows logically from evidence.

For a language model, training can develop patterns useful for producing language across many tasks. Further training may shape instruction following or behaviour for a particular application. The details vary. You do not need to inspect every parameter to understand the product consequence: the system brings learned regularities to a new task, and those regularities need not match the task's facts.

Sending Cedar's note in a request is ordinarily supplying information for inference. It is not the same operation as retraining the model on that note. A service may separately store inputs or use data under its arrangements; those are questions about the actual service and agreement. Do not infer its data practices from the fact that the answer appears to use the note.

A **representation** is a form in which information is encoded for processing. In neural models, learned numerical representations can capture useful relationships between words, images or other inputs. Related expressions can therefore be processed together without being identical strings. That helps explain how a system can connect “part unavailable” with “replacement outstanding”. It does not establish that the unavailable part was ordered or later installed.

An **embedding** is one kind of numerical representation.[^c29-n03] You may encounter embeddings when engineers describe searching for related passages. The practical question is whether the representation and search identify material relevant to the task. Numerical similarity alone does not establish agreement, truth or the same customer identity.

A **generative model** produces content rather than merely returning a fixed category or an existing database field. This makes it suitable for exploring phrasing, combining supplied information and proposing alternatives. Other AI models may classify a message or estimate a quantity without generating a paragraph. “AI” names a broad field, so establish which capability a proposal actually uses.

The model is also not a conventional database of verified statements. Some training information can be reproduced, and learned knowledge can support useful answers, but a response does not necessarily come with a retrievable source for every statement. Asking “Where did you learn that?” can itself produce another generated answer. When provenance matters, obtain and inspect actual supporting material.

For Cedar, the current note should carry more evidential weight than a general pattern about how repair visits usually end. A product requirement should make that priority explicit and test whether it survives unusual or incomplete records.

Changing the model and changing the surrounding instructions are therefore different interventions. If a summary drops outstanding work, the cause might involve task wording, missing input, a model limitation or presentation that hides the qualification. Engineers can investigate those possibilities. Buying a more capable model is one possible response, but it should follow a diagnosis of the failure and evidence that the proposed change addresses it.

## Why the next words are not a truth check

A **token** is a unit a model processes; in text, it may be a word, part of a word or another character sequence. A common language-generation process assigns probabilities to possible next tokens using the supplied context and the text already produced. A selection procedure chooses how to continue. The probability attached to a continuation is not automatically the probability that its factual claims are true.

Suppose many descriptions of repair visits end with successful completion. That general pattern gives no evidence that this valve was replaced. The relevant evidence is the technician's note, including “recommended” and “unavailable”. Producing familiar language and faithfully preserving those details are different requirements. NIST's account of confabulation makes the same distinction between statistical generation and factual reliability.[^c29-n01]

**Context** is the information supplied for the current processing, such as instructions, conversation, documents and tool results. A **context window** limits how much a model can process in a request.[^c29-n03] The surrounding application may select, shorten or retrieve material before the model receives it. A file visible somewhere in the product is not necessarily present in the model's current input.

Incomplete context creates specific limits. If the return appointment was arranged in a separate telephone conversation but never supplied, the summary cannot establish its time from the note alone. It should preserve the unknown. More context is useful only when it is relevant, sufficiently reliable and available in a form the system can use.

Outputs can also vary across repeated runs. **Nondeterministic behaviour** means the same apparent request may not always yield the same output. Sampling choices, system configuration and changing retrieved material can contribute to variation. Some deployments constrain variation strongly; repeatability must be checked for the actual system rather than assumed from the label AI. A repeated answer can still be wrong.

**Multimodality** means handling more than one kind of input or output, such as text, images and audio.[^c29-n03] Cedar might consider a spoken note or a photograph alongside text. That extends the information routes and the things to check. A transcription could miss a negation; a photograph might omit the relevant component; an image description could identify something incorrectly.

Adding a photograph does not give the system the technician's full physical context. Ask what information each input actually contains and what interpretation is being added. If the next task depends on a specialist assessment of equipment, a plausible description must not silently become that assessment. The model's fluent wording does not reveal where the evidence ends.

## Keep retrieval, generation and action separate

**Retrieval** obtains existing information from a source, such as a document collection or a job-record service. **Generation** composes an output. A system may retrieve the latest authorised technician note and then generate a summary from it. Those are two operations, each with its own failure modes.

The retrieval could return the wrong job, an older version or only part of the history. The generation could correctly use the retrieved passage but misstate its meaning. Inspecting the summary without knowing which passage was retrieved cannot distinguish these failures. Keep source identity, relevant time and version available wherever the resulting claim depends on them.

**Grounding** connects an output to specified information or evidence that should support it. Retrieval-augmented generation combines fetched material with generation; Lewis and colleagues' original research describes retrieved documents serving as additional context.[^c29-n04] The mechanism provides a route to source material. It does not make every retrieved source correct or every generated statement supported.

A link beside “valve replaced” is useful only if the linked passage establishes replacement. A citation can point to the right document while supporting the wrong sentence. Likewise, a current search result can reproduce an old policy. Check the content, date and relevance of the source rather than treating retrieval as a truth switch.

This matters for **stale information**. A model's learned material may not reflect a later product change or a newly recorded appointment. Retrieval can supply newer information, but only if the source is current and the system actually obtains it. Ask where time-sensitive claims came from and which point in time they describe.

A **tool** lets the surrounding system request a defined operation, such as searching records, calculating a total or changing an appointment. The model may produce a request for the tool; software validates and executes the operation within its permissions. Writing “I have updated the visit” is not evidence that an update occurred. The actual operation and resulting state must be checked.

Tools can improve a bounded task. A calculation service can compute an invoice total from supplied numbers, while the model explains the result. But the numbers and operation still need to be right. A perfectly executed calculation on the wrong job remains wrong for the customer.

For the proposed summary feature, Cedar can begin with access to specified records and no authority to change them. Whether later features should take action is a separate decision. Distinguishing these components prevents a useful writing capability from quietly acquiring responsibilities that have not been examined.

## Choose a bounded contribution

Choose the contribution you want before judging whether a system is useful. The following tasks describe possible working roles, not promises that every model performs them adequately. Each needs representative checks in its actual setting.

| Contribution | Useful output to request | Check before reliance |
| --- | --- | --- |
| Transformation | Reformat a technician note into completed work, outstanding work and unknowns | Compare every field with the source; preserve negation |
| Explanation | Explain an unfamiliar integration concept in ordinary language | Check the mechanism with documentation and a knowledgeable colleague |
| Synthesis | Bring together several accounts of import difficulties | Retain source links, conflicting cases and missing populations |
| Pattern assistance | Suggest recurring categories in support records | Inspect examples and counterexamples; distinguish one incident from many tickets |
| Generation | Propose several ways to present a schedule conflict | Assess feasibility and test understanding with relevant people |
| Classification | Assign records to defined issue categories | Compare with reviewed examples, including ambiguous cases |
| Translation | Draft a customer message in another language | Check consequential meaning with a competent speaker |
| Structured reasoning support | Lay out alternatives, assumptions and consequences | Verify inputs, logic and calculations independently |

The common benefit is a contribution that someone can inspect and connect to a task. For Cedar's note, transformation may be more useful than an open request to “analyse the repair”. Specifying completed work, outstanding work and unknowns makes the necessary distinctions visible. The format supports checking; it does not guarantee accurate classification.

Explanation can be valuable when acquiring minimum viable expertise. Ask for a concrete example, a boundary case and a question a specialist would raise. Then explain the mechanism yourself and compare it with a trusted source. Copying an explanation into a document does not establish that either you or the system has correctly applied it.

Outside Cedar, a museum could use generated alternatives to explore labels for an exhibition. Visitors still determine whether the wording communicates effectively, and curators still establish historical accuracy. One system might contribute draft language while the evidence and authority come from elsewhere.

Select tasks partly by how readily you can notice and correct a failure. Suggesting alternative internal headings is different from summarising information that another person will use without opening the original. Where verification would require expertise you lack, plan access to that expertise before delegating the work. Otherwise, an apparently efficient draft may simply move uncertainty to someone less able to see it.

Also consider whether the output invites an inappropriate next action. A suggested category headed “repair complete” could influence dispatch even if the accompanying paragraph mentions pending work. Assess the whole presentation and how people use it, not just whether an isolated sentence is defensible. For the proposed summary, preserve the original note, distinguish generated content and make outstanding work easy to inspect. These are design proposals whose usefulness still needs testing with technicians.

## Locate uncertainty before relying on the answer

Several limitations can coexist in one plausible answer. **Brittle reasoning** means a conclusion can fail when a detail changes, even though a similar-looking task was handled adequately. Cedar's summary must cope with “not replaced”, “replacement declined” and “replacement completed” as different states. Success on the simplest note does not establish dependable handling of those distinctions.

**Hidden uncertainty** arises when the output gives no reliable indication of what is unsupported or difficult. “I am confident” is generated wording unless it is linked to an evaluated measure with an understood meaning. Asking for uncertainty can make review easier, but the declared uncertainty still needs checking against the evidence.

**Bias** can enter through training material, supplied records, category definitions and the way results are used. For example, classifying a terse note as uncooperative could mistake writing style for behaviour. Define the relevant action and evidence, examine contrasting cases and involve people who understand the work. Do not infer an employee's attitude from a generated label.

Source problems include omissions, mistakes, conflicting records and material that should never have been supplied. A faithful summary of a mistaken note can still mislead the next technician. Keep the distinction between fidelity to a source and accuracy about the world. Sometimes the next action is to clarify the original record, not to improve the summary.

For practice, inspect the two opening summaries. Underline every assertion about completed work, pending work and appointments. Link each to the original note. Then add this sentence to the note: “Customer will call to choose a return date.” Identify which summary statements are now supported and which remain false. The added sentence still does not establish that an appointment was arranged.

Before proposing a working feature, involve technicians in judging consequential omissions, engineers in examining the retrieval and model pipeline, and security or privacy colleagues in deciding which information may be processed and retained. Product judgement connects these contributions and defines the intended use; it does not replace specialist evaluation.

A useful mental model now has several parts: learned capabilities, current inputs, retrieved evidence, generated claims, optional tool actions and people who rely on the result. Cedar can assess the proposed summary by tracing those parts. That account explains why AI can make work easier while still requiring deliberate limits and evidence at the point of use.

## Notes

[^c29-n01]: NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (July 2024), §2.2, printed p. 6. [Profile](https://doi.org/10.6028/NIST.AI.600-1). Supports the confabulation definition and distinction between generation and factual reliability; no failure rate is claimed.

[^c29-n02]: Google, *Machine Learning Glossary*, “Model”, “Training” and “Inference”. [ML fundamentals](https://developers.google.com/machine-learning/glossary/fundamentals) and [generative AI](https://developers.google.com/machine-learning/glossary/generative). Narrow technical definitions; no vendor capability recommendation.

[^c29-n03]: Google, *Machine Learning Glossary*, “Embedding vector”, “Token”, “Context window” and “Multimodal model”. [Glossary](https://developers.google.com/machine-learning/glossary). The chapter's job-note examples are original.

[^c29-n04]: Patrick Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, *Advances in Neural Information Processing Systems* 33 (2020), §2, “Methods”. [Author paper, revised 2021](https://arxiv.org/html/2005.11401v4). Cited for retrieval supplying context, not historical benchmark scores or universal reliability.

## References

Google. *Machine Learning Glossary*. [Full glossary](https://developers.google.com/machine-learning/glossary); [fundamentals](https://developers.google.com/machine-learning/glossary/fundamentals); [generative AI](https://developers.google.com/machine-learning/glossary/generative). Accessed 3 October 2026.

Lewis, Patrick, et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” *Advances in Neural Information Processing Systems* 33 (2020). [Author paper](https://arxiv.org/html/2005.11401v4), revision 12 April 2021.

National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*. NIST AI 600-1. July 2024. [DOI and publication](https://doi.org/10.6028/NIST.AI.600-1).
