import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    // const [user, setUser] = useState(null);
    // // const auth = getAuth();

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(user) {
    //             setUser(user);
    //         } else {
    //             setUser(null);
    //         }
    //     })
    // }, [auth]);


    return (
       <div>
           {<Home />}
       </div>
    )
}

export default Dashboard;