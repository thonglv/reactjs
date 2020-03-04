import * as types  from './types';

export const getData = () =>  {
    console.log("GET");
    return {
        type: types.GET
    }
}
export function addData(data) {
    console.log('ADD DATA', data);
    return {
        type: types.ADD,
        data
    }
}