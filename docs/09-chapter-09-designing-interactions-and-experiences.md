# Chapter 9: Designing Interactions and Experiences

## Design the work that the action promises

A “Reschedule” button can mean two quite different things. It can open a field where someone edits an appointment time. Or it can begin a process that establishes a workable new arrangement with the technician and customer. The label alone does not tell Cedar's dispatcher which work the software will perform and which work remains theirs.

Imagine a proposed screen with a date, a time, a technician selector and a save button. It exposes the feature's editable fields. A dispatcher can change them, but the screen does not show whether the chosen technician is available, whether the customer agreed or whether the change affects a charge. The design may be easy to demonstrate while leaving the actual task incomplete.

A **task flow** is the sequence of actions and decisions through which someone achieves a purpose. For rescheduling, that purpose is a workable changed visit, not a successfully edited field. Begin by identifying the current appointment, the reason for changing it, feasible alternatives, the required agreement and what must happen after confirmation. Then decide which screens and controls support that flow.

A task-centred design might let the dispatcher compare alternatives, inspect relevant constraints, contact the customer and review the proposed change. It groups information around the decisions the dispatcher must make. This is a useful advance, but the experience also depends on whether the technician receives the new assignment and whether another system continues using the old time.

A system-aware experience includes those dependencies. It distinguishes the saved appointment from pending communication and unresolved billing work. It identifies who should act when part of the process fails. The interface need not expose every internal component. It must expose the information the dispatcher needs to coordinate the real outcome.

These are three ways to evaluate a design: what the screen permits, how the person completes the task, and how the wider arrangement supports completion. A product manager should be able to move between them. Asking only whether the button is prominent cannot reveal a missing customer agreement. Asking only whether the technical update succeeded cannot establish whether the technician is travelling to the right place.

Write the task in ordinary language before drawing its controls. “Move this visit to a feasible time that the customer accepts, and ensure the affected people know the arrangement” gives the design a purpose. It also exposes questions that need research: who may agree the change, what counts as feasible and how receipt can be established.

## Make actions and state understandable

An **affordance** is an action made possible through the relationship between a person and an environment. A handle can permit pulling; a touch-sensitive display can permit selection by touch. A **signifier** is a cue that helps someone understand an available action or a state. A label, shape or position can serve that purpose. Don Norman emphasises this distinction because a possible action is not necessarily one a person can discover.[^c09-n01]

For Cedar, the words “Change appointment” and the way the control is presented should make its purpose recognisable. A small unlabelled symbol may be familiar to its designer but unclear to a dispatcher encountering it under pressure. The product manager can ask what clue communicates the action, while leaving the detailed visual solution to design expertise and testing.

**Mapping** concerns the relationship between a control and what it affects. If the dispatcher is viewing several appointments, a change control should make clear which visit will move. Placing an action near one row while applying it to every selected appointment invites a mistaken interpretation. The relevant question is whether the person can connect their action to its consequence.

**Visibility** concerns whether important information and available actions can be perceived when needed. During rescheduling, the dispatcher may need the original time, proposed time, technician availability and customer's agreement status. Making these visible does not mean displaying every possible detail simultaneously. It means the information necessary for the current decision should not be concealed behind an unexplained assumption.

**Feedback** tells the person what the system has done in response to an action. After saving, “Appointment changed” should have a defined meaning. If a customer message remains unsent, a broad “All done” message can mislead. Show the changed appointment and the communication status separately when those states affect what the dispatcher must do next.

Consistency helps the person carry an interpretation from one place to another. If “Confirmed” means customer agreement in one view and merely a saved appointment in another, identical language hides different states. Agree state meanings with the people designing and building the flow. Consistency is valuable when it preserves meaning, rather than making unrelated actions look alike.

**Information architecture** is the organisation and labelling of information so people can find and understand it. Cedar could group appointment constraints with the alternatives they affect instead of placing all customer details in one distant tab and all technician details in another. The best arrangement depends on the task and on what people seek together. The organisation's internal departments are not automatically a useful navigation structure.

Consider a dispatcher comparing two alternatives. One technician is free but lacks the required skill. Another has the skill but cannot reach the address in time. A list that simply labels both “Available” supplies an incomplete basis for choice. Design the information around what makes an option feasible, including the source and limits of the information. A visually tidy list cannot compensate for an ambiguous category.

