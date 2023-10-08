import { useContext, useState, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
const Login = () => {
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');

    const { LoginUserWithEmail, logInWithGoogle } = useContext(AuthContext);

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

    const googleClick = () => {
        logInWithGoogle()
            .then(result => {
                setSuccess(result.user);
                Swal.fire('Login Successful')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>

            <div className="hero min-h-screen ">
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
                            <div>
                                <h1>Don't have Account <Link className="text-xl text-orange-500 font-bold" to="/register"> Register</Link></h1>
                            </div>
                        </form>
                        {
                            loginError && <p className="text-red-500 text-center p-4">{loginError}</p>
                        }
                    </div>
                    <div onClick={googleClick} className=" border-2 border-black p-4 rounded-xl mt-5">
                        <p className="flex justify-center items-center gap-3 text-xl font-semibold"><FcGoogle /> Continue With Google</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Login;