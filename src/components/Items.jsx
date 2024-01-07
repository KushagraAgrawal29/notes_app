import ShowItems from "./ShowItems"

const Items = ({ id,body,title,createdAt,archived,action }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden">
        <ShowItems
            title={title}
            body={body}
            createdAt={createdAt}
            archived={archived}
            action={action}
        />
    </div>
  )
}

export default Items
