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
            notes:[...state.notes,{title:state.title,text:state.text,id:uuid(),isPinned:false}],
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
      default:
       return state;
   }
}

export default noteReducer