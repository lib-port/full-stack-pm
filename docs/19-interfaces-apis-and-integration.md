# Chapter 19: Interfaces, APIs, and Integration

## Agree what crosses the boundary

Sofia, the plumbing company's billing administrator, has a completed repair in Cedar and needs an invoice in the accounting system. She currently copies the job details, payer and charges between the two products. The proposed integration would let her request the invoice from Cedar. Before the team can promise that behaviour, it must decide what “create an invoice” means on both sides.

Does the accounting system create a draft or issue a final invoice? Which system calculates the total? Which payer identifier does it recognise? If the job changes later, should the invoice change automatically? A connection can transfer every field successfully while implementing the wrong business action.

An **interface** defines how one part of a system interacts with another. Treat it as a contract: what may be supplied, what operations are available, what results mean and what conditions callers must satisfy. This is a technical agreement about behaviour, not necessarily a legal contract.

An **application programming interface**, or **API**, makes operations available to software. A remote API may let Cedar ask an accounting service to create an invoice or retrieve its current status. APIs also exist within a single application. The relevant feature here is the defined boundary, not the fact that it crosses the internet.

For the proposed invoice operation, the contract needs to identify required information, accepted values, access requirements and possible results. A response saying an invoice was created should provide a way to identify that invoice later. A rejection should let Cedar distinguish a correctable data problem from a temporary service problem or missing permission.

Meaning is part of the contract. If Cedar records amounts in pounds but the other system expects minor currency units, sending the same number is not a faithful transfer. If Cedar's job customer means visit contact while the accounting system's customer means payer, matching the field names creates a semantic error. Engineers need domain knowledge as well as documentation to map the two.

A minimal discussion can use ordinary language:

| Contract question | Product consequence |
| --- | --- |
| Which job and payer does the request identify? | Prevent charging or exposing information to the wrong party |
| What does success establish? | Show a truthful result to Sofia |
| Which changes are permitted after creation? | Avoid unexpected edits to issued documents |
| Which system owns payment status? | Resolve conflicting displays |
| How can a failed or uncertain request be investigated? | Give staff a recovery path |

The contract should also say what is outside the operation. Creating an invoice may not email it, collect money or update Cedar's local report. A product manager who asks about these boundaries can prevent a successful demonstration from becoming an overbroad customer promise.

Decide where users should correct information. If Sofia edits the payer in Cedar after an invoice has been issued elsewhere, silently copying the new payer across may be inappropriate. If the accounting system owns the issued document, Cedar may need to direct Sofia there or expose a supported correction operation. The important question is which system has authority for each stage, rather than which screen is more convenient. Two editable copies without an agreed rule can make each product appear to undo the other's work.

## Separate the request from what happens later

A **message** is a unit of information passed between components. A request is a message asking for an operation; a response reports something about that request. An **event** reports an occurrence, such as an invoice becoming paid. The distinction helps explain why some information is available immediately and other information arrives later.

In **synchronous communication**, the calling interaction waits for the immediate response before continuing that part of the flow. Cedar can send the invoice request and wait for an accepted result or error. That does not mean every downstream activity must be finished before the response. The contract still determines whether acceptance means completed work or work queued for later.

In **asynchronous communication**, sending and subsequent processing or notification are separated so the initiating interaction does not need to wait for the final outcome. Sofia might see that the invoice request is pending while another process completes it. Alternatively, creation may finish immediately, but payment status changes asynchronously hours or days later.

A **webhook** is a way for one system to send an HTTP request to a registered destination when a relevant event occurs. GitHub's documentation describes this pattern as subscribing to events and receiving event information at a chosen URL.[^c19-n01] The same pattern can support accounting updates, although the actual provider determines which events and delivery guarantees are available.

Suppose the accounting service records payment and sends Cedar an invoice-paid event. Cedar needs to associate the external invoice with the correct local record, verify that the notification is legitimate and update the relevant status. A message arriving at Cedar does not prove the accounting system currently has exactly the same state described by an earlier event. Later changes may already have occurred.

The product must distinguish several times: when the payment was recorded, when an event was created, when Cedar received it and when Cedar updated its display. Those differences matter when Sofia asks why an invoice still appears unpaid. Showing the latest synchronisation time can help only if the label explains what was actually checked.

Polling is another possibility: Cedar periodically asks the accounting system for the current status. Webhooks and polling have different operating costs and failure paths. A design can use both, for example receiving updates promptly and periodically checking for missing ones. The product manager should ask what freshness the work requires, while engineers evaluate an appropriate mechanism.

Asynchronous work also needs a pending state that people can understand. “Invoice requested” tells Sofia something different from “invoice created”. If the work remains pending unusually long, she needs to know whether to wait, correct data or contact support. Separating stages creates more visible states, but those states describe uncertainty that already exists. Hiding them does not remove it.

