import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
  'about', 'education', 'experience', 'projects',
  'skills', 'certifications', 'languages', 'contact',
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          SR
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((key) => (
            <li key={key}>
              <a href={`#${key}`} onClick={closeMenu}>
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLang} aria-label="Toggle language">
            <FaGlobe />
            <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
