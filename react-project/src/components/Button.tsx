import React from 'react'

interface Props{
    color?:"primary" |"secondary" |"danger";
    children:string;
    onClick: () => void;
}

function Button({children, onClick, color}:Props) {
  return (
    <button className={"btn btn-"+color} onClick={onClick} >{children}</button>
  )
}

export default Button