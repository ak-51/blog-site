import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const [loggedin, setLoggedin] = useState(false)

    let location = useLocation()
    let history = useHistory()

    const createBlog = () => {
        history.push({
            pathname: "/create",
            state: {email: location.state.email}
        })
    }

    return (
        <Fragment>
            <nav className="homeNavContainer">
                { loggedin &&
                <ul>
                    <li><button>Create Blog</button></li>
                    <li><button>Account Settings</button></li>
                    <li style={{float:"right"}}><button>About</button></li>
                </ul>
                }
                { !loggedin && 
                    <ul>
                        <li><button onClick={createBlog}>Create Blog</button></li>
                        <li><button>Register</button></li>
                        <li><button>Login</button></li>
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