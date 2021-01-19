import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { Submit_Action, Delete_Action ,Update_Action} from "../Redux/Services/All_Actions";

function Todos() {
    const [UpdateForm, setUpdateForm] = useState("hidden")
    const [SubmitFrom, setSubmitFrom] = useState("visible")

    const dispatch = useDispatch()
    const state = useSelector(state => state.SubmitReduser.Todo)


    const [updateInpVal, setUpDateInpVal] = useState("")
    const [InpVal, setInpval] = useState("")

    const [D_key, setD_Key] = useState(1)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (InpVal !== "") {
            dispatch(Submit_Action(InpVal, D_key))
            setInpval("")
            setD_Key(D_key + 1)
        }
        else { alert("enter todos") }
    }

    if (state.length) {
        var res = state.sort((a,b)=> a.key - b.key).map((obj, index) => {
            return (
                <tr className="text-center" key={index}>
                    <th scope="row">{obj.key}</th>
                    <td>{obj.data}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => dispatch(Delete_Action(obj.key))}><DeleteIcon /></button>
                        <button className="btn btn-info ml-2" onClick={() => {
                            handleEdit(obj.key)
                        }}><LoyaltyIcon /></button>
                    </td>
                </tr>
            )
        })
    }

    const [EditIndex, setEditIndex] = useState(null)
    const handleEdit = (keyEdit) => {
        var {data,key:id} = state.find(elem => elem.key === keyEdit );
        setEditIndex(id)
        setUpDateInpVal(data)
        setSubmitFrom("hidden")
        setUpdateForm("visible")
        // console.log(data,id);
        // console.log(key);
        // let getVal = state.id
        // console.log(getVal);
        // console.log(todo);
        // // var getVal = todo.
        // // console.log(getVal);
        // return {id:todo.key,todo:todo.data}
        


    }

    const handleUpdate = (e) => {
        e.preventDefault()
        
        dispatch(Update_Action(updateInpVal,EditIndex))
        setSubmitFrom("visible")
        setUpdateForm("hidden")
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-info text-center">React Crud App</h1>
                <div className="position-relative">

                    <form onSubmit={handleUpdate} className=" d-flex align-items-center position-absolute" style={{ visibility: UpdateForm }} >
                        <input type="text" placeholder="Enter Todos " className=" border shadow py-2 pl-3" value={updateInpVal} onChange={(e) => {
                            setUpDateInpVal(e.target.value)
                        }}/>
                        <button className="btn btn-info ml-2"  >Update</button>
                    </form>

                    <form onSubmit={handleSubmit} className=" d-flex align-items-center"
                        style={{ visibility: SubmitFrom }}>
                        <input type="text" placeholder="Enter Todos " className=" border shadow py-2 pl-3" value={InpVal} onChange={(e) => {
                            setInpval(e.target.value)
                        }} />
                        <button className="btn btn-info ml-2" >Add</button>
                    </form>

                </div>

                <div className="mt-5" >
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr className=" text-center" >
                                <th scope="col">#</th>
                                <th scope="col">ToDos</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Todos
