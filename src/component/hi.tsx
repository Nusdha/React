import React from 'react';

interface HiProps {
    children: React.ReactNode; //Accept any valid React node
}

const Hi: React.FC<HiProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Hi;