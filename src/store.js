import { createStore, applyMiddleware } from 'redux';
import * as actions from './actions';
import thunk from 'redux-thunk';

const initialState = {
    count: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT_COUNT:
           return {
               ...state,
               count: action.payload,
           } 
        default: 
        return state;
    }
};

export default createStore(rootReducer, applyMiddleware(thunk));