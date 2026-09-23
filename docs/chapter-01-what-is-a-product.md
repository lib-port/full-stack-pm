# Chapter 1: What Is a Product?

## The appointment is recorded, but the visit fails

Cedar is a fictional software product that helps repair businesses schedule visits, assign technicians, and keep job records. Consider a plumbing company that uses it.

The company's dispatcher, who organizes repair visits, moves a homeowner's appointment from 10 a.m. to 2 p.m. She saves the new time in Cedar and calls the homeowner, who agrees to the change.

The plumber has already left the office with a printed schedule for the day. His printout still shows 10 a.m., and he receives no revised time. When he arrives, the homeowner is out, having arranged to return for the afternoon appointment. The plumber cannot carry out the repair and calls the office for instructions.

Cedar holds the time agreed with the homeowner, but the plumber is working from different information. The company has failed to get them to the same place at the same time.

Cedar's product team needs to find out how appointment changes reach plumbers who are already away from the office. Does Cedar send them an update? Are office staff expected to call? How does the dispatcher know whether the plumber has received the change? The answers would help the team decide whether the software, the company's procedures, or both need to change.

The scheduling screen is one part of Cedar. To assess whether the product helps a business coordinate visits, the team must also examine how people obtain and use scheduling information. A feature list describes the software's functions. It does not answer the immediate question: how should everyone involved learn about a revised appointment and act on it?

## A product changes an existing arrangement

For this book, a **product** is an offering deliberately maintained to help a particular group achieve outcomes under constraints. This definition gives you three questions to ask: whom does the offering serve, what should it help them achieve, and what conditions must it work within? Maintaining a product means making deliberate decisions about its continued usefulness, including when to change or withdraw it. It does not guarantee success or indefinite support.

Cedar becomes part of an existing arrangement of office work, travel, repairs, and agreements with homeowners. It gives the dispatcher a place to record an appointment change. Whether that record helps coordinate a visit depends on how the people doing the work obtain and act on the information.

We can examine these people, procedures, and software together as a **system** of interacting elements. NASA's systems engineering handbook explicitly includes people and procedures in its account of a system.[^1] Cedar is also a system: its scheduling screen and stored appointment records must work together. Examining the software as a system reveals relationships between its parts. Examining it within the plumbing company's work reveals relationships beyond the software.

Introducing or changing a product is an **intervention**: a deliberate change to an existing arrangement, intended to affect what happens. Here, the intended outcome is a coordinated visit that allows the repair to proceed. An **outcome** is a change in behavior, circumstances, or operating results. Identifying an outcome does not, by itself, establish what caused it.

Constraints limit which choices are feasible or acceptable. The team should investigate available staff time, access to information, and authority to change procedures. These are possible constraints on a solution; none is an established explanation for the missed visit. A proposed calling procedure, for example, would need someone able and authorized to carry it out. Before choosing a change, the team must decide whose work and which activities to include in its investigation.

## Choose the boundary for the decision

A **product boundary** defines what you treat as part of the product for a particular decision. It should also identify relevant dependencies outside that scope. The appropriate boundary depends on the question. Consider three questions about Cedar.

**How clearly does Cedar show an appointment change?** Examine the editing interface and saved record. The screen shows 2 p.m., which establishes the recorded time. It does not establish whether the plumber learns about the change. The missed visit alone does not establish that the interface is defective.

**How should revised times reach plumbers who are already away from the office?** Include Cedar's scheduling behavior, the company's dispatch work, and its agreement with the homeowner. Ask what information is sent, who should contact the plumber, and how the dispatcher can establish receipt. This scope directs attention to the gap between the saved record and the plumber's working schedule. It provides a useful starting point for investigating whether to change software, procedures, or both. The plumbing company must participate because the investigation includes its working practices.

**What should Cedar support across the company's work?** Widen the investigation to include jobs, billing, and product support. For this broader view, suppose the company uses external accounting and payment services, receives help from Cedar's support staff, and pays subscription and usage charges for Cedar. The following map combines the missed-visit facts with these additional hypothetical relationships.

| People or components | Information or exchange | Question to investigate |
| --- | --- | --- |
| Dispatcher and Cedar scheduling record | Dispatcher saves 2 p.m. | What happens after the new time is saved? |
| Dispatcher and homeowner | Agree to 2 p.m. by phone | How can other staff learn about that agreement? |
| Plumber and printed schedule | Printout still shows 10 a.m. | How should the revised time reach the plumber? |
| Cedar software and job data | Appointment, job, invoice, and payment records | Which activities need which information? |
| Company office and external accounting service | Financial information about jobs, invoices, and payments | Who keeps the records consistent? |
| Homeowner, plumbing company, and payment service | Payment for repair work | Who handles questions about repair payments? |
| Company employees and Cedar support | Questions about using Cedar | What information does support need to help? |
| Plumbing company and Cedar's provider | Subscription and usage charges for Cedar | What access and support do those charges cover? |

