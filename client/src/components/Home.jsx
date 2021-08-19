import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const [loggedin, setLoggedin] = useState(false)

    let location = useLocation()
    let history = useHistory()

    useEffect(() => {
        if(location.state !== undefined){
            setLoggedin(true)
        }
    }, [])

    const createBlog = () => {
        history.push({
            pathname: "/create",
            state: {email: location.state.email}
        })
    }

    const login = () => {
        history.push('/login')
    }

    const register = () => {
        history.push('/register')
    }

    return (
        <Fragment>
            <nav className="homeNavContainer">
                { loggedin &&
                <ul>
                    <li><button onClick={createBlog}>Create Blog</button></li>
                    <li><button>Account Settings</button></li>
                    <li style={{float:"right"}}><button>About</button></li>
                </ul>
                }
                { !loggedin && 
                    <ul>
                        <li><button onClick={createBlog}>Create Blog</button></li>
                        <li><button onClick={register}>Register</button></li>
                        <li><button onClick={login}>Login</button></li>
                        <li style={{float:"right"}}><button>About</button></li>
                    </ul>
                }
            </nav>
            <div>
                <h1>blog</h1>
            </div>
        </Fragment>
    )
}

export default Home