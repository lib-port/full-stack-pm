# Chapter 17: How Software Works

## Instructions run on physical machines

Leah, the plumbing company's dispatcher, moves an appointment from 10 a.m. to 2 p.m. and presses Save. The appointment appears in its new position. Before she tells the homeowner that the change is complete, one question matters: what has actually changed beyond the screen in front of her?

The answer requires a little knowledge of how software works. You do not need to write a scheduling program to discuss its behaviour. You do need to distinguish a change displayed on one device from a change accepted, stored and communicated by the wider system.

**Hardware** is the physical equipment: processors, memory, storage devices, screens and network equipment. **Software** comprises instructions and associated data that direct what the equipment does. A phone and a remote computer both need physical resources even when a service is described as being in the cloud. That phrase changes who operates the equipment and how resources are accessed; it does not remove the equipment.

**Computation** means carrying out operations on represented information according to instructions. A scheduling program can compare two appointment times, look up a technician identifier or construct a message. The processor does not recognise a frustrated homeowner in the human sense. It performs operations on the information made available to the program.

A program is not the same thing as a running program. A **process** is an executing instance with resources and a current condition, managed by the operating system. The operating system is itself software that manages resources and provides services used by other software. Several processes may run on one machine, and a product may depend on many processes across machines.

This distinction helps explain why “the code exists” does not mean “customers can use the feature”. Instructions must be prepared in a usable form, run in an appropriate environment and connected to the information and services they require. A running process can also stop while its stored data remains available elsewhere.

An **abstraction** presents selected behaviour while hiding detail that is unnecessary for a particular task. Leah uses an appointment calendar without manipulating individual storage operations. An engineer can call a storage function without designing a physical disk. Each abstraction makes useful work possible by providing a simpler way to interact with a more complicated mechanism.

The simplification has limits. A Save button hides details, but those details still determine whether saving succeeds. You can compare an abstraction to a labelled control on a machine: the label tells you what action to request, while the mechanism determines whether the action can occur. Unlike a simple mechanical control, a software action may cross several independently operated computers. The analogy should help you ask about the hidden steps, rather than imply a single direct connection.

## Follow one request across the system

To trace Leah's action, consider a design in which she uses Cedar through a browser connected to a remote application. This is one plausible arrangement for the teaching example. Establishing the design of a particular product requires its documentation and engineering knowledge.

The browser is acting as a **client**: software that requests something from another part of the system. A **server** receives and handles requests. The terms describe roles, not necessarily two particular machines. Software that handles Leah's request can itself act as a client when it asks a database or messaging service to do something.

A **network** carries information between devices. Communication takes time, and messages can fail to reach their destination. When the browser sends a **request**, it supplies information describing an operation. The receiving software processes that request and may return a **response** indicating a result. The web commonly uses HTTP for this exchange; MDN's introductory documentation describes the browser request, server processing and returned response as separate steps.[^c17-n01]

Follow the appointment change through the proposed design:

1. Leah chooses 2 p.m. The browser updates the editable form on her computer. This is local execution: instructions run on her device.
2. She presses Save. The client sends a request identifying the job, the proposed time and information the server needs to identify her session.
3. The server checks the request. It must determine whether Leah may make this change and whether the proposed values meet the rules enforced there.
4. The application asks the storage system to record the accepted appointment change. Whether it can safely do so depends on the current record and relevant rules.
5. The server returns a response. The client uses that response to present the accepted time or explain why the change was rejected.
6. Further work makes the change available to Arun's mobile view and, where appropriate, sends a message to the homeowner.

The sequence exposes several product questions. Does the server check for an overlapping assignment? What happens if another dispatcher changed the same appointment after Leah opened it? Does Save mean the record was accepted, or does it also mean a customer message was sent? The answers belong in the product behaviour, even though engineers choose much of the machinery that supports them.

A response also needs an interpretation. “Request received” differs from “appointment updated”. “Appointment updated” differs from “homeowner notified”. A system can provide the first result while later work remains unfinished. Product language should reflect the strongest result actually established at that point.

Local and remote execution create different possibilities. The client can show a missing required field immediately, without waiting for the network. Yet a check performed only on the client may be bypassed or based on old information. A rule that protects shared data generally needs appropriate enforcement where the authoritative change is made, not just a friendly warning in one screen.

