# Chapter 1: What Is a Product?

## The appointment is recorded, but the visit fails

Cedar is a fictional software product that helps repair businesses schedule visits, assign technicians, and keep job records. Consider a plumbing company that uses it.

The company's dispatcher—the office employee who organizes repair visits—changes a homeowner's appointment from 10 a.m. to 2 p.m. She saves the new time in Cedar and calls the homeowner, who agrees to the change.

The company's plumber has already left the office with a printed schedule for the day. His copy still lists the appointment at 10 a.m., and he does not receive the revised time. When he arrives, the homeowner is out, having arranged to return for the afternoon appointment. The plumber cannot carry out the repair and calls the office for instructions.

Cedar's scheduling screen shows the time agreed with the homeowner. Yet the company has failed to get the plumber and homeowner to the same place at the same time.

To investigate, Cedar's product team needs to establish how appointment changes reach plumbers who are already working away from the office. Does Cedar send an update? Are office staff expected to call? How does the dispatcher know whether the plumber has received the change? Those answers would help the team decide whether to change the software, the company's working procedures, or both.

The scheduling screen is one part of Cedar. Understanding whether the product helps a business manage appointments also requires examining how people use its information to organize their work. A list of scheduling features would describe available functions, but would leave the team's immediate question unanswered: how should everyone involved learn and act on the revised appointment?

## A product changes an existing arrangement

For this book, a **product** is an intentionally maintained means of creating outcomes for some group under constraints. This is a practical lens: identify the people an offering serves, what it is intended to help them achieve, and the conditions under which it must work. Maintaining a product means making deliberate decisions about its continued usefulness, including when to change or withdraw it. It does not promise success or support forever.

Cedar enters an arrangement of office work, travel, repair work, and agreements with homeowners. Its scheduling record gives the dispatcher somewhere to save the revised time. Whether that record helps coordinate a visit depends on how the people doing the work obtain and act on the information.

We can examine those interacting elements together as a **system**. People and procedures can be elements alongside software; NASA's systems engineering handbook explicitly includes them in its account.[^1] Cedar itself also has interacting parts: its scheduling screen and saved appointment records need to work together. Looking at the product as a system helps us ask about those relationships. Looking at Cedar within the plumbing company's work reveals relationships that cross the software's edges.

Introducing or changing a product is an **intervention**: a deliberate change to an existing arrangement, intended to affect what happens. The intended outcome here is a coordinated visit that allows the repair to proceed. An outcome is a change in behavior, circumstances, or operating results; calling it an outcome does not establish its cause.

Constraints limit feasible or acceptable choices. Staff time, access to information, and authority to change working procedures are conditions to investigate, not explanations already established for this incident. A proposed calling procedure would need someone able and authorized to carry it out. Before choosing such a change, the team must decide which people and activities its investigation needs to include.

## Choose the boundary for the decision

A **product boundary** is the scope treated as the product for a particular decision, including an account of relevant dependencies outside it. Consider three questions about Cedar.

How clearly does Cedar show a changed appointment? Examine the editing interface and saved record. The screen shows 2 p.m.; that establishes the recorded time, but tells us nothing about whether the plumber learns it. This incident alone does not establish an interface defect.

How should revised times reach plumbers already away from the office? Include Cedar's scheduling behavior, the company's dispatch work, and the homeowner agreement. Ask what information is sent, who is responsible for contacting the plumber, and how the dispatcher can establish receipt. This boundary exposes the missing transfer. It is the useful starting scope for choosing between software changes, procedural changes, or both. Investigating it requires the company's participation.

What should Cedar support across the business's work? Widen the view to jobs, billing, and help. Suppose the company uses external accounting and payment services, and Cedar staff provide product support. The map now includes these relationships:

| People or components | Information or exchange | Question to investigate |
| --- | --- | --- |
| Dispatcher and Cedar scheduling record | Saves 2 p.m. | What happens after saving? |
| Dispatcher and homeowner | Agree to 2 p.m. by phone | How is that agreement available to staff? |
| Plumber and working schedule | Printout still says 10 a.m. | How should revised information reach him? |
| Cedar software and job data | Appointment, job, invoice, and payment records | Which activities need which information? |
| Company office and external accounting service | Financial information about jobs, invoices, and payments | Who keeps the records consistent? |
| Homeowner, company, and payment service | Payment for repair work | Who handles payment questions? |
| Company employees and Cedar support | Questions about using Cedar | What information does support need? |
| Plumbing company and Cedar's business | Subscription and usage charges for Cedar | What access and help does the purchase cover? |

The homeowner's repair payment and the company's Cedar charges are separate exchanges. The map does not imply that the failed visit generated a payment. Accounting and support belong in this broader investigation; their presence supplies no explanation for the missed visit.

Smaller scopes also have uses. Focus on the mobile app to consider information available away from the office, the underlying software service to examine saving records, or the support operation to improve help. An **API**, a defined way for programs to request data or actions from one another, can be the product focus when deciding how other software connects. When the decision concerns the complete service experience, follow the homeowner from agreeing a time through the visit.

Widen a boundary when a relevant dependency is hidden; narrow it when extra detail cannot inform the decision. UK government service guidance likewise advises against scopes that are too broad or too narrow.[^2] Cedar's team can influence coordination without directing the plumbing company's employees or controlling external providers. A wider analysis does not enlarge its contractual obligations. These overlapping views also help explain the different labels applied to an offering.

## Several ways to describe the same offering

Suppose Cedar's product team commissions a finite piece of work to change appointment editing. That is a **project**: a bounded undertaking to create or change something. The Project Management Institute similarly defines a project as a temporary undertaking producing a particular product, service, or result.[^3] Completing that work leaves questions about operating and supporting the changed offering. A project can deliver a product or change an existing one; the terms identify different responsibilities.

