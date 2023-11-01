import ReactQuill from "react-quill"

export default function CreatePost()
{
    return (
        <form>
            <input type="title" placeholder={'Title'}/>
            <input type="summary" placeholder={'Summary'}/>
            <input type="file"/>
            <ReactQuill />
        </form>
    )
}