import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header className="text-gray-700 body-font bg-gray-300 mt-3 rounded">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <span className="ml-3 text-2xl ">SpaceX</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-around">
                    <Link to="/" className="mr-3 hover:text-gray-900">Launches</Link>
                    <Link to="/about" className="mr-3 hover:text-gray-900">About</Link>
                    <Link to="/history" className="mr-3 hover:text-gray-900">History</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
