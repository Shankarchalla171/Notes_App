import { useContext, createContext, useReducer } from "react";
import noteReducer from "../reducer/note-reducr";
 export const notesContext = createContext();

const NotesProvider = ({ children }) => {
    const [{ title, text, notes }, dispatch] = useReducer(noteReducer, { title: "", text: "", notes: [] });
   return (
    
    < notesContext.Provider value={{title,text,notes,dispatch}}>
        {children}
    </notesContext.Provider>
   )
}

// export const useNotes=()=>useContext(notesContext);
export default NotesProvider
