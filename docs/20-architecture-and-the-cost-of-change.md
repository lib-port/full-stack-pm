# Chapter 20: Architecture and the Cost of Change

## Ask why a small request spreads

Maya, Cedar's product manager, asks for a way to divide one repair across two visits. The interface appears straightforward: add a second date and let the dispatcher assign another technician. Priya, a software engineer, says the change also affects invoices, customer messages, completion reports and the accounting integration. Maya needs to understand why before deciding whether the estimate is reasonable.

Over years of customer requests, Cedar's scheduling and billing logic have become entangled. In the arrangement Priya describes, several parts of the product rely on the same shortcut: one job has one visit, and completing that visit makes the job ready to bill. Scheduling code changes that shared record; billing and reporting read it directly. Message generation uses the same completion status.

Splitting a visit challenges more than the calendar. If the first technician marks the first visit complete, should Cedar issue the whole invoice? Should the customer receive a job-completed message? Should reports count one completed job or a partly completed job? Which status should the accounting integration receive? Adding a second date without resolving these questions can create contradictory behaviour.

**Architecture** concerns the important organisation of a software system: how responsibilities are divided, how parts relate, and which constraints guide their interaction and evolution. It includes choices that shape operation and future change, not just a drawing of computers or a list of technologies.

An **architectural constraint** limits what can be changed easily or safely under the current arrangement. Cedar's one-visit assumption is such a constraint because several responsibilities depend on it. The constraint may be changeable, but changing it has a cost. “The architecture cannot do that” should begin a conversation about the specific limitation and options, rather than end discussion with an unexplained prohibition.

The visible size of a feature is therefore a poor guide to the work underneath. A new report might reuse well-defined information and require little disturbance. A small change to the meaning of Complete might affect many important behaviours. Ask which assumptions the request changes, where those assumptions are embedded and what evidence supports the claimed reach.

Priya should be able to explain the dependency chain in terms Maya can assess. Maya should explain the intended customer outcome and which aspects of the request are negotiable. Perhaps dispatchers need to schedule a return visit while retaining the original job history; perhaps they need independent billing for each stage. Those are different requirements with different structural consequences.

That conversation replaces an argument about whether the button is simple with a joint investigation of what the product must mean and preserve.

## Look for responsibilities and hidden knowledge

A **module** groups related software responsibilities behind a boundary. A module might manage appointments, calculate charges or deliver messages. It need not run on a separate computer or be deployed independently. The useful question is what it owns and what other parts are allowed to know about it.

A **boundary** separates responsibilities and defines permitted interaction. Billing might ask scheduling whether work is ready for billing through a defined interface. Alternatively, billing might directly inspect several scheduling fields and reproduce the rules for interpreting them. Both can produce a working invoice today, but their consequences for change differ.

**Coupling** concerns how strongly parts depend on one another's details or behaviour. If billing assumes every job has exactly one visit, changing scheduling to allow several visits can require billing to change too. The dependency propagates the modification. A diagram with separate boxes does not remove that knowledge.

**Cohesion** concerns how closely a module's responsibilities belong together. A module that handles appointment timing and availability checks has an intelligible focus. One that mixes appointment rules, tax formatting and customer email layout may contain responsibilities that change for unrelated reasons. The appropriate grouping depends on the domain and expected changes, not on finding equally sized boxes.

**Encapsulation** limits access to internal details through an explicit interface. If scheduling exposes a well-defined readiness result, billing may avoid knowing how many visits were needed to reach it. The boundary does not eliminate dependency: billing still relies on the meaning and availability of the result. It can reduce dependence on how scheduling reaches that result.

The Software Engineering Institute's work on modifiability relates change cost to responsibilities and the propagation of changes between them. Its encapsulation discussion describes using an explicit interface to restrict dependence on internal details.[^c20-n01] For Cedar, the practical question is which knowledge should stay within scheduling and which meaning must be shared with billing.

