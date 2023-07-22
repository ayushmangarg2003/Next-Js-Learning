"use client";
import Link from "next/link";
import React from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const [user , setUser] = React.useState({
        email : "",
        password : "",
    });

    const onLogin = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-10">Login</h1>

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
            onClick={onLogin}
            className="mb-3 mt-2 w-4/5 md:w-1/2 p-2 font-semibold border border-gray=400 rounded-sm focus:outline-none focus:border-gray-800 xl:w-1/3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
                Login
            </button>
            <Link href='/signup' className="text-gray-200 text-sm">New here? 
            <span className="text-white text-md font-semibold underline"> Register</span></Link>
        </div>
    )
};
