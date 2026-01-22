import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import styles from './SplitSection.module.css';

const sliderImages1 = [
    { id: 1, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-8.png", alt: "Card 8" },
    { id: 2, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-7.png", alt: "Card 7" },
    { id: 3, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-6.png", alt: "Card 6" },
];

const sliderImages2 = [
    { id: 1, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-9.png", alt: "Card 9" },
    { id: 2, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-10.png", alt: "Card 10" },
    { id: 3, src: "https://adbuyers.agency/wp-content/uploads/2024/08/Card-11.png", alt: "Card 11" },
];

const SplitSection = ({
    reversed = false,
}) => {
    const { t } = useTranslation();

    const duplicated1 = [...sliderImages1, ...sliderImages1, ...sliderImages1, ...sliderImages1];
    const duplicated2 = [...sliderImages2, ...sliderImages2, ...sliderImages2, ...sliderImages2];
    const benefits = t('split_section.benefits', { returnObjects: true }) || [];

    return (
        <Section className={styles.section}>
            <div className={`${styles.grid} ${reversed ? styles.reversed : ''}`}>
                <div className={styles.content}>
                    <Heading level={2} className={styles.title}>
                        {t('split_section.title')} <br />
                        <span className={styles.accent}>{t('split_section.title_accent')}</span>
                    </Heading>

                    <ul className={styles.benefits}>
                        {benefits.map((benefit, i) => (
                            <li key={i} className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>
                                    <svg viewBox="0 0 34 35" fill="none">
                                        <circle cx="17" cy="17" r="17" fill="var(--color-orange)" fillOpacity="0.1" />
                                        <path d="M12 17L15.3333 20.5L22 12.5" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className={styles.benefitText}>{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <Button href="#contact">
                            {t('split_section.cta')}
                        </Button>
                    </div>
                </div>

                <div className={styles.visualSliders}>
                    <div className={`${styles.fade} ${styles.fadeTop}`}></div>
                    <div className={`${styles.fade} ${styles.fadeBottom}`}></div>

                    <div className={`${styles.slider} ${styles.sliderUp}`}>
                        <div className={styles.sliderTrack}>
                            {duplicated1.map((item, index) => (
                                <div key={`up-${item.id}-${index}`} className={styles.sliderCard}>
                                    <img src={item.src} alt={item.alt} className={styles.sliderImg} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.slider} ${styles.sliderDown}`}>
                        <div className={styles.sliderTrack}>
                            {duplicated2.map((item, index) => (
                                <div key={`down-${item.id}-${index}`} className={styles.sliderCard}>
                                    <img src={item.src} alt={item.alt} className={styles.sliderImg} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SplitSection;
