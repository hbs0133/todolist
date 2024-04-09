import React, { useState, useRef } from 'react'


const Editor = ({onCreate}) => {
  const [content, setContent] = useState("")
  const inputRef = useRef();
  const onChangeInput = (e) => {
    setContent(e.target.value)
  }
const onPlus = () => {
  if(!content){
    inputRef.current.focus();
    return
  }
  onCreate(content)
  setContent("")
}
const onkeydown = (e) => {
  if(e.keyCode == 13){
    onPlus();
  }
}
  return (
    <div className='editor'>
      <div className='title'>
        <h3>- 새 할 일 추가 🖍</h3>
      </div>
      <div className='editor_Input'>
        <input ref={inputRef} onKeyDown={onkeydown} value={content} onChange={onChangeInput} placeholder='오늘 할일' />
        <button onClick={onPlus} >+</button>
      </div>
    </div>
  )
}

export default Editor
