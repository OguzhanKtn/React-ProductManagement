import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Admin } from './model/Admin'

function Control(props:{item:JSX.Element}) {

 const stSession = sessionStorage.getItem('admin')

 var admin:Admin

 if(stSession !== null){
   admin = JSON.parse(stSession) as Admin
 }
  return (
    <>
    {
        stSession === null
        ?
        <Navigate to='/' replace />
        :
        <>
        <Navbar admin={admin!} />
        {props.item}
        </>
    }
    
    </>
  )
}

export default Control