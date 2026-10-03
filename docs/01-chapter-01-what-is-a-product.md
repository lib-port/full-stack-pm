# Chapter 1: What Is a Product?

## The appointment that the screen could not complete

The plumbing company's dispatcher, the office employee who organises repair visits, changes a homeowner's appointment from 10 a.m. to 2 p.m. She saves the new time in Cedar and calls the homeowner, who agrees to the change.

The plumber has already left the office with a printed schedule. His copy still lists the appointment at 10 a.m., and he does not receive the revised time. When he arrives, the homeowner is out, having arranged to return for the afternoon appointment. The plumber cannot carry out the repair and calls the office for instructions.

Cedar's scheduling screen shows the agreed time. Yet the plumbing company has failed to get the plumber and homeowner to the same place at the same time. A person inspecting only the screen could confirm that the appointment was updated correctly and still miss the problem that matters to everyone waiting for the repair.

Before proposing a feature, Cedar's product manager needs to establish how changes reach plumbers already away from the office. Does the software send an update? Is the dispatcher expected to telephone the plumber? Is there a way to know whether the new time has been received? The scene establishes a missed communication, but it does not establish a technical cause. Those questions help decide whether to change the software, the company's working procedures, or both.

A feature is a particular characteristic or function of an offering: editing an appointment, displaying a schedule or sending a message. Features are concrete enough to demonstrate and discuss. They are also an incomplete description of what people depend on. The appointment succeeds through a combination of recorded information, human agreement, communication and action.

Describing Cedar as scheduling software is useful when selecting a category in a directory. It is less useful when deciding why a repair visit failed. The product manager must then consider the dispatcher, plumber and homeowner, the information each receives, and the arrangements that connect them. A screen is part of that arrangement, but a correct screen does not ensure a successful visit.

The same distinction appears in an internal purchasing tool. An employee may submit a request successfully while nobody has authority to approve it. A purchase-request feature has worked; the organisation's ability to obtain equipment has not. Improving the form would make little difference if the unresolved problem were an absent approver.

The practical starting point is therefore a question: what are people trying to accomplish, and what must work together for that to happen? Answering it gives the product manager a more useful object of attention than a list of features.

## A maintained intervention

In this book, a **product is an intentionally maintained means of creating outcomes for some group under constraints**. This is a working definition for making decisions. It describes an intended purpose, not a guarantee that the product succeeds.

“Intentionally maintained” means someone takes responsibility for keeping the offering useful over time. A transport timetable must remain accurate. A drill needs instructions, replacement parts and a workable response to faults. An internal reporting service needs someone to understand which decisions its reports support and whether their underlying data remains suitable. Maintenance may involve software, physical materials, information or human work.

“For some group” directs attention to people. Cedar's purchaser is the service-business owner, but its operation also affects dispatchers, technicians and homeowners. A public service may serve residents without asking them to pay at the point of use. An internal product may serve employees while its costs are carried by another department. Payment identifies an economic relationship; it does not identify everyone whose experience matters.

“Under constraints” recognises that products operate with limited money, time, skills and authority. Cedar cannot require every homeowner to answer the telephone immediately. A library cannot promise that every book will always be available. Product responsibility includes deciding what can reasonably be promised and arranging what happens when that promise cannot be fulfilled.

A **system** is a set of interacting elements considered together for a purpose of analysis. The elements can include people, processes and software. Calling a product an intervention in a system means that introducing or changing it alters an existing arrangement. A library reservation service changes how readers request books, how staff hold them and how other readers discover availability. The reservation screen is only one part of those changes.

This perspective also makes failure easier to discuss. An intervention can leave the original problem unresolved, create a different problem or help one group at another's expense. Product managers need to examine what actually changes, rather than assume that an intended benefit follows from delivery. The next chapter develops that distinction through value and outcomes.

