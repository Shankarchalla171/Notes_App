import React from "react";
import {NavLink} from 'react-router-dom'
const SideBar = () => {
    const getStyles=({isActive})=>{
        
        const style="flex items-center gap-2 px-2 py-1 rounded-br-full rounded-tr-full"

        return isActive?`bg-indigo-800 text-slate-50 ${style}`:`hover:bg-indigo-800 hover:text-slate-50 ${style}`
        
    }
    return (
        <>
         
            <aside className="flex flex-col w-[13%] h-screen align-middle border-r-2 border-indigo-200 px-3 py-7 gap-3 " >

                <NavLink className={getStyles} to='/'>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    <span>Home</span>
                </NavLink>
                <NavLink className={getStyles} to='/archive'>
                    <span className="material-symbols-outlined">
                        archive
                    </span>
                    <span>Archive</span>
                </NavLink>
                <NavLink className={getStyles} to='/important'>
                    <span className="material-symbols-outlined">
                        label_important
                    </span>
                    <span>Important</span>
                </NavLink>
                <NavLink className={getStyles} to='/bin'>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                    <span>Bin</span>
                </NavLink>


            </aside>
        </>
    )
}

export default SideBar