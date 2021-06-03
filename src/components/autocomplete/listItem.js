function ListItem({ item, onSelect }) {
  return (
    <div
      onClick={() => {
        onSelect(item);
      }}
      style={{ cursor: "pointer" }}
    >
      <li>{item.title}</li>
      <li>{item.description}</li>
      <hr />
    </div>
  );
}

export default ListItem;