Do not turn this sequence into a claim that every product must use the same arrangement. Some applications perform more work locally; some return a complete page; others return data used to update part of a screen. Your useful knowledge is the distinction among displaying a request, carrying it across a connection, accepting it and carrying out subsequent work.

The order shown is also a design decision. Cedar could wait for server acceptance before moving the appointment on screen. Alternatively, the client could show the proposed move immediately and correct the display if the server rejects it. The second approach can feel faster, but the product must make unresolved or rejected work understandable. Otherwise Leah may act on a change that has not been accepted. Ask what the screen communicates during the interval, rather than equating visible speed with completed work.

## Ask where the current state lives

**State** is the information describing a system's condition at a particular point. Leah's unsaved selection is state. The accepted appointment time is state. Whether a notification is waiting to be sent is also state. These states can live in different places and change at different moments.

While Leah edits the form, her device may hold a draft. The server need not know about that draft yet. If the browser closes before the information is stored, the draft may disappear. Whether Cedar preserves drafts is a design choice with storage and recovery implications, not a property automatically supplied by the presence of a text field.

**Persistent storage** retains information beyond the lifetime of the process using it. That might be a file, a database or another storage service. Persistence does not mean indestructibility. Equipment can fail, records can be deleted and software can write incorrect information. Backups, recovery and operational controls address different parts of that problem.

Suppose the server stores the appointment at 2 p.m., but the response never reaches Leah's browser. The system has changed even though Leah cannot tell whether it succeeded. Alternatively, the connection might fail before the request reaches the server, leaving the appointment unchanged. The same visible symptom, a waiting indicator or timeout, can accompany different underlying states.

That ambiguity matters when the product offers Retry. Engineers need a way to prevent an uncertain first attempt from turning a repeated request into an unwanted second action. You do not need to design that mechanism here. You do need to recognise why a product requirement must cover uncertain completion, not merely clear success and clear rejection.

Arun's phone introduces another state. It may display information fetched earlier while he was connected. A locally retained copy can help him work where connectivity is poor, but its age matters. When Leah changes the time, Arun's copy does not become current merely because the central record changed. Some communication and refresh behaviour must connect the two.

An offline product therefore needs explicit promises. Can Arun read previously downloaded jobs? Can he record work without a connection? If he changes information locally, when is that change sent? What happens if someone else changed the same record first? There is no single answer implied by the word offline.

Identify the **authoritative source** for each kind of information: the place or rule used to resolve what the product treats as current. That does not require all data to sit in one location. It requires clarity about which record or resolution process governs a disputed value.

A museum guide illustrates the same distinction outside business software. Downloaded audio can play locally without a connection. Today's room closures may require recent remote information. A product manager who separates these needs can discuss which capabilities should remain available offline and how stale information should be presented. Asking for the whole application to “work offline” leaves the important decisions unstated.

## Distinguish written software from running software

Engineers change software by editing source material, often called source code. A **build** prepares material that can be run or distributed, sometimes translating it into another form and combining it with required components. Different technologies perform these steps differently. The important product distinction is between a proposed change, a prepared version and a version actually running for users.

**Deployment** puts a version of software or configuration into an environment where it can operate. An **environment** is the relevant combination of running components, settings, access permissions, data and connected services. A development environment helps engineers work on changes. A test environment supports checking. A production environment serves actual operational use. These are purposes, not mandatory names or a prescribed number of environments.

A successful demonstration in a test environment provides evidence about that environment. It does not prove the same behaviour under different data, permissions, traffic or external connections. If test notifications go to a simulated provider while production notifications reach real customers, the difference affects what the demonstration establishes.

**Configuration** supplies settings that influence behaviour without necessarily changing the underlying program. A feature may be deployed but disabled for customers. A messaging destination may differ between environments. The distinction helps explain why “we deployed it” is incomplete as a launch statement: the intended people may still lack access, the setting may be disabled or a required integration may be absent.

Google's account of release engineering distinguishes building, testing, packaging, deployment and configuration. It emphasises knowing which version and settings are being delivered and making the process repeatable.[^c17-n02] These are useful questions at any scale, although Cedar need not adopt Google's tools or organisational structure.

A **dependency** is something another component relies on. The scheduling application can depend on a library of reusable software, an operating system, a database and an external notification service. These dependencies differ in ownership and failure behaviour. Updating an included library is different from asking an external provider to restore its service.

