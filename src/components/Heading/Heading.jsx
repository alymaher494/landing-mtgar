import React from 'react';

const Heading = ({
    children,
    level = 2,
    className = '',
    align = 'start',
    gradient = false,
    ...props
}) => {
    const Tag = `h${level}`;
    const alignClass = align === 'center' ? 'text-center' : align === 'end' ? 'text-end' : '';
    const gradientClass = gradient ? 'text-gradient' : '';

    return (
        <Tag
            className={`${alignClass} ${gradientClass} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Heading;
