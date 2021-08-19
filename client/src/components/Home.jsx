import axios from 'axios'
import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const [loggedin, setLoggedin] = useState(false)
    const [blogs, setBlogs] = useState([])

    let location = useLocation()
    let history = useHistory()

    useEffect(() => {
        if(location.state !== undefined){
            setLoggedin(true)
        }
    }, [])

    useEffect(() => {
        axios.get('/api/home').then(response => {
            const jsonData = response.data.blogs
            setBlogs(jsonData)
        })
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
                {blogs.map(blog => (
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.name}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Home