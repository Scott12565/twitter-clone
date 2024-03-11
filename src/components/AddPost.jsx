import { GoFileMedia } from "react-icons/go";
import { HiOutlineGif } from "react-icons/hi2";
import { LuSettings2 } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { GrLocation, GrSchedule } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const AddPost = () => {
    return ( 
        <div className="py-3 border-b border-gray-200 ">
            <div className="flex justify-start items-center w-11/12 mx-auto">
                <div className="w-11 h-11 bg-blue-950 rounded-full"></div>
                <input type="text" placeholder="what is happening?!" className="py-3 ml-3 text-xl outline-none focus:border-b w-10/12" />
            </div>
            <div className="w-11/12 mx-auto flex justify-between items-center pt-1">
                <div className="w-3/4 flex items-center ml-5 py-3">
                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <GoFileMedia size={17} className="cursor-pointer text-blue-500 font-extra-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="mt-7 ">Media</span></div>
                    </div>

                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <HiOutlineGif size={18} className="cursor-pointer text-blue-500 font-extra-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="mt-7 ">GIF</span></div>
                    </div>

                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <LuSettings2 size={17} className="cursor-pointer text-blue-500 font-extra-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="mt-7 ">Poll</span></div>
                    </div>

                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <BsEmojiSmile size={17} className="cursor-pointer text-blue-500 font-extra-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="mt-7 ">Emoji</span></div>
                    </div>

                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <GrSchedule size={17} className="cursor-pointer text-blue-500 font-extra-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >Schedule</span></div>
                    </div>

                    <div className="group relative hover:last:block 
                    hover:bg-gray-300 p-2 cursor-pointer rounded-full 
                    flex flex-col justify-center items-center"
                    >
                        <GrLocation size={17} className="cursor-pointer text-blue-300 font-bold" />
                        <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >Location</span></div>
                    </div>
                </div>
                <button className="bg-blue-300 text-center text-white text-sm font-bold py-2 px-4 rounded-3xl">Post</button>
            </div>
        </div>
     );
}
 
export default AddPost;