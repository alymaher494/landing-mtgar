import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import styles from './Gallery.module.css';

const Gallery = () => {
    const { t } = useTranslation();

    const campaigns = [
        {
            id: 'google',
            platform: t('gallery.campaigns.google.platform'),
            description: t('gallery.campaigns.google.description'),
            image: 'https://mtgar.com/wp-content/uploads/2026/01/سبائك-الماسة-جوجل.png',
            stats: t('gallery.campaigns.google.stats', { returnObjects: true }),
            color: "#E85D26"
        },
        {
            id: 'snapchat',
            platform: t('gallery.campaigns.snapchat.platform'),
            description: t('gallery.campaigns.snapchat.description'),
            image: 'https://mtgar.com/wp-content/uploads/2026/01/s-دكان-بليلة.png',
            stats: t('gallery.campaigns.snapchat.stats', { returnObjects: true }),
            color: "#E85D26"
        },
        {
            id: 'meta',
            platform: t('gallery.campaigns.meta.platform'),
            description: t('gallery.campaigns.meta.description'),
            image: '/المركز السعودي للعود.png',
            stats: t('gallery.campaigns.meta.stats', { returnObjects: true }),
            color: "#E85D26"
        },
        {
            id: 'tiktok',
            platform: t('gallery.campaigns.tiktok.platform'),
            description: t('gallery.campaigns.tiktok.description'),
            image: '/New Inaya.PNG',
            stats: t('gallery.campaigns.tiktok.stats', { returnObjects: true }),
            color: "#E85D26"
        }
    ];

    return (
        <section className={styles.stackedGallery} id="gallery">
            <header className={styles.header}>
                <span className={styles.eyebrow}>{t('gallery.eyebrow')}</span>
                <Heading level={2} align="center" className={styles.title}>
                    {t('gallery.title')} <span className={styles.titleAccent}>{t('gallery.title_accent')}</span>
                </Heading>
                <p className={styles.subtitle}>
                    {t('gallery.subtitle')}
                </p>
            </header>

            <div className={styles.container}>
                {campaigns.map((campaign, index) => (
                    <article
                        key={campaign.id}
                        className={styles.card}
                        style={{
                            '--card-index': index,
                            '--card-color': campaign.color,
                        }}
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.cardImage}>
                                <img
                                    src={campaign.image}
                                    alt={campaign.platform}
                                    className={styles.cardImg}
                                    loading="lazy"
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <span className={styles.cardPlatform}>{campaign.platform}</span>
                                <p className={styles.cardDescription}>{campaign.description}</p>

                                <div className={styles.statsGrid}>
                                    {Array.isArray(campaign.stats) && campaign.stats.map((stat, i) => (
                                        <div key={i} className={styles.stat}>
                                            <span className={styles.statNumber}>{stat.number}</span>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.cta}>
                <a
                    href="https://wa.me/201021422778"
                    className={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{t('gallery.cta')}</span>
                    <svg
                        className={styles.ctaIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Gallery;
