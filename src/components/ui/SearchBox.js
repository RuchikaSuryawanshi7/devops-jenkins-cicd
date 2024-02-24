import React from 'react';
import './SearchBox.css'; // Import CSS file for styling

export default function SearchBox(props) {
    const { query, setSearchQuery } = props;

    return (
        <input
            type="text" autoFocus
            className="form-control search-box"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}

