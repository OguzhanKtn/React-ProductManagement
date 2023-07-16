import React, { FormEvent, useState } from 'react'
import { login } from '../service'
import { useNavigate } from 'react-router-dom'
import { Admin } from '../model/Admin'
import { request } from 'http'

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')

    const [obj, setObj] = useState<Admin>(Object)

    const sendForm = (evt:FormEvent) =>{
        evt.preventDefault()
        login(username,password).then(res=>{   
            setObj(res.data)
            console.log(obj.username)
            sessionStorage.setItem('admin',obj.username)
            navigate('/home')
        }).catch(err=>{
            alert("Username or Password Fail")
        })
    }

  return (
    <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <h2>Admin Login</h2>
            <form onSubmit={sendForm}>
            <div className="mt-3">
                <input value={username} required onChange={(evt) => setUsername(evt.target.value)} className='form-control' type='text' placeholder='username' />
            </div>
            <div className="mt-3">
                <input value={password} required onChange={(evt) => setPassword(evt.target.value)} className='form-control' type='password' placeholder='password' />
            </div>
            <button className='btn btn-danger mt-3'>Send</button>
            </form>     
        </div>
        <div className="col-sm-4"></div>
    </div>
  )
}

export default Login