import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaLanguage } from 'react-icons/fa';
import styles from './About.module.css';

const highlightIcons = {
  experience: FaBriefcase,
  degrees: FaGraduationCap,
  projects: FaProjectDiagram,
  languages_spoken: FaLanguage,
};

export default function About() {
  const { t } = useTranslation();

  const highlights = ['experience', 'degrees', 'projects', 'languages_spoken'];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className={styles.text}>{t('about.text')}</p>

        <div className={styles.highlights}>
          {highlights.map((key) => {
            const Icon = highlightIcons[key];
            return (
              <div key={key} className={styles.card}>
                <Icon className={styles.icon} />
                <span className={styles.label}>{t(`about.highlights.${key}`)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