Consider what Sofia can safely do while waiting. She may continue preparing other jobs, but creating the same invoice manually in the accounting system could conflict with a pending automated request. The interface needs to explain that consequence and provide a controlled way to resolve the pending work. A waiting indicator is only a visual signal; it is not a policy for competing manual and automated actions.

## Retry without repeating the business mistake

Cedar sends an invoice-creation request. The accounting system creates the invoice, but the response is lost before Cedar receives it. Sofia sees a timeout. If she presses the button again, will Cedar find the invoice already created or ask for another one?

A **retry** repeats an attempted operation after failure or uncertainty. Retries can recover from temporary problems, but repetition must respect the business meaning. Creating two invoices for one intended request is different from asking twice for the same invoice's status.

An operation is **idempotent** when repeating the same intended operation has the same relevant effect as performing it once. HTTP's specification defines idempotence in terms of intended effect, and explains why it matters when a response is lost.[^c19-n02] It does not promise identical responses or that an operation physically executes only once.

For invoice creation, an integration can use a stable operation identifier supported by the receiving system. Repeated attempts with that identifier refer to the same creation intent. A different, genuinely new invoice needs a different intent. This is a design to verify in the provider's contract; attaching an arbitrary label to a request does not make the receiving system honour it.

Identical contents are not always identical intentions. Two separate jobs may have the same payer, description and amount. Suppressing the second invoice merely because its fields match the first could lose valid work. Conversely, generating a new operation identifier for each retry can defeat duplicate prevention. Ask how the integration distinguishes a repeated attempt from a new business action.

Duplicate events need attention as well. A provider can send the same notification again if it did not receive confirmation of delivery. Cedar's handling should not repeat an inappropriate side effect, such as sending another payment receipt. Stripe's webhook documentation explicitly discusses duplicate events and warns that delivery order is not guaranteed.[^c19-n03] Other providers have their own contracts; inspect them instead of assuming identical behaviour.

Order matters when an older unpaid-status event arrives after a newer paid-status event. Applying every arriving value as though it were the latest truth can move the display backwards. Engineers may use version information, retrieve current state or apply another provider-supported reconciliation rule. The product requirement is that out-of-order communication must not silently misrepresent the invoice's current status.

Retries also need limits. Repeating a malformed request will not supply its missing payer. Repeating requests rapidly during an outage can add load without improving the outcome. An expired authorisation may require renewal or customer action. Agree how the system separates retryable problems from those that require intervention, how pending work is retained and when a person is notified.

The useful promise is not that errors never happen. It is that the integration can recognise uncertainty, avoid uncontrolled repetition and bring the two systems back into an explainable state.

## Expect both sides to change

Cedar controls its own implementation, while another organisation controls the accounting service. That service is an **external dependency**: part of the customer capability lies beyond Cedar's direct authority. The provider can change behaviour, experience an outage or alter access conditions while Cedar's own code remains unchanged.

**Versioning** identifies different forms of an interface or message. **Compatibility** describes whether components continue to work together under an agreed set of expectations. A new field can be compatible if existing callers may ignore it. A newly required field can break callers that do not supply it. Even an unchanged field name can break meaning if its interpretation changes.

Consider the changes Cedar must handle:

| Situation | What the user may experience | Product work beyond reconnecting |
| --- | --- | --- |
| Accounting service unavailable | Invoice remains pending | Preserve intent, explain delay and reconcile after recovery |
| Required payer field added | New invoices rejected | Update mapping and help resolve incomplete records |
| New invoice status introduced | Unknown state in Cedar | Decide its meaning and update downstream behaviour |
| Access authorisation expires | Requests rejected despite correct data | Renew access where supported or guide an authorised person |
| Older interface version retired | Previously valid requests stop working | Migrate, test and communicate the transition |

Authorisation is especially easy to mistake for a permanent setup step. An integration may use an access token that grants particular operations for a limited period. The OAuth specification describes tokens as representing scoped, time-bounded access and distinguishes refreshing an access token from using it.[^c19-n04] Real integrations must follow their provider's current security requirements; the product lesson is that connection status can change after successful onboarding.

Someone needs to own the consequences. Which customer administrator can reconnect? Does removing the employee who originally connected the account affect service continuity? Can support explain which invoices are affected without seeing unnecessary financial information? An error message that simply says “authentication failed” leaves the customer to reconstruct both the cause and the remedy.

Version migration also takes coordination. Cedar may need to support old and new message forms during a transition. Customers may need to supply additional information. Testing should cover both the new happy path and previously valid situations that could stop working. An announced retirement date is not useful unless someone tracks the required work and affected accounts.

An integration's continuing cost includes monitoring, reconciliation, documentation, support, access renewal and adaptation to provider changes. These obligations do not make integration a bad choice. They belong in the decision about whether the capability serves enough customer value to maintain it responsibly.

