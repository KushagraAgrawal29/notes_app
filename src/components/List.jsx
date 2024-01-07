import Items from "./Items";

const List = ({ notes, label, setNotes }) => {
  return (
    <>
      <h2 className="font-normal my-4">{label}</h2>
      <div className="grid grid-cols-1 grid-rows-auto gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-24">
        {notes.length === 0 ? (
          <p className="text-center text-gray-400">Nothing To Show</p>
        ) : (
          notes.map((note) => (
            <Items action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
};

export default List;
