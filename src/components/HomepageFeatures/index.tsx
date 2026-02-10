import type {ReactNode} from 'react';
import Feature, {type FeatureItem} from './Feature';
import styles from './styles.module.css';

const FeatureList: FeatureItem[] = [
  {
    title: 'Scanner',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Screen markets using filters and conditions to quickly spot potential trade setups and
        opportunities.
      </>
    ),
  },
  {
    title: 'Strategy Visualizer & Backtesting',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Build and visualize strategies, then backtest them on historical data to understand
        performance before taking them live.
      </>
    ),
  },
  {
    title: 'No‑Code Algo Builder',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create systematic strategies without writing code—iterate, refine, and structure your
        rules in a guided workflow.
      </>
    ),
  },
  {
    title: 'Paper Trading & Journal',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Practice with paper trading and track performance using a trading journal to review,
        learn, and improve consistency over time.
      </>
    ),
  },
  {
    title: 'Copy Trading',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Follow and copy trades from other traders to learn from active strategies and
        participate with less manual effort.
      </>
    ),
  },
  {
    title: 'Learning: Quests & Quizzes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn systematically with interactive Q&amp;A style quests and quizzes designed to
        strengthen options and strategy concepts.
      </>
    ),
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}