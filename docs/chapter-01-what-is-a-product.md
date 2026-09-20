# Chapter 1: What Is a Product?

Cedar is a fictional software product that helps repair businesses schedule visits, assign technicians, and keep job records. Consider a plumbing company that uses it.

The company's dispatcher, the office employee who organizes repair visits, changes a homeowner's appointment from 10 a.m. to 2 p.m. She saves the new time in Cedar and calls the homeowner, who agrees to the change.

The plumber has already left the office with a printed schedule for the day. His copy still lists the appointment at 10 a.m., and he does not receive the revised time. When he arrives, the homeowner is out, having arranged to return for the afternoon appointment. The plumber cannot carry out the repair and calls the office for instructions.

Cedar's scheduling screen shows the time agreed with the homeowner. Yet the company has failed to get the plumber and homeowner to the same place at the same time.

To investigate, Cedar's product team needs to establish how appointment changes reach plumbers who are already working away from the office. Does Cedar send an update? Are office staff expected to call? How does the dispatcher know whether the plumber has received the change? Those answers would help Cedar's team and the plumbing company's manager decide whether to change the software, the company's working procedures, or both.

The scheduling screen is one part of Cedar. Understanding whether Cedar helps a business manage appointments also requires examining how people use its information to organize their work.

## A product changes something for someone

This book uses a working definition:

> A product is an intentionally maintained means of creating outcomes for some group under constraints.

This is a practical lens for making decisions, rather than a universal definition. Cedar is intended to help a repair business organize its work. An outcome is a change in someone's circumstances. Here, the intended outcome is that the plumber and homeowner meet at the agreed time so the repair can proceed. Saving the appointment time contributes to that aim, but the missed visit shows that a saved record does not establish success. A product can fail to produce its intended outcomes.

“For some group” asks you to identify the people involved. The plumbing company buys Cedar. The dispatcher and plumber use its information. The homeowner is the plumbing company's service customer and is affected by Cedar without needing to buy it or log in. Calling all these people “the customer” would hide differences that matter when deciding whom to consult.

Constraints limit what can be provided and sustained. The plumber has a working day to organize; the homeowner must arrange to be available. Cedar's team must consider the effort needed to build and support any change. A proposal to have someone call after every edit therefore raises a concrete question: whose time would that require?

“Intentionally maintained” draws attention to stewardship: the work of keeping an offering useful, supplying it, explaining it, supporting it, and deciding when to withdraw it. Imagine a bicycle offered with assembly instructions, maintenance guidance, and access to replacement parts. Those arrangements help its owner keep riding without requiring continuous software updates. A bicycle remains a product after its manufacturer stops supplying or supporting it.

Commercial sale is not required. An internal tool maintained for employees can be a product under this lens. Throughout this book, a product owner is someone substantially accountable for deciding what a product should become, whatever their job title. That responsibility begins with understanding whose work the product changes and what those people depend on.

## Choose a boundary for the decision

The dispatcher, plumber, homeowner, and appointment records form part of a system: interacting elements considered together for a purpose of analysis. A system can include people and procedures as well as software.[^1] Cedar changes this system by giving people ways to record and share planned work. Whether those records help depends on how people act on them.

A product boundary is the scope you choose to treat as the product for a particular decision. State what falls inside, what remains outside, and what you still depend on. For Cedar, compare three scopes:

| Scope | What you examine | A question it helps answer |
| --- | --- | --- |
| Scheduling interface | The dispatcher's controls and saved appointment time | Can she enter and recognize the intended time? |
| Cedar's offering | Software, guidance, and support provided to the business | What can the dispatcher expect Cedar to do or explain after she saves a change? |
| Wider appointment activity | The office call, plumber's printout, homeowner's availability, and communication between them | How do the people involved receive and act on the same appointment time? |

The first scope leaves calls and work away from the office outside the examination. The second includes Cedar's supporting operations but leaves the plumbing company's management outside the product. The third widens the investigation beyond Cedar's product boundary. It helps explain the missed visit without turning the plumbing company into part of Cedar.

