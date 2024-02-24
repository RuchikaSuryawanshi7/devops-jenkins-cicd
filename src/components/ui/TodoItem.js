import React from 'react';
import CheckBox from './CheckBox';
import './TodoItem.css'; // Import CSS file for styling

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label className="checkbox-label">
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    <span className="text">{data.text}</span>
                </label>
            </div>
        </li>
    );
}
