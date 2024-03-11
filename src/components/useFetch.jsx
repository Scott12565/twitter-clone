import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const UsersContext = createContext();

const UserContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get('database/users.json')
            .then(response => {
                const data = response.data;
                setData(data);
            })
            .catch(err => {
                setError('Retry');
            });
    }, []);
    return ( 
        <UsersContext.Provider value={{ data, error }}>
            {props.children}
        </UsersContext.Provider>
     );
}
 
export default UserContextProvider;