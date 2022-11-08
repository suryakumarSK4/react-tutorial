import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'

export const addToCart = (item) => { 
    // console.log("Action component: \n",item)
    return {
        type:ADD_TO_CART,
        data:item
    }
}

export const removeToCart= () => { 
    // console.log("Action component remove");

    return {
        type:REMOVE_TO_CART,
    }
}