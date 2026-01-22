import React from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    href,
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={buttonClass} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
