import { Fragment, useState } from "react"
import "./Home.css"

const Home = () => {
    const [loggedin, setLoggedin] = useState(false)

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
                        <li><button>Create Blog</button></li>
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