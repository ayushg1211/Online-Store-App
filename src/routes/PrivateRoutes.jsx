import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    let uid = localStorage.getItem("userid") ;

  return (
    <React.Fragment>
        {uid ? <React.Fragment>{children}</React.Fragment> : <Navigate to={"/"}/>}
    </React.Fragment>
  )
}

export default PrivateRoutes