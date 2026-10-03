# Chapter 10: Accessibility, Inclusion, Trust, and Ethics

## Access determines whether the product works

A technician looks at Cedar's job screen in bright sunlight. The appointment status is present, but the difference between its pale labels is difficult to see. Before travelling, the technician needs to know whether the visit is confirmed or still awaiting a customer's reply. A technically available field is providing inadequate support for that decision.

The immediate question is how to make the state distinguishable in the conditions of use. The wider question is who encounters barriers elsewhere in the task. A technician with a motor limitation may struggle to select a small control. A dispatcher using a keyboard may be unable to reach a control designed only for a pointer. A customer using a screen reader may receive an appointment message whose meaning depends on an image without a useful text alternative.

**Accessibility** concerns whether people with disabilities can perceive, understand and operate a product, including through assistive technologies. Disability is relevant to the interaction between a person's abilities, the environment and the design. The useful product question is which barrier prevents an intended action and what would remove it. A diagnosis alone does not tell you how someone uses a particular product.

Permanent, temporary and situational limitations can expose related barriers. A person with a lasting motor impairment, someone with a wrist injury and a technician wearing protective gloves may all find a demanding touch action difficult. Their circumstances and needs are not identical. Learning from one situation can suggest a design improvement, but cannot replace involving people with disabilities in evaluating whether it works for them.

W3C's introduction to accessibility explicitly includes benefits for people facing temporary and situational limitations, such as bright sunlight.[^c10-n01] A clearer status presentation can therefore help more than one group. Keep the disability-related need visible even when a wider usability benefit strengthens the case for a change. Accessibility should not depend on demonstrating that every improvement benefits everyone equally.

For Cedar, describe the consequence concretely: a person cannot determine whether a visit is agreed, cannot operate the action, or cannot understand the message. “Improve accessibility” is a useful intention but an incomplete requirement. The design work begins when the team can identify the affected task and the barrier, then evaluate an alternative.

## Combine standards with people and complete tasks

**Inclusive design** examines who may be excluded and involves relevant people in developing and evaluating alternatives. Exclusion can arise from disability, language, resources, connectivity or assumptions about how people live and work. Accessibility has a specific focus on disability; wider inclusion should complement that focus. W3C distinguishes the related concerns rather than treating them as interchangeable.[^c10-n02]

Start with the complete task. A customer may be able to read an accessible appointment page but unable to use the only offered method of changing the visit. A technician may complete the main form but encounter an inaccessible error message. An alternative telephone route is useful only if people can use it, reach it and receive comparable help. It is not enough to point to a route whose practical conditions have never been examined.

Standards provide a shared basis for technical work. The Web Content Accessibility Guidelines, **WCAG 2.2**, organise requirements around content being perceivable, operable, understandable and robust. They include criteria concerning contrast, keyboard operation, input and information conveyed by software. They also state that the guidelines do not address every combination of disability-related needs.[^c10-n03] Use the appropriate standard and qualified interpretation alongside evaluation of the task.

Do not confuse three questions: whether an implementation conforms to a specified standard, whether people can use it effectively in context, and whether it meets applicable legal obligations. Their answers are related but not identical. Legal requirements depend on the relevant setting and need appropriate advice. A conformance claim should specify what was evaluated; it should not be used to dismiss a person's observed difficulty.

Plan accessibility into decisions about navigation, content, components, supported devices and acceptance. Retrofitting a single label may be straightforward; changing an interaction that assumes everyone can drag an object precisely can affect the whole flow. Involve design and engineering specialists early enough that their findings can change the approach.

For Cedar's motor-control example, consider alternatives to precise gestures, suitable target presentation and the person's preferred input method. For the sunlight example, inspect legibility and distinguish states through more than colour alone. These are questions for design and evaluation, not a certificate of accessibility. Test with relevant assistive technologies and with people whose access needs reflect the task.

Participation also requires care. Ask what a research participant needs rather than assuming from a label. Make the research materials and venue accessible, allow appropriate support, and respect how the person normally uses their technology. Their experience can expose a barrier while remaining one experience. Combine such findings with standards-based evaluation to examine issues that a small study may not encounter.