Other decisions need different connections. To understand conflicting accounts of a visit, ask what Cedar's job history records and what the plumber's copy shows. To improve invoicing, establish which details of agreed and completed work an invoice needs, and what information the external accounting service requires. To examine payment collection, identify the external payment service on which collection depends. Those questions make records and suppliers relevant; they do not establish how Cedar transfers data. An engineer can clarify software behavior, while the person responsible for the plumbing company's accounts can explain its financial records.

For the missed appointment, begin with the route from the dispatcher's saved change to the plumber. Cedar's team can change its software and guidance. The plumbing company's manager controls its working procedures. They may need to agree a change together. Understanding a wider system does not give Cedar authority over everyone within it.

Choose the scope that lets you answer the question at hand. Investigating every part of the repair business would add work without necessarily explaining this visit. Public-service design guidance makes a similar distinction: consider the user's wider task while keeping the service's scope manageable.[^2] A narrow screen investigation can be sufficient for a question about a label; this appointment requires examining communication beyond the screen.

## What you deliver and what you maintain

Several related words help describe the work involved. We will use them as practical distinctions, allowing the same offering to fit more than one description. The point is to make a question clearer. Calling Cedar a platform, for example, should tell us which activities it supports, rather than settle whether a particular improvement is worthwhile.

A feature is a particular characteristic or function of an offering. Editing an appointment time is a feature. A capability is something a person, organization, or system can do. The plumbing company's ability to reschedule a repair depends on more than editing: someone must agree the new time with the homeowner and get that information to the plumber. Several features and human activities can contribute to one capability. The failed visit gives Cedar's team a reason to examine that capability before choosing a feature to change.

A service consists of activities or arrangements through which a need is met. The plumbing company provides a repair service; help from Cedar's support staff can form part of Cedar's offering. A service may itself be offered as a product under our working definition. “Service” draws attention to how the need is met, while “product” asks what is intentionally provided and maintained for a group.

A platform provides shared capabilities or infrastructure, meaning the underlying resources that enable other activities, offerings, or participants. Calling Cedar an operations platform draws attention to how scheduling and job information support work across the repair business. A platform need not bring buyers and sellers together in a marketplace. The label does not tell you how appointment changes are meant to reach the plumber. Cedar's team still needs to investigate that route.

A project is a bounded undertaking organized to accomplish a specified result.[^3] A scheduling redesign could be a project that changes a capability within Cedar. Projects can create, change, support, or retire products. Their duration does not determine whether the result is a product: a lengthy redesign remains a project, and the offering still needs decisions after the redesign finishes.

Those decisions begin before routine use. A business deciding whether to adopt Cedar needs to understand what work Cedar will help it do. Its dispatcher needs to learn how to use the information and functions provided. Once the business relies on Cedar, someone must keep the offering operating, answer questions, maintain guidance, and assess proposed changes. Acquisition, learning, operation, support, and improvement can overlap as different businesses use the product.

The dispatcher is already using Cedar's scheduling screen. If the dispatcher asks Cedar for help, a support employee needs to distinguish the time saved in Cedar from the time the plumber received. Otherwise, pointing to the correct screen could leave the dispatcher unable to prevent another missed visit. Cedar's product owner needs to decide what guidance and information support staff require to help investigate such a report.

Continued responsibility also includes deciding when investment should end. If Cedar eventually withdraws a function, its team should ask who still relies on it, what those people need to do next, and whether businesses will still be able to obtain the records they need. Public-service retirement guidance likewise addresses continuing needs, communication, and information protection.[^4] This does not require perpetual support. It requires a deliberate decision about the people affected by withdrawal.

Keeping these responsibilities visible helps you ask for useful assistance, including assistance from artificial intelligence (AI). First specify the work you need to understand and whose decisions are involved.

## Give AI the situation you mean

Consider asking an AI assistant to help with the missed appointment. The following requests and responses are constructed illustrations, not results from a test.

The vague request is:

> Help us improve rescheduling in Cedar.

An illustrative answer might suggest clearer calendar controls or additional reminders. Those ideas do not tell Cedar's team how the revised time was supposed to reach the plumber. The request leaves the assistant to choose what “rescheduling” includes.

