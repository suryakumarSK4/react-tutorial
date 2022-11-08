// Reducer get data from the "action" 
//  push the data to store


import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'
const initialState = {
    cartData:[]
}
export default function cartitems(state=[],action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            // console.warn("Reducer component: \n",action)
            return [
                ...state,
                {cartData:action.data}
            ]
        case REMOVE_TO_CART:
            // console.warn("Reducer component: \n",action)
            state.pop();
            return [
                ...state,
            ]
        default:
            return state
    }
}

// export default cartitems;
 