The homeowner's payment for repairs and the company's payment for Cedar are separate exchanges. Nothing in the incident description establishes that the homeowner paid for the failed visit. Accounting and support matter to the broader investigation, but their inclusion does not explain the missed visit.

Narrower boundaries also have uses. Focus on the mobile app when examining information available away from the office, the underlying software service when examining how records are saved, or the support operation when improving help. An **application programming interface (API)** defines how programs request data or actions from one another. It can be the product under consideration when deciding how other software connects. For a decision about the homeowner's service experience, follow the homeowner from agreeing a time through the visit.

Widen the boundary when it hides a dependency that could affect the decision. Narrow it when additional detail would not help you decide. UK government service guidance similarly advises against scopes that are too broad or too narrow.[^2] Cedar's team may be able to improve coordination, but it does not direct the plumbing company's employees or control external providers. A broader investigation does not, by itself, expand the Cedar provider's contractual obligations. The scope of analysis and the authority to make changes are separate matters.

## Several ways to describe the same offering

Suppose Cedar's product team commissions a finite piece of work to change appointment editing. That work is a **project**: a temporary undertaking to create or change something. The Project Management Institute similarly defines a project as a temporary undertaking that produces a particular product, service, or result.[^3] Once the project ends, decisions about operating and supporting the changed offering remain. A project can create a product or change an existing one; responsibility for the product extends beyond that project.

The plumbing company provides a **service**: work performed for or with someone to meet a need. Its repair work is a service to the homeowner. That service can also be considered a product when the company deliberately maintains the offering, decides whom it serves, and sets the conditions for providing it. A product can include human work.

A **platform** provides a basis on which others carry out activities or build offerings. Cedar is a technical platform because its shared software capabilities support scheduling, job records, and billing. A marketplace platform connects participant groups, such as buyers and sellers. When examining a marketplace, you need to understand how those groups find and deal with one another. Cedar's role in this example does not establish that it is a marketplace.

Editing an appointment time is a **feature**: a particular characteristic or function of an offering. A **capability** is something a person, organization, or system can do. The capability to coordinate a revised visit depends on software functions and human activities working together. Delivering the editing feature does not establish that people can coordinate the visit in practice.

These distinctions apply beyond software sold to customers. An employee inventory tool can be a product maintained for staff without being sold separately. For a physical drill, a useful product boundary may include instructions, compatible consumables, repair arrangements, and disposal decisions when these affect its use. Neither example requires a subscription. Choose the description that clarifies the responsibility you are examining: maintaining a tool, providing a tool-lending service, or completing a project to introduce either offering.

## Responsibility continues through time

Before buying Cedar, a business needs to understand what the software supports and what its employees must do themselves. Cedar's team needs to decide how to explain those expectations and help new customers begin using the product. Decisions about how businesses acquire and begin using Cedar belong alongside decisions about its everyday scheduling functions.

Once employees rely on Cedar, its provider must operate the software and arrange help when they have questions. Changes must take account of existing work. If appointment editing changes, for example, what do dispatchers and support staff need to learn? Maintenance includes keeping functions and information usable as needs and surrounding services change. UK government service guidance makes a related point: teams should work with operational colleagues to understand how online and offline activities affect one another.[^4]

A company may eventually stop using Cedar, or Cedar's provider may withdraw an offering. The transition requires decisions about how the company will retrieve needed job records and handle outstanding appointments. Product responsibility includes planning for these transitions without promising indefinite support. The activities described here need not occur in a fixed sequence or only once.

The decision determines whom to involve. An engineer can explain notification behavior; the plumbing company's operations manager can clarify who should make calls. Accounting or payment specialists can advise on financial information, and Cedar's support staff can explain what they need to help users. Product responsibility includes recognizing when a decision requires another person's knowledge or authority. An external AI assistant can help organize the questions if it receives enough context about the investigation.

## Give AI the people, situation, and question

Consider asking an assistant:

> How should we improve Cedar's scheduling software?

This prompt omits the missed visit, the plumber's outdated schedule, the homeowner's agreement, and the company's procedures. It invites solutions before establishing what needs to change.

Cedar already provides mobile access for technicians and notification features. This example leaves the recipients and triggers of those notifications unspecified. The existence of these features does not establish whether a revised appointment reaches the plumber. Include the known capabilities and the uncertainty in a more focused request:

