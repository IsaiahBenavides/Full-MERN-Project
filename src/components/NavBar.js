import { Link } from "react-router-dom";


export default function NavBar ({ name, setUser }) {
    return(
        <nav>
            <Link to="/home">Home</Link>
            <p>Welcome, {name}</p>
        </nav>
    )
}