 
import { NavLink } from "react-router-dom";



const Sidebar = () => {
    return ( 
        <div className="sidebar"> 
            <ul>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/transactions">Transactions</NavLink></li>
                <li><NavLink to="/performance">Performance</NavLink></li>
                <li><NavLink to="/setting">Setting</NavLink></li>
                <li><NavLink to="/support">Support</NavLink></li>            
            </ul>           
        </div>
     );
};
 
export default Sidebar;