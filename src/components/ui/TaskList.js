import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import './Task.css'; // Import CSS file for styling

function Task({ task, onToggleTask, onDeleteTask }) {
    function handleToggleTask() {
        onToggleTask(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <li className={`task ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleToggleTask}
                    className="task-checkbox" // Apply custom class for styling
                />
                <span className="task-text">{task.text}</span>
            </div>
            <button className="delete-button" onClick={handleDeleteTask}>
                <FaTrash />
            </button>
        </li>
    );
}

export default Task;
