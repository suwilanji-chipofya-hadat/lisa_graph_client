import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Top from "../components/Top";


export default function Root() {
    return (
        <div className="fixed w-full h-full bg-gray-700 sm:flex sm:flex-row-reverse">
            <div className="w-full h-full">
                <div>
                    <Top/>
                </div>
                <div className="w-full h-full">
                    <Outlet/>
                </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}