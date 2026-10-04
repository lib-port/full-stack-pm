import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import sidebars from '@site/sidebars';
import styles from './index.module.css';

const book = sidebars.tutorialSidebar;
const introductionPath = `/${book[0]}`;
const conclusionPath = `/${book.at(-1)}`;
const parts = book.filter((item) => item.type === 'category');
const chapterCount = parts.reduce((total, part) => total + part.items.length, 0);

const audiences = [
  'Product managers',
  'Founders',
  'Service leaders',
  'Business analysts',
];

const learningOutcomes = [
  [
    'Frame the product problem',
    'Understand people’s needs, define useful product boundaries and recognise how a change affects the surrounding system.',
  ],
  [
    'Weigh evidence and trade-offs',
    'Connect economics, markets and measurement to compare options and make decisions under uncertainty.',
  ],
  [
    'Understand technical constraints',
    'Reason about software, data, reliability and security so you can ask better questions and work with engineers.',
  ],
  [
    'Use AI with judgement',
    'Learn unfamiliar concepts, check generated claims and collaborate with specialists while keeping decisions accountable.',
  ],
];

function ReadingActions() {
  return (
    <div className={styles.actions}>
      <Link className={styles.primaryAction} to={introductionPath}>
        Start reading
        <span aria-hidden="true">→</span>
      </Link>
      <Link className={styles.secondaryAction} to="#contents">
        Browse the contents
      </Link>
    </div>
  );
}

function LearningModel() {
  return (
    <aside className={styles.model} aria-label="The book's learning model">
      <p className={styles.modelEyebrow}>The accelerated generalist</p>
      <div className={styles.modelCore}>
        <span>Product</span>
        <strong>judgement</strong>
        <small>Evidence · context · accountability</small>
      </div>
      <ol className={styles.modelSteps}>
        <li>
          <span>01</span>
          <strong>Broad foundations</strong>
        </li>
        <li>
          <span>02</span>
          <strong>Situational specialisation</strong>
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
          <p className={styles.kicker}>Full-Stack Product Manager</p>
          <Heading as="h1">
            Build better product judgement in an AI-augmented world.
          </Heading>
          <p className={styles.lede}>
            A practical guide to connecting people, economics, markets,
            technology and AI to make better product decisions.
          </p>
          <ReadingActions />
          <p className={styles.bookFacts}>
            {chapterCount} chapters · {parts.length} parts
            <span>Plus an introduction and conclusion</span>
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

function Contents() {
  let nextChapter = 1;

  return (
    <section className={styles.contentsSection} aria-labelledby="contents">
      <div className="container">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>Explore the book</p>
            <Heading as="h2" id="contents" tabIndex={-1}>
              Full-Stack Product Manager
            </Heading>
          </div>
          <p>
            Choose a part to begin with its opening chapter. The book sidebar
            guides you through the chapters that follow.
          </p>
        </div>
        <nav aria-labelledby="contents">
          <Link className={styles.contentsBookend} to={introductionPath}>
            <span>Begin with the introduction</span>
            <span aria-hidden="true">→</span>
          </Link>
          <ol className={styles.parts}>
            {parts.map((part) => {
              const [number, title] = part.label.split(/ [—-] /);
              const firstChapter = nextChapter;
              const lastChapter = firstChapter + part.items.length - 1;
              nextChapter = lastChapter + 1;

              return (
                <li key={part.label}>
                  <Link className={styles.partLink} to={`/${part.items[0]}`}>
                    <span className={styles.partNumber}>Part {number}</span>
                    <Heading as="h3">{title}</Heading>
                    <span className={styles.partFooter}>
                      <span>Chapters {firstChapter}–{lastChapter}</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <Link className={styles.contentsBookend} to={conclusionPath}>
            <span>
              Conclusion: Product judgement in an age of abundant intelligence
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}

function LearningOutcomes() {
  return (
    <section className={styles.learningSection} aria-labelledby="learning-heading">
      <div className="container">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>What you’ll learn</p>
            <Heading as="h2" id="learning-heading">
              Ask better questions about real product decisions.
            </Heading>
          </div>
          <p>
            Build broad foundations, develop depth where a decision demands it
            and recognise when you need specialist expertise.
          </p>
        </div>
        <ul className={styles.outcomes}>
          {learningOutcomes.map(([title, description]) => (
            <li key={title}>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <aside className={styles.caseStudy} aria-labelledby="cedar-heading">
          <div>
            <p className={styles.sectionLabel}>A recurring fictional case</p>
            <Heading as="h3" id="cedar-heading">Meet Cedar.</Heading>
          </div>
          <p>
            Cedar is an operations product for field-service businesses such as
            plumbing and maintenance companies. Its scheduling, dispatch and
            payment decisions connect the book’s ideas through practical
            situations, from discovering opportunities to operating a product.
          </p>
        </aside>
      </div>
    </section>
  );
}

function ReadingGuide() {
  return (
    <section className={styles.readingSection} aria-labelledby="reading-heading">
      <div className="container">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>How to use this book</p>
            <Heading as="h2" id="reading-heading">
              Read for the work in front of you.
            </Heading>
          </div>
          <p>
            Read the chapters sequentially as a guide or use specific chapters as a reference.
          </p>
        </div>
        <div className={styles.readingRoutes}>
          <div>
            <Heading as="h3">Build your foundations</Heading>
            <p>
              Start with the introduction and read in sequence. Each part adds
              another way to reason about products, leading into integrated
              practice and learning in unfamiliar domains.
            </p>
            <Link className={styles.textLink} to={introductionPath}>
              Start reading <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div>
            <Heading as="h3">Return with a question</Heading>
            <p>
              Use the book as a reference when a decision exposes a gap. Revisit
              economics for a pricing proposal, reliability for a release
              problem or verification when working with AI.
            </p>
            <Link className={styles.textLink} to="#contents">
              Browse the contents <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
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
          Begin with the introduction or find the part that helps you take your
          next step.
        </p>
        <ReadingActions />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      wrapperClassName={styles.landingPage}
      title="Product judgement for an AI-augmented world"
      description={`Read the complete Full-Stack Product Manager: ${chapterCount} chapters across ${parts.length} parts on people, economics, technology, AI and product judgement.`}>
      <main>
        <HomepageHeader />
        <AudienceBar />
        <Contents />
        <LearningOutcomes />
        <ReadingGuide />
        <FinalCallToAction />
      </main>
    </Layout>
  );
}
