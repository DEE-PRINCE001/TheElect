import React from 'react'

const TagBox = ({ icon, bcolor, size, iconsize }) => {
  return (
    <div className={`${bcolor || 'bg-primary'} rounded-xl ${size || 'h-10 w-10'}  flex items-center justify-center`}>
        {icon && <img src={icon} alt="i" className={`${iconsize || 'h-5.5 w-5.5'}`}  />}
    </div>
  )
}

export default TagBox