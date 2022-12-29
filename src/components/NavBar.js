import { Link } from "react-router-dom";

import * as userService from '../utilities/users-service.js'

export default function NavBar ({ name, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null)
    }
    return(
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/newpost">New Post</Link>
            &nbsp;&nbsp;<span>Welcome, {name}</span>
            &nbsp;&nbsp;<Link to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}