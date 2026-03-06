import { useTranslation } from 'react-i18next';
import styles from './Languages.module.css';

const barColors = ['#7c3aed', '#db2777', '#f97316'];

export default function Languages() {
  const { t } = useTranslation();
  const items = t('languages.items', { returnObjects: true });

  return (
    <section id="languages" className={styles.languages}>
      <div className="container">
        <h2 className="section-title">{t('languages.title')}</h2>

        <div className={styles.grid}>
          {items.map((lang, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.name}>{lang.name}</h3>
                <span className={styles.level}>{lang.level}</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{
                    width: `${lang.percent}%`,
                    background: barColors[i % barColors.length],
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
