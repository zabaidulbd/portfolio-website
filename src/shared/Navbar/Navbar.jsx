import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-[#F5F5F5]">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl ms-28">Zabaidul.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-semibold"><Link to='/'>Home</Link></li>
                    <li className="font-semibold"><Link to='https://drive.google.com/file/d/1iSUGw2wlT1dC-7qy-r6E3_YSuthOFEWy/view?usp=sharing'>Resume</Link></li>
                    <li className="font-semibold"><Link to='project'>Projects</Link></li>
                    <li className="font-semibold"><Link to='about'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='contact'><button className="border-2 px-7 py-2 bg-purple-50 me-28">Contact</button></Link>
            </div>
        </div>
    );
};

export default Navbar;