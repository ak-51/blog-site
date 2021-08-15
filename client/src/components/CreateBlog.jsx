import { Fragment, useState } from "react"
import "./CreateBlog.css"

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const blogSubmit = (e) => {
        e.preventDefault()
        const date = (new Date()).toDateString()
    }

    return(
        <Fragment>
            <div className="createPage">
                <p className="createTitle">Create Blog</p>
                <div className="createContainer">
                    <form className="createForm" onSubmit={blogSubmit}>
                        <input className="createFormTitle" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea name="content" id="createFormContent" cols="100" rows="20" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateBlog