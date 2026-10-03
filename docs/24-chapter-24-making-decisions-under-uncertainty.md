# Chapter 24: Making Decisions Under Uncertainty

## A forecast should help someone choose

“Thirty per cent of customers will use it.” Cedar's product manager can put that forecast into a planning document, but the sentence leaves important questions unanswered. Which customers? What counts as use? By when? What supports thirty per cent? How would the decision change if adoption were substantially lower or higher?

Compare it with: “Our current evidence suggests a plausible range of 15–40%, with the greatest uncertainty coming from onboarding effort.” The second statement still needs definitions and evidence. It does, however, expose a reason the result could vary and invites a decision about what to investigate or prepare for. The point is not to replace every number with a wide range. It is to make the uncertainty useful.

**Uncertainty** means that you do not know the relevant state or outcome with complete assurance. Some uncertainty concerns missing information: Cedar has not yet established how much work customers must do to adopt the capability. Some concerns variation: different companies may respond differently even when offered similar help. Some concerns the model: the team may have misunderstood what makes adoption worthwhile.

Define the forecast before refining its number. For example: the proportion of eligible service companies that complete a specified useful task with the capability during their first three months of access. That definition differs from the proportion that opens the screen, activates a trial or still uses the capability six months later. A precise number attached to an ambiguous event is not a precise forecast.

Then identify the decision. Cedar may be choosing how much onboarding capacity to provide, whether to expand a trial or whether the expected use justifies further investment. The same adoption range can inform these choices differently. A support plan needs to consider the high-demand case; an investment decision needs to examine whether the low-adoption case is affordable.

The stated 15–40% range is a plausible judgement in this example, not a statistical confidence interval. Unless the team specifies how the range was constructed and what probability it represents, do not give it a technical interpretation it has not earned. Its immediate value is to reveal uncertainty and its proposed source, so that colleagues can challenge both.

## Distinguish a share, a probability and confidence

A **probability** expresses the likelihood of a defined event, from zero to one, or zero to one hundred per cent. “Thirty per cent of companies adopt” describes a proportion. “There is a thirty per cent chance that adoption exceeds one quarter of eligible companies” describes uncertainty about an event. These are not interchangeable statements.

A **distribution** describes possible values and how probability is allocated among them. Adoption might be concentrated near one level, spread broadly or have two quite different plausible outcomes. A single forecast number conceals those possibilities. NIST's statistical handbook formalises a discrete distribution by assigning non-negative probabilities to possible values, with the probabilities summing to one.[^c24-n01] You can use the idea without needing the advanced mathematics of continuous distributions.

For Cedar, think first in scenarios. One scenario has difficult onboarding and limited use. Another has a manageable setup process and moderate use. A third has strong demand plus effective support. These descriptions are not yet probabilities. Assigning each an equal chance because there are three rows would manufacture a distribution from the formatting of a table.

A range also does not imply that every point inside it is equally likely. The team may consider adoption near the lower end more plausible than adoption near the upper end. It may allow outcomes outside the range. State those meanings. If the range is intended to cover most plausible outcomes rather than every conceivable result, say so and identify what could push adoption beyond it.

**Confidence** can refer to how strongly you trust an estimate or the evidence behind it. You might assign a high probability to an outcome while recognising that the supporting evidence is weak. Conversely, substantial evidence can support a probability near one half. The first is a claim about what is likely; the second assessment concerns how well grounded that claim is.

Make that distinction in discussion. “We estimate a high chance of slow adoption, but the estimate rests mainly on a few comparisons” is more informative than “We have low confidence”. It tells colleagues what you currently expect and why the expectation deserves scrutiny. Avoid using numerical confidence scores unless their interpretation is clear enough to guide an action.

Uncertainty should not become an excuse to treat every possibility as equally important. Focus on outcomes that could materially alter the decision, especially when their consequences are difficult to reverse. A low-probability adverse result may deserve attention even if it contributes little to the most likely forecast.

## Start with comparisons and make conditions explicit

A **base rate** describes how often something occurs in a relevant comparison group. Before forecasting adoption from the attractiveness of Cedar's new capability, examine adoption of comparable capabilities by comparable customers. The comparison gives the forecast an initial reference point and makes claims of exceptional performance easier to question.

Relevance matters. A feature requiring no setup is a weak comparison for a capability that requires importing records and changing staff routines. A trial with enthusiastic volunteers is a weak reference for the whole customer base. Record what makes a comparison useful and what makes the new situation different. Do not discard a disappointing base rate merely because the current proposal feels special.

**Conditional probability** concerns the chance of an event given a stated condition. The condition changes the group or situation under consideration. To practise, suppose a teaching dataset contains forty companies that completed guided setup, of which twenty adopted, and sixty that did not complete guided setup, of which twelve adopted. These counts are assumed for the calculation, not measured Cedar results.

