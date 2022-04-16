import React, { useEffect, useState } from 'react'
import pbsTwing from './pbsTwing.PNG'
import './navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const transitionNav = () => {
        if(window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNav);
        return () => {
            window.removeEventListener("scroll",transitionNav);
        }
    }, [])
    return (
        <>
            <div className={`nav fixed top-0 p-3 w-full h-16 z-10 ${show && "bg-black"}`}>
                <div className="nav_contents flex justify-between bg-black">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Logo" className="nav_logo w-32 cursor-pointer pl-5 py-2 fixed left-0 object-contain" />

                    <img src={pbsTwing} alt="pbsTwing" className="nav_avatar w-7 h-7 cursor-pointer fixed right-5" />
                </div>
            </div>
        </>
    )
}

export default Navbar
