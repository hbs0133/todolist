import './App.css';
import Header from './Components/Header';
import Editor from './Components/Editor';
import List from './Components/List';
import Bg from './Components/Bg';
import { useReducer, useRef } from 'react';

const mockList = [
  {
    id: 0,
    isDone : false,
    content : "오늘 복습 하기",
    createdDate : new Date().getTime(),
  },
  {
    id: 1,
    isDone : false,
    content : "방 청소 하기",
    createdDate : new Date().getTime(),
  },
  {
    id: 2,
    isDone : false,
    content : "운동 하기",
    createdDate : new Date().getTime(),
  },
  {
    id: 3,
    isDone : false,
    content : "아이스크림 사기",
    createdDate : new Date().getTime(),
  },
]

  const reducer = (state, action) => {
    switch(action.type){
      case "CREATE" :
        return [action.newItem, ...state]
      case "UPDATE" :
        return state.map((it) => it.id === action.targetId ? {...it, isDone : !it.isDone} : it)
      case "DELETE" :
        return state.filter((it) => it.id !== action.targetId)
      default :
      return state
    }

    return state
  }

function App() {
  const [todo, dispatch] = useReducer(reducer, mockList)
  const idRef = useRef(3)
  const onCreate = (content) => {
    dispatch({type: "CREATE", newItem : {
      id : idRef.current,
      content,
      isDone :false,
      createdDate : new Date().getTime()
    }})
  }
  const onUpdate = (targetId) => {
    dispatch({type: "UPDATE", targetId})
  }
  const onDelete = (targetId) => {
    dispatch({type:"DELETE", targetId})
  }
  return (
    <div className='App'>
      <Bg />
      <div className='container'>
        <Header />
        <Editor onCreate = {onCreate} />
        <List onDelete = {onDelete} onUpdate={onUpdate} todo={todo}/>
      </div>
    </div>
  );
}

export default App;
