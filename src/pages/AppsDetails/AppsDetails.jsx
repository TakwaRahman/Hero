import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import dow from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { calculateAvgRating } from '../../components/utility/ratings/ratings'
import { addToDB } from '../../components/utility/addToDB/addToDB';
import { Toaster } from 'react-hot-toast';


const chartData = [
    { name: "1 star", value: 50 },
    { name: "2 star", value: 30 },
    { name: "3 star", value: 100 },
    { name: "4 star", value: 300 },
    { name: "5 star", value: 770 },
];



const AppsDetails = () => {





    const { id } = useParams()

    const data = useLoaderData()

    const appID = parseInt(id)

    const singleApps = data.find(app => app.id === appID)

    if (!singleApps) {
        return <p>App Not Found</p>
    }


    const { image, title, downloads, ratings, companyName, reviews, size, description } = singleApps


    const avgRatings = calculateAvgRating(ratings);



    const handleInstallApps = (id) => {
        addToDB(id)
    }




    return (
        <div className='bg-gray-100'>
            <div className='pt-20 px-20 flex gap-10'>
                <img className='' src={image} alt="" />

                <div className=''>
                    <h1 className='font-bold text-2xl pb-2'>{title}</h1>
                    <p className=''><span className='text-gray-500'>Developed by</span> <span className='font-bold bg-linear-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>{companyName}</span></p>

                    <div className=''>
                        <div className='border mt-10 border-gray-300 pr-280'></div>
                    </div>


                    <div className='flex items-center pt-7 gap-20'>
                        <div>
                            <img className='' src={dow} alt="" />
                            <p>Downloads</p>
                            <span className='font-bold text-4xl'>{downloads}</span>
                        </div>
                        <div>
                            <img className='' src={star} alt="" />
                            <p>Average Ratings</p>
                            <span className='font-bold text-4xl'>{avgRatings.toFixed(1)}</span>
                        </div>
                        <div>
                            <img className='' src={review} alt="" />
                            <p>Total Reviews</p>
                            <span className='font-bold text-4xl'>{reviews}</span>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <button onClick={() => handleInstallApps(id)} className="btn bg-[#00D390] text-white">Install Now {size}</button>
                    </div>
                </div>


            </div>

            <div className='pl-20 pr-5'>
                <div className='border mt-10 border-gray-300 pr-280'></div>
            </div>

            <div className='pl-15 mt-10'>
                <h2 className='pl-4 font-bold text-xl pb-5'>Ratings</h2>
                <BarChart
                    width={1390}
                    height={300}
                    data={[...chartData].reverse()}
                    layout="vertical"
                >
                    <XAxis type="number" domain={[0, 12000]} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF8811" />
                </BarChart>
            </div>


            <div className='pl-20 mt-10'>
                <h2 className='font-bold text-xl'>Description</h2>
                <p className='pt-5'>{description}</p>
            </div>


        </div>
    );
};

export default AppsDetails;