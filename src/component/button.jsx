import React from 'react'

const Button = ({name , color="blue"
}) => {
    const colors = {
    blue: "bg-blue-400 hover:bg-blue-700",
    red: "bg-red-400 hover:bg-red-700",
    green: "bg-green-400 hover:bg-green-700",
    cyan: "bg-cyan-400 hover:bg-cyan-700",
    gray: "bg-gray-600 hover:bg-gray-700",
  };

  return (
    <div>
      <button className={`${colors[color]} text-white px-4 py-2 rounded`}>{name}</button>
    </div>
  )
}

export default Button
