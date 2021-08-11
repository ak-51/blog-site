import { Fragment, useState } from "react"
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <div className="loginpage">
                <div className="loginContainer">
                    <h1>Login</h1>
                    <form className="loginform" onSubmit={loginSubmit}>
                        <div className="loginFormContainer">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login