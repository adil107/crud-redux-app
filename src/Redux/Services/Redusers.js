import { Submit, Delete, update } from "./ActionType"

const initSate = {
    Todo: []
}
export const SubmitReduser = (state = initSate, action) => {
    switch (action.type) {
        case Submit: return {
            ...state,
            Todo: [...state.Todo, { data: action.payload, key: action.key }]
        }
        case Delete: return {
            ...state,
            Todo: state.Todo.filter(obj => obj.key !== action.id)
        }
        case update:
            const {updateValue,id}=action.payload
            var updatetodo = state.Todo.find(ele=>ele.key===id)
            // updatetodo=updatetodo.data
            // updatetodo=updateValue
            // console.log(updatetodo);
            if (updatetodo) {
                const newArr = state.Todo.filter(elem => elem.key !== id)
                return {...state,Todo:[...newArr,{...updatetodo,data:updateValue}]}
            }
            return state
        // state.Todo[action.payload]=action.UpdateVal
        // console.log(a);
        // return{
        //     ...state,
        //     Todo:state.Todo
        // }
    
        default: return state
    }

}