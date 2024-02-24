import React from 'react';
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from '../../services/mode';
import './ButtonWrapper.css'; // Import CSS file for styling

export default function ButtonWrapper(props) {
    const { mode, changeMode } = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;

    return (
        <div className="button-wrapper">
            <a title="Add New"
                className={'button add ' + (isCreateMode() ? 'selected' : '')}
                onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}>
                <i className="fas fa-plus"></i> {/* Add icon for "Add New" button */}
            </a>
            <a title="Search"
                className={'button search ' + (isSearchMode() ? 'selected' : '')}
                onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}>
                <i className="fas fa-search"></i> {/* Add icon for "Search" button */}
            </a>
        </div>
    );
}
