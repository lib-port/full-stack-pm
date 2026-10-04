# Chapter 18: Data and Information

## Decide what a customer means

Cedar's product manager asks for a customer field on a repair record. Nadia, a homeowner, appears to be the obvious value. Then the dispatcher explains the job: Nadia owns two properties, shares an account with her partner Ellis, and uses both a mobile number and an email address. A housing organisation will pay for this particular repair. The person who needs an arrival message and the organisation that needs the invoice are different.

A single field labelled Customer can hide all those roles until the product must act. If Cedar sends an invoice to whoever receives appointment messages, the wrong person may receive it. If changing the payer also changes the visit contact, the dispatcher may lose the information needed to arrange access. The problem begins with meaning, before anyone chooses a database.

**Data** consists of recorded representations: a name, identifier, date, image or amount. **Information** is what those representations convey in a context. The value “120” tells you little until you know whether it denotes minutes, money, a property number or something else. A correctly stored value can still communicate the wrong thing when its meaning is unclear.

A **data model** describes the things a system represents and how they relate. It is a selective account of the world, shaped by what the product needs to do. For Cedar, distinguishing a person, a property, an account and a payer enables actions that a single customer record may make awkward or unsafe.

Start with questions about work. Who can book a repair? Who can change the appointment? Who receives access instructions? Who owes payment? Who may see the history? The same person can occupy several roles, but that does not make the roles interchangeable. A model that separates them can represent both the ordinary case and exceptions without requiring staff to misuse a field.

The opposite mistake is to model every imaginable distinction before establishing its purpose. Cedar does not need an encyclopaedia of household relationships to schedule a repair. It needs enough structure to support the decisions and obligations within the product's scope. Ask what action becomes wrong or impossible if a distinction is omitted.

Names matter because they carry assumptions into screens, reports and integrations. If one team uses customer to mean account and another uses it to mean payer, their totals can differ even when each calculation follows its own definition perfectly. Write down the meaning before trying to reconcile the numbers.

## Model things, properties and connections

An **entity** is a kind of thing the model distinguishes, such as a person, property, job or invoice. An **attribute** records a property of an entity: a job's planned date or a property's access instructions. A **relationship** connects entities: a job takes place at a property, and an account can be associated with several people.

A candidate Cedar model might separate the following:

| Entity | Information it represents | Important connections |
| --- | --- | --- |
| Person | An individual such as Nadia or Ellis | Participates in accounts; has contact methods |
| Property | A place where work occurs | Has jobs and time-dependent ownership or occupancy |
| Account | A service relationship administered together | Has authorised people and associated properties |
| Job | A particular piece of requested work | Has a property, visit contact and payer |
| Organisation | A company or other organised body | May pay for a job or hold an account |

This is a starting point for discussion, not a production design. The team still needs to decide which relationships can have several participants, which are optional and which change over time. If two people share an account, a model allowing exactly one person per account misrepresents their work. If a job has no confirmed payer yet, forcing a dummy payer into a required field hides an unresolved business question.

An **identifier** distinguishes a record within a defined scope. A stable internal person identifier can continue to refer to Nadia after she changes her email address. A name is often unsuitable because different people can share it; an email address can change or be shared. Uniqueness in a sample does not establish uniqueness across future use.

Scope matters too. Job 417 in one service company's records may have no relationship to Job 417 in another company's records. Cedar must know which company and identifier together select the intended job. A convenient human label is not automatically a safe global identity.

A **schema** describes the structure and rules the stored data is expected to follow. In a relational database, tables contain records, columns contain defined attributes, and keys help identify and connect records. PostgreSQL's documentation distinguishes primary keys that identify rows from foreign-key constraints that maintain references between related tables.[^c18-n01] These mechanisms can enforce part of a model; they cannot decide what customer ought to mean.

Ask engineers which important rules are enforced and where. A rule that every invoice references an existing job differs from a rule that the referenced job belongs to the same service business. Both can matter. A diagram containing a line between two boxes does not establish either guarantee.

Distinguish an unknown value from a value that does not apply. A blank payer could mean nobody has asked, the customer has not decided, or no charge will be made. Those states may require different actions. A default such as “account holder” can conceal the distinction by making every record look complete. Describe what staff need to know and do in each state before deciding which fields may be empty. This prevents a storage convention from quietly becoming a business policy.

## Make stored material answerable

**Structured data** follows an explicit arrangement that supports consistent interpretation, such as separate appointment date, property identifier and job status fields. **Unstructured data** does not fit a fixed set of those fields in the same way: a technician's narrative note or a photograph may contain many relevant details without labelling each one separately.

Unstructured does not mean meaningless or literally without any organisation. A photograph has a format, and a note has language. The distinction concerns how readily particular facts can be located and processed for the task. “The customer will be away until Thursday” in a note is different from a confirmed availability date in a field designed for scheduling.

