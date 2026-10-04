# Chapter 11: Economic Thinking for Product Decisions

## The work you cannot do

Cedar's product manager has two proposals competing for the same development capacity. Advanced route optimisation would help service businesses arrange technicians' journeys. Improving payment collection would help those businesses obtain money owed for completed work. Both proposals could be useful. Explaining the appeal of either one does not decide which should receive the available effort.

This is **scarcity**: the resources available cannot satisfy every possible use. The scarce resource may be money, but it can also be an engineer's attention, a dispatcher's time, access to customers or the organisation's ability to absorb change. Hiring more people may eventually alter the constraint; it does not make today's competing commitments disappear.

The **opportunity cost** of a choice is the value of its best foregone alternative. If Cedar funds route optimisation, the relevant sacrifice may be the payment improvement that the same people could otherwise deliver. It is not the combined value of every idea in the backlog, because the organisation could not pursue all those ideas with the same capacity. This focus on the next best feasible use is central to economic reasoning.[^c11-n01]

The alternatives need comparable descriptions. “Transform dispatch” sounds larger than “fix payment reminders”, but the labels conceal the work. Specify the next useful increment of each proposal, the people needed, the time required and the continuing obligations. A smaller payment improvement might leave capacity for something else; a route proposal might require specialist knowledge that the payment work does not. Those differences belong in the comparison.

Make the constraint explicit enough to challenge. “We have no capacity” could mean the engineers are committed, the people who approve payment changes are unavailable, or customers cannot participate in another trial this month. Each explanation permits different responses. Moving a meeting does not create engineering capacity, and hiring an engineer does not immediately resolve a missing approval. Identify the actual bottleneck before comparing options as though every hour were interchangeable. Sometimes the best next investment is removing that constraint, although its benefit must also be compared with the work it delays.

A trade-off means accepting less of something desirable to obtain more of something else. It does not imply that all consequences can be reduced to money. Cedar may prefer a change with a smaller immediate financial return because it supports the customers the company has chosen to serve or reduces an unacceptable operational risk. Economic reasoning makes the sacrifice visible so that such a choice can be explained.

The same discipline applies outside commercial software. A local museum deciding between longer opening hours and improving its school programme has limited staff and funds. Counting the attractions of longer hours says little without considering who would benefit from the school programme and what either option would consume.

Begin an economic discussion by completing a sentence: “If we choose this next piece of work, the best feasible use of the same resources that we give up is…” If nobody can finish the sentence, you have probably described desirability without yet examining the decision.

## Compare the next increment

**Marginal benefit** is the additional benefit from a specified increment. **Marginal cost** is the additional cost associated with that increment. The increment could be one message, one customer, another hour of development or a whole feature release. State the unit before using the word marginal. It means additional, not small or unimportant.

For Cedar, the decision concerns the next investable versions of route optimisation and payment collection. Consider a deliberately simplified calculation for one eligible service business. The following amounts are assumptions for exploring the comparison, not estimates established by research.

| Monthly assumption | Route improvement | Payment improvement |
| --- | ---: | ---: |
| Working time made available | 10 technician hours | 8 administration hours |
| Value assigned to an available hour | £25 | £20 |
| Additional operating cost to the business | £40 | £20 |
| Modelled monthly benefit after that cost | £210 | £140 |

The route calculation is 10 × £25 − £40 = £210. The payment calculation is 8 × £20 − £20 = £140. Each subtracts additional operating cost from the assigned value of time released. Under those assumptions, route improvement offers more monthly benefit to a business that successfully uses it.

Several limits prevent that result from deciding Cedar's investment. The hours have not been measured. Available time does not automatically become a payroll saving: a technician may remain employed for the same hours. The business needs a useful way to employ the released capacity, or another reason that the reduction in work matters. A financial value assigned to an hour is a modelling choice that needs justification.

Adoption also changes the comparison. Suppose, for a second scenario, 40% of eligible businesses can obtain the route benefit and 80% can obtain the payment benefit during the period being considered. Multiplying gives £84 and £112 respectively per eligible business per month. The ranking reverses. These percentages are assumed to demonstrate sensitivity; they are not claims about Cedar's customers.

The reversal identifies a useful investigation: which businesses could actually use each increment, and what would adoption require? It also shows why comparing the largest imaginable benefits is unreliable. A product manager needs the conditions under which benefits can be obtained, including the work users must do.

The horizon deserves equal care. Route planning may require several weeks of preparation before a business receives any benefit. A collection improvement may work sooner but need continuing attention. Comparing a full year's route benefit with a single month's collection benefit would produce an impressive and meaningless result. Write the start date, period and adoption condition beside each estimate. Where benefits arrive at different times, obtain financial help before treating their monetary totals as directly equivalent.

