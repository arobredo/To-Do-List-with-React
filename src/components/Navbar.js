import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><button className="navbar-btn">Login</button></Link>
            <Link to="/todos"><button className="navbar-btn">Todos</button></Link>
        </nav>
    )
}

export default Navbar;