The plumbing company provides a **service**: work performed for or with someone to meet a need. The repair is its service to the homeowner. That service can also be considered a product when the company deliberately maintains an offering, decides whom it serves, and sets conditions for providing it. Calling something a product does not exclude human work.

A **platform** is an arrangement others use as a basis for activities or offerings. Cedar is a technical platform in the sense that its shared software capabilities support scheduling, job records, and billing. A marketplace platform connects participant groups, such as buyers and sellers. That description would direct attention to how those groups find and deal with each other. Cedar's role in this example does not establish a marketplace.

Editing an appointment time is a **feature**, a particular characteristic or function of an offering. A **capability** is something a person, organization, or system can do. Coordinating a revised visit requires software functions and human activities to work together. Delivering the editing feature does not establish that capability in practice.

The same lens applies beyond sold software. An employee inventory tool can be a product maintained for staff without being sold separately. A physical drill can be considered with instructions, compatible consumables, repair arrangements, and disposal decisions when those affect its use. Neither example requires a subscription. Choose the description that clarifies the responsibility at issue: maintaining the tool, providing a lending service, or completing a project to introduce either. Those responsibilities continue to matter after initial delivery.

## Responsibility continues through time

When a business considers buying Cedar, it needs to understand what the offering supports and what work its own employees must do. Cedar's team must decide how to explain those expectations and help a new customer begin using the product. Acquisition and introduction belong in product decisions alongside the daily scheduling screen.

Once staff rely on Cedar, the provider must operate the software and arrange help when employees have questions. Changes require attention to existing work: if appointment editing changes, what should dispatchers and support staff learn? Maintenance includes keeping functions and information usable as needs and surrounding services change. UK government service guidance makes a related point: teams should work with operational colleagues to understand effects between online and offline activity.[^4]

Eventually a company may leave Cedar, or Cedar's provider may withdraw an offering. Decisions then include how the company can retrieve needed job records and how outstanding appointments will be handled during transition. These are responsibilities to plan for, not a promise of indefinite support or a compulsory sequence through which every product passes once.

The questions indicate whom to involve. Ask an engineer about notification behavior, the plumbing company's operations manager about calling responsibilities, and accounting or payment specialists about financial information. Cedar support colleagues can explain what they need to help employees. Product responsibility includes recognizing when a decision requires their knowledge and authority. An external AI assistant can help organize such questions, provided it receives enough context to understand the investigation.

## Give AI the people, situation, and question

Consider asking an assistant:

> How should we improve Cedar's scheduling software?

The prompt omits the failed visit, the plumber's old information, the homeowner's agreement, and the company's procedures. It also invites improvements before establishing what needs changing. Give the assistant a bounded investigation instead:

> A plumbing company uses Cedar. Its dispatcher changes a visit from 10 a.m. to 2 p.m., saves the time, and calls the homeowner, who agrees. The plumber has left with a printout showing 10 a.m. He receives no revised time, arrives while the homeowner is out, and calls the office. We need to decide whether software, working procedures, or both need changing. Treat coordination of the revised visit as the scope. Return three rows: actor or information transfer; known fact; unanswered question; check that could inform the decision. Keep notification behavior and cause unknown. Do not invent interviews, metrics, faults, or a proven remedy.

For comparison, consider author-constructed responses, not results from a model test. “Add a mobile alert” could answer the weak prompt, but leaves the missing behavior unspecified. Cedar already has technician mobile access and customer notifications. A useful investigation response would instead contain a row like this:

| Transfer | Known fact | Question | Check and decision use |
| --- | --- | --- | --- |
| Saved time to plumber's schedule | Screen: 2 p.m.; printout: 10 a.m. | How should updates reach someone already away? | Trace the update procedure with the dispatcher and an engineer to identify whether software changes need investigation. |

Other rows could ask who should contact the plumber and what, if anything, shows receipt. Check every factual statement: “the printout says 10 a.m.” is supplied; “Cedar failed to send its automatic alert” is not. Recast the latter as “Was an alert expected or attempted?” In real work, inspect actual behavior or authorized records with relevant staff. A receipt indicator, if one exists, would still need interpretation; a click alone need not mean understanding. The stronger prompt defines a useful task, but its answer remains a proposal to check. Use fictional or appropriately approved information for your own exercise.

## Choose a boundary yourself

In a fictional public library, a resident reserves a cordless drill for afternoon use. The website confirms the reservation. At collection, a lending assistant finds the battery empty and has no charged spare. The resident leaves without a usable drill. Why the reservation and equipment readiness differed is unknown.

You are responsible for the reservation website; a lending manager directs equipment preparation and handover. Write a short analysis:

1. Name the resident's desired result and a website decision versus a lending-service decision.
2. Justify a narrow website boundary and a broader boundary for making a usable drill available.
3. For each boundary, identify an information transfer it exposes or omits. Name a dependency outside your control and an unknown.
4. Propose a check before choosing a fix, and one responsibility after launch.

A workable interpretation distinguishes confirmation from readiness. The website boundary lets you check how availability is recorded. That traces information into the confirmation but leaves equipment preparation outside the website team's authority. The lending-service boundary includes the assistant, staff inventory tool, drill, battery, and preparation work. You depend on the lending manager's preparation arrangements. Ask the lending manager whether readiness is recorded and whether that information reaches the website. Check how the website determines availability. Those checks could inform software changes, preparation procedures, or both; they do not establish a remedy. Keeping availability information usable remains necessary after launch. Retirement also requires handling existing reservations.

Value is an improvement that matters to a specified person or group, assessed against an alternative and alongside costs and harms. With a useful boundary chosen, ask which improvement matters to whom, compared with what alternative and at what cost.

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
