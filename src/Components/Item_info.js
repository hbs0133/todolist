import React from 'react'

const Item_info = ({totalTodo, doneTodo, notDoneTodo}) => {
  return (
    <>
      <div className='item_info'>
        <div className='item_info_check'>완료 여부</div>
        <div className='item_info_title'>할일</div>
        <div className='item_info_date'>날짜</div>
        <div></div>
      </div>
      <div className='doneTodoNum'>
        <span>
          할 일 :  {totalTodo} / 
          완료한 일 : <span className='doneTodo'>{doneTodo}</span> / 
          남은 할 일 : <span className='restTodo'>{notDoneTodo}</span> 
          </span>
      </div>
    </>
  )
}

export default Item_info