These concepts let a product manager make a precise observation: “The control appears to affect one visit, but the consequence applies to all selected visits.” That is more useful to a designer than “The screen is not intuitive”. The first statement identifies an inspectable relationship and a decision about how to communicate it.

## Preserve control and make mistakes recoverable

**Progressive disclosure** means presenting detail as it becomes relevant. In a rescheduling flow, routine alternatives might appear first, with an explanation available for an option that violates a constraint. This can reduce clutter. It becomes harmful if the design hides a changed charge until after the dispatcher commits. Distinguish optional detail from information needed for an informed choice.

A **default** is the selection or value used unless someone changes it. Defaults influence the path through the task, so each needs a reason. Keeping the current technician selected can preserve context, but the flow must still check availability at the new time. Automatically selecting the earliest time could conflict with a customer promise. A default should not silently convert incomplete information into agreement.

**Error prevention** tries to stop an avoidable mistake before it has consequences. Show a technician conflict when the dispatcher selects the time, rather than after the change has been sent. Where a decision is consequential, present a review that identifies the actual changes: previous time, proposed time, affected people and any unresolved condition. A generic “Are you sure?” can demand confirmation without adding information.

Prevention does not mean blocking every unusual action. A dispatcher may legitimately override a planning preference when handling an urgent repair. Explain which conditions are firm and which can be overridden, subject to appropriate authority. Asking for a reason can support later coordination, but unnecessary mandatory explanations can create work without protecting anything. Match the intervention to the consequence.

**User control** includes the ability to inspect, choose, amend and stop an action within the limits of the process. A dispatcher should be able to leave a proposed change before committing it. After a message has been sent, control has different limits: the system cannot make the recipient forget it. Explain those limits at the point where they matter.

**Error recovery** helps someone establish and restore a suitable state after a mistake or failure. If the dispatcher selected the wrong appointment, returning its time to the earlier value may be only part of the repair. The customer may need a correction and the technician may need another update. An “Undo” label that promises complete reversal while only changing a database field is an inadequate description of recovery.

**Responsiveness** concerns how the interaction acknowledges and progresses after an action. The dispatcher needs timely evidence that the request was received, plus truthful information about work still in progress. A moving indicator can acknowledge waiting, but it cannot explain whether retrying is safe. If the operation is delayed, preserve the proposed change and make the next permitted action clear.

Suppose Cedar saves a new appointment but fails to send the customer message. The flow should retain the saved state, show that communication is incomplete and provide an appropriate way to retry or contact the customer separately. It should not invite the dispatcher to recreate the whole change unless that is necessary. Product and engineering colleagues must agree which states can be established reliably.

Review the path where things go wrong as carefully as the successful path. Ask what the person knows after each interruption and what they can safely do next. Recovery may require a colleague or a manual procedure; make that responsibility visible. A clear route to help is part of the experience when software cannot complete the task alone.

## Follow the change beyond the screen

The rescheduling flow touches several people and records. The dispatcher proposes an alternative. Technician availability limits which alternatives are useful. The customer may need to agree. A changed appointment may affect a quotation, charge or billing rule in some circumstances. Each dependency deserves a question before it becomes an invisible assumption in the interface.

Start with availability. Does “free” mean no appointment appears in Cedar, or that the technician has confirmed they can take the work? Does the estimate include travel and required skills? The interface should communicate the meaning actually supported. It should not claim certainty because a field is empty. The right design may include an explicit check outside Cedar if the software lacks the necessary information.

For customer communication, distinguish composing, sending, delivery where known and agreement. A message saying that a proposed time is available is different from a message confirming an agreed change. If the customer's reply is needed, identify where the dispatcher sees it and what happens while waiting. Otherwise, the flow may advance past a decision that nobody has made.

Billing illustrates why the experience crosses a product boundary. If a particular service company charges differently for an out-of-hours visit, the dispatcher may need to know whether the proposed time changes the charge. That is a conditional example, not a universal billing rule. The design must identify the relevant policy and responsible person. It should not quietly recalculate a price from an assumption the customer has never accepted.

A simple handoff description records the actor, information sent, expected response and consequence if the response is missing. Follow the changed appointment through the technician's view, the customer communication and any billing record that depends on it. This can reveal that the design needs a pending state, a review step or a clear assignment of manual work.

Do not expose technical detail merely because a dependency exists. The dispatcher usually needs “Customer message not sent; contact the customer or retry”, not an internal error code. Engineers need diagnostic detail elsewhere. The product manager connects those needs by defining the operational consequence and working with specialists on a truthful representation.

