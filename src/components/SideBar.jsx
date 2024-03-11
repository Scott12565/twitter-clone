import { FaXTwitter }from 'react-icons/fa6';
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoBell, GoBookmark, GoHome, GoSearch } from 'react-icons/go';
import { RiMoreFill } from "react-icons/ri";
import { BsPerson, BsCardList } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { BiGroup } from "react-icons/bi"

const SideBar = () => {

    return ( 
        <div className="h-full border-r border-gray-100 w-[270px] fixed">
            <div className="flex flex-col justify-start items-start">
                <h1 id="brand" className=' mx-4 p-2.5 hover-effect'>
                        <a href="">
                            <FaXTwitter size={32} />
                        </a>
                </h1>
                <aside className="flex flex-col flex-start w-full h-full">
                    
                    <ul className='px-3'>
                        <li className='hover-effect pl-1 px-1'>
                            <a href="" className='nav-link'>
                                <GoHome size={25} className='text-black' />
                                <span className='text-normal'>Home</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <GoSearch size={25} className='text-black' />
                                <span className='text-normal'>Explore</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <GoBell size={25} className='text-black' />
                                <span className='text-normal'>Notifications</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <RxEnvelopeClosed size={25} className='text-black' />
                                <span className='text-normal'>Messages</span>
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
                                <GoBookmark size={25} className='text-black text-normal' />
                                <span className='text-normal'>Bookmarks</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <BiGroup size={25} className="text-black" />
                                <span className='text-normal'>Communitis</span>

                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <FaXTwitter size={25} className='text-black' />
                                <span className='text-normal'>Premium</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <BsPerson size={25} className='text-black' />
                                <span className='text-normal'>Profile</span>
                            </a>
                        </li>
                        <li className='hover-effect px-1'>
                            <a href="" className='nav-link'>
                                <CiCircleMore size={25} className='text-black' />
                                <span className='text-normal'>More</span>
                            </a>
                        </li>
                        
                        <button className='bg-blue-500 text-white text-center text-xl font-bold py-3 px-24 my-5 rounded-3xl'>Post</button>
                    </ul>

                    <div className="profile flex justify-between
                    items-center hover-effect w-11/12 mx-auto mt-7 px-3 py-1 cursor-pointer">
                        <div className=''>
                            <div className="w-11 h-11 bg-blue-950 rounded-full"></div>
                        </div>
                        <div className='pr-9'>
                            <h4>Scott</h4>
                            <p>@Scott_9135</p>
                        </div>
                        <RiMoreFill size={30} className='curson-pointer' />
                    </div>
                </aside>
        </div>
        </div>
     );
}
 
export default SideBar;