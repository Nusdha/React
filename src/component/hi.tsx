import React from 'react';

interface HiProps {
    children: React.ReactNode;
     // ReactNode allows passing HTML or other components as children
}

const Hi: React.FC<HiProps> = ({ children }) => {
    const handleAlertDismiss = () => {
        alert("You clicked the button! Dismissed successfully.");
    };
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {children}
            <button 
            type="button" className="btn-close" data-bs-dismiss="alert" aria-label="close" onClick={handleAlertDismiss}>
            </button>
        </div>
    );
};

export default Hi;