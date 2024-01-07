import Content from "./Content"
import List from "./List"

const Body = ({ notesAll,notesArchive,setNotes }) => {
  return (
    <div className="max-w-1000 mx-auto my-4 px-3">
      <Content setNotes={setNotes}/>
      <List label="All Notes" setNotes={setNotes} notes={notesAll}/>
      <List label="Archive Notes" setNotes={setNotes} notes={notesArchive}/>
    </div>
  )
}

export default Body
