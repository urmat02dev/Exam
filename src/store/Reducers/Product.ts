

interface IProduct{
    products:any[]
}

const initialState:IProduct ={
    products:[],
}


enum ActionTypes{
    GET_PRODUCT="GET_PRODUCT"
}
interface ActionProduct{
    products:any[]
}

interface IProducAction{
    type:ActionTypes.GET_PRODUCT
    products:any[]
}

export const MainReducer = (state = initialState, action:IProducAction):IProduct => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT:
            // return {...state, products: action.payload}
        default :
            return state
    }
}