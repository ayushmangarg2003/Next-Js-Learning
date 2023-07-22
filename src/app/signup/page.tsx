"use client";
import Link from "next/link";
import React from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user , setUser] = React.useState({
        email : "",
        password : "",
        username : ""
    });

    const onSignUp = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-10">Register</h1>

            <label htmlFor="username" className="w-4/5 md:w-1/2 content-start xl:w-1/3">Username</label>
            <input 
            className="mb-5 mt-2 w-4/5 md:w-1/2 p-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-800 xl:w-1/3"
            type="text" 
            id="username" 
            value={user.username}
            onChange={(e)=>setUser({...user , username:e.target.value})}
            placeholder="Username"
            />

            <label htmlFor="email" className="w-4/5 md:w-1/2 content-start xl:w-1/3">Email</label>
            <input 
            className="mb-5 mt-2 w-4/5 md:w-1/2 p-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-800 xl:w-1/3"
            type="email" 
            id="email" 
            value={user.email}
            onChange={(e)=>setUser({...user , email:e.target.value})}
            placeholder="abc@example.com"
            />

            <label htmlFor="password" className="w-4/5 md:w-1/2 content-start xl:w-1/3">Password</label>
            <input 
            className="mb-5 mt-2 w-4/5 md:w-1/2 p-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-800 xl:w-1/3"
            type="password" 
            id="password" 
            value={user.password}
            onChange={(e)=>setUser({...user , password:e.target.value})}
            placeholder="Password"
            />

            <button 
            onClick={onSignUp}
            className="mb-3 mt-2 w-4/5 md:w-1/2 p-2 font-semibold border border-gray=400 rounded-sm focus:outline-none focus:border-gray-800 xl:w-1/3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
                Register
            </button>
            <Link href='/login' className="text-gray-200 text-sm">Have an Account? 
            <span className="text-white text-md font-semibold underline"> Login</span></Link>
        </div>
    )
};