Do not hide an unresolved domain decision behind an interface. A readiness function cannot decide on its own whether a partly completed repair is billable. Product, finance and engineering colleagues must establish the rule. Encapsulation then gives that rule a clear place and a controlled relationship with other responsibilities.

Nor does reducing coupling mean preventing all communication. Scheduling and billing need to coordinate because they serve related work. The goal is an understandable dependency that changes when the underlying business agreement changes, rather than a collection of accidental dependencies on fields that happened to be convenient.

Ask Priya to show one path before and after a proposed boundary change. Which parts currently interpret completion? Which part would own the decision afterwards? Which callers would still require changes? The explanation is useful when it identifies an actual reduction in future coordination, not merely more layers of code.

Boundaries also need an owner who can explain and maintain their meaning. If scheduling and billing teams each redefine readiness independently, an interface can remain syntactically stable while its meaning drifts. Agree who owns the rule and how proposed changes reach its consumers. This organisational responsibility does not require a particular team chart; it requires someone to keep the agreement intelligible. Structure helps only while the people changing it understand which promises other parts rely on.

## Separate structural choices from labels

A system can concentrate important responsibilities in one deployable application or distribute them across separately running services. A more **centralised** arrangement may keep coordination in fewer places. A more **distributed** arrangement spreads work across components that communicate, often over networks. These descriptions refer to particular aspects of a system; a product can centralise data while distributing computation, or vice versa.

Neither arrangement determines whether responsibilities are well separated. One application can contain clear modules. Several services can remain tightly coupled if every change requires coordinated updates or if each relies on the others' private data structures. The number of deployable pieces is different from the quality of the boundaries.

Keeping related work together can simplify some interactions and make certain changes easier to coordinate. Separating components can allow different release schedules, isolation or resource allocation. Separation also introduces communication, operational and consistency questions. The team must decide how components behave when one is slow, unavailable or on a different version.

**Scaling** means adapting a system to handle more of a relevant demand while preserving required behaviour. State the demand: more users, more simultaneous schedule edits, more stored histories, larger reports or more geographic locations. These may stress different parts of the system. “We need an architecture that scales” is incomplete until the workload and acceptable performance are specified.

Suppose Cedar's large reports interfere with interactive scheduling because both compete for the same resources. Options could include improving a query, scheduling report work differently, providing additional capacity or separating reporting work. Each addresses a particular mechanism. Splitting every capability into a separate service would be a much broader commitment whose costs need independent justification.

More machines also do not automatically remove a shared bottleneck. If every schedule change waits for the same constrained resource, duplicating the request-handling layer may increase pressure on that resource. Ask where work waits and what measured evidence connects the proposed architecture to the limiting step.

Operational capability matters. A structure that permits independent deployment also requires people and tools to operate, observe and recover its components. If the organisation cannot support that work, theoretical independence may not become practical freedom. Conversely, keeping everything together can constrain teams whose different workloads and change patterns would benefit from separation.

You do not need to settle these trade-offs through architectural fashion. Ask engineers to compare a small set of feasible arrangements against the product's concrete change and operating needs. Prefer explanations of consequences over labels such as modern, enterprise-ready or future-proof. Every arrangement preserves some options and makes others more costly.

## Price the changes you expect

Architecture changes the **marginal cost of a product change**: the additional effort, coordination and risk required for the next modification. Cedar's accumulated dependency on one visit per job makes a return-visit feature costly because its meaning travels into several capabilities. The cost is not contained in the code that draws the second appointment.

Break the work into what must be understood, changed, checked, deployed and supported. Priya may need to discover every use of completion status, modify the relevant rules, test existing one-visit jobs, migrate records and coordinate the accounting boundary. Those tasks explain a cost that a screen-only estimate misses.

**Extensibility** is the ability to add capabilities through understood places of extension without disproportionate disturbance. It is always relative to the kinds of extension expected. An architecture can make another notification channel easy while making several payers per job difficult. Ask which future changes the design is prepared to accommodate.

