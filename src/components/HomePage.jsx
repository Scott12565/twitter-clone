// import useFetch from "./useFetch";
import Posts from './Posts';
import SideBar from './SideBar';
import Trendings from './Trendings';

const HomePage = () => {
   
    
    return ( 
        <div className="grid justify-center grid-cols-12 sm:w-100 mx-auto h-full" >
           <div className='col-span-3' >
               <SideBar />
           </div>
           <div className=' col-span-5'>
               <Posts /> 
           </div>
           <div className='col-span-4 pl-12'>
               <Trendings />
           </div>
        </div>
     );
}
 
export default HomePage;