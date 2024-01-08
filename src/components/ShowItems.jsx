import showFormattedDate from "../utils/showFormattedDate";

const ShowItems = ({ title, body, createdAt }) => {
  return (
    <div className="p-3 flex-1">
      <h3 className="overflow-hidden whitespace-nowrap mb-1">{title}</h3>
      <p className="text-[12px] mb-2 text-gray-400">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-[14px]">{body}</p>
    </div>
  );
};

export default ShowItems;