The table concerns customer benefit. Cedar's own economics require another view: development and operation costs, support obligations, customer acquisition or retention effects, and how any improvement affects revenue. Customer gains can give people a reason to buy or stay, but they are not automatically Cedar's income. Payment arriving sooner also differs from creating new revenue. The money may already be owed; the improvement can concern timing, collection effort or reduced loss.

Do not subtract opportunity cost twice. If you compare the net additional benefits of two complete options, their relative attractiveness is already visible. Adding the entire benefit of the rejected option again as a cost can make the accounting misleading. State the alternatives and compare them consistently. A finance colleague can help where timing, financing, risk or overlapping benefits make the model more complicated.

The practical conclusion is conditional: route optimisation is preferable only under specified assumptions about obtainable benefits and resource use. Payment improvement is preferable under others. The model's most useful output may be the question that distinguishes those situations.

## Find the cost of one more

Suppose a messaging arrangement has a monthly platform charge of £60 and charges £0.04 for each text. These are illustrative terms, not a supplier quotation. Sending 1,000 texts costs £100: £60 plus £40. The average cost is £0.10 per text. Sending one additional text costs £0.04, provided no other charge or capacity limit changes.

The average and marginal figures answer different questions. The average spreads the platform charge across existing use. The marginal figure identifies the cost added by the next message. Confusing them could make an additional reminder appear more expensive than it is, or make the overall service appear cheaper to sustain than it is.[^c11-n02]

A **fixed cost** stays unchanged as activity varies within the range and period under discussion. A **variable cost** changes with activity. The £60 charge is fixed for that month under the assumed arrangement; the per-message charge is variable. “Fixed” does not mean permanent, unavoidable or already paid. At renewal, Cedar may be able to change the arrangement. At a much larger volume, the supplier might charge differently.

Real operating costs can rise in steps. One more customer may fit within existing support capacity, while a group of additional customers requires another employee or a different service arrangement. Ask where those steps occur. A model that assumes the next customer always costs almost nothing may miss the resources required to support the customers collectively.

Marginal benefit can change with volume too. The first reminder may help a homeowner remember an appointment. A fourth message may add little and could cause irritation. That possibility does not supply an empirical curve; it tells you not to assume that doubling output doubles benefit.

Fixed and sunk are different distinctions. A fixed cost concerns how spending varies with activity. A **sunk cost** is a cost already incurred that cannot be recovered. A future fixed platform fee can still be avoided by not renewing. Money spent last year on an abandoned prototype may be sunk even though the original work varied with project scope.

When engineers describe a capability as cheap to run, ask what has been included. Message fees, retries, monitoring, support, maintenance and exceptional cases may sit in different budgets. The objective is an honest account of the next increment and the resources needed to sustain it, rather than a claim that every cost behaves neatly as fixed or variable.

## What customers will exchange

**Willingness to pay** is the maximum amount a buyer would exchange for a specified offering under particular circumstances. It depends on the alternative, budget, expected benefit and conditions of purchase. It is not a permanent personal characteristic or a number implied by how enthusiastically somebody describes a feature.

Suppose, solely to explain the concept, a business would pay up to £180 a month for an offering available at £120. Its **consumer surplus** is £60: the difference between the maximum it would pay and the price it pays.[^c11-n03] This simple calculation assumes those two amounts are known and concern the same offering and terms. In actual product work, the maximum is usually uncertain.

Consumer surplus explains how a purchaser can gain while the supplier also earns revenue. It does not mean Cedar can identify and collect every pound of the buyer's benefit. A buyer may need a substantial advantage over the existing arrangement to accept the effort and uncertainty of switching. Some benefits also accrue to people who do not make the purchase decision.

A willingness-to-pay statement is evidence to interpret in context. A person answering a hypothetical question faces a different situation from someone allocating an approved budget or signing a contract. The product manager should investigate what the statement refers to, who can authorise spending and which alternatives the buyer considered. Neither a customer compliment nor an AI-generated price establishes demand.

**Price elasticity of demand** describes how responsive the quantity demanded is to a price change, using proportional changes so different units can be compared.[^c11-n04] Intuitively, if a modest price increase causes many buyers to leave or buy less, demand is relatively sensitive. If buying changes little over the relevant range, it is less sensitive. A single label for the entire market can conceal different segments, time periods and alternatives.

Imagine a maintenance business can postpone a reporting add-on but cannot readily replace a scheduling service during its busiest month. Its responses to price changes could differ. The product manager needs evidence about the particular offering and circumstances. Even an observed fall in purchases after a price change requires care: other conditions may have changed at the same time.

