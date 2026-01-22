import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <img src="/White-logo.webp" alt="MTGAR" className={styles.logo} />
                        <p className={styles.tagline}>
                            {t('footer.tagline', 'Driving digital growth through strategic excellence.')}
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4 className={styles.title}>{t('footer.company', 'Company')}</h4>
                            <a href="#work">{t('footer.work', 'Our Work')}</a>
                            <a href="#features">{t('footer.features', 'Features')}</a>
                            <a href="#why-mtgar">{t('footer.why-mtgar', 'Why MTGAR')}</a>
                            <a href="#contact">{t('footer.contact', 'Contact')}</a>
                        </div>

                        <div className={styles.column}>
                            <h4 className={styles.title}>{t('footer.social', 'Social')}</h4>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {year} MTGAR. {t('footer.rights', 'All rights reserved.')}
                    </p>
                    <div className={styles.legal}>
                        <a href="#">{t('footer.privacy', 'Privacy Policy')}</a>
                        <a href="#">{t('footer.terms', 'Terms of Service')}</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
