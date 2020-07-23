import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number:Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            details
            links{
                mission_patch_small
            }
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

function Launch(props) {

    let { flight_number } = props.match.params
    flight_number = parseInt(flight_number)

    const { loading, error, data } = useQuery(LAUNCH_QUERY, { variables: { flight_number } })

    if (loading) return <h4 className="text-center">Loading...</h4>

    if (error) console.log(error)

    const { mission_name, launch_year, launch_success, details, links: { mission_patch_small }, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch
    return (

        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-80 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={mission_patch_small ? mission_patch_small : "https://dummyimage.com/1203x503"} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-4xl"><span className="text-dark">Mission: </span>{mission_name}</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-2xl text-gray-600">{launch_year}</p>
                                <p className="text-2xl text-gray-600">Launch Success:  <span className={classNames({
                                    'text-success':launch_success,
                                    'text-danger': !launch_success
                                })}>{launch_success ? 'YES': 'NO'}</span></p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{details ? details : "Details not available..."}</p>
                            <h4 className="mt-3 text-3xl text-gray-900 text-left">Rocket Details</h4>
                            <div className="w-20 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <ul className="list-group mt-2">
                                <li className="list-group-item text-2xl ">Rocket ID: <span className="text-purple-600">{rocket_id}</span></li>
                                <li className="list-group-item text-2xl ">Rocket Name:<span className="text-purple-600">{rocket_name}</span> </li>
                                <li className="list-group-item text-2xl ">Rocket Type: <span className="text-purple-600">{rocket_type}</span></li>
                            </ul>
                            <Link to="/" className="text-indigo-500 inline-flex items-center mt-2">Back
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Launch


