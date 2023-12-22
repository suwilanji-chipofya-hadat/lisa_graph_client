import { Link, useLocation } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { useRecoilValue } from "recoil"
import { stockDataAtom } from "../recoil/atom/stockDataAtom"
import { FaArrowLeft, FaStar } from "react-icons/fa"
export default function Top() {
    const location = useLocation()
    const stockData = useRecoilValue(stockDataAtom)
    return (
        <div className="px-2 bg-gray-900">
            {
                location.pathname === "/" && (
                    <div className="flex justify-between p-2 items-center">
                        <p className="text-3xl text-white font-bold">
                            <img src="/logo.png" className="h-[45px] filter invert"/>
                        </p>
                        <Link to="/search"><BsSearch className="text-2xl font-semibold text-gray-300"/></Link>
                    </div>
                )
            }
            {
                location.pathname === "/details" && (
                    <div className="flex justify-between p-2 items-center">

                        <div className="flex items-center space-x-5">
                            <Link to="/">
                                <FaArrowLeft className="text-white font-bold text-2xl"/>
                            </Link>
                            <p className="text-3xl text-white font-bold">
                                {stockData.instrument}
                            </p>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <Link to="/search"><BsSearch className="text-2xl font-semibold text-gray-300"/></Link>
                            <Link to="/watchlist"><FaStar className="text-2xl font-semibold text-gray-300"/></Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}