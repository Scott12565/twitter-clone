import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { LuShare } from "react-icons/lu";

const Post = ({ data, error }) => {

    if(!data.tweets){
        return <div>Loading....</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return ( 
        <div className="">
            {data.tweets.map(userData => (
                <div className="border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
                    <div className="w-full flex items-start tweet">
                        <div className="h-11 w-11 bg-blue-700 rounded-full mx-3  my-3"></div>
                        <div className="flex flex-col py-2 user-post ">
                            <div className="flex justify-between items-center w-[26.5rem]">
                                <h3 className="flex justify-between items-center space-x-1.5">
                                    <p className="font-semibold capitalize hover:underline text-black text-[.95rem] cursor-pointer">{userData.name}</p>
                                    <span className="text-gray-500 text-[.93rem] font-normal  ">{`@${userData.username} -`}</span>
                                    <span className="text-gray-500 text-[.93rem] font-normal hover:underline cursor-pointer ">{userData.time}</span>
                                </h3>
                                <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                            </div>

                            <div className="w-[26.5rem] mt-[.2rem] text-wrap text-sm text-start text-gray-800">
                                <p>{userData.text}</p>
                            </div>

                            {/* angagements */}
                            <div className=" flex justify-between items-center angagements">

                            <div>
                                    <div className="group relative hover:last:block hover:bg-gray-300 hover:text-blue-500 text-gray-500 p-2 pt-3 pb-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center relative">
                                            <FaRegComment size={15} className="cursor-pointer text-black font-bold group-hover:text-blue-500" />
                                            <span className="text-sm absolute left-[1.2rem] ">{userData.engage.reply}</span>
                                        </div>
                                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" >
                                            <span className="" >Reply</span>
                                        </div>
                                    </div> 
                                </div>

                                <div>
                                    <div className="group relative hover:last:block hover:bg-gray-300 hover:text-blue-500 text-gray-500 p-2 pt-3 pb-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center relative">
                                            <BiRepost size={18} className="cursor-pointer text-black font-bold group-hover:text-blue-500" />
                                            <span className="text-sm absolute left-[1.2rem] ">{userData.engage.repost}</span>
                                        </div>
                                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" >
                                            <span className="" >Repost</span>
                                        </div>
                                    </div> 
                                </div>

                                <div>
                                    <div className="group relative hover:last:block hover:bg-gray-300 hover:text-blue-500 text-gray-500 p-2 pt-3 pb-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center relative">
                                            <IoIosStats size={15} className="cursor-pointer text-black font-bold group-hover:text-blue-500" />
                                            <span className="text-sm absolute left-[1.2rem] ">{userData.engage.reply}</span>
                                        </div>
                                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" >
                                            <span className="" >Reply</span>
                                        </div>
                                    </div> 
                                </div>
                                <div>
                                    <div className="group relative hover:last:block hover:bg-gray-300 hover:text-blue-500 text-gray-500 p-2 pt-3 pb-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center relative">
                                            <FaRegHeart size={15} className="cursor-pointer text-black font-bold group-hover:text-blue-500" />
                                            <span className="text-sm absolute left-[1.2rem] ">{userData.engage.likes}</span>
                                        </div>
                                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" >
                                            <span className="" >Reply</span>
                                        </div>
                                    </div> 
                                </div>

                                <div className="flex justify-between items-center w-11">
                                    <FaRegBookmark size={15} />
                                    <LuShare size={15} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
     );
}
 
export default Post;