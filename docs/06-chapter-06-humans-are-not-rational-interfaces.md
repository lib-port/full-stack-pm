# Chapter 6: Humans Are Not Rational Interfaces

## The conditions are part of the task

In an office demonstration, a maintenance technician completes Cedar's job form while a colleague explains each screen. Later, the technician stands outside a customer's building wearing gloves, with another appointment approaching. The mobile connection is weak. Halfway through recording the repair, the customer asks a question. When the technician returns to the form, it is unclear whether the last entry was saved or whether the office received it.

The demonstration and the field visit involve the same software and the same person. They do not involve the same task conditions. In the office, instructions are available, interruptions are controlled and the demonstrator knows what should happen next. Outside, the technician must divide attention between the customer, the repair, the device and the next appointment. Cedar's product manager needs to establish how the interaction works under those demands.

**Attention** is the selection of information and activity for further processing. A screen competes for it; the screen does not own it. A technician looking for a leak may not notice a small status message, even if that message is visible in a screenshot. Increasing the message's prominence may help, but the first question is whether that is the right moment to demand attention at all.

An interruption can also expose a missing point of return. After answering the customer, the technician needs to know which steps are complete, what remains unsent and what action is safe. If the interface requires remembering the previous state, it makes recovery depend on information that was relevant before the interruption. The design question concerns continuity, not simply how many seconds a screen takes to use.

Research should make us careful about simplistic claims. In a laboratory study by Gloria Mark, Daniela Gudith and Ulrich Klocke, participants performing an email task worked faster under interruption while reporting greater stress and effort. The study did not find a significant difference in its error measure across interruption conditions.[^c06-n01] It would therefore be wrong to cite it as proof that interruptions always slow work or always increase mistakes. It does show why completion time alone can miss an important cost.

For Cedar, record the conditions alongside the task: light, noise, protective clothing, connectivity, interruptions, urgency and available information. Then ask which demands the product adds and which it can reduce. The technician cannot ignore a customer's question merely because a form is unfinished. A suitable design must account for the work the person is actually responsible for doing.

## What the interface asks people to remember

**Working memory** refers to holding information available while using it. The technician may need to remember a part number long enough to enter it, compare the repair with the customer's request, and retain a question for the office. These activities compete with the form's demands. Treat working memory as a limited resource, without turning a laboratory estimate into a universal maximum number of menu items.

Consider a form that requires the technician to copy a job code from one screen, open another screen and enter the code before adding a note. The product has created a memory task that the repair itself does not require. Keeping the note attached to the selected job would remove the need to carry the code mentally. Before asking people to concentrate harder, ask why they must remember the information at all.

W3C's cognitive accessibility guidance recommends reducing dependence on memory and keeping relevant information available during a process.[^c06-n02] Applying that principle to Cedar suggests showing the customer's name, job address and unfinished entry together. The recommendation is a design hypothesis about this workflow; the details still need to be checked with technicians, including those with cognitive access needs.

**Cognitive load** is the mental demand involved in completing a task. Some of that demand belongs to the work: the technician must decide how to describe an unusual repair. Other demand comes from the interaction: deciphering unexplained codes, finding a hidden control or determining whether two similar statuses mean different things. A simpler screen is useful when it removes avoidable effort. Removing information that supports a difficult decision can make the task harder despite making the screen look cleaner.

The distinction between **recognition and recall** helps expose unnecessary demands. Recall means producing information from memory; recognition means identifying something when it is presented. Selecting the relevant job from a clear list provides cues that typing an unseen job identifier does not. Recognition is not a guarantee of correctness: several customers may share a surname, and a long list can be hard to search. Supply distinguishing information rather than assuming that any visible choice is easy.

Ask the technician to resume the form after an ordinary interruption. Can they tell which record they were editing? Can they see what they entered? Can they distinguish information stored on the device from information received elsewhere? Observe the recovery, including any rereading or repeated entry. Do not interpret a completed form as proof that the recovery was effortless.

Information can also be externalised outside software. A labelled part tray, a checklist or a note attached to equipment may support the job. Observe those arrangements before trying to remove them. If the product manager dismisses every paper note as resistance to technology, Cedar may replace a useful reminder with a hidden screen. The relevant comparison is how well the combined arrangement supports the work.

## Expectations, habit and reasons to act

