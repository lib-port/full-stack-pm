# Chapter 22: Security and Privacy

## Follow a departing employee's access

Arun leaves the plumbing company on Friday. Dan, the company's service manager, needs to stop Arun accessing Cedar while preserving the records of repairs Arun completed. Deleting the employee's name from a staff list would not establish that his signed-in phone, downloaded records and connected accounts have all lost access. Before choosing a convenient removal button, Cedar's product manager, Maya, needs to understand what removal must mean.

Start with what needs protection. An **asset** is something valuable in the situation: customer addresses, accurate schedules, payment access, the ability to dispatch work and the company's reputation. Information need not be secret to require protection. A false appointment time can cause harm even if nobody learns a confidential fact.

A **threat** is a potential cause of harm. Someone might use access after their employment ends, or a criminal might steal an active account. A **vulnerability** is a weakness that could enable that harm, such as a permission that remains valid after the company revokes membership. Arun's departure is not evidence that he intends misuse. The design must address the possibility without making a moral judgement about him.

**Risk** concerns the possible harm and how likely it is under the circumstances. Its assessment depends on exposure, existing protections and uncertainty. A rarely used export function could still matter greatly if it exposes every customer's address. Calling that function “low risk” because few people click it confuses ordinary use with the consequences of abuse.

Trace a specific path: an old session remains valid; its holder requests a customer list; Cedar returns the list; information leaves the company. Each step suggests a question engineers can investigate. Does account removal invalidate that session? Is company membership checked when the list is requested? What can the account export? Which evidence would demonstrate the answers?

The **attack surface** comprises the ways a system can be reached or influenced. Login screens are one part. APIs, shared links, support procedures, imported files, devices and supplier connections can also provide routes. A feature that adds another integration changes this surface even if its screen looks harmless.

Security decisions therefore begin when the product chooses its behaviour and relationships. Maya cannot resolve the departure requirement by asking engineering to “make it secure” after the staff-management feature is finished. She must help establish which access should end, which business records should remain, how quickly the change must take effect and what confirmation Dan needs. Those are product requirements with technical consequences.

## Grant actions for a purpose

**Authentication** establishes an identity or verifies a claim to an identity. **Authorisation** determines whether an actor may perform a particular action on a particular resource. Arun might successfully prove that he controls his account while no longer being authorised to view the plumbing company's schedule. Successful login does not answer the second question.

OWASP's authorisation guidance separates these concepts and recommends minimum necessary permissions, refusal when permission has not been granted, and checks on each request. Those principles help turn a vague role name into behaviour that can be tested.[^c22-n01]

Consider three proposed permissions for Cedar:

| Person and responsibility | Access needed for the work | Access needing a separate justification |
| --- | --- | --- |
| Leah, dispatcher | View and change her company's appointments and assignments | View payment credentials or change payment connections |
| A technician attending a repair | View the assigned job's location, contact route and relevant history | Browse or export every customer record |
| Dan, service manager | Manage membership within his company | Grant himself access to another company's information |

These are starting requirements, not a complete permission design. A technician covering an absent colleague may need temporary access to a reassigned job. Leah may legitimately help with billing in a small company. The product should support those responsibilities deliberately rather than quietly making every employee an administrator.

**Least privilege** means providing only the access needed for the authorised purpose. It applies to scope, action and duration. Someone may need to read a job but not cancel it, access one company but not another, or cover a shift without receiving permanent privileges. More restrictive is not automatically better if the result prevents legitimate work and encourages account sharing. Understand the task, then provide a usable permitted route.

Permissions also need enforcement at the right place. Hiding a payment button helps communicate the interface, but cannot establish that a direct request to the service will be refused. OWASP explicitly warns against relying on client-side access checks. The service must enforce the relevant permission independently of what the screen displays.[^c22-n02]

For departure, Maya and engineer Priya can write a sequence to examine: Dan removes membership; a previously signed-in device requests a company job; the request is refused; other companies' legitimate access, if any, follows their own membership rules. They must also consider long-lived connections and queued actions. The expected behaviour belongs in a testable requirement before anyone claims the design meets it.

Revocation prevents future access through controlled routes. It does not retrieve a screenshot or make Arun forget an address. Downloaded information creates a different problem from an active server session. The distinction may affect whether Cedar should allow broad offline exports in the first place.

Permission design also needs an understandable refusal. If a technician cannot open a job because it belongs to another company, the response should avoid exposing that company's private details while providing an appropriate route for resolving legitimate assignment mistakes. If Leah lacks permission to connect billing, the interface can direct her to an authorised colleague without inviting shared passwords. These details influence whether customers follow the intended controls.

Review the defaults when an organisation first joins Cedar. Who becomes the first administrator? Who may invite another administrator? What happens when the only administrator leaves? A secure-looking role table can conceal an unusable ownership transfer. Maya should bring these ordinary lifecycle cases to the design discussion alongside deliberately hostile scenarios. Priya can then test both the permitted route and relevant refusals. An access model that works only for the organisation's first week is incomplete even when the initial demonstration succeeds.

