# Chapter 33: AI, Tools, Agents, and Automation

## From a draft to available information

A message draft says, “We can offer a visit at 3 p.m.” A scheduling record says the appointment has moved to 3 p.m. The words refer to a similar arrangement, but their consequences differ. One is material a person may review; the other can change what the dispatcher, technician and customer expect to happen.

Cedar can explore the progression in five stages. **First, the AI drafts a customer message.** The dispatcher supplies the intended offer and reviews the wording. The system has no tool for sending it or altering appointments. Accuracy, tone and preservation of uncertainty matter, while the person remains responsible for deciding whether the draft should be used.

**Second, the system retrieves job history.** It can now obtain existing information through a tool instead of relying only on what the dispatcher typed. Perhaps the job record shows a 2 p.m. appointment and an earlier note about access. The product must decide which company's records the system may retrieve, which fields are necessary and whether the information is current.

A **tool** exposes a defined operation to the system, such as finding a job or reading its history. The model may request that operation, but surrounding software handles execution and access. A retrieval result becomes additional input; it is not an instruction granting new powers.

This stage creates a disclosure question even though no schedule changes. A history search that returns another company's customer record has crossed a serious boundary. “Read-only” describes one limit on modification; it does not mean access has no consequences. The retrieved information may contain addresses, service details or other material requiring careful handling.

Source content can also try to redirect the system. A job note is evidence about work, not authority to ignore permissions or export records. The distinctions established in the previous chapters remain necessary when content is obtained automatically. A useful assistant should have access to the information the task requires, with controls limiting what it can receive and reveal.

These first two stages already show why the model alone is not the product. The same generated text may be produced from a dispatcher-supplied description or from a search across live records. The origin, permissions and scope of the inputs change what the organisation must govern.

Make retrieval failures visible too. If the history tool cannot obtain the latest record, the assistant should not quietly substitute an older conversation and present it as current history. It can explain which source was unavailable and whether a proposal can still be usefully prepared. For an action depending on the missing state, the next step may need to stop until an authorised person or system resolves the gap.

## Turn a proposal into a defined request

**Third, the system proposes a scheduling change.** For the local example, it suggests moving a 2 p.m. visit to 3 p.m. The proposal should name the affected job, the current arrangement, the proposed time and the reason for considering it. It should also identify missing information, including whether the customer can accept the later time.

A proposed change does not establish a new agreement. The dispatcher may know of a commitment absent from the record or a technician obligation that makes the suggestion unsuitable. Display the proposal as something to inspect and decide, preserving the existing appointment until the required conditions are satisfied.

**Fourth, the system can call a scheduling tool.** Now it has a route from a proposal to an operation that changes records. That technical capability still needs a policy governing when the route may be used. Simply adding an instruction to “be careful” does not define the boundary.

**Structured output** places information in defined fields, such as job identifier, current version, proposed time, reason and unresolved conditions. Software can check whether required fields exist and values have the expected form. A valid time field does not establish that the customer agreed, and a well-formed job identifier can still name the wrong job.

Ask engineers to separate checks on form from checks on meaning and authority. The tool can reject a missing identifier, a time outside permitted conditions or an action the caller is not allowed to perform. The product must also define the business conditions for changing an appointment. Those conditions should not depend solely on the model stating that they are satisfied.

Prefer a tool designed for the required operation to one exposing broad administrative power. An operation that proposes or applies one reviewed appointment change is easier to bound than unrestricted access to rewrite schedules. OWASP's excessive-agency guidance distinguishes too much functionality, excessive permission and excessive autonomy.[^c33-n01] Those are separate ways a modest task can acquire unnecessary consequences.

Describe success precisely. Does the scheduling operation update Cedar's record only, send messages too, or request another system to act later? The dispatcher needs to distinguish saved, sent, received and agreed. A tool result saying the record was saved should not become an assistant message claiming everybody has accepted the new arrangement.

The five-stage progression is a way to examine choices, not a requirement that every product eventually automate execution. Cedar may find useful value in proposals with no action capability. Add authority only when the intended work and its controls justify it.

## Understand the sequence choosing the next step

A **workflow** connects steps and conditions into an operating sequence. A defined workflow could retrieve the job, check required fields, generate a proposal, obtain approval, apply the change and verify the result. Some steps may use conventional code; others may use a model. The overall workflow can be automated even when its sequence is largely predetermined.

