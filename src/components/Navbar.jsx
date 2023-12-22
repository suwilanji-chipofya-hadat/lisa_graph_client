
import { FiMenu, FiTrendingUp } from 'react-icons/fi'
import { FaGlobe, FaStar } from 'react-icons/fa'
import { MdNewspaper } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="h-full">
            <div className="hidden sm:block sm:static sm:w-fit sm:px-3 sm:h-full sm:justify-between sm:py-12 sm:flex sm:flex-col py-2 items-center bg-gray-900">
                <div className="flex flex-col items-center space-y-10">
                <Link to='/'>
                    <FiTrendingUp className="text-3xl text-gray-300"/>
                </Link>
                <Link to='/'>
                    <MdNewspaper className="text-3xl text-gray-300"/>
                </Link>
                <Link to='/'>
                    <FaGlobe className="text-5xl text-gray-300 sm:text-3xl"/>
                </Link>
                <Link to='/'>
                    <FaStar className="text-3xl text-gray-300"/>
                </Link>
                </div>
                <Link to='/' className="sm:align-self-end">
                    <FiMenu className="text-3xl text-gray-300"/>
                </Link>
            </div>
        <div className="sm:hidden fixed bottom-0 flex justify-around bg-gray-900 w-full items-center py-2">
            <Link to='/'>
                <FiTrendingUp className="text-3xl text-gray-300"/>
            </Link>
            <Link to='/'>
                <MdNewspaper className="text-3xl text-gray-300"/>
            </Link>
            <Link to='/'>
                <FaGlobe className="text-5xl text-gray-300 sm:text-3xl"/>
            </Link>
            <Link to='/'>
                <FaStar className="text-3xl text-gray-300"/>
            </Link>
            <Link to='/' className="sm:align-self-end">
                <FiMenu className="text-3xl text-gray-300"/>
            </Link>
        </div>
                
        </div>
    )
}