import React from 'react';
import Container from '../Container/Container';

const Section = ({
    children,
    id,
    className = '',
    containerSize = 'xl',
    noPadding = false,
    background = 'transparent'
}) => {
    const bgStyles = {
        transparent: 'transparent',
        dark: 'var(--color-dark)',
        navy: 'var(--color-navy)',
        surface: 'var(--color-gray-900)'
    };

    const sectionClass = `section ${noPadding ? '' : 'section-padding'} ${className}`;
    const sectionStyle = {
        backgroundColor: bgStyles[background] || background
    };

    return (
        <section id={id} className={sectionClass} style={sectionStyle}>
            <Container size={containerSize}>
                {children}
            </Container>
        </section>
    );
};

export default Section;