The definition does not require every product to be large or complicated. A simple measuring cup can do a useful job within a narrow boundary. The point is to include what matters to the decision. Understanding how its markings remain legible may matter more than adding another feature. You are looking for the connections that explain use, not trying to make every object sound like an elaborate enterprise.

## Choose the boundary for the decision

A **product boundary** is the scope treated as the product for a particular decision, including an account of relevant dependencies outside it. Drawing that boundary is an analytical choice. It should make an investigation manageable without hiding something that could change the answer.

For a decision about the size of a button, Cedar's technician mobile app may be an adequate starting boundary. For the missed appointment, the boundary must include how the dispatcher and technician exchange changed information. For deciding whether Cedar helps a company complete and collect payment for repair work, the investigation must reach further.

| Element | Connection that may matter |
| --- | --- |
| Dispatcher | Changes visits and needs to know who has received the revision. |
| Technician | Uses appointment and job information to decide where to go and what to do. |
| Homeowner | Agrees a time, provides access and receives communication. |
| Job and customer data | Connects the appointment with the right location, contact details and work history. |
| External accounting service | Receives or supplies records needed to account for the job. |
| Payment system | Helps transfer money and communicates payment status. |
| Cedar support operation | Helps service businesses diagnose and recover from problems. |

The table describes dependencies to investigate, not findings about why the plumber arrived at the wrong time. Accounting and payment may be irrelevant to that particular failure. They become relevant when the question expands to completing the whole commercial transaction. The boundary follows the decision rather than expanding automatically whenever another system is mentioned.

A useful boundary statement includes a purpose: “We are examining appointment changes from the dispatcher's saved revision to the technician's receipt of the new instructions.” It also names exclusions and dependencies: “We are not redesigning route planning, but travel commitments may limit which revisions are feasible.” This makes omissions visible and gives colleagues a reason to challenge them.

An analytical boundary does not confer control. Cedar can investigate how a plumbing company makes calls without employing its dispatcher. The product manager can identify a dependency on an accounting service without owning that service. The resulting action may be an agreement, clearer instructions, an integration change or a decision to limit what Cedar promises.

Other boundaries can be equally legitimate. A support operation can be managed as a product serving people who need to resolve problems. An API, an interface through which software systems communicate, can be treated as a product for developers. A marketplace may require attention to both buyers and sellers. An end-to-end service may include several applications and organisations.

The UK Government Digital Service makes a related distinction in its guidance: services should address the user's whole problem and connect with other organisations where necessary, while avoiding scope so broad that the service becomes unwieldy.[^c01-n01] The useful lesson is to connect the pieces that matter without assuming one team must build or control them all.

Try stating the boundary for one current decision in your work. Name the people included, a dependency outside your control and an exclusion. Then ask what new information would make that exclusion unsafe. If no possible answer could alter the boundary, check whether you have made the boundary a declaration of ownership instead of a tool for investigation.

## Useful distinctions, without a naming contest

Organisations use product, project, service, platform and capability in different ways. The purpose of distinguishing them is to clarify responsibility. You need enough agreement to decide what will be maintained, who depends on it and when a piece of work is complete.

A **project** is a bounded effort undertaken to produce a particular change. Replacing Cedar's appointment editor could be a project with an agreed end. The scheduling product continues after that project closes: customers still use it, faults still occur and circumstances still change. Completing the project establishes that specified work ended. It does not establish that ongoing responsibility has ended.

A **service** involves activities performed for someone. A repair service combines booking, travel, diagnosis, repair and payment. Software can support the service, and a service can itself be treated as a product when people intentionally maintain an offering around recurring needs. These categories can overlap without becoming meaningless.

A **platform** provides shared foundations or arrangements on which others build, operate or interact. An internal platform might help several development teams deploy their applications. A marketplace platform may connect independent providers and customers. In either case, describing it as a platform does not remove the need to identify the people served, the responsibilities retained and the consequences when participants cannot complete their work.

