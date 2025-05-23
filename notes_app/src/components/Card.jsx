import React, { useContext } from "react"
import { notesContext } from "../context/notes-context"
export const Card = ({ title, text, id ,isPinned}) => {

    const { dispatch }=useContext(notesContext);

    const markPinned=(id)=>{
       dispatch({
        type:'pin',
        payload:id
      })
    }

    return (
        <>
            <div key={id}  className="p-3 bg-white w-56 h-max rounded-xl hover:shadow-xl group cursor-pointer border border-neutral-400" >
                <div className="flex justify-between">
                    <p className="capitalize">{title}</p>
                    <span className="material-symbols-outlined invisible group-hover:visible" onClick={()=>markPinned(id)}>push_pin</span>
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="mt-2">
                    <p className="capitalize">{text}</p>
                    <div className=" flex justify-end gap-3 mt-4 invisible group-hover:visible ">
                        <button className="cursor-pointer" >
                            <span className="material-symbols-outlined">archive</span>
                        </button>
                        <button className="cursor-pointer">
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}