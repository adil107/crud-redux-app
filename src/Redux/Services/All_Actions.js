import {Submit,Delete,update} from "./ActionType"


export const Submit_Action =(data,D_key)=>{
    return{
        type:Submit,
        payload:data,
        key:D_key
    }
}

export const Delete_Action =(key)=>{
    return{
        type:Delete, 
        id:key
    }
}

export const Update_Action =(updateValue,id)=>{
    // console.log(updateValue,id);
    return{
        type:update,
        payload:{updateValue,id},
    }
}