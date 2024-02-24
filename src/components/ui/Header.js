import React from 'react';
import InputWrapper from './InputWrapper';
import './Header.css'; // Import CSS file for styling

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="header-title">Things To Do</h1>
            <InputWrapper {...props} />
        </header>
    );
}