> A plumbing company uses Cedar. Its dispatcher changes an appointment from 10 a.m. to 2 p.m., saves the new time, and calls the homeowner, who agrees. The plumber has already left with a printout showing 10 a.m. He receives no revised time, arrives while the homeowner is out, and calls the office. Cedar provides mobile access for technicians and notification features, but the recipients and triggers of those notifications are unspecified here. We need to decide whether the software, the company's procedures, or both need changing. Limit the investigation to coordinating this revised visit. Return a table with three data rows and four columns: person or information transfer; known fact; unanswered question; check and how it could inform the decision. Treat Cedar's notification behavior and the reason the plumber received no revised time as unknown. Do not invent interviews, metrics, faults, or a proven remedy.

The author wrote the following responses as illustrations; they are not results from a model test. A response to the vague prompt might say, “Add a mobile alert.” That suggestion does not establish what Cedar currently does or whether another alert would address the problem. A response to the focused prompt could include this row:

| Person or information transfer | Known fact | Unanswered question | Check and how it could inform the decision |
| --- | --- | --- | --- |
| Revised time in Cedar to the plumber's working schedule | Cedar shows 2 p.m.; the printout shows 10 a.m. | How should updates reach a plumber who is already away from the office? | Trace the update procedure with the dispatcher and an engineer to establish whether software changes, procedural changes, or both need investigation. |

The other rows could ask who should contact the plumber and what, if anything, records receipt. Check every factual statement against the information supplied. “The printout shows 10 a.m.” is a supplied fact. “Cedar failed to send its automatic alert” is an unsupported claim. Turn that claim into a question: “Was an alert expected or attempted?”

In real work, inspect actual behavior or authorized records with the relevant staff. If a receipt indicator exists, establish what it means: a click alone may not show that the recipient understood the change. A focused prompt can produce a useful investigation plan, but the plan and its claims still need checking. Use fictional information or information approved for use with the assistant when trying this exercise yourself.

## Choose a boundary yourself

In a fictional public library, a resident reserves a cordless drill for afternoon use. The website confirms the reservation. When the resident arrives, a lending assistant finds that the battery is empty and no charged spare is available. The resident leaves without a usable drill. Why no usable drill was ready for collection is unknown.

You are responsible for the reservation website. A lending manager directs equipment preparation and handover. Write a short analysis:

1. State the result the resident wants. Identify one decision about the website and one about the lending service.
2. Justify a narrow boundary for investigating the website and a broader boundary for investigating how to make a usable drill available.
3. For each boundary, identify an information transfer it includes or leaves out, a dependency outside your control, and an unanswered question.
4. Propose a check to make before choosing a fix, and identify one responsibility that continues after launch.

One workable analysis begins by distinguishing a confirmed reservation from equipment that is ready to use. The resident wants a usable drill for the afternoon. A website decision concerns how availability is determined and displayed. A lending-service decision concerns how equipment is prepared for collection.

The narrow website boundary lets you trace how availability information becomes a reservation confirmation. Physical preparation falls outside this boundary and remains under the lending manager's control. The resident's ability to use the drill still depends on that preparation. You do not yet know how the website determines availability or whether it receives a record of equipment readiness.

The broader lending-service boundary includes the lending assistant, staff inventory tool, drill, battery, and preparation work. It brings equipment readiness, the reservation, and collection into the same investigation. You still depend on the lending manager's preparation arrangements: widening the investigation does not give you authority over that work. Ask the manager whether readiness is recorded and whether that information reaches the website. Check how the website determines availability.

These checks could inform software changes, preparation procedures, or both. They do not establish a remedy in advance. After launch, keeping availability information usable remains a responsibility. If the website or lending service is retired, existing reservations must also be addressed.

**Value** is an improvement that matters to a specified person or group, assessed against an alternative and alongside costs and harms. Once you have chosen a useful boundary, ask which improvement matters, to whom, compared with what alternative, and at what cost.

## Notes

[^1]: NASA, [“2.0 Fundamentals of Systems Engineering”](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/), opening paragraphs and §2.6.

[^2]: Government Digital Service, [“2. Solve a whole problem for users”](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem), “What it means.”

[^3]: Project Management Institute, [“Projects and The Project Lifecycle”](https://www.pmi.org/about/what-is-a-project), “What is a project?”

[^4]: Government Digital Service, [“3. Provide a joined up experience across all channels”](https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels), “What it means.”

## References

NASA. *Systems Engineering Handbook*. [“2.0 Fundamentals of Systems Engineering”](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/). Page updated January 9, 2025. Accessed September 21, 2026.

Government Digital Service. Service Standard. [“2. Solve a whole problem for users”](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem). Published May 8, 2019; updated January 29, 2026. Accessed September 21, 2026.

Project Management Institute. [“Projects and The Project Lifecycle”](https://www.pmi.org/about/what-is-a-project). Undated. Accessed September 21, 2026.

Government Digital Service. Service Standard. [“3. Provide a joined up experience across all channels”](https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels). Published May 8, 2019; updated December 16, 2025. Accessed September 21, 2026.
