import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate=useNavigate()


    const{id}=useParams()


    const [user, setUser]=useState({
        username:"",
        password:"",
        email:""
    })

    const {username,password,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    
    useEffect(()=>{
        loadUser()
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    };
    
    const loadUser=async() =>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return<div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rouded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Edit User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Username
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your username'
                name="username"
                value={username}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Password' className='form-label'>
                    Password
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your password'
                name="password"
                value={password}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your email'
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type='submit' className='btn btn-outlint-primary'>
                Submit
            </button>
            <Link  className='btn btn-outlint-danger mx-2' to="/">
                Cancel
            </Link>
            </form>
        </div>
    </div>
  </div>
}
