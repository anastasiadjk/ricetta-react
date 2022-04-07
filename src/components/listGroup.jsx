import React from 'react';


const ListGroup = (props) => {
    const { categories, onCategorySelect, selectedCategory } = props;
    return <ul className="list-group">
        {categories.map(category => (
            <li
                key={category._id}
                className={category === selectedCategory ? "list-group-item active" : "list-group-item"}
                onClick={() => onCategorySelect(category)}>
                {category.name}
            </li>
        ))}
    </ul>;
}
export default ListGroup;