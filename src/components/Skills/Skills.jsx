import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';

const categoryColors = {
  programming: '#7c3aed',
  ds_ml: '#db2777',
  mlops: '#f97316',
  cloud_bi: '#06b6d4',
  engineering: '#10b981',
  office: '#8b5cf6',
  soft: '#f59e0b',
};

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>

        <div className={styles.grid}>
          {Object.entries(categories).map(([key, cat]) => (
            <div
              key={key}
              className={styles.category}
              style={{ '--cat-color': categoryColors[key] }}
            >
              <h3 className={styles.catLabel}>{cat.label}</h3>
              <div className={styles.tags}>
                {cat.items.map((item, i) => (
                  <span key={i} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
