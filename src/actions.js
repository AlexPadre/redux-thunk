import { incrementCount } from './countService';

export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const INCREMENT_COUNT_START = "INCREMENT_COUNT_START";
export const INCREMENT_COUNT_ERROR = "INCREMENT_COUNT_ERROR";

export const incrementCountAction = () => async (dispatch, getState) => {
    console.log(getState());
    dispatch({ 
        type: INCREMENT_COUNT_START
     })
     try {
         const newCount = await incrementCount();
         dispatch({
             type: INCREMENT_COUNT,
             payload: newCount
         })
     }
    catch(e) {
        dispatch({
            type: INCREMENT_COUNT_ERROR
        })
    }
};

