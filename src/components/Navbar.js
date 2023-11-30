import "../App.css"; 
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return ( 
        <div className="navbar">
              
                <div className="logo">
                    <NavLink to="/" style={{textDecoration:"none", color:"white"}}>
                        <span>Figma Bank</span>
                    </NavLink>
                </div>
                
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/login">LogIn</NavLink>
                    </li>
                </ul>
                            
        </div>
     );
}
 
export default Navbar;