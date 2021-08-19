import "./Blog.css"
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from "react"

const Blog = () => {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')

    let {id} = useParams()

    useEffect(() => {
        axios.post("/api/blog", {
            id: id
        })
        .then(resp => {
            setTitle(resp.data.blog.title)
            setName(resp.data.blog.name)
            setContent(resp.data.blog.content)
            setDate(resp.data.blog.dtstr)
        })
    }, [id])

    return (
        <Fragment>
            <div className="blogPage">
                <div className="blogContainer">
                    <div className="innerBlogContainer">
                        <div className="blogTitle">{title}</div>
                        <div className="blogData">
                            <span className="blogName">By {name}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="blogContent">
                        {content}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Blog