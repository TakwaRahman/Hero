import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { calculateAvgRating } from '../../components/utility/ratings/ratings';
import { Link, useLoaderData } from 'react-router';
import { Suspense } from "react";

const NavApps = () => {

    const data = useLoaderData();

    const singleApp = data.map((app) => {

        const avgRatings = calculateAvgRating(app.ratings);

        return (
            <Link to={`/AppsDetails/${app.id}`}>
                <div key={app.id} className='border border-none hover:shadow-xl hover:translate-y-2 transition duration-300 p-5 rounded-lg w-full'>
                    <img className='w-full' src={app.image} alt="" />
                    <p className='mt-2 font-semibold'>{app.title}</p>

                    <div className='flex justify-between mt-3'>
                        <p className='badge badge-soft badge-success font-bold'>
                            <MdOutlineFileDownload className='size-5' />
                            {app.downloads}
                        </p>

                        <p className='badge badge-outline badge-warning font-bold border-none'>
                            <FaStar />
                            {avgRatings.toFixed(1)}
                        </p>
                    </div>
                </div>
            </Link>
        )
    })


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-6xl mx-auto'>
                {
                    singleApp
                }
            </div>

        </div >
    );
};

export default NavApps;