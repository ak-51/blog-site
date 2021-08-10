import { Fragment } from "react"
import "./Login.css"

const Login = () => {
    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Fragment>
            <div className="page">
                <div className="loginContainer">
                    <form onSubmit={loginSubmit}>
                        <div className="formContainer">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login