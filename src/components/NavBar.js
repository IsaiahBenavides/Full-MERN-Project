import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import * as userService from '../utilities/users-service.js'

export default function NavBar ({ name, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null)
    }
    return(
        <Container>
            <Link to="/home">Home</Link>
            <Link to="/createpost">New Post</Link>
            &nbsp;&nbsp;
            <span>Welcome, {name}
            &nbsp;&nbsp;<Link to='' onClick={handleLogOut}>Log Out</Link>
            </span>
        </Container>
    )
}