Make the findings actionable in product planning. Name the affected task, the people excluded, the severity of the consequence and the person responsible for a remedy. A problem that prevents someone completing a necessary action deserves a different discussion from an awkward but usable presentation. Avoid prioritising solely by the number of complaints: someone unable to reach the feedback channel may never appear in that count. If a full remedy cannot be delivered immediately, assess the proposed interim arrangement with the affected people and set a concrete review point. “Contact support” is not a complete plan unless support can provide the required help through an accessible route.

Accessibility also needs attention after release. New content, changed controls and external components can alter a previously evaluated task. Include relevant checks when those changes occur and make it straightforward to report a barrier. A report should reach someone able to investigate it, and the person reporting it should receive a useful account of the response. The operational commitment matters because the product is continually maintained. A one-time assessment cannot stand in for every later version and every new way the service is used.

## Let people shape communication that affects them

Cedar's appointment communications affect people who may never sign into Cedar. A service customer needs a useful message in a form they can understand and act on. Channel, timing, language and content all influence whether the communication serves that purpose. Sending a message successfully does not establish that the recipient can use it.

**Consent**, in product design, requires attention to what the person understands and chooses about a proposed activity. A preference for appointment texts does not by itself express a preference for unrelated promotional messages. Make purposes clear, avoid bundling unrelated choices unnecessarily and provide a workable way to change preferences. Obtain appropriate advice about the obligations applying to the actual communication; interface wording alone cannot settle them.

**Privacy expectations** concern how people reasonably understand information will be used and who may see it. A detailed repair description appearing on a shared phone's lock screen could reveal more than the recipient expects. Ask what the message needs to contain, whether sensitive detail can be omitted and how the customer can obtain the remaining information. Collecting or displaying more information is not automatically more helpful.

**Autonomy** means preserving meaningful agency over decisions affecting the person. A notification preference is meaningful when the product honours it and provides an understandable route to change it. If declining texts leaves the customer unable to receive necessary appointment information, examine the alternative arrangement. A nominal choice can conceal a practical penalty.

Multilingual communication adds another dimension. A translated appointment message may be understandable while the response instructions lead to support available only in a different language. Design the communication as a complete exchange: the message, the action requested, the reply and the help available if the customer is uncertain. Do not evaluate translation quality only by how natural the first sentence sounds.

For example, a message asking the customer to confirm an appointment must preserve the distinction between confirming the existing time and requesting a new one. A mistranslated action could create a different commitment. Have important content reviewed by people with appropriate language and domain competence, and examine how intended recipients interpret it. Include dates, times, addresses and local conventions in that review.

The product manager should ask who controls the preference. The service-company owner may configure a default, the dispatcher may choose a message for a particular visit, and the customer may have stated a channel preference. Establish how those choices interact before the software resolves them silently. Conflicts are product decisions, not merely settings that engineering can infer.

## Build trust through justified reliance

**Trust** involves relying on another party or system while accepting some vulnerability to what happens. A product should help people judge what reliance is warranted. Reassuring language that exceeds the system's knowledge can produce confidence while making the underlying decision worse.

Consider an automated Cedar message: “I have personally checked your appointment and everything is arranged.” If no person reviewed the appointment, the message implies human attention that did not occur. The issue is not whether the sentence sounds friendly. A customer may reasonably interpret it as evidence that someone checked the details and can answer a reply.

A more accurate message states the known event and the route to help: “Your appointment is scheduled for the time shown below. This is an automatic message from the service company. Contact the office if the details are incorrect.” The exact wording still needs to match the process. If replies are monitored, explain that; if they are not, provide a usable alternative. Transparency should enable action rather than add a vague disclosure after a misleading promise.

**Deceptive design** steers people through misleading information or an unfair presentation of choices. Hiding a refusal option, disguising a charge or implying that a human reviewed an automated decision can compromise an informed choice. The relevant assessment includes what the person is likely to understand and what consequence follows, not only whether a technically accurate sentence appears somewhere.

**Power asymmetry** means one party has greater ability to shape the situation than another. A service company controls appointment procedures; an employee may have little choice about using its software. Cedar's buyer may request monitoring that technicians experience as intrusive or difficult to contest. The purchaser's preference is therefore not sufficient evidence that a design is acceptable for everyone affected.

Vulnerability is often contextual. A person urgently needing a repair may feel unable to refuse an unnecessary data request. An employee may fear that questioning a status record will affect their work. Ask whether the product supplies a route to correct mistakes, contest consequential interpretations or obtain help. A policy promising fairness is less useful if the interface gives the person no practical way to act.

