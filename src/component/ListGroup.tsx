import React from 'react';

interface ListGroupProps {
    heading: string;
    items: string[];
    onItemClick?: (item: string) => void;
}

const ListGroup: React.FC<ListGroupProps> = ({heading, items, 
    onItemClick}) => {
    return (
        <>
        <h3>{heading}</h3>
        {items.length === 0 ? (
            <p>No cities available.</p>
        ) : (
        <ul className="list-group">
            {/* List items will go here */}
            {items.map((item, index) => (
                <li
                key={index}
                className= "list-group-item"
                onClick={ () => onItemClick?.(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        )}
        </>
    );
};

export default ListGroup;