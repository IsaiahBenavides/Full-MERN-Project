import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles.js";
import * as userService from '../../utilities/users-service.js'

export default function NavBar ({ name, setUser }) {
    const classes = useStyles();
    function handleLogOut() {
        userService.logOut();
        setUser(null)
    }
    return(
        <Container className={classes.NavBar} >
            <Container className={classes.Links}>
            <Link to="/home">Home</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/createpost">New Post</Link>
            </Container>
            <Container className={classes.Profile}>
            <span className={classes.ProfileInfo}>Welcome, {name}
            &nbsp;&nbsp; | &nbsp;&nbsp; <Link to='' onClick={handleLogOut}>Log Out</Link>
            </span>
            </Container>
        </Container>
    )
}