Compare plausible scenarios rather than an unlimited imagined future. Cedar may reasonably expect staged repairs, follow-up visits and different billing points. Preparing a clear distinction between a job and its visits could support that family of changes. Building a universal workflow engine for every possible service business would be a larger bet, carrying complexity before those needs are established.

A useful decision comparison might look like this:

| Option | Immediate benefit | Continuing concern | Evidence needed |
| --- | --- | --- | --- |
| Add a narrow exception for a second visit | Address a bounded request sooner | More places may interpret completion differently | How often the exception applies and what it touches |
| Separate job progress from visit completion | Create a clearer basis for related changes | Migration and testing cost now | Which upcoming changes share this distinction |
| Narrow the feature to linked follow-up jobs | Reuse more existing behaviour | May leave billing/history work for staff | Whether the workflow meets the customer's actual need |

The table does not choose for the team. It makes the bet inspectable. The second option is attractive only if its benefits, risks and timing justify the investment. The third might be a useful limited solution or an unacceptable workaround. The first might be deliberate short-term compromise or the start of repeated exceptions. Context determines which description fits.

Martin Fowler presents the idea that design effort can preserve later development productivity as a hypothesis, explicitly acknowledging the absence of objective proof in that account.[^c20-n02] Treat such reasoning as motivation to examine your own system, not as a universal return-on-investment figure. Recent change histories and engineers' concrete dependency analysis are more useful for Cedar's decision than a generic claim that clean architecture always pays back quickly.

Separate known work from investigation in an estimate. Priya may know that the invoice rule must change while remaining unsure how many customer reports interpret the old status. A short investigation that locates those consumers can improve the decision before the organisation commits to a full migration. Ask what the investigation will resolve and how its result changes the options. Uncertainty is a reason to expose the assumptions in an estimate, rather than to treat the largest or smallest plausible number as established fact.

Future options also have a shelf life. If Cedar decides that staged repairs are outside its intended market, a general model for them may offer little value despite its technical elegance. If several committed customer needs depend on that distinction, the same investment becomes more relevant. Revisit architectural proposals when product direction changes. Engineers' understanding of structural cost and product managers' understanding of likely demand must inform each other; neither can establish the investment case alone.

## Include the route from old to new

A **legacy system** is an inherited arrangement that continues to shape current work. Age alone does not make it defective. Cedar's older scheduling logic may contain customer rules learned through years of use, including exceptions that are poorly documented but operationally important. Replacing it requires understanding what should be preserved as well as what should change.

A **migration** moves behaviour, data or users from one arrangement to another. The destination diagram does not describe that journey. Cedar might need old and new completion rules to coexist, translate between record forms and preserve integrations while customers adopt the new workflow. Temporary structure can be part of responsible delivery rather than evidence that the final design has failed.

Fowler's account of gradual modernisation describes replacing portions of a legacy system while old and new behaviour coexist, including transitional architecture that can later be removed.[^c20-n03] This is an available approach, not a guarantee that incremental replacement is always cheaper. The feasibility depends on finding boundaries that allow a meaningful piece of work to change safely.

For Cedar, one transition could begin with a clearly bounded set of staged repairs. Engineers would establish how existing jobs remain readable, how invoices determine readiness and how reports combine old and new records. Product colleagues would identify which customers can use the revised workflow and what support needs to explain. The transition is complete when the intended work uses the new rules reliably and obsolete paths can be retired.

**Reversibility** concerns the cost and feasibility of returning from a choice. Replacing running code with an earlier version may be straightforward while undoing transformed records is difficult. Sending an invoice or a customer message can have consequences outside the software that a rollback does not reverse. Ask separately about code, data, operational process and external commitments.

A reversible trial therefore needs more than a feature switch. Can new records still be interpreted by the earlier version? If the trial stops, who finishes jobs already split across visits? Which messages or invoices require correction? What evidence will tell the team to pause before exposure expands?

