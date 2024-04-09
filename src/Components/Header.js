import React from 'react'



const Header = () => {
  return (
    <div className='header'>
      <div className='title'>오늘 할 일</div>
      <div className='date'>{new Date().toLocaleDateString()}</div>
    </div>
  )
}

export default Header
