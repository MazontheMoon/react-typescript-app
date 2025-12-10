import { ReactNode } from "react";
//rafce

interface Props {
    children: ReactNode;  //need to use ReactNode instead of string to pass html  
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  )
}
 
export default Alert