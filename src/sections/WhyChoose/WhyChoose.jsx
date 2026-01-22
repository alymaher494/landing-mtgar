import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';
import styles from './WhyChoose.module.css';

const WhyChoose = () => {
    const { t } = useTranslation();

    const features = [
        {
            key: 'experience',
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            key: 'quality',
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        },
        {
            key: 'support',
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            )
        },
        {
            key: 'innovation',
            icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
            )
        }
    ];

    return (
        <Section id="features" background="surface">
            <div className={styles.header}>
                <Heading level={2} align="center">
                    {t('why_choose.title', 'Why MTGAR?')}
                </Heading>
                <p className={styles.subtitle}>
                    {t('why_choose.subtitle')}
                </p>
            </div>

            <div className={styles.grid}>
                {features.map((feature, i) => (
                    <Card key={i} className={styles.featureCard}>
                        <div className={styles.iconBox}>
                            {feature.icon}
                        </div>
                        <Heading level={3} className={styles.featureTitle}>
                            {t(`why_choose.features.${feature.key}.title`)}
                        </Heading>
                        <p className={styles.featureDesc}>
                            {t(`why_choose.features.${feature.key}.description`)}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default WhyChoose;
