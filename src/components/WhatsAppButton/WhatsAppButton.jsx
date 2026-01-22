import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = ({ phoneNumber = '201021422778', message = '' }) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.9 4.9Z"></path>
            </svg>
            <div className={styles.pulse}></div>
        </a>
    );
};

export default WhatsAppButton;
