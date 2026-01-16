import React from 'react'

const Button = (name) => {
  return (
    <div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-transparent'>{name}</button>
    </div>
  )
}

export default Button
