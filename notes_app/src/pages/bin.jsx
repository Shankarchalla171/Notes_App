import React, { useContext } from "react";
import { notesContext } from "../context/notes-context";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Card } from "../components/Card";

const Bin=()=>{
    const {notes}=useContext(notesContext)

    let bin=notes.filter((note)=>note.bin===true);
    return (
        <>
         <Navbar/>
         <main className="flex">
            <SideBar/>
             <section className="flex p-[40px] gap-[30px]">
                {
                  bin.length>0
                  ?(bin.map((note)=>(<Card note={note}/>)))
                  :(<h2>the bin is empty</h2>)
                }
             </section>
         </main>
        </>
    )
}

export default Bin