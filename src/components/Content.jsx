import { useState } from "react"
import Input from "./Input";

const Content = ({ setNotes }) => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!title || !body){
            handleClick({
                title:"Error",
                text:"All fields are mandatory",
                icon:"error"
            });
            return;
        }

        const id = new Date().toISOString();
        const note = {id,title,body,archived:false,createdAt:id};

        setNotes((prevNotes) => [...prevNotes,note]);
        setTitle("");
        setBody("");
    };

  return (
    <div className="mx-auto max-w-2xl mb-12">
      <h2>New Notes</h2>
      <form onSubmit={handleOnSubmit}>
        <p className="text-xs text-right text-gray-400">Characters left: {50 - title.length}</p>
        <Input
            value={title}
            onChange={setTitle}
            name="title"
            type="text"
            placeholder="Input Title...."
        />
        <Input
            value={body}
            onChange={setBody}
            name="body"
            type="textarea"
            placeholder="Write your notes here..."
        />
        <button 
            type="submit"
            className=""
            onClick={()=>{
                handleClick({
                    title:"Success Creating Note",
                    text:`Note with title "${title}" has been created`,
                    icon:"success",
                })
            }}
        >
            Create
        </button>
      </form>
    </div>
  )
}

export default Content
