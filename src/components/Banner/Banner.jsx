import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import bannerIMG from '../../assets/hero.png'


const Banner = () => {
    return (
        <div className=''>
            <div className='bg-gray-100'>
                <h1 className='text-5xl text-center pt-20 font-bold leading-16'>We Build <br /> <span className='bg-linear-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-center px-95 text-gray-500 py-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting . Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='text-center space-x-5'>
                    <button className="btn font-bold border-2"><FaGooglePlay className='size-6 text-blue-300' />
                        Google Play</button>
                    <button className="btn font-bold border-2"><FaAppStoreIos className='size-6 text-blue-500' />
                        App Store</button>
                </div>

                <div className='pt-10 flex justify-center'>
                    <img src={bannerIMG} alt="" />
                </div>

                <div className='bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white py-15'>
                    <h2 className='text-center text-4xl font-bold pb-10'>Trusted By Millions, Built for You</h2>

                    <div className='flex justify-center gap-30'>
                        <div className='text-center'>
                            <h5>Total Downloads</h5>
                            <h1 className='font-bold text-5xl py-5'>29.6M</h1>
                            <h5>21% more than last month</h5>
                        </div>
                        <div className='text-center'>
                            <h5>Total Reviews</h5>
                            <h1 className='font-bold text-5xl py-5'>906K</h1>
                            <h5>46% more than last month</h5>
                        </div>
                        <div className='text-center'>
                            <h5>Active Apps</h5>
                            <h1 className='font-bold text-5xl py-5'>132+</h1>
                            <h5>31 more will Launch</h5>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;