import Action from "./Action"
import ShowItems from "./ShowItems"
import { handleClickConfirm } from "./Alert";

const Items = ({ id,body,title,createdAt,archived,action }) => {
    const onDeleteNode = (item) => {
        handleClickConfirm(
            item,
            Action,
            "delete",
            "Are you sure?",
            "You want be able to revert this",
            "Warning",
            "Yes, delete it!"
        );
    };

    const onArchiveNode = (item) => {
        !archived 
        ? handleClickConfirm(
            item,
            Action,
            "archive",
            "Are you sure?",
            "Do you want to 'archive' this note?.",
            "info",
            "Yes, archive it!"  
        ) 
        : handleClickConfirm(
            item,
            Action,
            "unarchive",
            "Are you Sure?",
            "Do you want to 'unarchive' this note?.",
            "info",
            "Yes, unarchive it!"
        )
    }
  return (
    <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden">
        <ShowItems
            title={title}
            body={body}
            createdAt={createdAt}
            archived={archived}
            action={action}
        />
        <Action
            onDeleteNode={onDeleteNode}
            onArchiveNode={onArchiveNode}
            id={id}
            archived={archived}
        />
    </div>
  )
}

export default Items