Check whether people can enter the task from more than one place. A dispatcher may start from a customer call, an overrun alert or a technician's message. The same underlying appointment should remain identifiable, but each starting point supplies different information. A flow designed only from the calendar may force the dispatcher to search again after opening an alert. Likewise, the work may resume on a different device or pass to another employee. Identify the information needed to resume without repeating already completed coordination. This is especially useful when the dispatcher goes off shift with a customer reply pending. The next employee needs the proposal, the current agreement state and the remaining action, rather than a blank form or an unexplained status.

## Test an experience, not an explanation of one

A **prototype** is a representation used to investigate a proposed design before committing to its full implementation. A paper sequence can expose missing decisions. An interactive prototype can reveal navigation and state expectations. A working version may be necessary to examine connectivity, assistive technology or response behaviour. Choose the representation according to the uncertainty, rather than assuming higher visual polish produces better evidence.

A prototype's limits affect what you can infer. If every customer message succeeds instantly, the prototype cannot show whether the dispatcher understands communication failure. Include the states relevant to the question. Avoid interpreting a researcher's explanation as part of the design unless users will actually receive that help in normal use.

**Usability testing** observes relevant people attempting tasks with the design. Give a believable goal, not instructions naming the controls to press. GDS guidance recommends tasks that reflect users' goals without revealing the answer, then observation and neutral follow-up.[^c09-n02] “Move this visit while preserving the customer's agreed conditions” can reveal more than “Click Reschedule and select Tuesday”.

Choose a small number of questions that the prototype can genuinely answer. If the question concerns whether the dispatcher can compare alternatives, the prototype needs believable constraints and more than one plausible choice. If the question concerns recovering from a failed message, it needs that failure state and a way to attempt recovery. Record what is simulated so that the team does not later report a communication test as evidence of delivery reliability. After a session, distinguish an observed difficulty from its suspected cause and proposed remedy. Revise the design around the supported issue, then check the changed interaction. A participant's suggested solution can be useful input, but you still need to understand the problem it addresses. The design process should preserve evidence about the task while allowing several ways to improve it.

Watch what participants believe has happened, what they do next and how they recover. A participant can reach the final screen while believing a customer has agreed when no agreement exists. Completion alone would conceal the consequential misunderstanding. Ask what they expect the technician and customer to know, and compare the answer with what the design actually establishes.

AI can propose alternative sequences, critique a task flow and enumerate edge cases. Supply the actors, constraints and state meanings. Ask for a concern tied to each step and an observation that would test it. Check the output with designers and engineers: a suggestion to “undo everything” may ignore an already-sent message or a dependent record.

AI can also draft prototype content and research tasks. Give it the approved facts and ask it to preserve distinctions between proposed, agreed, saved and sent. Inspect every generated confirmation message. For test preparation, check that the task does not name the intended control or tell the participant the expected path. These uses can improve preparation; reasoning alone cannot establish usability.

Try this diagnostic: a dispatcher chooses a new time, presses “Update” and sees “Success”. Identify what is unclear about the appointment's current state, the feedback, the dispatcher's remaining control and the recovery from an error. Write the minimum additional information needed to make the next action informed. A useful answer asks whether the change is saved, agreed and communicated; it does not simply replace “Success” with a friendlier word.

Work with trained designers on complex interaction flows, information architecture, accessibility and high-risk interfaces. Product literacy should make the collaboration more precise. You should be able to explain the decision, the affected people and the uncertainty that needs testing, while recognising that a checklist of concepts cannot settle the design.

The aim is an experience in which people can understand what they are doing and coordinate its consequences. A successful screen action matters because it contributes to that experience. Follow the task far enough to establish whether the product's promise has actually been fulfilled.

## Notes

[^c09-n01]: Don Norman, “Signifiers, not affordances” (2008), distinction between possible actions and cues communicating action or state.
[^c09-n02]: Government Digital Service, “Using moderated usability testing”, especially “Design the tasks” and “Run a session”.

## References

- Norman, D. (2008). “Signifiers, not affordances.” *Interactions*, 15(6). [Author version](https://jnd.org/signifiers-not-affordances/).
- Government Digital Service (2017). “Using moderated usability testing.” *Service Manual*. [Guidance](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing). Accessed 3 October 2026.
