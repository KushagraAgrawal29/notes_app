import Input from "./Input"

const Header = ({ search,setQuery }) => {
  return (
    <div className="flex items-center justify-center px-4 py-[16px] border-b border-gray-300">
      <h1 className="flex-1 my-2 text-white text-4xl font-bold">Notes App</h1>
      <div className="sm:min-w-400">
        <Input
            value={search}
            onChange={setQuery}
            type="search"
            id="search_note"
            name="search_note"
            placeholder="Find Notes..."
        />
      </div>
    </div>
  );
};

export default Header
