import {useForm} from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom";

function AppointmentPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        navigate("/")
    }

    return (
        <>
            <div className="appointment-container">
                <div className="appointment-leftside">
                    <Link to='/'>Bring me back home</Link>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}>

                        <h1>ORGANISE YOUR VIEWING</h1>
                        <label>Name:
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Full name here"
                                {...register("fullname", {
                                    required: {
                                        value: true,
                                        message: "Your first and last name is required",
                                    }
                                })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </label>

                        <label>Email address:
                            <input
                                type="email"
                                id="emailaddress"
                                placeholder="Email here"
                                {...register("emailaddress", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    validate: (value) => value.includes('@') || "Email requires an @ "
                                })}
                            />
                        </label>

                        <label>Phone number
                            <input
                                type="text"
                                id="phonenumber"
                                placeholder="Phonenumber here"
                                {...register("phonenumber", {
                                    required: {
                                        value: true,
                                        message: "Your phonenumber is required"
                                    }
                                })}
                            />
                        </label>

                        <label>Date & Time
                            <input
                                type=""
                                id="viewingdate"
                                {...register("viewingdate", {
                                    required: {
                                        value: true
                                    }
                                })}
                            />
                        </label>

                        <button
                            type="submit">Login
                        </button>

                    </form>
                </div>

                <div className="appointment-rightside">
                    <div>
                        {/*<img src="../../assets/pictures/headerImageAmsterdam.jpg" alt=""/>*/}
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppointmentPage;