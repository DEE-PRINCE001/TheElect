import React from 'react'

const Badge = ({ text, children, bg = 'bg-container text-white', otherStyles = '' }) => {
  const content = text || children

  return (
    <span
      className={`inline-block text-xs font-bold px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-xs ${bg} ${otherStyles}`}
    >
      {content}
    </span>
  )
}

export default Badge