Finally, account removal must preserve appropriate attribution. The company may still need to know who recorded a repair. Removing access and erasing historical authorship are different operations. Conflating them can either leave unnecessary access alive or damage records the business relies on.

## Protect the routes into the system

People are not the only actors with access. A service that sends appointment messages may use a credential to identify itself. A payment connection may use a token permitting particular operations. Such passwords, keys and tokens are **secrets**: information whose possession can enable access or another protected capability.

Treat a secret according to what it permits. A token that can only send messages for one account differs from a credential that can export all company data. Naming both “API keys” does not make their consequences equal. Ask which service uses the secret, who can obtain it, where it is stored and how its authority ends.

OWASP's secrets guidance describes a lifecycle including creation, rotation, revocation and expiry. The practical implication is that issuing a credential is only the beginning of its management. A credential that is no longer required, or may be compromised, needs a route to revocation.[^c22-n03]

Suppose Cedar changes its messaging supplier. Removing the old integration from the settings screen does not by itself demonstrate that its credentials have stopped working. Priya needs to establish which side holds the credential, how to invalidate it, whether requests remain queued and how to confirm the change. Maya needs that work included in the migration's scope. Otherwise, a seemingly completed product change leaves authority behind.

Secret values do not belong in support tickets, screenshots, source examples or AI prompts. Even a helpful diagnostic conversation can make additional copies with different access and retention arrangements. Where investigation requires a credential, use the organisation's approved handling mechanism and the appropriate specialist; do not improvise a sharing route because the task is urgent.

**Encryption** transforms readable information into a form that requires the appropriate key to recover. At this level, distinguish protection while information travels from protection while it is stored. Both can matter, and their key handling matters too. OWASP's privacy guidance discusses encryption for transmission and storage alongside restrictions on access to the keys.[^c22-n04]

Encryption does not settle who should receive the readable information. If Cedar legitimately decrypts a customer record and returns it to an account with excessive permission, encrypted storage has not prevented that disclosure. Similarly, a secure connection can carry information to the wrong authorised recipient. Ask what protection applies at each step and where information becomes readable again.

A product manager should understand these boundaries without choosing cryptographic algorithms or inventing a login protocol. The useful product question is whether a sensitive action requires stronger verification, limited authority, an expiry condition or a clear recovery route. Specialists determine appropriate technical controls and examine their implementation.

Account recovery deserves particular attention because it restores powerful access. If the normal login is carefully protected but support can replace the account's contact details after an unverified request, the overall route is weaker than its most visible screen suggests. Include recovery and administrative access in the same product conversation as everyday sign-in.

## Collect and keep information deliberately

Security protects against forms of unauthorised access and harmful interference. Privacy also asks whether the product should collect, use or disclose information in the proposed way at all. A system can enforce its permissions correctly while using information in ways people reasonably did not expect.

Imagine Cedar considers adding free-text notes about every household member to help technicians prepare for visits. Some access instructions may be necessary. A broad invitation to record personal observations may collect far more than the repair requires. The first question is the purpose and necessity of the information, before the team chooses who may read it.

**Data minimisation** means limiting information to what is needed for the task. RFC6973 describes minimisation across collection, use, disclosure and storage, and asks designers to examine why information must be retained.[^c22-n05] Applied to a repair, this might mean giving a technician the entry instructions and relevant service history without exposing unrelated billing notes or a customer's entire account.

Minimisation is a design choice, not simply a shorter form. A map service might need a destination but not the customer's repair description. An analytics event might need the appointment's state change but not the homeowner's name. For each transfer, name the recipient, purpose and smallest adequate information. Removing names alone may not prevent identification when location, time and other details can be combined.

**Retention** concerns how long information remains available and for what purpose. “Keep everything in case it becomes useful” avoids a decision while extending exposure and future handling work. “Delete everything immediately” may prevent legitimate support, dispute resolution or required record keeping. The appropriate period depends on purpose, obligations and context; qualified privacy or legal specialists must resolve those obligations.

Deletion also has a system boundary. A record may appear in the main database, exported reports, backups, support attachments and a supplier's system. An interface that removes the visible row has not necessarily removed those copies. Maya needs an accurate explanation of what the product's deletion action does, including any staged expiry or justified exceptions, before the organisation makes promises to customers.

A fitness product illustrates the same distinction outside Cedar. Storing precise location for a route display may serve an immediate purpose. Reusing those journeys to infer home addresses for an unrelated commercial feature creates another privacy question, even if only permitted staff can access the database. Security controls remain necessary; they cannot decide whether the new use is appropriate.

Useful privacy work therefore changes field design, integrations, defaults and product promises. It cannot be completed solely by attaching a notice to an already settled flow of information.

## Include people and suppliers in the boundary

A convincing message arrives at the plumbing company's office, claiming to be from Cedar support and asking Leah to confirm her login details. The message might exploit urgency, familiarity or an apparent authority figure. **Social engineering** uses such manipulation to induce a person to disclose information or perform an unsafe action. The relevant design includes how genuine support communicates and how Leah can verify a request.

