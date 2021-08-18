import axios from "axios"
import { useHistory } from "react-router-dom"
import { Fragment, useState } from "react"
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const loginSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/login', {
            email: email,
            password: password
        })
        .then(response => {
            if(response.data.output === "match"){
                history.push({
                    pathname: "/",
                    state: { email: email }
                })
            }
            else{
                alert("Email or Password is incorrect")
            }
        })
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