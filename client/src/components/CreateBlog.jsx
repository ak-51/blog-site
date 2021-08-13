import { Fragment, useState } from "react"
import "./CreateBlog.css"

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return(
        <Fragment>
            <div className="createPage">
                <div className="createContainer">
                    <form className="createForm">
                        <input className="createFormTitle" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className="createFormContent" type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateBlog