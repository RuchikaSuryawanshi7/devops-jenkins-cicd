import React from 'react';
import TodoItem from './TodoItem';
import { MSG_NO_ITEMS } from '../../assets/text/en_US';
import './FilteredList.css'; // Import CSS file for styling

export default function FilteredList(props) {
    const { items, changeStatus } = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="filtered-list list-unstyled">
            {items.map(item => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}

