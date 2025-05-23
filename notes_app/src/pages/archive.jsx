import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { notesContext } from "../context/notes-context";
import { Card } from "../components/Card";

const Archive=()=>{
    const {notes}=useContext(notesContext);
    let archived=notes.filter((note)=>note.isArchived===true && note.bin===false);
    return (
        <>
           <Navbar/>
           <main className="flex">
              <SideBar/>
              <section className="flex flex-col gap-[30px] p-10 ">
                    <h1 className="text-4xl font-serif text-indigo-800 mt-4 ml-4">Archived Notes:</h1>
                    <section className="p-4 flex gap-10">
                        {
                            archived.length > 0
                                ? (archived.map((note) => (<Card note={note} />)))
                                : (<h2 className="text-3xl capitalize text-amber-300">no archived notes for now</h2>)
                        }
                    </section>
              </section>
           </main>
        </>
    )
}

export default Archive