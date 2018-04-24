import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from '../components/Content';


const mapStateToProps = (state) => {
    return {
        themeColor: state.themeReducer.themeColor
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Content);

