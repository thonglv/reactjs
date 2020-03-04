import * as types  from '../actions/types';

const initState = [];

export default (state = initState , action) => {
    console.log("REDUCER", action);
    switch(action.type) {
        case types.GET: 
            return state;
        case types.ADD:
            console.log("1111", action);
            return [...state, {
                text: action.data.text,
                time: action.data.time
            }];
        default: 
           
    }
    console.log("REDUCER", action);

    return state;
}