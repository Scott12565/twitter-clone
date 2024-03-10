import AddPost from "./AddPost";
import Navbar from "./NavBar";

const Posts = () => {
    return ( 
        <div className="text-darkgray-400 text-center mx-auto h-full w-[500px] border-r border-gray-100 ">
           <Navbar />
           <AddPost />
        </div>
     );
}
 
export default Posts;