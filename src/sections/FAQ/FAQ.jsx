import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
        <button className={styles.trigger} onClick={onClick}>
            <span className={styles.question}>{question}</span>
            <span className={styles.icon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="3">
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.content}
                >
                    <div className={styles.answer}>
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const questions = t('faq.questions', { returnObjects: true });

    return (
        <Section id="faq">
            <div className={styles.header}>
                <span className={styles.eyebrow}>{t('faq.eyebrow')}</span>
                <Heading level={2} align="center">
                    {t('faq.title')} <span className={styles.accent}>{t('faq.title_accent')}</span>
                </Heading>
                <p className={styles.subtitle}>{t('faq.subtitle')}</p>
            </div>

            <div className={styles.list}>
                {Array.isArray(questions) && questions.map((faq, i) => (
                    <FAQItem
                        key={i}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === i}
                        onClick={() => setOpenIndex(prev => prev === i ? -1 : i)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
