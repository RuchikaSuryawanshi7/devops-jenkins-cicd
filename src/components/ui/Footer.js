import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';
import './Footer.css'; // Import CSS file for styling

export default function Footer(props) {
    const { activeItemCount, filter, changeFilter } = props;
    return (
        <footer className="footer clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...props} />
            </div>
            <div className="pull-left item-count">
                {`${activeItemCount} items left`}
            </div>
            <div className="pull-right">
                <Filter {...{ filter, changeFilter }} />
            </div>
        </footer>
    );
}
