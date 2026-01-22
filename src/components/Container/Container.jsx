import React from 'react';

const Container = ({ children, size = 'xl', className = '' }) => {
    const maxWidthClass = `max-w-[var(--container-${size})]`;

    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
};

export default Container;
