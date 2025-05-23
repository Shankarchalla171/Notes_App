import React, { useContext } from "react"
import { notesContext } from "../context/notes-context"
export const Card = ({ note: { title, text, id, isPinned, isArchived, bin } }) => {

    const { dispatch } = useContext(notesContext);

    const markPinned = (id) => {
        dispatch({
            type: 'pin',
            payload: id
        })
    }

    const markArchive = (id) => {
        dispatch({ type: "archive", payload: id })
    }

    const toBin = (id) => {
        dispatch({ type: "delete", payload: id })
    }

    const remove=(id)=>{
        dispatch({type:"remove",payload:id})
    }
    return (
        <>
            <div key={id} className="p-3 bg-white w-56 h-max rounded-xl hover:shadow-xl group cursor-pointer border border-neutral-400 flex-wrap" >
                <div className="flex justify-between">
                    <p className="capitalize">{title}</p>
                    <span className={(isArchived || bin) ? 'hidden' : "material-symbols-outlined"} onClick={() => markPinned(id)}>{isPinned ? "keep_off" : "keep"}</span>
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="mt-2">
                    <p className="capitalize">{text}</p>
                    <div className=" flex justify-end gap-3 mt-4  ">
                        <button className={(isPinned || bin) ? 'hidden' : "material-symbols-outlined"} onClick={() => markArchive(id)}>
                            <span className="material-symbols-outlined">{isArchived ? "unarchive" : "archive"}</span>
                        </button>
                        <button className="cursor-pointer" onClick={() => toBin(id)}>
                            <span className="material-symbols-outlined">{bin ? 'restore_from_trash' : 'delete'}</span>
                        </button>
                        <button className={bin?'cursor-pointer':'hidden'} onClick={()=>remove(id)}>
                            <span class="material-symbols-outlined">delete_forever</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}