People use an interface with expectations about how it works. A **mental model** is their working account of the system: what an action does, where information goes and what a visible state means. The model may be incomplete while still being useful. Problems arise when the account guiding an action differs from the behaviour that matters.

Suppose Cedar's interface displays “Saved” after storing a note on the technician's device. The technician interprets “Saved” as “the office can now read it”. An engineer may consider the label technically correct because local storage succeeded. The product manager should investigate which meaning the technician relies on. If office receipt matters to the next action, the distinction needs to be visible in terms that support that action.

The remedy is not necessarily a longer explanation of synchronisation. The interface could distinguish “Saved on this device” from “Received by the office”, provided the system can establish both states. These are proposed labels, not evidence that technicians understand them. Test what people believe has happened after seeing each label. A clear-sounding phrase in a design meeting can still support the wrong expectation.

**Habit** describes a learned response that becomes associated with a familiar cue or situation. In product work, look for repeated actions that people no longer examine closely each time. A technician accustomed to tapping the bottom-right control to save may continue that action after a redesign puts a different function there. The possibility is a reason to investigate the change, rather than an accusation that the technician is careless.

Consistency can preserve useful habits, while a deliberate interruption may be appropriate for a consequential change. Ask which familiar action you are preserving and whether its consequence remains the same. Keeping a button in its old position while changing its meaning may preserve appearance and disrupt behaviour. Conversely, moving every control to highlight a redesign can impose relearning without helping the task.

**Motivation** concerns the reasons and priorities that support action. The technician may care deeply about a reliable job record while postponing optional fields because the customer is waiting and the next appointment is near. A manager who interprets every incomplete field as low motivation may miss a conflict between duties. Ask what the person gains from entering the information, what other work competes, and who benefits later.

Make the purpose of a requested entry visible where it helps. If a short access note lets the next technician find the right entrance, explain that purpose. Also examine whether the entry is actually needed and whether the current technician has the answer. Motivation cannot compensate for unavailable information. A mandatory field that demands a fact the technician does not know can encourage a guess merely to continue.

These concepts work together. Habit guides where a person acts, a mental model shapes what they expect, and motivation affects which task they prioritise. Treat them as questions for investigation. You cannot reliably infer an individual's motivation or cognitive state from one click, one missed field or one complaint.

## Reasonable shortcuts and expected errors

A technician cannot evaluate every possible action from complete information before each decision. Time is limited, information is partial, and other people need answers. **Bounded rationality** describes reasoning under such limits. Herbert Simon's foundational account examined models of choice that recognise limits in knowledge and computational capacity.[^c06-n03] For product managers, the practical implication is to examine what a person can reasonably know and do at the moment of choice.

A **heuristic** is a simplifying rule used to reach a judgement or choose an action. “Check the latest message from the dispatcher before travelling to the next job” can be useful. It saves the technician from searching every record for changes. The rule can fail if the latest message omits an earlier unresolved instruction. Its usefulness depends on the information environment and the decision, not on whether it is a shortcut.

Heuristics and biases are not evidence that people are irrational in every context. A quick rule can serve a person's objectives under real constraints. The product manager's task is to identify when the rule is helpful and when the interface creates misleading cues. Labelling an unwanted choice “a bias” does not explain why it happened or establish what should replace it.

In Cedar's field example, the technician might treat the disappearance of a progress indicator as evidence that a note reached the office. That inference is understandable if the interface provides no other information. Investigate the signal before prescribing training. If the product needs users to distinguish several states, the product should provide a practical way to distinguish them.

**Error** should be expected as a property of people interacting with systems. That does not mean accepting every failure. It means designing for mistakes that can occur despite reasonable effort. A person can intend the correct action and touch the neighbouring control, especially when the control is difficult to operate. They can also deliberately select the wrong action because the label or expected consequence is misunderstood. These failures need different remedies.

For an accidental tap, clearer separation or an appropriate recovery action may help. For a misunderstood status, changing the control's size may leave the underlying problem intact. For a missing fact, an explanation of the screen may be irrelevant. Describe the sequence before naming the failure: what the technician knew, what they attempted, what the interface did and what happened next.

Recovery should preserve useful work and expose the current situation. If an entry remains on the device while connectivity is poor, the technician needs to know what will happen next and whether retrying could duplicate work. The engineering implementation belongs to another investigation; the product requirement is that the person can make a safe, informed next move. A warning that merely says “Something went wrong” supplies almost none of that information.

