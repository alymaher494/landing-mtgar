import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import styles from './Clients.module.css';

const clientsRow1 = [
    { id: 1, src: "/assets/logos/1.jpg", name: "Client 1" },
    { id: 2, src: "/assets/logos/2.jpg", name: "Client 2" },
    { id: 3, src: "/assets/logos/3.png", name: "Client 3" },
    { id: 4, src: "/assets/logos/4.jpg", name: "Client 4" },
    { id: 5, src: "/assets/logos/5.jpg", name: "Client 5" },
    { id: 6, src: "/assets/logos/6.jpg", name: "Client 6" },
    { id: 7, src: "/assets/logos/7.jpg", name: "Client 7" },
    { id: 8, src: "/assets/logos/8.png", name: "Client 8" },
    { id: 9, src: "/assets/logos/9.png", name: "Client 9" },
    { id: 10, src: "/assets/logos/10.png", name: "Client 10" },
    { id: 11, src: "/assets/logos/11.png", name: "Client 11" },
    { id: 12, src: "/assets/logos/12.jpeg", name: "Client 12" },
    { id: 13, src: "/assets/logos/13.jpg", name: "Client 13" },
    { id: 14, src: "/assets/logos/14.png", name: "Client 14" },
    { id: 15, src: "/assets/logos/15.png", name: "Client 15" },
    { id: 16, src: "/assets/logos/16.png", name: "Client 16" },
    { id: 17, src: "/assets/logos/17.png", name: "Client 17" },
    { id: 18, src: "/assets/logos/18.png", name: "Client 18" },
    { id: 19, src: "/assets/logos/19.png", name: "Client 19" },
    { id: 20, src: "/assets/logos/20.png", name: "Client 20" },
    { id: 21, src: "/assets/logos/21.png", name: "Client 21" },
    { id: 22, src: "/assets/logos/22.png", name: "Client 22" },
];

const clientsRow2 = [
    { id: 23, src: "/assets/logos/23.png", name: "Client 23" },
    { id: 24, src: "/assets/logos/24.png", name: "Client 24" },
    { id: 25, src: "/assets/logos/25.png", name: "Client 25" },
    { id: 26, src: "/assets/logos/26.png", name: "Client 26" },
    { id: 27, src: "/assets/logos/27.png", name: "Client 27" },
    { id: 28, src: "/assets/logos/28.png", name: "Client 28" },
    { id: 29, src: "/assets/logos/29.png", name: "Client 29" },
    { id: 30, src: "/assets/logos/30.png", name: "Client 30" },
    { id: 31, src: "/assets/logos/31.png", name: "Client 31" },
    { id: 32, src: "/assets/logos/32.png", name: "Client 32" },
    { id: 33, src: "/assets/logos/33.png", name: "Client 33" },
    { id: 34, src: "/assets/logos/34.png", name: "Client 34" },
    { id: 35, src: "/assets/logos/35.png", name: "Client 35" },
    { id: 36, src: "/assets/logos/36.png", name: "Client 36" },
    { id: 37, src: "/assets/logos/37.png", name: "Client 37" },
    { id: 38, src: "/assets/logos/38.png", name: "Client 38" },
    { id: 39, src: "/assets/logos/39.png", name: "Client 39" },
    { id: 40, src: "/assets/logos/40.png", name: "Client 40" },
    { id: 41, src: "/assets/logos/41.png", name: "Client 41" },
    { id: 42, src: "/assets/logos/42.png", name: "Client 42" },
    { id: 43, src: "/assets/logos/43.png", name: "Client 43" },
    { id: 44, src: "/assets/logos/44.png", name: "Client 44" },
];

const Clients = () => {
    const { t } = useTranslation();

    return (
        <Section className={styles.section} background="navy">
            <div className={styles.header}>
                <span className={styles.eyebrow}>{t('clients.eyebrow')}</span>
                <Heading level={2} align="center" className={styles.title}>
                    {t('clients.title')}
                </Heading>
            </div>

            <div className={styles.marqueeContainer}>
                {/* Track 1 */}
                <div className={styles.marquee}>
                    <div className={styles.track}>
                        {[...clientsRow1, ...clientsRow1].map((client, i) => (
                            <div key={i} className={styles.logoBox}>
                                <img src={client.src} alt={client.name} className={styles.logo} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Track 2 (Reverse) */}
                <div className={styles.marquee}>
                    <div className={`${styles.track} ${styles.reverse}`}>
                        {[...clientsRow2, ...clientsRow2].map((client, i) => (
                            <div key={i} className={styles.logoBox}>
                                <img src={client.src} alt={client.name} className={styles.logo} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Clients;
