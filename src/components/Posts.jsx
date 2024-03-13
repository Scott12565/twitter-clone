import { useContext } from "react";
import AddPost from "./AddPost";
import Navbar from "./NavBar";
import Post from "./Post";
import { UsersContext } from "./useFetch";


const Posts = () => {
   const { data, error } = useContext(UsersContext);
    return ( 
        <div className="w-full text-darkgray-400 text-center mx-auto h-full md:w-[510px] border-r border-gray-100 ">
           <Navbar />
           <AddPost />
           <Post data={data} error={error} />
        </div>
     );
};
 
export default Posts;