Prices also create **incentives**, consequences that make some actions more or less attractive. Charging for each technician account may encourage a company to limit accounts; charging for each message may encourage selective communication. The resulting behaviour can affect the product's usefulness and information quality. Anticipating that response connects economic design with the next chapter's examination of rules and rewards.

Economic concepts help describe these relationships. They do not establish how a particular customer will behave or settle questions of fairness. Use them to identify the evidence and choices that a pricing or investment decision requires.

In a public service, a person's ability to pay may be a poor guide to the importance of the service to them. A commercial buyer can also value reliability that protects people who never see the purchase price. Keep the earlier distinction between value and money visible: willingness to pay informs exchange, while the product decision may require a wider assessment of benefits, costs and duties.

## Model the decision, then challenge it

AI can help construct a model by naming variables, checking whether units fit and explaining unfamiliar concepts. It can also generate alternative scenarios. The useful boundary is between explaining how a model works and supplying facts about an unmeasured market.

For the Cedar comparison, a bounded request would be:

> Compare route improvement and payment improvement using the customer-benefit assumptions in this table. Keep customer benefit separate from Cedar revenue. Show each calculation, identify omitted costs and vary adoption across stated scenarios. Do not invent willingness to pay, elasticity, adoption estimates or supplier prices. Mark the data we would need before recommending an investment.

Recalculate the arithmetic yourself or with a spreadsheet. Check that both options use the same period and comparable population, that a one-off cost has not been treated as monthly, and that released time has not automatically become cash savings. If the response fills missing values with confident market estimates, remove those values or label them as assumptions before they enter a decision document.

Ask the assistant to explain what would reverse the ranking. For example, it can calculate the adoption level at which one assumed benefit exceeds another. That is algebra applied to your inputs. It is not evidence that the required adoption level is achievable. This distinction keeps scenario analysis useful without turning it into an invented forecast.

Now practise with a different investment. An internal equipment-request feature has already cost £90,000. Completing the next usable increment would cost £12,000 and add £3,000 of support over the year being assessed. Assume that the best current estimate of its additional benefit over that year is £10,000. Stopping would cost £2,000 to close the pilot and help staff return to the existing process. All amounts concern future differences except the £90,000 already spent.

Should the organisation continue? Under these simplified assumptions, continuing produces £10,000 minus £15,000, or a net cost of £5,000. Stopping costs £2,000. Continuing is therefore £3,000 worse over the stated year. The sunk £90,000 does not make another £15,000 worthwhile. Equally, stopping is not free merely because the past spending cannot be recovered.

Before accepting the result, ask whether the benefit estimate covers the relevant horizon, whether reusable work changes the alternatives, and whether obligations or risks have been omitted. Existing assets can affect future costs; their historical purchase price is a different matter. A better option elsewhere may further change the decision.

Economic judgement directs attention to the next choice. Identify the feasible alternatives, compare additional benefits and costs, expose assumptions and investigate the ones that could reverse the conclusion. What has already been spent matters for learning and accountability. What should happen next depends on what can still change.

## Notes

[^c11-n01]: Steven A. Greenlaw, David Shapiro and Daniel MacDonald, *Principles of Economics 3e* (OpenStax, 2022), section 2.1, subsections on opportunity cost, marginal decisions and sunk costs. [Section 2.1](https://openstax.org/books/principles-economics-3e/pages/2-1-how-individuals-make-choices-based-on-their-budget-constraint). Examples and calculations in this chapter are independent illustrations.

[^c11-n02]: Greenlaw, Shapiro and MacDonald, *Principles of Economics 3e*, section 7.3, “Average and Marginal Costs” and “Fixed and Variable Costs”. [Section 7.3](https://openstax.org/books/principles-economics-3e/pages/7-3-costs-in-the-short-run).

[^c11-n03]: Greenlaw, Shapiro and MacDonald, *Principles of Economics 3e*, section 3.5, “Consumer Surplus, Producer Surplus, Social Surplus”. [Section 3.5](https://openstax.org/books/principles-economics-3e/pages/3-5-demand-supply-and-efficiency).

[^c11-n04]: Greenlaw, Shapiro and MacDonald, *Principles of Economics 3e*, section 5.1, opening definition of demand elasticity. [Section 5.1](https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply).

## References

Greenlaw, Steven A., David Shapiro and Daniel MacDonald. *Principles of Economics 3e*. Houston: OpenStax, 2022. Sections [2.1](https://openstax.org/books/principles-economics-3e/pages/2-1-how-individuals-make-choices-based-on-their-budget-constraint), [3.5](https://openstax.org/books/principles-economics-3e/pages/3-5-demand-supply-and-efficiency), [5.1](https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply) and [7.3](https://openstax.org/books/principles-economics-3e/pages/7-3-costs-in-the-short-run). Accessed 3 October 2026.
