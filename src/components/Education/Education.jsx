import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import styles from './Education.module.css';

export default function Education() {
  const { t } = useTranslation();
  const degrees = t('education.degrees', { returnObjects: true });

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className="section-title">{t('education.title')}</h2>

        <div className={styles.timeline}>
          {degrees.map((deg, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}>
                <FaGraduationCap />
              </div>
              <div className={styles.card}>
                <h3 className={styles.degree}>{deg.degree}</h3>
                <h4 className={styles.school}>{deg.school}</h4>
                <div className={styles.meta}>
                  <span><FaCalendarAlt /> {deg.date}</span>
                  <span><FaMapMarkerAlt /> {deg.location}</span>
                </div>
                {deg.thesis && (
                  <p className={styles.thesis}>
                    <em>Thesis:{' '}
                      {deg.thesisUrl ? (
                        <a href={deg.thesisUrl} target="_blank" rel="noopener noreferrer" className={styles.thesisLink}>
                          {deg.thesis}
                        </a>
                      ) : (
                        deg.thesis
                      )}
                    </em>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
