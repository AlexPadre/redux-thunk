import { createStore, applyMiddleware } from 'redux';
import * as actions from './actions';
import thunk from 'redux-thunk';

const initialState = {
    count: 0,
    loading: false,
    error: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT_COUNT:
           return {
               ...state,
               count: action.payload,
               loading: false
           } 
        case actions.INCREMENT_COUNT_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actions.INCREMENT_COUNT_ERROR: 
        return {
            ...state,
            loading: false,
            error: true
        }
        default: 
        return state;
    }
};

export default createStore(rootReducer, applyMiddleware(thunk));