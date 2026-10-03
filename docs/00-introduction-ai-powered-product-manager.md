# Introduction: The AI-Augmented Product Manager

## An answer is now a starting point

You can ask an AI assistant to explain a technical term, summarise a report, compare business models or suggest reasons why customers abandon a task. You can request a first version of a spreadsheet model, a piece of code or a plan for investigating a problem. Work that once began with a blank page can begin with material to examine. That changes the effort involved in obtaining a plausible answer. It leaves you with the question of what the answer deserves to influence.

Amira manages the booking service at a leisure centre. When a family cancels a child's swimming lesson, reception staff telephone families on a waiting list. Amira is considering an automatic message that would offer the place to the next family. She asks an AI assistant whether automation would reduce reception work. In this illustrative exchange, the assistant recommends the change, explaining that families could accept places themselves and staff would make fewer calls.

The suggestion has an understandable mechanism. A message could replace a telephone call. But Amira has not supplied the number of cancellations, the time staff spend making calls, the frequency of replies or the procedure when two families believe they have the same place. The recommendation leaves those gaps hidden beneath a confident conclusion. Amira needs to decide what to investigate before proposing a change to the booking service.

She could forward the answer to Joel, the reception manager, as a recommendation to implement. She could also use it to start a more useful discussion: which part of managing cancellations creates work, and what would happen to that work under the proposed arrangement? The same generated text can become an unexamined instruction or a starting point for investigation. Her judgement determines which role it plays.

Research offers a reason to pay attention to that distinction. In an experiment with management consultants, AI assistance improved performance on a set of selected tasks but reduced correctness on another task. The experiment used a particular system and particular work; its results do not predict the effect on Amira's booking service.[^intro-n01] They demonstrate why success on one assignment cannot settle whether assistance will be useful on the next.

The central argument of this book is that **judgement becomes relatively more important when information and generated expertise become abundant**. Generated expertise means explanations and analyses that resemble specialist work. Their availability gives you more opportunities to learn, compare and question. Their appearance does not establish that the reasoning is sound or that the speaker has professional competence. You still need to recognise the decision, examine its premises and determine who can check what matters.

## One decision crosses several disciplines

Amira's proposal looks like a small booking feature. Understanding it requires several kinds of knowledge. An interaction designer can examine whether a parent understands when an offered place expires. Someone familiar with daily reception work can explain what happens when a family telephones while an automatic offer remains open. An engineer can assess how the system reserves a place while waiting for a response. These are different questions about the same proposed change.

Economic reasoning also matters. If sending a message reduces telephone calls but increases disputed bookings, the centre may save time in one activity and use more in another. The relevant comparison includes the costs of handling both activities. Attention to people's circumstances raises further questions: can families act on a message during working hours, and does the arrangement disadvantage people who cannot reply quickly? A technically functioning feature may distribute opportunities differently.

Before making claims about improvements, Amira needs evidence. She may have to distinguish an unusual week from a continuing pattern or compare groups whose circumstances differ. That introduces reasoning about measurement and uncertainty. If the centre changes how it stores children's information or contacts families, appropriate privacy and legal advice may be needed. Security specialists may need to examine who can view or change a booking. Knowing that these questions exist is already part of product competence.

This book uses **product manager** broadly: someone with substantial accountability for decisions about what a product should become. You may hold that job title, lead a service, run a business or have recently taken responsibility for an internal tool. The term is independent of any particular agile framework. It describes the responsibility being examined, without assuming that one person has sole authority over every decision.

Amira can bring the booking proposal together, explain the available options and recommend a next step. She cannot create staff capacity by writing a requirement or authorise every use of personal information herself. Accountability includes knowing whose knowledge and authority the decision requires. It also includes making disagreements visible enough to resolve. A reception manager's account of practical work and an engineer's account of system behaviour may describe different parts of the same difficulty.

No product manager can become deeply qualified in all the fields a product touches. Engineering, human behaviour, economics, marketing, statistics, operations, law, security and industry knowledge each contain more than a working professional can master alongside a product role. Yet complete dependence on other people's conclusions presents another difficulty: someone must understand how those conclusions fit together. Broad foundations help you ask coherent questions, recognise conflicting assumptions and connect a specialist's answer to the product decision.

Breadth also helps you notice when the original question is too narrow. Amira asks about reducing calls, but a useful booking service must allocate places understandably and handle cancellations fairly. Learning enough about the surrounding work can change what she needs to ask. The purpose of that learning is a better investigation and decision, rather than a longer document filled with unfamiliar vocabulary.

## Learn enough to make the next judgement

The capability model developed here combines **broad foundations, AI-assisted situational specialisation and expert collaboration**. Broad foundations help you recognise the kind of problem you face. Situational specialisation means developing more depth where a particular decision requires it. Expert collaboration brings the experience, methods and professional authority that a short learning effort cannot supply. You can use all three together; you do not need to finish studying before approaching a specialist.

