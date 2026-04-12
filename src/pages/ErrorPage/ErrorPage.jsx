import React from 'react';

import pageNot from '../../assets/error-404.png'
import Navbar from '../../components/Navbar/Navbar';

const ErrorPage = () => {
    return (

        

        <div>

            <Navbar></Navbar>



            <div className=''>
                <img className='max-w-6xl mx-auto' src={pageNot} alt="" />
                <h1 className='text-center text-4xl mt-10 font-semibold'>Oops, page not found!</h1>
                <p className='text-center mt-3 text-gray-500'>The page you are looking for is not available.</p>
            </div>
        </div>
    );
};

export default ErrorPage;