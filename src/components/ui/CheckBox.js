import React, { Component } from 'react';
import './CheckBox.css'; // Import CSS file for styling

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const { checked } = e.target;

        this.setState({ checked });
        this.props.onChange(checked);
    }

    render() {
        return (
            <label className="checkbox-label">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
                <span className="custom-checkbox"></span> {/* Custom checkbox design */}
            </label>
        );
    }
}

export default CheckBox;
