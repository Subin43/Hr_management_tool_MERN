import React, { ReactNode } from 'react'
interface ButtonProps {
    className ?: string;
    onClick ?: (e : React.MouseEvent<HTMLButtonElement>) => void;
    children ?: ReactNode;
}

const Button:React.FC<ButtonProps> = ({children,className,onClick}) => {
  return (
    <button  
       className={className}
       onClick={onClick}   >
        {children}
    </button>
  )
}

export default Button