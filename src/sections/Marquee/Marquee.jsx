import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import styles from './Marquee.module.css';

const Marquee = () => {
    const { t } = useTranslation();

    const tags = t('marquee.services', { returnObjects: true }) || [];

    return (
        <div className={styles.wrapper}>
            <div className={styles.track}>
                {[...tags, ...tags].map((tag, i) => (
                    <div key={i} className={styles.item}>
                        <span className={styles.dot}></span>
                        <span className={styles.text}>{tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
