const Item = ({name, id, onDelete, onEdit}) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => onEdit (id)}>
        Edit
      </button>
      <button onClick={() => onDelete (id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
