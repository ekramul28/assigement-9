import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);

    const handelLogout = () => {
        Logout()
            .then(result => {
                Swal.fire('Logout Successful')
            })
            .catch()
    }

    const link = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink>
        </li>  </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl text-orange-500">Yoga Master</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block ">
                        {
                            user && <p>{user?.email}</p>
                        }
                    </div>
                    {
                        user && <img className="w-14 h-14 mx-1 rounded-full" src={user?.photoURL} alt="" />

                    }
                    {
                        user ? <Link to="/login">  <button onClick={handelLogout} className="btn bg-orange-500 text-white">LogOut</button></Link>
                            : <Link to="/login">  <button className="btn bg-orange-500 text-white">Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;