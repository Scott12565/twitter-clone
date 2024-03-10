import { GoFileMedia } from "react-icons/go";

const AddPost = () => {
    return ( 
        <div className="py-3">
            <div className="flex justify-start items-center w-11/12 mx-auto">
                <div className="w-11 h-11 bg-blue-950 rounded-full"></div>
                <input type="text" placeholder="what is happening?!" className="py-3 ml-3 text-xl outline-none focus:border-b w-10/12" />
            </div>

            <div>
                <div>
                    <div>
                        <div>Media</div>
                        <GoFileMedia size={20} color="blue" />
                    </div>
                </div>
                <button>Post</button>
            </div>
        </div>
     );
}
 
export default AddPost;