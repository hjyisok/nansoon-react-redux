import React from 'react';
import PropTypes from 'prop-types';

export default class ThemeSwitch extends React.Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    };

    // dispatch action 去改变颜色
    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
                <div>
                    <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                    <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
                </div>
        )
    }
}

