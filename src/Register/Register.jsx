import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('')
    const { createUserWithEmail, } = useContext(AuthContext);

    const handelForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return Swal.fire('Password must be at least 6 characters')
        }
        createUserWithEmail(email, password)
            .then(result => {
                setRegisterSuccess(result.user);
                Swal.fire('Register Successful')
            })
            .catch(error => {
                setRegisterError(error.message);
            });

    }
    return (
        <div>

            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> <span className="text-orange-500">Register</span> now!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-[500px]  shadow-2xl bg-base-100  ">
                        <form onSubmit={handelForm} className="card-body md:w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Url</span>
                                </label>
                                <input type="text" name="url" placeholder="url" className="input input-bordered" />
                            </div>
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
                                <button className="btn bg-orange-500 text-white">Register</button>
                            </div>
                            <div>
                                <h1> have Account <Link className="text-xl text-orange-500 font-bold" to="/login"> Login</Link></h1>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-500 text-center p-4">{registerError}</p>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;