Limits on request volume are another contract condition to inspect. If the provider accepts work only at a certain rate, sending an accumulated backlog at once may cause further rejections. Ask how Cedar will resume safely after an outage and how long customers should expect recovery to take under the documented limits. The relevant product promise includes clearing delayed work, not just restoring the first successful connection.

## Treat integration as a product capability

Evaluate an integration through the complete task Sofia needs to finish. She should be able to identify the invoice, understand its status, correct a recoverable problem and know which system to consult when records disagree. A button that transfers data once is an incomplete account of that capability.

Before committing, ask engineers and operational colleagues to walk through one normal invoice and several disrupted ones. Include a lost response, duplicate delivery, out-of-order events, prolonged outage, invalid data, changed schema and expired permission. For each, identify what the user sees, what the system preserves, who can act and how successful recovery will be recognised.

Retain enough diagnostic information to follow one operation across the boundary without unnecessarily exposing its contents. Support may need the time, local request reference, external invoice reference and last known status. An error log that contains only “failed” cannot explain which customer work remains incomplete. Equally, logging full credentials or every sensitive field creates a separate problem. Engineers and security colleagues should determine appropriate records and access while the product manager defines the recovery questions those records must answer.

AI can help translate API documentation and enumerate overlooked cases. Supply authorised excerpts from the actual version being considered and ask for a contract summary, a synthetic example and a list of unresolved questions:

> Explain the documented create-invoice flow and subsequent status updates. Separate explicit guarantees from assumptions. Cite the relevant clause for each guarantee. Give a synthetic request/response example, then describe lost replies, repeated requests, duplicate or delayed events, changed fields and expired access. Mark any behaviour the documentation leaves unspecified.

Check the result against the documentation, especially where it uses reassuring words such as guaranteed, automatic or exactly once. A generated example may use a nonexistent field or combine features from different versions. An AI explanation that invents an automatic refresh mechanism can conceal a customer action the product must support.

Generated integration code needs engineering review and relevant tests. Successfully compiling it does not establish correct permissions, safe retries, compatibility or recovery. Keep credentials out of prompts and examples unless the specific environment and use are authorised; synthetic examples usually suffice for conceptual exploration.

The same reasoning applies to a museum membership system connected to a ticketing service. A valid membership does not ensure a discounted ticket was issued, and a delayed cancellation event may leave an entitlement visible. The integration creates an ongoing agreement about identity, timing and recovery, regardless of whether the underlying transaction is an invoice or a ticket.

For practice, return to Sofia's timeout. Write the message Cedar should show before it knows whether the invoice exists. Then describe how support or the system can establish the result without blindly creating another invoice. A sound answer preserves the operation identifier, checks the external result using supported mechanisms, keeps uncertainty visible and reconciles the local record once the outcome is known.

Finally, name who maintains that recovery path after launch. If nobody owns provider changes or unresolved requests, the design depends on customers discovering failures first. Integration work is complete enough to launch when the organisation can support the continuing exchange, including the times when the two sides temporarily disagree.

## Notes

[^c19-n01]: GitHub, “About webhooks”, sections “About webhooks” and “About webhooks on GitHub”. Used for the event-triggered HTTP-delivery pattern, not a Cedar provider choice. [Read the documentation](https://docs.github.com/en/webhooks/about-webhooks).

[^c19-n02]: Roy Fielding, Mark Nottingham and Julian Reschke, editors, RFC 9110, *HTTP Semantics* (2022), section 9.2.2, “Idempotent Methods”. Application-level invoice creation requires its own documented semantics. [Read the specification](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2).

[^c19-n03]: Stripe, “Webhooks”, sections “Event ordering” and “Handle duplicate events”, inspected 3 October 2026. These are provider-specific examples of guarantees that an integration must inspect. [Read the documentation](https://docs.stripe.com/webhooks).

[^c19-n04]: Dick Hardt, editor, RFC 6749, *The OAuth 2.0 Authorization Framework* (2012), sections 1.4–1.5. Cited only for access/refresh-token concepts, not as a complete current implementation guide. [Read the specification](https://www.rfc-editor.org/rfc/rfc6749.html#section-1.4).

## References

GitHub. “About webhooks.” GitHub Docs. https://docs.github.com/en/webhooks/about-webhooks

Fielding, Roy, Mark Nottingham, and Julian Reschke, editors. *HTTP Semantics*. RFC 9110, June 2022. https://www.rfc-editor.org/rfc/rfc9110.html

Stripe. “Webhooks.” Stripe Documentation. https://docs.stripe.com/webhooks

Hardt, Dick, editor. *The OAuth 2.0 Authorization Framework*. RFC 6749, October 2012. https://www.rfc-editor.org/rfc/rfc6749.html
