import React, { Suspense, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import App from '../../pages/App.jsx/App'



const Apps = () => {

    const data = useLoaderData();


    const [showAll, setShowAll] = useEffect(false);

    const handleShow=()=>{
        setShowAll(true)
    }


    const appsToShow = showAll ? data : data.slice(0, 3)



    return (
        <div>
            <div className='text-center mt-15'>
                <h1 className='pb-3 font-bold text-4xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>


            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <div className="w-full px-4">
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-6xl mx-auto'>
                        {
                            appsToShow.map(app => <App key={app.id} app={app} />)
                        }
                    </div>
                </div>
            </Suspense>




            <div className="text-center">
                <Link to="/Apps"><button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white px-10 mt-10">Show All</button></Link>
            </div>
        </div>
    );
};

export default Apps;