The term **agent** is used in different ways. For this discussion, it describes a system that can use a model to select steps or tools while pursuing a task within an environment. It might decide that more job history is needed, request it, revise a proposal and stop when a condition is met. This is a practical description, not a universal architectural test for what counts as agentic.

Ask which choices are delegated. Can the system choose a record to read, choose among proposed actions, expand its search or repeat an operation? Can it alter its objective? A diagram labelled “agent” answers none of those questions. The delegation and available controls matter more than the label.

**Planning** constructs a proposed sequence of steps. A model may suggest checking technician availability before presenting a schedule change. The plan can omit a dependency or propose an unavailable action. Treat it as a candidate plan to be constrained and checked, not permission to execute every step it contains.

Bound the work. Define which records and tools may be used, the stopping condition, limits on repeated attempts and the point where a person must intervene. If the customer cannot be contacted or an essential constraint is unknown, continued tool calls may not resolve the problem. The system needs an acceptable way to return an incomplete result.

**Memory**, in this setting, means information retained or made available across steps or tasks. It might include a reviewed preference, a task's completed steps or a summary of earlier interactions. That information needs provenance, ownership and an appropriate lifetime. A stored assumption about customer availability does not become a current fact merely because the system can retrieve it.

Separate a durable preference from live state. A business may usually avoid late visits, while a particular customer's agreed time is a current commitment. A cached schedule may be older than another dispatcher's latest change. Before acting, the system must use the relevant current state and permissions, not only its account of what was true earlier.

Each added loop or memory source should serve a specific need. Repeated planning can consume time and cost without producing new evidence. Retained material can make later tasks easier while also preserving mistakes or exposing information beyond its original purpose. The product manager should ask what the extra mechanism enables and how its errors will become visible.

Delegating work to another automated component does not remove these limits. A helper that checks job history still needs an appropriate information boundary; one that proposes changes still lacks execution authority unless it is expressly granted. Preserve the origin and status of returned material. Calling several components a team must not make it difficult to establish which one requested an action and which control permitted it.

## Give authority to the right action

**Fifth, execution is permitted only after dispatcher approval.** Cedar's proposed assistant can prepare the change, but the scheduling operation must enforce the approval requirement. The dispatcher must have the relevant authority, and the approved action must be the action actually executed.

**Capability should not automatically imply authority.** A tool can technically change a visit without the assistant being entitled to use it in the current situation. Likewise, a person can ask for scheduling help without authorising every possible action that might pursue that broad goal.

Identity establishes which actor is making the request. Permissions determine which actions that actor may perform on which resources under the relevant conditions. Cedar needs to know both the human on whose behalf work occurs and the software identity used to call the tool. A broadly privileged service account must not silently expand the dispatcher's authority to other companies or unrelated functions.

Enforce the relevant checks where the operation occurs. OWASP's authorisation guidance requires checking permissions on every request and placing decisive checks outside the client interface.[^c33-n02] Applied here, hiding a button or asking the model to refuse is insufficient if another path can invoke the scheduling operation without the same checks.

Make approval meaningful. Show the current 2 p.m. appointment, the proposed 3 p.m. time, affected people, relevant constraints, message consequences and unresolved conditions. If customer agreement is missing, the dispatcher must resolve it through the appropriate process before treating the change as a confirmed appointment. An attractive explanation cannot supply that agreement.

Approval should bind to a specific proposal and relevant state. If another dispatcher changes the visit after review, the assistant must not apply the stale proposal as though nothing happened. Recheck the conditions and return a materially changed proposal for review. The details of version checks and approval records are engineering work; the product requirement is that the person approves the actual consequence.

**Human-in-the-loop control** means a person participates at a defined point in the process with the information and power needed to influence it. It is weaker when approvals arrive too frequently to inspect, conceal important changes or cannot be refused. Test whether dispatchers understand what approval does and can stop the action without losing their work.

Do not use a reassuring human role to obscure responsibility. Name who owns the system's permission design, who reviews the proposed appointment and who responds if execution behaves differently. The dispatcher should not be expected to compensate for inaccessible information or a defective access boundary.

Authority must also end appropriately. If the dispatcher leaves the company, loses scheduling permission or cancels the task, queued actions need to respect that changed state. A previously prepared plan is not a permanent grant of access. Ask engineers how revocation reaches pending work and how the product communicates an action that can no longer proceed.

## Recover when the world and the answer differ

