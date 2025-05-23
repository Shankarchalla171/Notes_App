import React, { useContext } from "react";
import Navbar from '../components/Navbar'
import SideBar from "../components/SideBar"
import { Card } from "../components/Card";
import { notesContext } from "../context/notes-context";
const Home = () => {
    const { title, text, notes, dispatch } = useContext(notesContext);

    const onTitleChange = (e) => {
        dispatch({
            type: "TITLE",
            payload: e.target.value,
        })
    }
    const onTextChange = (e) => {
        dispatch({
            type: "TEXT",
            payload: e.target.value
        })
    }

    const onButttonClick = () => {
        dispatch({ type: "add" })
    }
    console.log(notes);
    const Pinned = notes.filter((note) => note.isPinned === true && note.isArchived===false);
    const Other = notes.filter((note) => note.isPinned === false && note.isArchived===false);
    console.log(`pinned:` ,Pinned)
    console.log(`other:`, Other);
    return (
        <>
            <Navbar />
            <main className="flex">
                <SideBar />
                <section className="w-[100%] bg-amber-200">
                    <section className=" flex justify-center h-[30%] mt-6">
                        <div className="flex flex-col bg-red-50 w-[30%]  p-3 h-[100%] relative rounded-2xl">
                            <input type="text" onChange={onTitleChange} value={title} placeholder="Enter Title" className="h-[20%] focus:outline-none capitalize" />
                            <textarea name="todo" onChange={onTextChange} value={text} id="todo" className="mt-3 focus:outline-none h-[80%]" placeholder="Enter Note"></textarea>
                            <button onClick={onButttonClick} className="absolute bottom-[-10px] right-[-15px]"><span className="material-symbols-outlined p-2 bg-green-200 rounded-full" >
                                add
                            </span></button>
                        </div>
                    </section>
                    <section className="mt-14">
                        {Pinned.length > 0 &&
                            <>
                                <h2 className="ml-4">Pinned Notes:</h2>
                                <section className="flex gap-[30px] p-3">
                                    {
                                         Pinned.map((note) => (
                                            <Card note={note} />
                                        ))
                                    }
                                </section>
                            </>
                        }
                        <section className="mt-3">
                            {Pinned.length > 0 && <h2 className="ml-4">Other Notes:</h2>}
                            <section className="flex gap-[30px] p-3">
                                {
                                    Other.map((note) => (
                                        <Card note={note}/>
                                    ))
                                }
                            </section>
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
}
export default Home