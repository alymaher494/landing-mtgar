import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import Container from '../../components/Container/Container';
import styles from './Services.module.css';

const ServiceIcon = ({ type }) => {
    const icons = {
        ads: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        landing: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        webdev: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        content: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        design: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
            </svg>
        ),
        consulting: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 00-4 12.7V17a1 1 0 001 1h6a1 1 0 001-1v-2.3A7 7 0 0012 2z" />
            </svg>
        ),
        ai: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4.5a2.5 2.5 0 00-4.96-.46 2.5 2.5 0 00-1.98 3 2.5 2.5 0 00.47 4.9 2.5 2.5 0 003.02 3.02 2.5 2.5 0 004.9.47 2.5 2.5 0 003-1.98 2.5 2.5 0 00-.46-4.96 2.5 2.5 0 00-3.02-3.02A2.5 2.5 0 0012 4.5" />
                <path d="M12 12v0" />
                <path d="M15.5 8.5L12 12" />
                <path d="M12 12l-3.5 3.5" />
            </svg>
        ),
    };
    return icons[type] || icons.ads;
};

const Services = () => {
    const { t } = useTranslation();

    const services = [
        { id: 'ads', icon: 'ads' },
        { id: 'landing', icon: 'landing' },
        { id: 'webdev', icon: 'webdev' },
        { id: 'content', icon: 'content' },
        { id: 'design', icon: 'design' },
        { id: 'consulting', icon: 'consulting' },
        { id: 'ai', icon: 'ai' }
    ];

    return (
        <Section id="services" background="surface">
            <div className={styles.header}>
                <Heading level={2} align="center" gradient>
                    {t('nav.services', 'Our Services')}
                </Heading>
                <p className={styles.subtitle}>
                    {t('why_choose.subtitle')}
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className={styles.card}
                        initial={{
                            opacity: 0,
                            y: 30,
                            filter: "blur(10px)"
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1] // Custom ease-out
                        }}
                    >
                        <div className={styles.iconWrapper}>
                            <ServiceIcon type={service.icon} />
                        </div>
                        <h3 className={styles.title}>
                            {t(`hero.services.${service.id}.title`)}
                        </h3>
                        <p className={styles.description}>
                            {t(`hero.services.${service.id}.description`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
