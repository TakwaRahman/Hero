import React from 'react';
import Hero from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink, useLocation } from 'react-router';


const Navbar = () => {


    const location = useLocation();

    const isAppsActive = location.pathname.startsWith("/apps");

    return (
        <div className=''>

            <div className='flex justify-center items-center gap-130 pt-5 pb-3'>
                <div>
                    <Link to='/'><h1 className='flex items-center gap-2'> <img className='w-10' src={Hero} alt="" /> <span className='font-semibold bg-linear-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>HERO.IO</span></h1> </Link>
                </div>

                <div className='hidden md:flex'>
                    <ul className='flex gap-5 font-semibold'>
                        <NavLink to="/" end className={({ isActive }) => isActive ? "bg-linear-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent" : ""}><li>Home</li></NavLink>

                        <NavLink to='/apps' className={isAppsActive ? "bg-linear-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent" : ""}>Apps</NavLink>

                        <li><a href="">installation</a></li>
                    </ul>
                </div>

                <div>
                    <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white"><FaGithub />

                        Contribute</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;