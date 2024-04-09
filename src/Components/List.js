import React, { useMemo, useState } from 'react'
import Item from './Item'
import Item_info from './Item_info'

const List = ({todo, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("")
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
  }
  const analyzeTodo = useMemo(() => {
    // console.log("함수호출");
    const totalTodo = todo.length
    const doneTodo = todo.filter((it) => it.isDone == true).length
    const notDoneTodo = totalTodo - doneTodo
    return {
      totalTodo,
      doneTodo,
      notDoneTodo
    }
    }, [todo])
  const {totalTodo, doneTodo, notDoneTodo} = analyzeTodo;
  return (

    <div className='list'>
      <h3> - 할 일 목록 ✔</h3>
      <div className='searchBar'>
        <input onChange={onChangeSearch} value={search} placeholder='검색어를 입력하세요'/>
      </div>
      <div className='list_wrapper'>
        <Item_info  totalTodo={totalTodo} doneTodo={doneTodo} notDoneTodo ={notDoneTodo} />
        {getSearchResult().map((it) => (
          <Item onDelete={onDelete} onUpdate={onUpdate} ket = {it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default List