The adoption proportion among companies completing guided setup is 20 ÷ 40 = 50%. Among the remaining companies it is 12 ÷ 60 = 20%. Across all one hundred companies, thirty-two adopted, so the overall proportion is 32%. The overall figure depends on both the within-group proportions and the size of each group.

This distinction can improve a forecast. If the future customer mix differs from the comparison group's mix, reusing the overall percentage may be misleading. Ask which conditions plausibly change adoption and how many customers are likely to face each. Keep the number of conditions manageable; an elaborate model with unsupported inputs does not become reliable through detail.

The calculation does not establish that guided setup caused the difference. Companies choosing or completing setup may already have greater motivation, more capacity or different needs. A causal question requires a stronger comparison than these two observed groups. For forecasting, the association may still be informative if the future circumstances are sufficiently similar, but that assumption must be examined.

Check the direction of the condition. The proportion of adopters who completed guided setup is 20 ÷ 32 = 62.5%, which differs from the 50% adoption proportion among companies completing setup. Confusing these questions can make a plausible explanation arithmetically wrong. Write the denominator in words before asking an assistant or spreadsheet to calculate it.

A conditional forecast can also expose a choice the team still controls. State separately what you expect if onboarding remains as currently proposed and what you expect if additional help is provided. Do not average the two plans together and present the result as an unconditional fact. Cedar must choose a plan, and the resources required by that choice belong in the decision. The prediction is conditional on that plan being carried out, including its important limitations. If support is promised but unavailable at launch, the original forecast may no longer describe the actual situation.

Keep external conditions distinct from controllable actions. Customer workload, competing priorities and a change in the market may affect adoption without being Cedar's decisions. A useful scenario names these conditions so the team can recognise when the world begins to resemble it. “Low adoption” by itself is a result label, not an explanation or an early signal.

## Calculate expected value without losing the consequences

**Expected value** is the probability-weighted average of possible numerical outcomes. It helps compare a decision across uncertainty, provided the outcomes use compatible units and the probabilities have a defensible basis. It is not a promise that the average will occur.

Consider a simplified decision about a bounded Cedar trial. Over the same twelve-month period, the team assumes three mutually exclusive scenarios for incremental net financial benefit relative to not running the trial. Net benefit already includes the trial's relevant costs. The figures below are teaching assumptions, not Cedar accounts.

| Scenario | Assumed probability | Incremental net benefit |
| --- | ---: | ---: |
| Low adoption | 30% | −£20,000 |
| Moderate adoption | 50% | £30,000 |
| High adoption | 20% | £100,000 |

Multiply each outcome by its probability, then add the results:

**Expected net benefit = (0.30 × −£20,000) + (0.50 × £30,000) + (0.20 × £100,000) = £29,000.**

In ordinary language, the calculation averages the possible net benefits using the stated likelihoods. The probabilities sum to one and the outcomes cover the model's possible cases. The result depends entirely on those inputs. Reporting £29,000 to the nearest pound would imply no more evidence than the original assumptions contain.

A positive expected value does not make the decision automatically acceptable. Cedar must consider whether it can absorb the loss, what important consequences the financial values omit and which alternatives compete for the same people. A customer harm or an unacceptable operational risk should not disappear because the financial average is positive.

The distribution matters too. Two options can have the same expected value while one has a much larger possible loss. A decision-maker with limited reserves may prefer the more manageable downside. Explain that preference as a consequence of constraints and risk tolerance, rather than trying to hide it inside an unexplained score.

Test sensitivity to uncertain inputs. If the high-adoption case is much less likely than assumed, does the trial still look worthwhile? If support costs are higher, have those costs already been subtracted from every relevant outcome? AI can perform these calculations, but the product manager must check whether the scenarios represent the decision and whether any costs or benefits have been counted twice.

Expected value is especially useful when it makes disagreement visible. Colleagues may agree on the calculation while disagreeing about adoption, costs or the acceptability of a loss. Those are different issues requiring different evidence or authority. Preserve the distinction.

## Update forecasts and check calibration

**Bayesian updating** is the principle of revising beliefs in light of evidence, considering both what you believed beforehand and how strongly the evidence distinguishes competing possibilities. Your initial assessment is a prior; the revised assessment after considering evidence is a posterior.[^c24-n03] The useful product habit is to explain why the new information should change the forecast and by how much.

Suppose Cedar's initial adoption estimate uses comparisons with capabilities requiring substantial setup. A trial then shows that participants can complete setup with little assistance. That finding weakens one reason for expecting low adoption. It does not establish that customers see enough continuing value to keep using the capability. Update the part of the argument the evidence addresses, while preserving uncertainty about the rest.

Ask whether the finding would be unsurprising under several competing explanations. A positive comment from an enthusiastic trial volunteer may be likely whether eventual adoption is modest or strong. It should therefore do less work than evidence that distinguishes those possibilities. Repeating the same comment through several reports does not create several independent updates.

