import React from 'react'

const Header = ({title}) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <div>{title}</div>
      <div>welcome back client</div>
    </div>
  )
}

export default Header