import { Fragment } from "react"
import "./Register.css"

const Register = () => {
    const registrationSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Fragment>
            <div className="page">
                <div className="registerContainer">
                    <h1>Register</h1>
                    <form className="form" onSubmit={registrationSubmit}>
                        <div className="formContainer">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register