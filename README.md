# Full-Stack Product Manager

Full-Stack Product Manager is a practical guide to connecting people, economics, markets, technology and AI to make better product decisions.

**[Read the book](https://lib-port.github.io/full-stack-pm/)** · [Start with the introduction](https://lib-port.github.io/full-stack-pm/introduction-ai-powered-product-manager) · [Browse the contents](https://lib-port.github.io/full-stack-pm/#contents)

This repository contains the book’s Markdown source and the Docusaurus site that publishes it. The book explores how to frame problems, weigh evidence, understand technical constraints and work with specialists while keeping product decisions accountable.

## Who it is for

Written for product managers, founders, service leaders and business analysts who want to strengthen their product judgement. You need no prior training in programming, statistics or economics; explanations begin with people, actions and consequences.

## What the book covers

The book develops a learning model with three complementary capabilities:

- **Broad foundations:** recognise the disciplines a decision touches and connect their perspectives.
- **Situational specialisation with AI:** develop useful depth for the problem in front of you, checking generated explanations against evidence.
- **Expert collaboration:** ask better questions and recognise when a decision requires specialist knowledge and authority.

There are **45 chapters across eight parts**, plus an introduction and conclusion:

- I — Foundations of Product Judgement
- II — Understanding People and Experience
- III — Understanding Value, Markets, and Growth
- IV — Understanding Software and Engineered Systems
- V — Evidence, Uncertainty, and Decisions
- VI — Working Effectively With AI
- VII — Integrated Product Practice
- VIII — Becoming a Rapid Specialist

Cedar, a fictional operations product for field-service businesses, connects the ideas through scheduling, dispatch, customer communication and payment decisions. Its examples make the reasoning concrete and show how one product decision crosses several disciplines.

## How to read it

Begin with the introduction and read in sequence to build your foundations. Keep a real decision in mind: who is involved, what they currently do, what might change and which assumptions need checking.

Return to relevant chapters when a particular question exposes a gap. A pricing proposal might lead you to economics and incentives; a release problem might call for reliability and integration. Use the [website’s contents](https://lib-port.github.io/full-stack-pm/#contents) to choose a starting point, or browse the [Markdown chapters](docs/) directly.

## Local setup

Use **Node.js 24**, as specified in [.node-version](.node-version), and npm. From a terminal:

```sh
git clone https://github.com/lib-port/full-stack-pm.git
cd full-stack-pm
npm ci
npm start
```

The development server previews the site at <http://localhost:3000/full-stack-pm/> and updates as you edit. Chapter order is defined in [sidebars.js](sidebars.js).

To build and preview the production site:

```sh
npm run build
npm run serve
```

The build writes the static site to `build/`; the preview uses the same local URL.

## Publishing

The [GitHub Pages workflow](.github/workflows/deploy-pages.yml) builds and deploys pushes to `main` that change its listed site, dependency or workflow paths. A README-only push skips the build. The workflow can also be run manually from GitHub Actions.

CI resolves the latest Docusaurus release at build time, while local installation with `npm ci` uses the checked-in lockfile. This means local and published builds can use different Docusaurus versions.
