import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>{t('hero.greeting')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <h2 className={styles.title}>{t('hero.title')}</h2>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>

          <div className={styles.ctas}>
            <a href="#contact" className={styles.ctaPrimary}>
              <FaEnvelope /> {t('hero.cta_contact')}
            </a>
            <a href="/CV_Siska_Riefelyna.pdf" download className={styles.ctaSecondary}>
              <FaDownload /> {t('hero.cta_cv')}
            </a>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles.photoPlaceholder}>
            <span>SR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
