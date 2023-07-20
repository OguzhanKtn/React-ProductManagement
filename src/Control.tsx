import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Admin } from './model/Admin'
import { decrypt } from './util'

function Control(props:{item:JSX.Element}) {

  const navigate = useNavigate()
 const stSession = sessionStorage.getItem('admin')

 var admin:Admin

 if(stSession !== null){
  try {
   const plainText = decrypt(stSession)
   admin = JSON.parse(plainText) as Admin
  } catch (error) {
    sessionStorage.removeItem('admin')
    navigate('/')
  }
  
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