import { CiApple, CiSearch } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";

const Trending = () => {
    return ( 
        <div className="hidden md:block md:sticky top-0 ">
           {/* ceard */}
           <div className="group flex justify-start items-center bg-gray-100 m-3 rounded-3xl space-x-3 h-10 px-3 shadow-md sticky top-0">
            <div>
               <CiSearch size={25} />
            </div>
            <input type="text" placeholder="Search" className="bg-inherit w-full h-full focus:outline-none" />
           </div>

           {/* subscribe */}
           <div className="rounded-xl bg-gray-100 p-2 px-3 m-3 mt-4">
               <h1 className="text-xl font-bold">Subscribe to Premium</h1>
               <p className="text-sm text-gray-700 mt-2 mb-1">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
               <button className="bg-black rounded-3xl text-center text-white mt-1 py-1.5 px-3.5 text-sm font-bold  border-0 " >Subscribe</button>
           </div>

           {/* trends */}
           <div className="rounded-xl bg-gray-100 p-2 px-3 m-3 mt-4">
               <h1 className="text-xl font-bold mb-[0.2rem] ">
                  Trends for you
               </h1>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               <div className="py-3 hover:bg-gray-200 cursor-pointer">
                  <div>
                     <div className="flex justify-between items-center" >
                        <span className="text-gray-500 text-xs">Technologies-Trending</span>
                        <div className="group relative hover:last:block hover:bg-gray-300 p-1 cursor-pointer rounded-full flex flex-col justify-center items-center">
                                <IoIosMore size={20} className="cursor-pointer text-black font-bold" />
                                <div className="absolute bg-gray-500 text-white top-full left-1/2 transform -translate-x-1/2 p-[.1rem] mt-1 text-[0.6rem] text-center font-semibold hidden group-hover:block rounded" ><span className="" >More</span></div>
                                </div>  
                     </div>
                     <h1 className=" font-bold">#softwaredevelopment</h1>
                  </div>
               </div>

               

               
           </div>
        </div>
     );
}
 
export default Trending;