Structured fields can make comparison easier, but the categories must fit the work. If a form offers only Completed or Cancelled when a technician is waiting for a part, users must choose an inaccurate category or maintain information elsewhere. Adding a free-text explanation does not necessarily repair reports that count only the selected status.

A **database** organises stored data and provides mechanisms for retrieving and changing it. A **query** asks for data according to specified conditions or calculations. “Show unpaid invoices for jobs at Nadia's properties” requires more than a search box. The product must know how property, job, invoice, payer and payment status relate, and what unpaid means at the time of the request.

The wording of a question can expose a model's weakness. Does “Nadia's properties” mean properties she owns now or owned when the jobs occurred? Does unpaid include an invoice awaiting a payment update from another system? Does a disputed amount count? The database may return exactly what its query requests while the product displays a misleading answer.

Even counting customers needs an agreed unit. Nadia and Ellis could be two people, one shared account and contacts for several properties. A report counting account records and a report counting distinct people answer different questions. Neither count becomes the correct customer total without reference to its purpose. When presenting a number, name the unit and the inclusion rule so that another reader can understand what was actually counted.

**Data quality** is fitness for the intended use. Useful dimensions include accuracy, completeness, validity, consistency and timeliness. A correctly formatted telephone number is valid under a format rule, but may belong to the wrong person. A complete address may be out of date. A technically precise field is useful only if it supports the decision being made.

Find where poor quality enters the work. If dispatchers repeatedly select the wrong property because several records have similar labels, correcting records one by one leaves the selection problem intact. If a contact number is required before it is known, placeholder numbers may satisfy the form while undermining notifications. Quality work can require changing collection and workflow, not merely cleaning stored values.

**Duplication** also requires interpretation. A second record for Nadia may be an accidental duplicate identity. A copy of her appointment on a technician's device may be intentional. The first raises a matching problem; the second raises a synchronisation problem. “Remove duplicates” is insufficient until the product team knows which kind it means.

## Keep changes coherent

Suppose Cedar changes the payer on a job. The job record and a related draft invoice must agree about who will be charged. If one update succeeds and the other fails, the product can present contradictory information. A **transaction** groups operations so that they can succeed or fail together within a defined boundary.

PostgreSQL's introductory explanation describes a transaction as an all-or-nothing unit and distinguishes completion from incomplete intermediate changes.[^c18-n02] For the product manager, the key question is which changes must remain together and what the implementation actually guarantees. A transaction is not simply any activity that feels like one task to a user.

The boundary matters. Updating records in one database does not automatically make an external email or accounting operation part of the same transaction. Cedar might save a new payer while a separate invoice synchronisation remains pending. The interface needs to represent that state, and the system needs a way to reconcile it. Pretending the whole journey is indivisible hides a real failure case.

**Consistency** can refer to more than one requirement. Within a model, it can mean that data obeys the rules that should hold: an invoice total matches its line items, for example. Across copies, it can concern when different readers see the same accepted changes. State which meaning matters before asking whether the system is consistent.

For Cedar, a newly accepted appointment may appear on the office screen before it appears on an offline phone. That delay may be acceptable for some information and unacceptable for a critical dispatch decision. “All copies must always match” sounds reassuring, but the team must explain what should happen when communication is unavailable. Product requirements and engineering guarantees need to meet at that concrete case.

Two people can also change related information concurrently. Leah may change the visit contact while Ellis updates account details. Which value should govern the already booked job? Automatically taking the last saved value may discard an intentional job-specific choice. The correct rule depends on meaning, not just timestamps.

Likewise, copying a person's current address into every historical invoice can rewrite the record of earlier work. Some information should track the current entity; some should preserve what was true when an event occurred. Ask whether an attribute is a live reference, a historical snapshot or a separately maintained fact. The choice affects correction, reporting and customer expectations.

Do not infer data truth from an integrity check alone. A database can ensure that a payer identifier refers to an existing organisation. It cannot establish, merely from that relationship, that the organisation agreed to pay this repair. A technically consistent record can encode a mistaken business decision. Domain checks and accountable human action remain necessary.

## Preserve origin and manage the life of data

When a disputed contact number appears, the team needs to know where it came from. **Provenance** describes the origin and production of data, including relevant people, activities and sources. The W3C's PROV overview explains that such information can support assessments of quality and trustworthiness.[^c18-n03] A recorded origin helps investigation; it does not guarantee the value is correct.

**Lineage** traces the movement and transformation of data through a system. A monthly report might use a customer export, apply a rule that combines account records and then calculate a total. If the total looks wrong, the original values alone are insufficient. The investigator also needs the transformations and the versions of the rules used.

For Cedar, distinguish a phone number entered by Nadia, one imported from an older account system and one inferred from a technician's note. If an AI extraction proposes a new number, preserve its source and uncertain status until the appropriate check occurs. Replacing an established value without retaining the reason can make later correction difficult.

