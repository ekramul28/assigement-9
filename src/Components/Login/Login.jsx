import { useContext, useState, } from "react";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
const Login = () => {
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');

    const { LoginUserWithEmail } = useContext(AuthContext);

    const handelForm = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoginError('');
        setSuccess('');
        LoginUserWithEmail(email, password)
            .then(result => {
                setSuccess(result.user);
                Swal.fire('Login Successful')
            })
            .catch(error => {
                setLoginError(error.message)
            });




    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"><span className="text-orange-500">Login</span> now!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-[500px]  shadow-2xl bg-base-100  ">
                        <form onSubmit={handelForm} className="card-body md:w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-500 text-white">Login</button>
                            </div>
                        </form>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;