import React from 'react'

const Item = ({id, isDone, content, createdDate, onUpdate, onDelete}) => {
  const onChangeCheckBox = () => {
    onUpdate(id)
  }
  const onClickBtn = () => {
    onDelete(id)
  }
  return (
      <div className='item'>
        <div className='checkbox'>
          <input onChange={onChangeCheckBox} type='checkbox' checked={isDone}></input>
        </div>
        <div className='title'>
          {content}
        </div>
        <div className='date'>
          {new Date(createdDate).toDateString()}
        </div>
        <div onClick={onClickBtn} className='deleteBtn'><button>-</button></div>
    </div>
  )
}

export default Item
