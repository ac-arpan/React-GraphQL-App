import React from 'react'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'


const LAUNCHES_QUERY = gql`
    query LanuchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
            details
            links{
                mission_patch_small
            }
        }
    }
`


function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)

    if (loading) return <h4 className="text-center">Loading...</h4>

    if (error) console.log(error)
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Launching Histories</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.</p>
                        </div>
                    </div>
                    <MissionKey/>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    
                        {
                             data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)
                        }

                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Launches







    