import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  borderColor: string; // For different colored borders
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Textbook Features',
    icon: '📚',
    borderColor: 'cyan',
    description: (
      <>
        Interactive chapters with code snippets, visual diagrams, mathematical formulas, step-by-step tutorials, practice problems, and downloadable resources for hands-on learning
      </>
    ),
  },
  {
    title: 'What You Will Learn',
    icon: '🧠',
    borderColor: 'purple',
    description: (
      <>
        Robotics fundamentals, kinematics & dynamics, sensor technologies, control systems (PID, MPC), machine learning for robotics, computer vision, path planning, humanoid mechanics, and real-world AI applications
      </>
    ),
  },
  {
    title: 'Main Goals',
    icon: '🎯',
    borderColor: 'pink',
    description: (
      <>
        Build practical robotics programming skills, understand Physical AI principles, design intelligent autonomous systems, implement sensor fusion algorithms, and prepare for advanced robotics research and industry careers
      </>
    ),
  },
    {
    title: 'Interactive Learning Tools',
    icon: '🛠️',
    borderColor: 'cyan',
    description: (
      <>
        Access simulation environments, virtual robot labs, code playgrounds with real-time execution, 3D visualization tools, interactive quizzes, and debugging assistants to practice concepts hands-on without physical hardware
      </>
    ),
  },
  
];

function Feature({title, icon, description, borderColor}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.featureCard, styles[`border-${borderColor}`])}>
        <div className={styles.cardContent}>
          <div className={styles.icon}>{icon}</div>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{gap: '2rem', alignItems: 'stretch'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
