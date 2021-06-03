function ListItem({ item, onSelect }) {
  return (
    <div
      onClick={() => {
        onSelect(item);
      }}
      style={{ cursor: "pointer" }}
    >
      <li>{item.name}</li>
      <li>{item.email}</li>
      <hr />
    </div>
  );
}

export default ListItem;
