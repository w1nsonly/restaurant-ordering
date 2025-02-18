// components/layout/Navar.tsx

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;