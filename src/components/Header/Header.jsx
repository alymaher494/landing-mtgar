import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLng = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLng);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Container className={styles.navContainer}>
                <div className={styles.logo}>
                    <img src="/White-logo.webp" alt="MTGAR" />
                </div>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</a>
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</a>
                    <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.projects')}</a>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.why_us')}</a>
                    <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.faq')}</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>
                </nav>

                <div className={styles.actions}>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        {i18n.language === 'ar' ? 'English' : 'العربية'}
                    </button>
                    <Button size="sm" className={styles.cta} href="#contact">
                        {t('buttons.get_started')}
                    </Button>
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
