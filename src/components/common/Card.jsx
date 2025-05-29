import React from 'react';
import '../../styles/components/card.css';

/**
 * Card component
 * Displays content in a card format
 * 
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant] - Card variant (primary, secondary)
 * @param {string} [props.image] - URL of image to display
 * @param {string} [props.footer] - Footer content
 * @returns {JSX.Element}
 */
const Card = ({
    title,
    children,
    className = '',
    variant = '',
    image,
    footer
}) => {
    return (
        <div className={`card ${variant} ${className}`}>
            <h3>{title}</h3>

            {image && (
                <img
                    src={image}
                    alt={title}
                    className="card-image"
                />
            )}

            <div className="card-content">
                {children}
            </div>

            {footer && (
                <div className="card-footer">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
