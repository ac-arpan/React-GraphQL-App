import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ELon from '../Elon.jpg'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const INFO_QUERY = gql`
    query InfoQuery {
            info {
            name,
            founder,
            founded,
            summary,
            headquarters{
                address,
                city,
                state
            }
        }
    }
`

function About() {

    const { loading, error, data } = useQuery(INFO_QUERY)

    if (loading) return <div className="container text-center"><ClipLoader color="blue" size={40}></ClipLoader></div>
    if (error) console.log(error)

    const { name, founder, founded, summary, headquarters:{ address, city, state}} = data.info
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={ELon} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ">
                        <h1 className="title-font sm:text-2xl sm:text-center lg:text-3xl mb-2 font-medium text-gray-900 text-left"><span className="text-gray-500">Company: </span>{name}</h1>
                        <h1><span className="text-gray-500 sm:text-2xl lg:text-3xl text-left">Founder:</span> <span className="sm:text-2xl lg:text-3xl"> {founder}</span></h1>
                        <h2><span className="text-gray-500 sm:text-xl lg:text-2xl text-left">Founded In:</span> <span className="sm:text-xl lg:text-2xl"> {founded}</span></h2>
                        
                        <p className="mb-3 lg:text-xl leading-relaxed text-left mt-3 sm:text-sm" ><span className="text-gray-500 sm:text-sm lg:text-xl">Headquarter:</span>{address},{city},{state}</p>
                        <p className="mb-8 leading-relaxed text-left mt-3">{summary}</p>
                        <div className="flex justify-center">
                            <Link to="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Launches</button></Link>
                            <Link to="history"><button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Events</button></Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About


