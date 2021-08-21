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
    }, [location.state])

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

    const openBlog = (id) => {
        history.push(`/blog/${id}`)
    }

    const accountSettings = () => {
        history.push({
            pathname: "/account",
            state: {email:location.state.email}
        })
    }

    return (
        <Fragment>
            <nav className="homeNavContainer">
                { loggedin &&
                <ul>
                    <li><button onClick={createBlog}>Create Blog</button></li>
                    <li><button onClick={accountSettings}>Account</button></li>
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
            <div className="blogsContainer">
                {blogs.map(blog => (
                    <div className="blogItem" onClick={() => openBlog(blog.dtint)}>
                        <div>
                            <h1>{blog.title}</h1>
                            <p>By {blog.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Home