A useful review compares three kinds of demand. First, what judgement belongs to the person because the situation requires their knowledge? Second, what information can the product supply at the moment of that judgement? Third, what mechanical work can be removed without taking away needed control? For a technician describing an unexpected fault, deciding what was found belongs to the technician. Displaying the job identity belongs to the interface. Copying that identity into another form may be unnecessary work. This comparison prevents “reduce cognitive load” from becoming an excuse to conceal choices or automate decisions indiscriminately. The aim is to support the person's judgement with relevant information and manageable actions. Sometimes that means adding a well-placed explanation or review step. Judge the resulting demand in the actual task, including what the person must do later to correct an error.

## Use cognitive ideas to improve the investigation

AI can critique an interaction from several cognitive perspectives. Give the assistant a step-by-step task description, the screen content, the known field conditions and the decision you are considering. Ask it to examine attention, memory, expectations, habit and recovery separately. Require each proposed concern to identify the interface detail that prompted it, the behavioural assumption involved and an observation that would help check the concern.

For Cedar, a useful request is: “A technician resumes this form after answering a customer. Identify information they must remember and states they must infer. Propose alternatives, but distinguish a visible interface issue from a prediction about behaviour.” The assistant might highlight a missing job identifier or an ambiguous save label. Those outputs are candidates for inspection. They do not establish that technicians overlook the identifier or misunderstand the label.

Examine the suggestions with a designer and a technician. Remove claims that rely on conditions not present in the task. If the assistant assumes the technician cannot remove a glove, check whether that is true and whether removal is practical or safe. If it claims that all users prefer fewer steps, ask which necessary information or control those steps provide. A shorter sequence can hide a consequential choice.

Then gather evidence in conditions suited to the question. A first walkthrough may reveal missing state information. A realistic task with relevant users can show how they interpret it. Field observation can reveal demands the walkthrough omitted. None of these methods permits exposing someone to an avoidable hazard merely to make a test realistic. Complex or safety-critical interactions warrant trained design and human-factors expertise, with suitable research planning.

Separate observed events from explanations. “The technician reopened the job before continuing” is an observation. “They forgot the job address” is an interpretation unless supported by further evidence. Another explanation could be that they were checking for a new office instruction. Ask and observe before designing a solution to the preferred explanation.

As a diagnostic exercise, choose one interaction and describe two conditions under which it occurs. Identify what demands attention, what must be remembered, what the person expects and what happens after an interruption. Propose one change and state the assumption it addresses. Then name an observation that would make you reconsider the change. For Cedar, a clearer receipt status may help if uncertainty about office receipt causes repeated checks; it will not solve a missing customer detail.

The same questions apply to a parent completing a school form on a phone or a warehouse worker confirming a delivery. Product judgement begins by examining the conditions under which success is required. “Can someone complete the task?” is only the starting question. You also need to ask who must complete it, with what information, amid which demands, and how they recover when the interaction does not go as planned.

## Notes

[^c06-n01]: Mark, Gudith and Klocke (2008), experimental design, results and discussion. Participants completed a simulated office email task; the finding is not a measurement of Cedar technicians.
[^c06-n02]: W3C (2021), *Making Content Usable for People with Cognitive and Learning Disabilities*, objective 6, “Ensure Processes Do Not Rely on Memory”, and glossary entry on memory impairment. This is supplementary guidance, not a replacement for accessibility standards or user evaluation.
[^c06-n03]: Simon (1955), opening argument and discussion of essential simplifications. This chapter uses the conceptual limit rather than the paper's formal model.

## References

- Mark, G., Gudith, D. and Klocke, U. (2008). “The Cost of Interrupted Work: More Speed and Stress.” *Proceedings of CHI 2008*, 107–110. [Author copy](https://www.ics.uci.edu/~gmark/chi08-mark.pdf).
- Simon, H. A. (1955). “A Behavioral Model of Rational Choice.” *The Quarterly Journal of Economics*, 69(1), 99–118. DOI: 10.2307/1884852. [Article scan](https://cooperative-individualism.org/simon-herbert_a-behavioral-model-of-rational-choice-1955-feb.pdf).
- W3C (2021). *Making Content Usable for People with Cognitive and Learning Disabilities*. W3C Working Group Note. [Objective 6](https://www.w3.org/TR/coga-usable/#objective-6-ensure-processes-do-not-rely-on-memory). Accessed 3 October 2026.
