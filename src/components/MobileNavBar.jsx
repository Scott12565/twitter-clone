import { TfiMicrophone } from "react-icons/tfi";
import { FaXTwitter }from 'react-icons/fa6';
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoBell, GoBookmark, GoHome, GoGear } from 'react-icons/go';
import { RiMoreFill } from "react-icons/ri";
import { BsPerson, BsCardList } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { BiGroup } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

const MobileNavBar = () => {
    return ( 
        <div className="h-full relative md:hidden bg-orange-400">
            <div>
                <div className="flex justify-between items-center text-white bg-black">
                    <div className=''>
                        <div className="w-11 h-11 bg-blue-950 rounded-full"></div>
                    </div>

                    <h1 id="brand" className=' mx-4 p-2.5 hover-effect'>
                        <a href="">
                            <FaXTwitter size={32} />
                        </a>
                    </h1>
                    <a href="#" className="mr-4 py-1 px-1 text-sm cursor-pointer hover:bg-gray-200 rounded-full">
                        <GoGear size={20} />
                    </a>
                </div>
            </div>
            
            <nav className="w-11/12 h-screen absolute top-0 left-0 z-10 transform -translate-x-full translate-x-0 bg-white shadow-2xl">
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="profile">
                    
                    </div>
                </div>

                <aside className="flex flex-col flex-start w-full h-full">
                        
                        <ul className='px-3'>
                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <BsPerson size={25} className='text-black' />
                                    <span className='text-normal'>Profile</span>
                                </a>
                            </li>
                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <FaTwitter size={25} className='text-black' />
                                    <span className='text-normal'>Premium</span>
                                </a>
                            </li>
                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <GoBookmark size={25} className='text-black text-normal' />
                                    <span className='text-normal'>Bookmarks</span>
                                </a>
                            </li>

                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <BsCardList size={25} className='text-black' />
                                    <span className='text-normal'>Lists</span>
                                </a>
                            </li>
                            

                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <TfiMicrophone size={25} className='text-black' />
                                    <span className='text-normal'>Spaces </span>
                                </a>
                            </li>
                            <li className='hover-effect px-1'>
                                <a href="" className='nav-link'>
                                    <FaMoneyBillWave size={25} className='text-black' />
                                    <span className='text-normal'>Monetization</span>
                                </a>
                            </li>

                        </ul>
                    </aside>
            </nav>

        </div>
     );
};
 
export default MobileNavBar;