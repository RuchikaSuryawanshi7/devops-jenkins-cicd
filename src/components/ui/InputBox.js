import React from 'react';
import enhance from '../hoc/wrapInputBox';
import './InputBox.css'; // Import CSS file for styling

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            className="form-control add-todo input-box"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="Add New"
        />
    );
}

export default enhance(InputBox);