Keep a forecast record containing the defined event, horizon, estimate or range, important assumptions, evidence and date. When you revise it, preserve the earlier version and state the reason. Otherwise, you can remember the latest view as though it had always been your prediction, making learning from the result difficult.

**Calibration** concerns the relationship between probabilities and how often the corresponding events occur. Across a suitable collection of events assigned an eighty per cent probability, roughly eighty per cent should occur if those forecasts are well calibrated. One unsuccessful eighty per cent prediction does not disprove calibration. Nor does one successful prediction validate the forecasting process.

Judge patterns with care when there are few forecasts or their outcomes depend on the same event. Ten predictions about customers affected by one launch failure do not provide the same information as ten unrelated tests of judgement. Calibration also is not the whole of forecasting quality: always predicting a broad base rate can miss information that distinguishes individual cases. Forecast evaluation therefore needs attention to both reliability and useful discrimination.[^c24-n02]

You can begin simply. Record a few consequential, resolvable predictions, revisit them at the agreed time and compare what happened with what you believed. Ask whether ranges were consistently too narrow, whether optimistic assumptions survived contrary evidence and whether changed definitions made forecasts impossible to assess. The purpose is to improve future estimates, not to punish people for acknowledging uncertainty.

Agree how each forecast will be resolved before the result is known. If “adoption” requires a completed useful task, identify the record that will establish completion and how unavailable records will be treated. If the product changes materially during the forecast period, record that change rather than quietly redefining the prediction. A forecast can fail because the world behaved differently, because the evidence was poor, or because the event was never defined clearly enough to evaluate. Those failures teach different lessons.

Also separate an adverse outcome from a poor decision. A sensible trial can produce the low-adoption case it explicitly allowed for. Conversely, a weakly justified decision can succeed. Review whether the team used the available evidence well, considered the consequences and preserved appropriate flexibility, alongside reviewing the numerical prediction. Otherwise, people learn to tell convincing stories after results arrive rather than improve the reasoning before commitment.

## Use AI to expose assumptions, not decorate guesses

Give an AI assistant the decision, the event definition, comparison data and the inputs it may use. Ask it to construct a small scenario table, explain every assumption and calculate the consequences of changing one input. Require it to distinguish supplied evidence from invented values. A scenario can be useful without being an estimate of what will actually happen.

If the assistant returns “adoption will be 31.7%”, ask where each part of that precision came from. A detailed explanation is not a substitute for data. Replace unsupported values with explicit assumptions or ranges, then examine whether the decision is sensitive to them. A result that changes dramatically after a small plausible input change deserves investigation, not an additional decimal place.

Check arithmetic independently and inspect the structure. Do scenarios overlap? Are important possibilities omitted? Does the model assume two events are independent when one affects the other? Does it confuse a share of customers with a probability about that share? Ask a colleague or specialist to review consequential calculations and assumptions that exceed your competence.

For practice, suppose you must decide how much onboarding support to reserve for a new capability. Define the eligible population and what counts as needing support. Express low, central and high demand scenarios, state the conditions behind each, and describe what you would do if demand exceeded the central case. Do not assign probabilities merely to complete the table.

Next, identify the uncertainty most likely to change the decision. It might be the time required per company, the proportion adopting or the concentration of requests around launch. Specify what observation would help and when you need it. Revise the plan to preserve flexibility where the uncertainty cannot be resolved in time.

A useful answer connects the range to an action: reserve an initial amount of capacity, define a signal for adding more and establish what the team will do if demand is lower. It also identifies the costs of being wrong in each direction. A forecast is valuable when it improves that reasoning, even when its honest conclusion remains a broad range.

## Notes

[^c24-n01]: NIST/SEMATECH, *e-Handbook of Statistical Methods*, §1.3.6.1, discrete distributions. The scenario examples in this chapter are author-created calculations.
[^c24-n02]: Gneiting and Raftery (2007), discussion of probabilistic forecasts, calibration and forecast evaluation. The chapter gives a conceptual orientation, not a scoring-rule tutorial.

[^c24-n03]: Seeing Theory, “Bayesian Inference”, prior, likelihood and posterior explanation; conceptual terminology only.

## References

- NIST/SEMATECH. “What is a Probability Distribution?” *e-Handbook of Statistical Methods*, §1.3.6.1. [Reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda361.htm). Accessed 3 October 2026.
- Gneiting, T. and Raftery, A. E. (2007). “Strictly Proper Scoring Rules, Prediction, and Estimation.” *Journal of the American Statistical Association*, 102(477), 359–378. DOI: 10.1198/016214506000001437. [Author copy](https://sites.stat.washington.edu/people/raftery/Research/PDF/Gneiting2007jasa.pdf).

- Seeing Theory, Brown University. “Bayesian Inference.” [Interactive explanation](https://seeing-theory.brown.edu/bayesian-inference/index.html). Accessed 3 October 2026.