Data has a **lifecycle**: it is collected or generated, checked, used, updated, shared, archived or deleted. The stages are not always linear. A correction can create new versions, and exported copies can continue to exist after the original record changes. Product requirements should identify where responsibilities continue.

**Retention** concerns how long data is kept and why. A job history may support future repairs; obsolete access instructions may create unnecessary exposure or confusion. Keeping everything forever is not a neutral default. Nor is deleting everything as soon as an account closes necessarily compatible with the organisation's operational and applicable legal obligations.

Set retention questions by data category and purpose, then involve the appropriate engineering and privacy or legal specialists. This chapter supplies no universal retention period. The answer depends on context, and the system must be capable of carrying out the agreed policy across relevant stores and copies.

Deletion also has meaning. Removing a person from an active account does not necessarily mean erasing every historical job associated with that person. Conversely, hiding a record in the interface does not necessarily delete its stored data. Ask what remains, who can access it and what happens to reports, exports and backups. Those answers turn a vague Delete button into a specific product behaviour.

## Change the model without losing its meaning

A **migration** changes data or its structure from one arrangement to another. Cedar might move from one customer field to separate account, contact and payer relationships. Adding new fields is only part of the work. Existing records must be interpreted, and the old field may not contain enough information to populate the new distinctions reliably.

Suppose an older record says only “Nadia / housing office”. An automated conversion cannot determine from that text alone whether Nadia is the payer, booking contact or occupant. The product team needs a policy for ambiguous records: obtain clarification, preserve unresolved status or limit the new behaviour until the meaning is established. Inventing a convenient value creates apparent completeness while damaging accuracy.

Migration planning should include representative awkward cases, reconciliation checks and a way to investigate exceptions. A count of rows before and after conversion can detect missing records, but not a payer attached to the wrong job. Test the relationships and workflows that matter, including who receives messages and who can see history.

Ask how old and new behaviour will coexist during the change. An older integration may still send one customer value while a new screen expects separate roles. Someone must decide how that input is interpreted and when the older path will cease to be supported. The migration is complete only when the intended working arrangements use the new meaning safely, not merely when a conversion script finishes.

AI can help propose candidate schemas and expose cases the team has missed. Give it synthetic examples and authorised descriptions, then ask:

> Propose two ways to represent people, properties, accounts, visit contacts and payers. State the assumptions in each. Test both against shared accounts, several properties, multiple contact methods, a changed owner and a third-party payer. Identify ambiguous legacy records. Do not choose unknown values or present the schema as production-ready.

Review the result with people who understand the service work and engineers who understand data integrity, access and operational constraints. A tidy diagram can still assume one payer per account when different jobs have different payers. Check each important scenario by walking through the actual action, rather than admiring the names of the boxes.

For practice, add two facts to Nadia's case: she sells one property, and she and Ellis share an email address. Decide what should change and what should remain associated with past jobs. A sound account preserves the distinction between a person's identity and an email address, between current ownership and historical work, and between an account participant and an authorised viewer. The exercise should produce questions as well as a candidate model.

Production data architecture, database design, privacy and decisions involving substantial scale require engineering and data expertise. Your contribution is to expose meanings, consequences and unresolved choices before they harden into stored assumptions. Once information is used in jobs, invoices and integrations, changing those assumptions becomes part of changing the product itself.

## Notes

[^c18-n01]: PostgreSQL Global Development Group, *PostgreSQL 18 Documentation*, sections 5.5.4, “Primary Keys”, and 5.5.5, “Foreign Keys”. These illustrate identity and referential constraints; they do not prescribe a database choice for Cedar. [Read the documentation](https://www.postgresql.org/docs/18/ddl-constraints.html).

[^c18-n02]: PostgreSQL Global Development Group, *PostgreSQL 18 Documentation*, section 3.4, “Transactions”, opening explanation and discussion of atomicity. Specific isolation and durability guarantees require checking the actual system and configuration. [Read the tutorial](https://www.postgresql.org/docs/18/tutorial-transactions.html).

[^c18-n03]: Paul Groth and Luc Moreau, editors, *PROV-Overview*, W3C Working Group Note, 30 April 2013, abstract. Used for the purpose of provenance, not as a requirement to implement a particular representation. [Read the overview](https://www.w3.org/TR/prov-overview/).

## References

PostgreSQL Global Development Group. *PostgreSQL 18 Documentation*. “Constraints” and “Transactions”. https://www.postgresql.org/docs/18/ddl-constraints.html ; https://www.postgresql.org/docs/18/tutorial-transactions.html

Groth, Paul, and Luc Moreau, editors. *PROV-Overview: An Overview of the PROV Family of Documents*. W3C Working Group Note, 30 April 2013. https://www.w3.org/TR/prov-overview/