Training helps only within the system people actually use. If legitimate support routinely asks customers to send sensitive screenshots through informal channels, a warning about suspicious messages conflicts with established behaviour. Product, support and security colleagues should agree a recognisable safe route. When a request seems unusual, the route must work without requiring the employee to diagnose a sophisticated attack.

Dependencies extend the boundary further. Cedar may rely on a hosting service, messaging provider and software libraries it did not create. **Third-party risk** includes failures or misuse by organisations receiving information or authority. **Supply-chain risk** also concerns the components and processes through which software is built, obtained and updated. A supplier can affect the product without appearing in a customer's normal workflow.

Ask what each dependency can access, how it is updated, who follows relevant security notices, and what happens if access must be suspended. A supplier's assurance document may contribute evidence, but does not show that Cedar configured the connection correctly. Conversely, abandoning a specialist supplier can move responsibility into Cedar rather than remove it. Compare actual responsibilities and controls, not reassuring labels.

**Auditability** is the ability to reconstruct relevant actions well enough to examine responsibility and events. If Dan asks who granted a technician export permission, the product needs a dependable record of that change. OWASP's secrets guidance similarly calls for records of secret requests, approvals and lifecycle changes.[^c22-n06]

Logs require their own design. A record might need the actor, action, affected company, time and result. It seldom needs the secret value itself. Access to logs, protection against alteration and a suitable retention policy matter because the records can be sensitive and may be needed during investigation. Collecting every payload indefinitely is not a substitute for deciding which events are useful.

This creates a practical product responsibility: name who can recognise an access problem, who can contain it, and who can explain the consequences to affected people. Detection without an owner leaves a warning unattended. Ownership without usable evidence leaves that person guessing. The permissions screen, supplier connection, support route and activity record are parts of one operating arrangement.

## Explore threats without delegating judgement

AI can help widen a threat discussion. Give an approved system a sanitised description of the intended flow: dispatcher changes an appointment; technician reads an assigned job; manager removes a member. Ask it to identify assets, possible harmful paths, assumptions and evidence needed to check each concern. Require it to distinguish a plausible scenario from a demonstrated weakness.

Maya can then choose one candidate and trace the real route with Priya. If the model suggests cross-company access, which request, identifier and permission check would permit it? What test in an authorised environment would distinguish correct refusal from exposure? A dramatic list of attacks is less useful than a few traceable questions. Generated text establishes neither a vulnerability nor its absence.

Do not upload actual credentials, customer records or sensitive architecture into an inappropriate AI service. Approval must cover the information and intended use, not merely the fact that employees can access a chat interface. Redaction needs attention to identifying combinations as well as obvious names.

AI features introduce additional routes themselves. An assistant reading job notes could encounter text designed to redirect its behaviour. OWASP describes this kind of instruction carried in external material as indirect prompt injection.[^c22-n07] If the assistant can also export data or change appointments, misleading text may acquire operational consequences. Instructions telling the model to behave safely are insufficient as the sole permission boundary. Limit the information and tools it can access, enforce permissions outside the model, and require appropriate confirmation for consequential actions.

Try a short exercise before reviewing Cedar's departure feature. Write the intended permitted action for Leah and for a technician. Add one action each should be refused. Then describe what happens to an already active session when Dan removes membership, what evidence would demonstrate refusal, and which previously downloaded information remains outside that control. Finally, identify the specialist needed to examine the design. A sound answer separates identity, authority, retained history and copied information.

This chapter does not qualify you to conduct professional security reviews, penetration tests, legal privacy assessments or compliance certification. It equips you to recognise when those skills are needed and provide a clearer problem. Security and privacy become part of product judgement when requirements describe protected work, limited authority and responsible information handling from the beginning, and the organisation gathers evidence that those intentions survive implementation and everyday use.

## Notes

[^c22-n01]: OWASP, “Authorization Cheat Sheet”, Introduction, “Enforce Least Privileges”, “Deny by Default” and “Validate Permissions on Every Request”.
[^c22-n02]: OWASP, “Authorization Cheat Sheet”, “Verify That Authorization Checks Are Performed in the Right Location”.
[^c22-n03]: OWASP, “Secrets Management Cheat Sheet”, §§2.7–2.7.4, especially Revocation.
[^c22-n04]: OWASP, “User Privacy Protection Cheat Sheet”, “Strong Cryptography”.
[^c22-n05]: Alissa Cooper et al., RFC6973, “Privacy Considerations for Internet Protocols” (2013), §§6.1 and7.1(g). Its protocol guidance informs the design questions here; it is not a jurisdiction-specific legal assessment.
[^c22-n06]: OWASP, “Secrets Management Cheat Sheet”, §2.6, Auditing.
[^c22-n07]: OWASP, “LLM01:2025 Prompt Injection”, “Indirect Prompt Injections” and prevention/mitigation guidance.

## References

- Cooper, Alissa, et al. [RFC6973: Privacy Considerations for Internet Protocols](https://www.rfc-editor.org/rfc/rfc6973.html). IETF, 2013.
- OWASP. [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).
- OWASP. [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html).
- OWASP. [User Privacy Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/User_Privacy_Protection_Cheat_Sheet.html).
- OWASP. [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).