For Amira, a foundation in systems thinking suggests following a cancellation through the activities it triggers. She learns more about temporary reservations because an automatic offer needs some way to avoid allocating one place twice. She then asks an engineer to explain the actual booking system's behaviour. Her learning makes the conversation more precise. The engineer's answer can correct her understanding before it becomes an assumption in the proposal.

The book calls the required working capability **minimum viable expertise**: enough knowledge to recognise a relevant issue, understand essential concepts, investigate further, assess weak reasoning, communicate with specialists and recognise the limits of your competence. The appropriate level depends on what you are trying to do. You may need enough knowledge to commission an assessment, compare options or recognise that a decision must wait. Those are useful capabilities even when you cannot perform the specialist assessment yourself.

Minimum does not mean careless, and viable does not mean universally sufficient. Understanding what an access-control review is for would help Amira commission one. It would not qualify her to certify the booking system's security. Being able to explain a statistical test does not establish that she can design a credible study of a small, highly variable service. A working vocabulary is useful only when it supports reasoning and accurate recognition of boundaries.

An **accelerated generalist** builds this kind of understanding as the situation demands. AI can help by explaining terminology, generating examples, offering practice questions and challenging an initial account. The learner must still assess the material, attempt the reasoning and compare it with appropriate sources and experience. The acceleration concerns parts of the learning work; it does not promise immediate mastery or remove the need to practise.

Foundations make subsequent learning easier to organise. The National Academies' review of learning research explains how prior knowledge can support new learning and also lead people towards familiar interpretations that do not fit a new situation.[^intro-n02] For product work, that suggests a practical discipline: use what you know to identify questions, then test whether the situation actually has the properties your explanation assumes.

Amira may recognise the waiting list as a queue, but that label leaves important questions open. Families may have different availability, children may require different lesson levels, and an offered place may need a reply before another family can be contacted. She must establish which of these conditions applies. Useful depth consists partly in understanding why the differences matter and how to investigate them. Repeating a correct definition of a queue would not accomplish that.

## Assistance changes the work of checking

Amira rewrites her request to the assistant. She explains the current telephone process, identifies Joel's operational responsibility and states the decision she faces. She asks for help identifying uncertainties before proposing automatic offers. The following prompt illustrates a bounded task:

> A leisure centre offers cancelled swimming-lesson places by telephoning families on a waiting list. We are considering automatic messages with a way to accept a place. We have not measured cancellation frequency, call duration or response rates. Identify three questions that could change whether we pursue this proposal. For each question, explain the decision it affects, the information needed and who could help obtain that information. Treat reduced workload as a hypothesis. Do not invent findings about families or staff.

One useful candidate question is how a place is reserved while staff wait for a reply. An answer could explain that simultaneous offers require rules for expiry, acceptance and conflicts. Amira can check whether those issues follow from the proposed process and ask the engineer what the existing system supports. The assistant can make the investigation more organised without establishing what that investigation will find.

Another question concerns reception work. Joel can trace what happens before a call, during an unsuccessful call and after a family accepts. He may need to observe several cancellations or examine authorised records before giving a reliable account. If the assistant claims that telephone calls consume most reception time, Amira should ask where that claim came from. Nothing in the prompt supports it. An articulate explanation does not turn the missing measurement into a fact.

This is a specific check you can perform whenever AI contributes to a product decision: separate statements supported by supplied material from proposed explanations and unanswered questions. Then choose a check suited to the claim. Inspect a source for a factual statement, recalculate a numerical result, observe a workflow, ask the person responsible or test the behaviour with an appropriate specialist. A second generated answer may suggest a useful objection; agreement between answers does not replace evidence about the situation.

AI can amplify sound investigation and weak assumptions. If Amira copies an unsupported workload saving into a cost model, a proposal and a staff briefing, the assumption can influence several decisions before anyone notices its origin. If she instead records the assumption and seeks evidence, assistance can help her compare explanations and prepare more focused questions. The difference lies in how the work is organised and checked.

**Accountability** means being able to explain the decision process, respect the authority of others, arrange proportionate checks and respond to the consequences. It does not require Amira to verify every engineering detail personally. The **specialist boundary** is the point at which the task needs deeper knowledge, professional qualification or authorised assessment. Recognising that boundary is a competence to develop. It allows you to make a useful contribution while ensuring that the right person performs the work on which the decision depends.

## What you will practise

*Full-Stack Product Manager* develops foundations in people and experience, value and markets, software and engineered systems, evidence and decisions, and the practical use of AI. It connects those foundations through product work: discovering opportunities, choosing a direction, evaluating solutions, delivering change, creating adoption, operating a product and eventually deciding what to stop. The emphasis is on what a concept lets you recognise, investigate or decide.

You will encounter unfamiliar terms, but you do not need programming, statistics or economics training to begin. Explanations start with people, actions and consequences. When a calculation helps, its quantities and assumptions are explained. A worked example should leave you able to follow the reasoning, identify a condition that could change the conclusion and ask for the information needed to examine that condition in your own work.

The book develops durable knowledge. The difference between a recorded event and a causal explanation remains useful when analytics tools change. The need to understand who can authorise an action remains useful when software interfaces change. A particular menu, vendor offering or model version may have a shorter useful life. You should learn enough of those details to perform the current task while retaining the concepts that help you investigate their replacements.

