import { GoGear } from "react-icons/go";

const Navbar = () => {

    return ( 
        <nav className="flex justify-between items-center w-full h-[50px] border-b">
            <ul className="w-11/12 flex justify-between items-center">
                <li className=" px-7 py-4 text-sm font-semibold text-gray-600 text-nowrap nav-hover">
                    <a href="#">For You</a>
                </li>
                <li className="px-7 py-4 text-sm font-semibold text-gray-600 nav-hover">
                    <a href="#">Following</a>
                </li>
                <li className="px-7 py-4 text-sm font-semibold text-gray-600 text-nowrap nav-hover">
                    <a href="#">Web Development/Laravel</a>
                </li>
            </ul>
            
            <a href="#" className="mr-4 py-1 px-1 text-sm cursor-pointer hover:bg-gray-200 rounded-full">
                <GoGear size={20} />
            </a>
        </nav>
     );
}
 
export default Navbar;