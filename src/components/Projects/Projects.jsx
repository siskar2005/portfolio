import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';

const colorAccents = [
  '#7c3aed', '#db2777', '#f97316', '#06b6d4',
  '#8b5cf6', '#ec4899', '#f59e0b', '#10b981',
  '#6366f1', '#e11d48',
];

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className={styles.grid}>
          {items.map((project, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ '--accent': colorAccents[i % colorAccents.length] }}
            >
              <div className={styles.accent}></div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