A full replacement may sometimes be reasonable, particularly when safe coexistence would itself be costly or the retained scope is small. It still needs a plan for discovering hidden behaviour, converting data and recovering from failed transition. Architectural neutrality means assessing those consequences in the actual setting, rather than automatically choosing either gradual change or a fresh start.

Include retirement in the plan. Supporting two structures indefinitely can preserve the very complexity the change was meant to reduce. Name the conditions for removing the older path, the customers still depending on it and the evidence that the new path covers the necessary work. The route out of coexistence is part of the architecture decision.

## Use the diagram to improve the decision

A dependency diagram can make Priya's explanation easier to discuss. It should distinguish a component that calls another from one that reads shared data or merely belongs to the same deployment. Different arrows describe different obligations. A picture without those meanings can make accidental relationships look equivalent to deliberate contracts.

AI can help turn authorised architecture notes into a clearer diagram or explain unfamiliar terms. Ask it to identify the source for every claimed connection and mark inferred relationships separately:

> Map the responsibilities involved in changing a job from one visit to several. Use the supplied documentation only. Distinguish calls, shared data, event flows and deployment dependencies. Cite a source for each connection, list missing information and explain which existing behaviours might need checking. Do not infer runtime guarantees from the diagram alone.

Then choose a consequential edge and verify it with Priya. Does billing actually read the shared status directly? Is there an undocumented export that does the same? Which tests, current code and operational records support the answer? AI can reorganise the supplied account, but a clean diagram cannot reveal an integration that nobody documented.

Operational realities may also be absent: a shared database that constrains releases, a manual reconciliation task, an unusually large customer's workload or a dependency only one engineer understands. Ask the people operating the system to challenge the map. Missing knowledge is an investigation task, not permission for a generated explanation to fill the gap.

For practice, compare two approaches to a recurring change in your product. One should preserve the current structure; the other should alter a relevant boundary. Specify the same desired behaviour for both, then describe immediate work, likely follow-on changes, operating burden, migration and reversibility. Include one piece of evidence that could make you change your recommendation.

A sound answer connects structure to consequences. “The second option has more services” is a description. “The second option lets notification formats change without modifying scheduling, but adds a delivery dependency we must operate” is a trade-off. Engineers should evaluate the technical feasibility; product managers should connect that evaluation to the changes and outcomes worth pursuing.

Architecture is partly the economics of future change expressed in technical structure. Understanding that relationship helps you recognise why an apparently small request can deserve substantial work, and why substantial architectural work should still explain which product choices it makes easier, safer or less costly.

## Notes

[^c20-n01]: Felix Bachmann, Len Bass and Robert Nord, *Modifiability Tactics*, CMU/SEI-2007-TR-002 (2007), sections 4, 5.1 and 6.3.1; printed pages 7–9 and 18. Used for change propagation and encapsulation concepts, not a numerical forecast for Cedar. [Read the report](https://insights.sei.cmu.edu/documents/778/2007_005_001_14858.pdf).

[^c20-n02]: Martin Fowler, “Design Stamina Hypothesis” (20 June 2007), explanation of the hypothesis and explicit discussion of its evidential limitations. [Read the essay](https://martinfowler.com/bliki/DesignStaminaHypothesis.html).

[^c20-n03]: Martin Fowler, “Strangler Fig” (22 August 2024), paragraphs on incremental replacement, finding separable components and transitional architecture. The chapter uses the general migration possibility without prescribing the pattern. [Read the essay](https://martinfowler.com/bliki/StranglerFigApplication.html).

## References

Bachmann, Felix, Len Bass, and Robert Nord. *Modifiability Tactics*. CMU/SEI-2007-TR-002. Software Engineering Institute, September 2007. https://insights.sei.cmu.edu/documents/778/2007_005_001_14858.pdf

Fowler, Martin. “Design Stamina Hypothesis.” 20 June 2007. https://martinfowler.com/bliki/DesignStaminaHypothesis.html

Fowler, Martin. “Strangler Fig.” 22 August 2024. https://martinfowler.com/bliki/StranglerFigApplication.html
