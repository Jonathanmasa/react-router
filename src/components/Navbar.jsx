import { Link, NavLink } from "react-router-dom";


export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {props.linksProp.map((link) => (
                            <li className="nav-item" key={link.id}>
                                <NavLink className="nav-link" to={link.url}>
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

