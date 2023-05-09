import React, { HTMLAttributes } from 'react'

function GreenHighlight(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className={`font-bold text-custom-green ${props.className}`}/>
  )
}

export default GreenHighlight