Dependencies also have versions and assumptions. A new application version may expect a data field that has not yet been created in the storage system. An older mobile app may send information in a format that the newly deployed server still needs to accept. A release plan must account for the period when related components are not all updated together.

Ask an engineer to identify the dependency that most affects the proposed customer promise. For rescheduling, that might be the shared appointment record, the mobile synchronisation mechanism or the message provider. The answer depends on which promise you are making. A requirement to show a changed time immediately has a different dependency chain from a requirement to confirm that the homeowner received it.

The answer can change how work is divided. If the appointment record already supports the required change, the remaining work might concern the client and customer communication. If the record assumes one appointment can never be split, the same request can require a deeper change. Ask which assumption is embedded in the current software before estimating effort from the number of visible controls. An extra field on a screen can be the smallest part of the work, while a substantial internal change may leave the screen almost untouched.

Rollback means returning running software or configuration to an earlier version. It does not necessarily reverse messages already sent or restore records that were changed. Before relying on rollback, ask which effects are reversible and which require separate recovery. Treating deployment as a switch that undoes every consequence can create a misleading sense of control.

## Use explanations to ask better engineering questions

You can now translate an architecture discussion into product consequences. When an engineer says that a value exists only in client state, ask whether closing the application loses it. When a server accepts an operation but queues later work, ask what the user sees while that work remains pending. When a dependency changes, ask which customer behaviour relies on its previous contract.

AI can help make this vocabulary accessible. Give it an authorised, current excerpt from a system description and a specific question. Avoid sending production secrets, customer information or internal material to a service that is not approved for that use. Ask for several levels of explanation without allowing invented detail:

> Explain this appointment-change flow first in everyday language, then using the engineering terms in the document. Map each claimed component and step to a source passage. Mark anything the document does not establish. Separate a general example from a description of our system. Finish with questions for the engineer responsible for the flow.

A useful response may explain a client, server and storage relationship. It becomes misleading if it adds a queue, database technology or delivery guarantee absent from the supplied material. An architecture that sounds plausible is not evidence of the architecture your colleagues operate.

Verify a consequential step. If the explanation says the customer receives a message after the appointment is saved, ask whether the source establishes delivery, submission to a provider or merely creation of a pending notification. Check the answer with the responsible engineer and, where appropriate, the current code or operational documentation. Documentation itself can be out of date, so its date and owner matter.

Try a short translation exercise. An engineer tells Maya: “The client holds the draft. The server persists the accepted appointment. Notifications are processed separately. The new version is deployed, but the feature is disabled.” Explain what Leah can and cannot assume after she edits a time.

A sound interpretation is that Leah's draft may initially exist only in her current application session. Server acceptance creates the saved appointment state. Notification completion needs separate confirmation. Deployment establishes that the new software is present in the relevant environment, while the disabled setting prevents the intended feature from being available there. The statement still leaves questions about draft recovery, validation, notification failure and who will enable access.

For your own product, select one important action and draw a short sequence of labelled boxes. Name where instructions run, what crosses a network, which state changes and what persists. Ask an engineer to correct the drawing. Finish by writing the user-visible promises at each stage, including uncertain completion.

The exercise succeeds when you can follow the explanation, locate what you do not know and connect that uncertainty to a product requirement. You do not need to replace the engineer's judgement. You need enough shared language to stop treating a screen as the whole system and to make promises that the system can actually support.

## Notes

[^c17-n01]: MDN contributors, “Client-server overview”, sections “Web servers and HTTP (a primer)” and “Anatomy of a dynamic request”. Used for client/server request and response concepts, not as a description of Cedar's implementation. [Read the documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview).

[^c17-n02]: Dinah McNutt, “Release Engineering”, in *Site Reliability Engineering* (2016), introduction and sections on building, testing, deployment and configuration management. The chapter draws a general distinction among stages; Google's specific tooling is not prescribed. [Read the chapter](https://sre.google/sre-book/release-engineering/).

## References

MDN contributors. “Client-server overview.” MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview

McNutt, Dinah. “Release Engineering.” In *Site Reliability Engineering*, edited by Betsy Beyer, Chris Jones, Jennifer Petoff and Niall Richard Murphy. O'Reilly, 2016. https://sre.google/sre-book/release-engineering/
