import { IoIosMore } from "react-icons/io";

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
                    <div className="w-full flex items-start">
                        <div className="h-11 w-11 bg-blue-700 rounded-full mx-3  my-3"></div>
                        <div className="flex flex-col py-2 ">
                            <div className="flex justify-between items-center w-[26.5rem]">
                                <h3 className="flex justify-between items-center space-x-1.5">
                                    <p className="font-semibold capitalize hover:underline text-black text-[.95rem] cursor-pointer">{userData.name}</p>
                                    <span className="text-gray-500 text-[.93rem] font-semibold  ">{`@${userData.username} -`}</span>
                                    <span className="text-gray-500 text-[.93rem] font-semibold hover:underline cursor-pointer ">{userData.time}</span>
                                </h3>
                                <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                            </div>

                            <div className="w-[26.5rem] mt-[.2rem] text-wrap text-sm text-start text-gray-800">
                                <p>{userData.text}</p>
                            </div>
                        </div>
                    </div>
                    {/* angagements */}

                </div>
            ))}
        </div>
     );
}
 
export default Post;