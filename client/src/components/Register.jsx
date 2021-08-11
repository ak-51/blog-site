import { Fragment, useState } from "react"
import "./Register.css"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pswdCnfm, setPswdCnfm] = useState('')

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
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="password" placeholder="Confirm Password" value={pswdCnfm} onChange={(e) => setPswdCnfm(e.target.value)} required />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register