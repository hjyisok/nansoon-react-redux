import {combineReducers} from 'redux';
 const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    };
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        default:
            return state
    }
};

 const contentReducer = (state, action) => {
    if (!state) return {
        context: ''
    };
    switch (action.type) {
        case 'CHANGE_CONTENT':
            return {...state, context: action.context};
        default:
            return state
    }
};

const Reducers=combineReducers({themeReducer,contentReducer});
export default Reducers
