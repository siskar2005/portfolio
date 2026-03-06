import { useTranslation } from 'react-i18next';
import { FaCertificate } from 'react-icons/fa';
import styles from './Certifications.module.css';

export default function Certifications() {
  const { t } = useTranslation();
  const items = t('certifications.items', { returnObjects: true });

  return (
    <section id="certifications" className={styles.certifications}>
      <div className="container">
        <h2 className="section-title">{t('certifications.title')}</h2>

        <div className={styles.grid}>
          {items.map((cert, i) => (
            <div key={i} className={styles.card}>
              <FaCertificate className={styles.icon} />
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.description}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
