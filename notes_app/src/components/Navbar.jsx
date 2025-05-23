import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <header className="flex px-6 py-4 gap-4 border-b-2 border-indigo-200 ">
                <div className="w-[50px] h-[50px]">
                    <img src={logo} alt="" className="w-full h-full" />
                </div>
                <h1 className="text-4xl text-indigo-800 font-bold">SuperNote</h1>
            </header>
        </>
    )
}
export default Navbar