A bounded request gives the assistant a more specific investigation:

> A plumbing company's dispatcher changes an appointment from 10 a.m. to 2 p.m. in Cedar and agrees the time with the homeowner by phone. The plumber has left with a printed 10 a.m. schedule, receives no change, and arrives while the homeowner is out. We need to understand how revised times reach plumbers away from the office. Identify people, possible information routes, and checks with staff or system records. Separate these supplied fictional facts from assumptions. Cedar's team can change its software; the plumbing company controls its procedures. Do not assume a technical cause or recommend features yet.

An illustrative response to this request might ask: Does Cedar send the plumber an update? Does the dispatcher have another way to contact him? Who checks that he received and understood the new time? What could an appointment record show, and what would still need to be checked with the people involved?

The second request defines the actors, the known mismatch, the limits of authority, and the output needed. It gives the product owner questions about communication to examine. More context does not establish that an answer is correct, and these examples do not predict what every assistant will produce.

The product owner would next map the possible information routes suggested by these questions, then check that provisional map with a dispatcher and relevant system documentation. The dispatcher can describe the company's procedures; documentation can explain Cedar's intended behavior. Available records and accounts of the visit would then need checking to establish what actually happened. A claim that Cedar sent an update, or that someone was responsible for confirming receipt, needs support from those checks. The product owner should check such claims before using them to justify a software change.

## Try the boundary elsewhere

Now imagine a public library whose online reservation interface confirms a reader's request. The reader arrives but cannot collect the book. Treat this as another fictional case: the confirmation and failed collection are known; the cause is open.

Before proposing a change, write a short answer to these questions:

1. What boundary would you choose to investigate the mismatch, and why?
2. Which people, records, and transfers of information or responsibility belong in that investigation? Name one dependency outside the software team's control.
3. What assumption would you check, and what responsibility remains after the reservation interface is released?

One useful starting point is the borrowing service. That scope includes the reader, library staff, catalog and stock records, book allocation, pickup arrangements, staff assistance, and returns. A record saying that a book exists is different from a particular copy being ready for collection. You could ask a library employee how a confirmed request reaches the person preparing books for pickup and how readiness is recorded. The availability of a copy still held by another borrower is one possible external dependency, not an established cause of this failed collection.

A screen boundary could instead help you examine what the confirmation tells the reader. Does it acknowledge the request or promise that the book is ready? Check that assumption against the wording and staff's explanation of the service. Continued responsibility might include keeping pickup guidance accurate and helping readers when collection fails. Neither boundary supplies a diagnosis by itself.

Can you explain how your chosen boundary changes the next question you would ask?

Return to Cedar with that question in mind. Understanding the appointment helps identify what might need to change. Choosing an improvement also requires asking whose situation should improve and at what cost: the homeowner's, the plumber's, the dispatcher's, or the business owner's. Those questions take us from defining a product to examining value, outcomes, and constraints.

## Notes and references

[^1]: National Aeronautics and Space Administration, *Systems Engineering Handbook*, [“2.0 Fundamentals of Systems Engineering”](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/), opening two paragraphs before section 2.1. Accessed September 20, 2026. Supports considering people, procedures, and relationships; the short definition in this chapter is the book's working convention.

[^2]: Government Digital Service, [“2. Solve a whole problem for users”](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem), *Service Manual*, “Why it's important” and “What it means.” Published May 8, 2019; updated January 29, 2026; accessed September 20, 2026. The chapter applies its scope principle beyond the original public-service setting.

[^3]: Association for Project Management, [“What is project management?”](https://www.apm.org.uk/resources/what-is-project-management/), “What is a project?” Accessed September 20, 2026. The chapter uses its own concise project formulation, consistent with the source's emphasis on bounded, purposeful work. Related terms are working conventions for this book.

[^4]: Government Digital Service, [“Retiring your service”](https://www.gov.uk/service-manual/agile-delivery/retiring-your-service), *Service Manual*, “Consider user needs,” “Telling your users,” and “Protecting information.” Published August 4, 2016; updated August 26, 2025; accessed September 20, 2026. Cited for general withdrawal concerns, without importing government procedures or legal requirements.
