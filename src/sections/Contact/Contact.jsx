import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
    const { t } = useTranslation();
    const services = t('contact.form.services.items', { returnObjects: true }) || [];

    const [selectedServices, setSelectedServices] = useState([]);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleServiceChange = (serviceId) => {
        setSelectedServices(prev => {
            if (prev.includes(serviceId)) {
                return prev.filter(id => id !== serviceId);
            } else {
                return [...prev, serviceId];
            }
        });

        if (serviceId === "custom-service") {
            setShowCustomInput(!showCustomInput);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        const selectedServiceLabels = selectedServices.map(id =>
            services.find(s => s.id === id)?.label
        ).filter(Boolean);

        const data = {
            access_key: "3070d45e-50dc-4591-af38-bfc419ea5f3b",
            subject: "New Message from MTGAR Landing",
            from_name: formData.get("name"),
            name: formData.get("name"),
            whatsapp: formData.get("whatsapp"),
            email: formData.get("email"),
            website: formData.get("website") || "N/A",
            services: selectedServiceLabels.join(", ") || "N/A",
            custom_service: formData.get("custom_service_detail") || "",
            message: formData.get("message"),
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                setShowPopup(true);
            } else {
                alert(t('contact.popup.error', 'Something went wrong. Please try again.'));
            }
        } catch (error) {
            alert(t('contact.popup.connection_error', 'Connection error. Please try again.'));
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setSelectedServices([]);
        setShowCustomInput(false);
        setShowPopup(false);
        document.querySelector('form').reset();
    };

    return (
        <Section id="contact" background="dark" className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{t('contact.eyebrow')}</span>
                    <Heading level={2} align="center" gradient className={styles.title}>
                        {t('contact.title')} <span className={styles.accent}>{t('contact.title_accent')}</span>
                    </Heading>
                    <p className={styles.description}>
                        {t('contact.description')}
                    </p>
                </header>

                <div className={styles.contactCard}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label htmlFor="name" className={styles.label}>
                                    {t('contact.form.name.label')} <span className={styles.required}>{t('contact.form.required')}</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    placeholder={t('contact.form.name.placeholder')}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="whatsapp" className={styles.label}>
                                    {t('contact.form.whatsapp.label')} <span className={styles.required}>{t('contact.form.required')}</span>
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    className={styles.input}
                                    placeholder={t('contact.form.whatsapp.placeholder')}
                                    required
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label htmlFor="email" className={styles.label}>
                                    {t('contact.form.email.label')} <span className={styles.required}>{t('contact.form.required')}</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder={t('contact.form.email.placeholder')}
                                    required
                                    dir="ltr"
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="website" className={styles.label}>
                                    {t('contact.form.website.label')}
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    className={styles.input}
                                    placeholder={t('contact.form.website.placeholder')}
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        <div className={`${styles.field} ${styles.fullWidth}`}>
                            <label className={styles.label}>
                                {t('contact.form.services.label')} <span className={styles.required}>{t('contact.form.required')}</span>
                            </label>
                            <div className={styles.servicesGrid}>
                                {services.map((service) => (
                                    <div key={service.id} className={styles.serviceCheckbox}>
                                        <input
                                            type="checkbox"
                                            id={service.id}
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => handleServiceChange(service.id)}
                                        />
                                        <label htmlFor={service.id} className={styles.serviceLabel}>
                                            {service.label}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {showCustomInput && (
                                <div className={styles.customInputWrapper}>
                                    <input
                                        type="text"
                                        name="custom_service_detail"
                                        className={styles.input}
                                        placeholder={t('contact.form.services.custom_placeholder')}
                                    />
                                </div>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message" className={styles.label}>
                                {t('contact.form.message.label')} <span className={styles.required}>{t('contact.form.required')}</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder={t('contact.form.message.placeholder')}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                            <span>{isLoading ? t('contact.form.sending') : t('contact.form.submit')}</span>
                            <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className={styles.popupOverlay} onClick={resetForm}>
                    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.popupClose} onClick={resetForm}>×</button>
                        <div className={styles.popupIcon}>✓</div>
                        <h3 className={styles.popupTitle}>{t('contact.popup.title')}</h3>
                        <p className={styles.popupText}>{t('contact.popup.text')}</p>
                        <button type="button" className={styles.popupBtn} onClick={resetForm}>
                            {t('contact.popup.button')}
                        </button>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Contact;
