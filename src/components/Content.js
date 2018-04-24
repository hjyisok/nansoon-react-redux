import React from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch'

export default class Content extends React.Component {
    static propTypes = {
        ThemeColor: PropTypes.string
    };
    render() {
        return (
                <div>
                    <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                    <ThemeSwitch {...this.props} />
                </div>
        )
    }
}
