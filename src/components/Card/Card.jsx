import React from 'react';
import styles from './Card.module.css';

const Card = ({
    children,
    className = '',
    hover = true,
    glass = false,
    padding = 'md'
}) => {
    const cardClass = `
    ${styles.card} 
    ${hover ? styles.hover : ''} 
    ${glass ? styles.glass : ''} 
    ${styles[`p-${padding}`]}
    ${className}
  `;

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};

export default Card;
