"use client"
import {Navbar,Footer,Copyright} from "../components/index";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Admin() {
  const router = useRouter();
  const [user, setUserData] = useState({
     username: "",
      password: "",
  });

  function handleSubmit(e){
      e.preventDefault();
      alert(user.username);
      alert(user.password);
  }
    return (
        <> 
         
            <Navbar/>
              <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-white">
        <div className="w-[350px] bg-gray-200 shadow-lg p-8 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
              <img rel="icon" type="image/x-icon" src="favicon.ico" alt="Inspec Logo" className="w-8 h-8" />
            </div>
          </div>

          {/* Inputs */}
          <form onSubmit={handleSubmit} className="space-y-6">
          <input
            className="w-full p-2 mb-3 border border-gray-300"
            id="username"
            type="text"
            value={user.username}
            placeholder="Username"
            onChange={(e)=> setUserData({user,username : e.target.value})}
          />

          <input
            className="w-full p-2 mb-4 border border-gray-300"
            id="password"
             type="password"
             value={user.password}
            placeholder="Password"
            onChange={(e)=> setUserData({user,password : e.target.value})}

          />

          {/* Login Button */}
          <button className="w-full bg-black text-white py-2 hover:bg-gray-800"
          type="submit"
          >
            Login
          </button>
          </form>

          {/* Forgot Password */}
          <p className="text-sm mt-3 cursor-pointer hover:underline">
            Forget Password?
          </p>

          {/* Info */}
          <p className="text-xs mt-4 text-gray-700">
            If you don't have an existing account please contact the dev team
            with your credentials
          </p>

          {/* Sign In */}
          <button className="w-full bg-black text-white py-2 mt-4 hover:bg-gray-800">
            Sign In
          </button>
        </div>
      </main>

            <Footer/>
            <Copyright/>
        </>
    );
}