
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h1>THE DOJO BLOGS</h1>
            <div className="links">
                <Link to="/" style={{color:'white',backgroundColor:'black',borderRadius:'8px'}}>Home</Link>
                <Link to="/create" style={{color:'white',backgroundColor:'#f1356d',borderRadius:'8px'}}>New page</Link>
            </div>
        </div>
    );
}
 
export default Navbar;