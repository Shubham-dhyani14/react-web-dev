import React, { useRef, useState } from 'react'
import { img_bg_home } from '../constants'
import formValidation from '../utils/authValidation'
import {auth , createUserWithEmailAndPassword } from "firebase/auth";
export default function Signup() {
  const [isLogInForm , setisLogInForm] = useState(false) ;
  const [errorMessage , setErrorMessage] = useState(null) ;
  const userMail = useRef() ;
  const userPassword = useRef() ;

  function handleAuth(){
    const validationError = formValidation(userMail.current.value, userPassword.current.value) ;
    setErrorMessage(validationError) ;
    // createUserWithEmailAndPassword(auth, userMail.current.value, userPassword.current.value)
    // .then((userCredential) => {
    //   // Signed up 
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   setErrorMessage(`${errorCode} : ${errorMessage}`) ;
    //   // ..
    // });

  }

  return (
    <>
      <div className='w-full h-max min-h-screen relative flex justify-center '>
        <img src={img_bg_home} alt="" className='w-full h-full absolute top-0  object-cover ' />
        {/* overlay */}
        <div className={`w-full h-full absolute top-0   bg-gradient-to-b from-gray-950/90 via-gray-950/50  to-gray-950/80`}></div>
        {/* sign-up cont */}
        <div className='h-max start-1 mt-36 mb-28 w-5/6 md:w-6/12 lg:w-4/12 rounded-md  md:top-1/4 px-8 py-4 md:px-16 md:py-16 bg-gray-950/70 z-20 text-white flex flex-col justify-center gap-6 '> 
            <h1 className='text-3xl text-gray-300 font-semibold mb-4'>{isLogInForm ? 'Sign In': 'Join NotFlix' }</h1>
            <input ref={userMail} type="text" placeholder='Email' className='w-full h-10 px-4 bg-slate-600 text-gray-200 outline-none focus:ring-2 focus:ring-blue-300 rounded-md'/>
            <input ref={userPassword} type="text" placeholder='Password' className='w-full h-10 px-4 bg-slate-600 text-gray-200 outline-none focus:ring-2 focus:ring-blue-300 rounded-md'/>
            {/* error msg */}
            {errorMessage && <div className='-my-4 text-red-500'>{errorMessage}</div>}
            {/* submit */}
            <button onClick={()=>handleAuth()} className='w-full h-10 px-4 bg-red-600 focus:ring-2 focus:ring-red-400 font-semibold text-gray-200 outline-none rounded-md mt-4'>{isLogInForm ? 'Log In':'Sign Up'}</button>

          <p className='text-slate-500 text-sm -mt-4'>Dhyani Bhai</p>
          <p> <span className='text-gray-400'> {isLogInForm ? 'New to NotFlix?' : 'Already have an account?'}</span> <span onClick={()=>setisLogInForm(!isLogInForm)} className="cursor-pointer underline hover:no-underline">{isLogInForm ? 'create an account' : 'Log In'}</span></p>
        </div>

      </div>
    </>
    
  )
}