**External state** is information or conditions outside the model's generated text, such as the saved appointment, a sent message or an accounting record. Tool use can change that state even if the conversation later loses track of what happened. The system's explanation and the actual operation must be reconciled.

Suppose the approved scheduling request is accepted, but its response is lost. The assistant sees a timeout. It must not assume that nothing changed or issue a fresh request blindly. The appointment may already have moved. The integration principles from Chapter 19 apply: preserve the intended operation, inspect the result through supported mechanisms and handle retries without uncontrolled repetition.

The interface should state the uncertainty: the result is being checked. “Change failed” would be misleading until failure is established. If the tool returns that the change is pending, the assistant should preserve that state rather than announce completion. People need to know what they can safely do while the outcome is unresolved.

**Error recovery** is the work of returning the system and affected activity to an acceptable state. It may involve retrying a supported operation, reconciling records, asking a person to resolve a conflict or stopping further action. A permission rejection is not necessarily a problem the agent should work around. It may be the correct boundary functioning as intended.

Some effects cannot be undone by changing a database field back. If a customer has read a message offering a new time, they may already have rearranged their afternoon. Restoring the old record does not remove that expectation. Recovery must account for people and communications as well as software state.

Limit the **blast radius**: the extent of people, records or operations that a failure can affect. A proposal-only trial has different consequences from unattended changes across every customer schedule. Limits can include one organisation, a restricted action, a small number of operations and the ability to stop the route promptly. Their suitability depends on the task, not an arbitrary universal threshold.

Walk through recovery with dispatchers, support staff and engineers before granting execution capability. Who can discover whether the change happened? Who can correct a mistaken commitment? Which information is retained? How does manual work continue if the assistant is disabled? A system that generates good proposals but leaves staff unable to recover from uncertainty is incomplete.

## Keep the operating boundary visible

**Audit logs** record relevant actions so that people can reconstruct what occurred. For the proposed change, useful records include the initiating actor, job and version, proposal, approval, tool request, result and any recovery action. Protect those records and limit their contents; a useful audit trail does not require storing credentials or every unrelated customer detail.[^c33-n03]

**Monitoring** watches operation for conditions requiring attention. Cedar could monitor refused actions, repeated retries, unresolved changes, unusual volumes and differences between requested and completed work. A warning needs an owner, a way to inspect the case and authority to contain the problem. A dashboard that nobody can act on provides little operational control.

Also watch whether the assistant's scope changes. Adding another tool, broadening a permission or retaining more history can alter the consequences without changing the familiar chat interface. Revisit evaluation and approval rules when those capabilities change. A successful trial with read-only records cannot establish the safety of later bulk updates.

OWASP's guidance combines limited permissions and functionality with human approval, downstream authorisation, logging and monitoring.[^c33-n01] In Cedar, these principles require collaboration between product, engineering, security, UX and operations. The product manager should define intended work and consequences clearly enough for specialists to design and test the controls.

For practice, trace the five stages for the 2 p.m. to 3 p.m. proposal. At each stage, name what information the system can access, what it can change and who authorises that change. Then consider four cases: normal approval, refusal, a lost tool response and another dispatcher's intervening edit. Describe the visible result and the person who can resolve uncertainty.

Finish by identifying one capability the task does not need. Removing that capability can make the boundary easier to understand and enforce. The point is to provide sufficient assistance for the work, with authority deliberately assigned and consequences recoverable where possible.

When AI can act, the quality of its prose remains relevant, but it is only part of the product question. Cedar must govern the route from information to proposal, permission, execution and observed result. That route determines whether the assistance fits responsibly into daily work.

## Notes

[^c33-n01]: OWASP, “LLM06:2025 Excessive Agency”, risk categories and “Prevention and Mitigation Strategies”. [Guidance](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). The Cedar designs are proposals, not claims of verified implementation.

[^c33-n02]: OWASP, “Authorization Cheat Sheet”, “Validate the Permissions on Every Request” and “Verify that Authorization Checks are Performed in the Right Location”. [Guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

[^c33-n03]: OWASP, “Authorization Cheat Sheet”, “Implement Appropriate Logging”. [Guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html). The specific audit fields are this chapter's proposed application.

## References

OWASP. [“LLM06:2025 Excessive Agency”](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). Accessed 3 October 2026.

OWASP. [“Authorization Cheat Sheet”](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html). Accessed 3 October 2026.
