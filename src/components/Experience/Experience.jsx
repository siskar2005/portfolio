import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import styles from './Experience.module.css';

export default function Experience() {
  const { t } = useTranslation();
  const positions = t('experience.positions', { returnObjects: true });

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>

        <div className={styles.timeline}>
          {positions.map((pos, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}>
                <FaBriefcase />
              </div>
              <div className={styles.card}>
                <h3 className={styles.role}>{pos.role}</h3>
                <h4 className={styles.company}>{pos.company}</h4>
                <div className={styles.meta}>
                  <span><FaCalendarAlt /> {pos.period}</span>
                  <span><FaMapMarkerAlt /> {pos.location}</span>
                </div>
                <p className={styles.description}>{pos.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
