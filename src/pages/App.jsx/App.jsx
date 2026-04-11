import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { calculateAvgRating } from '../../components/utility/ratings/ratings'




const App = ({ app }) => {

    const { image, title, downloads, ratings } = app;

    const avgRatings = calculateAvgRating(ratings);


    return (
        <div className='border border-none hover:shadow-xl hover:translate-y-2 transition duration-300 p-5 rounded-lg w-full'>

            <img className='w-full' src={image} alt="" />
            <p>{title}</p>

            <div className='flex justify-between pt-5'>

                <p className='badge badge-soft badge-success font-bold'><MdOutlineFileDownload className='size-5' />
                    {downloads}</p>

                <p className='badge badge-outline badge-warning font-bold border-none'><FaStar />
                    {avgRatings.toFixed(1)}</p>

            </div>


        </div>
    );
};

export default App;
