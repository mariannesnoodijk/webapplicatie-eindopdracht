import './Account.css';
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";

function Account() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        navigate("/");
    }

    return (
        <>
            <div className="registration-container">
                <div className="registration-leftside">
                    <h3>Hello first time visitor</h3>
                    <h1>Welcome</h1>
                </div>

                <div className="registration-rightside">
                <div>
                    <Link to='/'>Bring me back home</Link>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}>

                        <h1>Register</h1>

                        <label>First name:
                            <input
                                type="text"
                                id="firstname"
                                placeholder="First name"
                                {...register("firstname", {
                                    required: {
                                        value: true,
                                        message: "First name is required"
                                    }
                                })}
                            />
                        </label>

                        <label>Last name:
                            <input
                                type="text"
                                id="lastname"
                                placeholder="Last name"
                                {...register("lastname", {
                                    required: {
                                        value: true,
                                        message: "Last name is required"
                                    }
                                })}

                            />
                        </label>

                        <label>Phonenumber:
                            <input
                                type="text"
                                id="phonenumber"
                                placeholder="Phonenumber"
                                {...register("phonenumber", {
                                    required: {
                                        value: true,
                                        message: "Phonenumber is required"
                                    }
                                })}

                            />
                        </label>

                        <label>Email address:
                            <input
                                type="email"
                                id="emailaddress"
                                placeholder="Email"
                                {...register("emailaddress", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    validate: (value) => value.includes('@') || "Email requires an @ "
                                })}
                            />
                        </label>

                        <label>Password:
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    }
                                })}
                            />
                        </label>


                        <div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        id="admin"
                                        name="role"
                                        value="admin"
                                        {...register("radio", {
                                            required: {
                                                type: "radio",
                                                message: "Please select your role"
                                            }
                                        })}
                                    />
                                    Admin</label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        id="user"
                                        name="role"
                                        value="user"
                                        {...register("radio", {
                                            required: {
                                                type: "radio",
                                                message: "Please select your role"
                                            }
                                        })}
                                    />
                                    User</label>
                            </div>
                        </div>

                        <button
                            type="submit">Submit
                        </button>

                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Account;