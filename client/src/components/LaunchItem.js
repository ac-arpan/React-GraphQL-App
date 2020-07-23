import React from 'react'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success, details, links:{ mission_patch_small } } }) {
    return (
        < div className="p-4 md:w-1/3 sm:mb-0 mb-6 border-solid border-4 border-dark-100" >
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="Space Ship Image Not Found" className="object-cover object-center h-full w-full" src={mission_patch_small ? mission_patch_small : "https://dummyimage.com/1203x503"} />
            </div>
            <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Mission: <span className={classNames({ 'text-success': launch_success, 'text-danger':!launch_success})}>{mission_name}</span></h2>
            <p className="mb-2">Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
            <p className="text-base leading-relaxed mt-2">{details ? details.slice(0,150)+'...' : "Details not available..."}</p>
            <Link to={`/launch/${flight_number}`} className="text-indigo-500 inline-flex items-center mt-3">Launch Details
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div >
    )
}

export default LaunchItem
