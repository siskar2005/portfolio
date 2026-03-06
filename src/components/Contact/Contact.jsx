import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const subject = `Portfolio Contact from ${name}`;
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${t('contact.email')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className={styles.subtitle}>{t('contact.subtitle')}</p>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <h4>Phone</h4>
                <a href={`tel:${t('contact.phone')}`}>{t('contact.phone')}</a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('contact.form.name')}
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.form.email')}
              className={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              rows={5}
              className={styles.textarea}
              required
            ></textarea>
            <button type="submit" className={styles.submit}>
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
