import {useForm} from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        navigate("/")
    }

    return (
        <>
            <div className="login-container">
                <div className="login-leftside">
                    <h3>Nice to see you again</h3>
                    <h1>Welcome back</h1>
                </div>

                <div className="login-rightside">
                    <div>
                        <Link to='/'>Bring me back home</Link>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}>

                        <h1>Login</h1>
                        <label>Username:
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Your username is required",
                                    }
                                })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </label>

                        <label>Password:
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "A password is required"
                                    }
                                })}
                            />
                        </label>

                        <button
                            type="submit">Login
                        </button>

                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;