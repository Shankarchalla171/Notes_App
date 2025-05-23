import {v4 as uuid} from 'uuid'

function noteReducer(state,action){
   switch(action.type){
      case 'TITLE':{
        return {...state,title:action.payload};
      }
      break;
      case 'TEXT':{
        return {...state,text:action.payload};
      }
      break;
      case 'add':{
        return {
            ...state,
            notes:[...state.notes,{title:state.title,text:state.text,id:uuid(),isPinned:false,isArchived:false,bin:false}],
            title:"",
            text:''
        };
      }
      break
      case 'pin':{
         return {
            ...state,
            notes:state.notes.map((note)=>note.id===action.payload ?{...note,isPinned:!note.isPinned}:note),
         }
      }
      case "archive":{
         return {
            ...state,
            notes:state.notes.map((note)=>note.id===action.payload?{...note,isArchived:!note.isArchived}:note),
         }
      }
      case "delete":{
         return {
            ...state,
            notes:state.notes.map((note)=>note.id===action.payload?{...note,bin:!note.bin,isPinned:false,isArchived:false}:note)
         }
      }
      case "remove":{
         return {
            ...state,
            notes:state.notes.filter((note)=>note.id !== action.payload),
         }
      }
      default:
      
       return state;
   }
}

export default noteReducer