Ethical judgement requires examining benefits, burdens and alternatives. Who receives the convenience? Who supplies the data or additional work? Who can refuse, and who bears the cost of an error? Bring affected people and relevant specialists into consequential decisions. Document the reasoning and the unresolved trade-off so that future teams can revisit it when circumstances change.

Consider an owner requesting a single notification setting for every customer because individual preferences complicate administration. The benefit is simpler office work. The burden falls on customers who cannot use the chosen channel or who need communication handled differently. The product manager should compare alternatives: an appropriate default with exceptions, a clearer preference workflow, or support for another contact arrangement. The decision is not settled by calling personalisation expensive or inclusion desirable. Establish which work each alternative creates, who remains excluded and what practical remedy exists.

A useful ethical review follows the actual choice through to its consequence. Can the customer recognise what they are agreeing to? Can they decline an optional use without losing an unrelated essential function? Can they correct a mistaken assumption? Can an employee question a record without the software treating the question as evidence of poor performance? These questions do not eliminate disagreement. They make the disagreement concrete enough for accountable people to decide and explain. Where the decision involves legal duties, sensitive information or substantial effects on someone's livelihood, bring appropriate expertise into the discussion before the design becomes an operating rule.

## Use AI to find questions, then verify the experience

AI can suggest possible accessibility barriers and propose alternative wording or interactions. Give it the task, interface content, known constraints and the people affected. Ask it to distinguish concerns visible in the material from matters requiring inspection of implementation, assistive technology or actual use. A screenshot cannot establish keyboard behaviour, and a prose description cannot establish how a screen reader announces changing content.

Treat the output as a review aid. W3C states that accessibility evaluation tools cannot check every aspect automatically and require human judgement.[^c10-n04] An AI-generated checklist provides no stronger basis for certification. Check suggestions against the applicable standard and implementation, then involve relevant users and technologies. Record what was tested and what remains outside the evaluation.

Generated content can introduce new barriers. A proposed alternative text may omit the fact a chart is meant to convey. A simplified instruction may drop an important condition. A translation may preserve politeness while changing the required action. An automatically drafted appointment message may invent a personal review. Assess meaning and consequences, not merely grammar or reading ease.

For Cedar, compare a generated confirmation with the verified appointment record and communication process. Check the time, the identity of the sender, the action required and the route to help. Ask a competent reviewer to inspect important translated content. Where the message affects access to a service, involve recipients with relevant needs in checking whether they can understand and act on it.

A useful exercise is to follow one complete product task from the perspective of someone who could encounter a barrier. Identify the person's goal, the specific barrier and its immediate consequence. Propose an alternative, then name how you would evaluate it and which limitation would remain. Do not treat imagining an impairment as equivalent to learning from a person who lives with it.

Extend the same exercise to trust. Identify what the interface asks someone to believe, what evidence supports that belief and what control the person has if the information is wrong. For an automated appointment message, that might mean replacing implied human review with a truthful account of the known state and an effective correction route. The change is useful because it supports an informed decision.

Accessibility, inclusion, trust and ethics constrain how value can be created. A feature that excludes someone from a necessary task, obscures a choice or makes an unsupported promise has a product-quality problem. Addressing that problem belongs in the design and operating decisions that determine what people can actually do.

## Notes

[^c10-n01]: W3C WAI, “Introduction to Web Accessibility”, discussion of benefits for temporary disabilities and situational limitations.
[^c10-n02]: W3C WAI, “Accessibility, Usability, and Inclusion”, distinctions among the three concerns and the role of user involvement alongside standards.
[^c10-n03]: W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, introduction and layers of guidance; relevant criteria include 1.4.3, 2.1.1 and 2.5.7. This is an orientation, not a complete conformance assessment or statement of applicable law.
[^c10-n04]: W3C WAI, “Selecting Web Accessibility Evaluation Tools”, “What Evaluation Tools Can Do and Can Not Do”.

## References

- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. [Standard](https://www.w3.org/TR/WCAG22/).
- W3C Web Accessibility Initiative. [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/).
- W3C Web Accessibility Initiative. [Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/).
- W3C Web Accessibility Initiative. [Selecting Web Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/).

Authoritative pages inspected 3 October 2026.
