import React from 'react';


import appNot from '../../assets/App-Error.png'

const ErrorDetails = () => {
    return (
        <div className='bg-gray-100'>
            <div className='pt-20 pb-20'>
                <img className='max-w-6xl mx-auto' src={appNot} alt="" />
                <h1 className='text-center text-4xl mt-10 font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-center mt-3 text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
        </div>
    );
};

export default ErrorDetails;