Cedar is the book's recurring fictional case: an operations product for small and medium-sized field-service businesses, such as plumbing, electrical and maintenance companies. It supports scheduling, dispatch, job histories, technician mobile access, customer notifications, invoicing, payments, recurring services, reporting and connections to other business systems. Its starting commercial arrangement is a subscription with some usage-dependent charges. Later examples explore proposals, failures and changes at different stages of its development.

The business buying Cedar and that business's customer are different participants. A plumbing company pays for the product; a homeowner may experience its appointment messages without buying or using the software directly. Cedar's own product team also differs from the service company's dispatcher and technicians. Keeping these people distinct helps us examine who benefits, who bears a cost and who has the information or authority needed to change an arrangement.

Cedar gives the disciplines a shared setting, while examples from other services, internal tools, physical products and marketplaces test how far the reasoning travels. The case's events illustrate decisions; they do not provide research evidence about real customers. Reading order follows the ideas being taught, so some later chapters revisit an earlier choice or examine another possible stage. You can follow each scene through the local facts it establishes.

The book does not confer specialist qualifications or supply an exhaustive collection of templates. It does not require a delivery framework, technology stack, AI provider or commercial model. Nor does it assume that using AI is always the best next action. Sometimes you need an explanation; sometimes you need to look at the actual work, speak with a person, inspect a system or stop a proposal until a specialist has assessed it. The goal is to distinguish those situations more reliably.

## A route through the book

Reading in sequence gives you a curriculum. The opening chapters establish product boundaries, value, evidence, systems and the learning model. The disciplinary parts add ways to reason about people, economics, markets, technology and uncertainty. The AI chapters examine assistance and automation more directly. The later parts bring these ideas together in product practice and show how to enter an unfamiliar domain without confusing rapid orientation with professional mastery.

You can later use the book as a reference when a decision reveals a gap. A pricing proposal may send you back to economic reasoning and incentives. A release problem may require reliability, integration and communication. Begin with the immediate question, then follow the dependencies that could change its answer. You need not reread the entire book whenever a new issue arises, and you need not force every decision through every discipline.

Make your reading active by keeping one real decision in mind. Describe the people involved, what they currently do and the change under consideration. Identify what you know directly, what others have reported and what remains assumed. As you encounter an idea, ask what it helps you notice in that situation. If the answer is only a new label for the same unclear description, return to the example and try to make the action or relationship concrete.

An AI assistant can support that practice. Ask it to explain a concept using a different example, challenge an assumption or generate a small problem for you to solve. Attempt your own explanation before comparing it with a proposed answer. Check unfamiliar factual claims against suitable sources. Use information you are authorised to share, and keep sensitive organisational or personal material out of learning exercises unless the tool and use have been approved.

Discuss the resulting questions with people who know the work. For Amira, a productive outcome from learning is a clearer conversation with Joel and the engineer: how are places offered today, what information is missing, and what would need to be true for automatic offers to help? She can decide what to investigate next without pretending the investigation has already established an improvement. The proposal becomes more useful as its uncertainties become more specific.

You can carry the book's thesis in three sentences. Product decisions cross disciplines, so broad foundations help you recognise what matters and connect different kinds of advice. AI can help you acquire useful depth for a particular situation, provided you check what it produces and understand your limits. Judgement consists in bringing evidence, context and specialist knowledge together to decide what to investigate, change, maintain or stop.

The first step is to examine the thing you are responsible for. A screen or feature may provide a convenient starting boundary. Whether that boundary includes the people and dependencies needed to understand the decision is another question, and it is where the book begins.

## Notes

[^intro-n01]: Fabrizio Dell'Acqua and colleagues, “Navigating the Jagged Technological Frontier”, *Organization Science* (2026), abstract and §3, “Methods”. The study used a 2023 experiment; publication year is 2026. [Published paper](https://doi.org/10.1287/orsc.2025.21838).

[^intro-n02]: National Academies of Sciences, Engineering, and Medicine, *How People Learn II* (2018), Chapter 5, “Knowledge and Reasoning”, especially its discussion of prior knowledge and bias. [Read Chapter 5](https://www.nationalacademies.org/read/24783/chapter/7).

## References

Dell'Acqua, Fabrizio, Edward McFowland III, Ethan Mollick, Hila Lifshitz, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon and Karim R. Lakhani. 2026. “Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality.” *Organization Science*. Published online 11 March. [doi:10.1287/orsc.2025.21838](https://doi.org/10.1287/orsc.2025.21838). Abstract and §3 inspected in the [author-hosted published PDF](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf), accessed 3 October 2026.

National Academies of Sciences, Engineering, and Medicine. 2018. *How People Learn II: Learners, Contexts, and Cultures*. Washington, DC: The National Academies Press. Chapter 5, “Knowledge and Reasoning”. [doi:10.17226/24783](https://doi.org/10.17226/24783). [Chapter text](https://www.nationalacademies.org/read/24783/chapter/7), accessed 3 October 2026.
