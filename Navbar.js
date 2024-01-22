import {Link} from "react-router-dom";
function Navbar()
{
return(
<>
<center>
<div className="nav">
<Link to="/">Sign</Link>
<Link to="/Enquiry">Enquiry</Link>
<Link to="/Home">Home</Link>
<Link to="/Login1">Login</Link>
</div>
</center>
</>

);
}
export default Navbar;