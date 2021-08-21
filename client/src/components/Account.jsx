import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./Account.css"

const Account = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let location = useLocation()
    let history = useHistory()

    useEffect(() => {
        if(location.state === undefined){
            history.push('/login')
        }
        else{
            axios.post("/api/account", {
                email: location.state.email
            }).then(response => {
                setName(response.data.name)
                setEmail(response.data.email)
            })
        }

    }, [location.state])

    return (
        <Fragment>
            <div className="accountPage">
                <div className="accContainer">
                    <div>Name: {name}</div>
                    <div>Email: {email}</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Account