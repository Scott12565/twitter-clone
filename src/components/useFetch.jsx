// import { useState, useEffect } from "react";

// const useFetch = () => {
//     const [tweets, setTweets] = useState([])
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch('http://localhost:3001/tweets')
//         .then(res => {
//             if(res.status !== 200){
//                 throw Error('failed to fetch, please try again letter');
//             };
//             return res.json();
//         }).then(data => {
//             setTweets(data);
//             setError(null);
//             setIsLoading(false);
//         })
//         .catch(err => {
//             console.log(err);
//             setIsLoading(false);
//         })
//     }, [])

//     return {tweets, error, isLoading};
// }
 
// export default useFetch;