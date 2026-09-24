import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const introductionPath = '/introduction-ai-augmented-product-owner';
const chapterOnePath = '/chapter-01-what-is-a-product';

const audiences = [
  'Product managers',
  'Founders',
  'Service leaders',
  'New product owners',
];

const disciplines = [
  ['People', 'Behavior, experience, accessibility, trust, and ethics'],
  ['Economics', 'Benefits, costs, resources, incentives, and tradeoffs'],
  ['Markets', 'Alternatives, positioning, discovery, and adoption'],
  ['Engineering', 'Software, data, architecture, security, and operations'],
  ['Decisions', 'Evidence, uncertainty, measurement, causality, and bias'],
  ['AI', 'Capabilities, context, verification, tool use, and product design'],
];

function LearningModel() {
  return (
    <aside className={styles.model} aria-label="The book's learning model">
      <p className={styles.modelEyebrow}>The accelerated generalist</p>
      <div className={styles.modelCore}>
        <span>Product</span>
        <strong>judgment</strong>
        <small>Evidence · context · accountability</small>
      </div>
      <ol className={styles.modelSteps}>
        <li>
          <span>01</span>
          <strong>Broad foundations</strong>
        </li>
        <li>
          <span>02</span>
          <strong>Situational specialization</strong>
        </li>
        <li>
          <span>03</span>
          <strong>Expert collaboration</strong>
        </li>
      </ol>
    </aside>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <div className={styles.status}>
            <span aria-hidden="true" />
            Work in progress
          </div>
          <p className={styles.kicker}>Full-Stack Product Manager</p>
          <Heading as="h1">
            Build better product judgment in an AI-augmented world.
          </Heading>
          <p className={styles.lede}>
            A practical book for product managers, founders, and service leaders
            who need to connect evidence, specialist expertise, and accountable
            decisions.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} to={introductionPath}>
              Read the introduction
              <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.secondaryAction} to={chapterOnePath}>
              Start Chapter 1
            </Link>
          </div>
          <p className={styles.progressNote}>
            The manuscript is actively being written and revised.
          </p>
        </div>
        <LearningModel />
      </div>
    </header>
  );
}

function AudienceBar() {
  return (
    <section className={styles.audience} aria-labelledby="audience-heading">
      <div className={`container ${styles.audienceInner}`}>
        <p id="audience-heading">Written for</p>
        <ul>
          {audiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Premise() {
  return (
    <section className={styles.section} aria-labelledby="premise-heading">
      <div className={`container ${styles.premiseGrid}`}>
        <div>
          <p className={styles.sectionLabel}>The premise</p>
          <Heading as="h2" id="premise-heading">
            Answers are easier to produce. Judgment is not.
          </Heading>
        </div>
        <div className={styles.premiseBody}>
          <p>
            AI can explain unfamiliar ideas, draft analyses, and suggest
            plausible options in seconds. It can also make an unsupported
            assumption look complete.
          </p>
          <p>
            This book is about the work that remains: connecting context and
            evidence, recognizing the limits of your knowledge, and knowing
            when another discipline needs to shape the decision.
          </p>
          <blockquote>
            <p>More answers create more to assess—not less responsibility.</p>
          </blockquote>
        </div>
      </div>
      <div className={`container ${styles.questionList}`}>
        <div>
          <span>01</span>
          <p>Does it address the decision?</p>
        </div>
        <div>
          <span>02</span>
          <p>What evidence supports it?</p>
        </div>
        <div>
          <span>03</span>
          <p>Whose work and experience would change?</p>
        </div>
      </div>
    </section>
  );
}

function LearningApproach() {
  return (
    <section className={styles.pillarsSection} aria-labelledby="approach-heading">
      <div className="container">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>A practical learning model</p>
            <Heading as="h2" id="approach-heading">
              Build breadth. Go deeper when the decision demands it.
            </Heading>
          </div>
          <p>
            The goal is not instant expertise. It is enough understanding to
            ask a better question, notice a missing premise, and work well with
            people who bring deeper practice.
          </p>
        </div>
        <ol className={styles.pillars}>
          <li>
            <span>01</span>
            <Heading as="h3">Broad foundations</Heading>
            <p>
              Recognize the kind of problem you face and connect answers across
              disciplines.
            </p>
          </li>
          <li>
            <span>02</span>
            <Heading as="h3">AI-assisted situational specialization</Heading>
            <p>
              Develop useful depth for a defined decision, with AI supporting
              selected learning tasks.
            </p>
          </li>
          <li>
            <span>03</span>
            <Heading as="h3">Expert collaboration</Heading>
            <p>
              Bring in the experience, authority, and judgment that specialist
              assessments require.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className={styles.coverageSection} aria-labelledby="coverage-heading">
      <div className={`container ${styles.coverageGrid}`}>
        <div className={styles.coverageIntro}>
          <p className={styles.sectionLabel}>What the book connects</p>
          <Heading as="h2" id="coverage-heading">
            Durable foundations for the full product lifecycle.
          </Heading>
          <p>
            Follow the book in sequence as a curriculum, or return to it as a
            reference when a decision exposes a gap in your understanding.
          </p>
          <div className={styles.lifecycle}>
            <p>From first question to final retirement</p>
            <div className={styles.lifecycleSteps} aria-label="Product lifecycle">
              <span>Discover</span>
              <span>Design</span>
              <span>Deliver</span>
              <span>Launch</span>
              <span>Operate</span>
              <span>Retire</span>
            </div>
          </div>
        </div>
        <dl className={styles.disciplineGrid}>
          {disciplines.map(([name, description]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function WorkInProgress() {
  return (
    <section className={styles.wipSection} aria-labelledby="wip-heading">
      <div className={`container ${styles.wipCard}`}>
        <div className={styles.wipMarker} aria-hidden="true">
          <span>WIP</span>
        </div>
        <div className={styles.wipBody}>
          <p className={styles.sectionLabel}>An open manuscript</p>
          <Heading as="h2" id="wip-heading">
            Read it while it is being made.
          </Heading>
          <p>
            This book is actively being written and revised. Published chapters
            are available now, but the structure, examples, and wording may
            change as the manuscript develops.
          </p>
        </div>
        <Link className={styles.wipAction} to={introductionPath}>
          Read what is available
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className={styles.finalSection} aria-labelledby="final-heading">
      <div className="container">
        <p className={styles.sectionLabel}>Start with the decision in front of you</p>
        <Heading as="h2" id="final-heading">
          Learn enough to ask what matters next.
        </Heading>
        <p>
          Begin with the introduction, then take the first foundational question:
          what does the product include?
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to={introductionPath}>
            Read the introduction
            <span aria-hidden="true">→</span>
          </Link>
          <Link className={styles.finalSecondaryAction} to={chapterOnePath}>
            Continue to Chapter 1
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      wrapperClassName={styles.landingPage}
      title="Product judgment for an AI-augmented world"
      description="A work-in-progress book about evidence, judgment, AI-assisted learning, and expert collaboration for product leaders.">
      <main>
        <HomepageHeader />
        <AudienceBar />
        <Premise />
        <LearningApproach />
        <Coverage />
        <WorkInProgress />
        <FinalCallToAction />
      </main>
    </Layout>
  );
}
