import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'warning';  //? means optional prop... | chains possible values - can be used for error checking if an invalid value set by comparing to list of allowed values
    onClick: () => void;
}
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button