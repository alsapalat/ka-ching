import * as c from './Constants';


export const isLoading = (is_loading) => ({
    type: c.COMMON_IS_LOADING,
    is_loading
})

export const errorResponse = (error) => ({
    type: c.COMMON_ERROR,
    error
})

/* eslint-disable */
export const getFirstMessage = (data) => {
    let firstMessage = '';
    let x = 0;
    
    Object.keys(data).map(i => {
        if(x===0){
            firstMessage = data[i];
        }
        x++;
    });
    return firstMessage; 
}