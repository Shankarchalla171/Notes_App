import { useContext, createContext, useReducer, useEffect } from "react";
import noteReducer from "../reducer/note-reducr";

export const notesContext = createContext();
function getinitialState(){
    const storedstate=localStorage.getItem("state");
    return storedstate? JSON.parse(storedstate):{ title: "", text: "", notes: [] };
}
const NotesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(noteReducer, getinitialState());

    useEffect(()=>{
       localStorage.setItem('state',JSON.stringify(state));
    },[state])
   return (
    
    < notesContext.Provider value={{...state,dispatch}}>
        {children}
    </notesContext.Provider>
   )
}

// export const useNotes=()=>useContext(notesContext);
export default NotesProvider