A **capability** is something a person, organisation or system can do. Rescheduling a repair visit is a capability. It may depend on several features, the dispatcher's judgement, the technician's availability and communication with the homeowner. This distinction helps when a request names a feature but the actual need concerns a capability that could be supported in several ways.

Consider a warehouse buying a handheld scanner. The device is a physical product. A project introduces it. A maintenance service repairs broken devices. A shared inventory platform receives the readings. The resulting capability is recording stock movements accurately enough to support warehouse work. None of these labels alone proves that the arrangement succeeds.

When colleagues disagree about the labels, bring the conversation back to decisions. Who will support the scanner after installation? Who checks whether inventory information remains useful? Who can change the workflow? A shared answer to those questions matters more than winning an argument about whether the scanner programme is “really” a product.

## Responsibility continues after delivery

People must first discover, obtain and begin using a product. They then depend on its operation, adapt to changes and eventually stop using it. Acquisition, use, operation, change, maintenance and retirement are therefore parts of product responsibility. The balance varies, but delivery is one event in that longer relationship.

For Cedar, an acquisition decision concerns what a service business expects to gain and what adopting the product requires. During use, the question becomes whether dispatchers and technicians can coordinate their work. During operation, someone must respond when necessary information is unavailable. Maintenance keeps existing arrangements dependable; change introduces new behaviour. Retirement requires consideration of people and records that still depend on the old arrangement.

A product manager does not personally perform every activity. The role requires recognising dependencies and involving the people able to assess them. A support colleague may explain recovery work invisible in usage reports. An engineer may identify how two records become inconsistent. A finance specialist may explain why a completed payment is not yet reconciled in the accounts. The chosen boundary helps identify whose knowledge is needed.

Suppose a company replaces a paper inspection form with a mobile application. Releasing the application answers only part of the adoption question. Supervisors need to know where completed inspections appear; staff need access during their working day; somebody must decide what happens to unfinished paper forms. Later, withdrawing the application raises a different set of questions about historical records and replacement arrangements. A project plan may assign the initial installation work clearly while leaving these responsibilities unassigned. Looking across the product's life reveals those gaps early enough to name an owner and decide what continuing support is affordable. It also makes a narrower promise possible when the organisation cannot sustain a broader one.

The same boundary also improves AI-assisted investigation. Compare these two prompts:

> Suggest improvements to Cedar's scheduling product.

> A dispatcher changes a visit from 10 a.m. to 2 p.m. and informs the homeowner. A plumber following a printed schedule arrives at 10 a.m. We do not know how changed appointments are meant to reach technicians. Map the people, information transfers and unanswered questions needed to decide whether software, working procedures or both should change. Keep possible explanations separate from the supplied events.

The first prompt leaves the system unspecified. A response listing calendars, alerts and automatic scheduling could be fluent while missing the actual decision. The second supplies actors, information, a consequence and an uncertainty. It gives the AI a more useful task: organising an investigation.

Check the resulting map against the scene. Has it silently assumed a mobile notification was sent? Has it treated the printed schedule as proof that the plumber cannot use a phone? Has it omitted how receipt of a change becomes visible to the dispatcher? These checks turn generated possibilities into questions you can take to people who know the operation. They do not turn the possibilities into evidence.

The product manager's first act of judgement is often deciding what to examine. A feature list tells you what an offering can do. A useful product boundary helps you investigate whether its people, information and operations work together, and what responsibility continues when they do not.

## Notes

[^c01-n01]: Government Digital Service, “2. Solve a whole problem for users”, Service Standard, sections “Why it's important” and “What it means”, updated 29 January 2026. The guidance combines whole-problem responsibility with an explicit warning against overly broad, complicated services. [GDS Service Standard point 2](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem).

## References

Government Digital Service. “2. Solve a whole problem for users.” *Service Manual: Service Standard*. Updated 29 January 2026. https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem. Accessed 3 October 2026.
