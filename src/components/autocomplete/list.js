import ListItem from "./listItem";

function List({ data, onSelect }) {
  return (
    <div>
      {data.map((res, index) => {
        return <ListItem key={index} item={res} onSelect={onSelect} />;
      })}
    </div>
  );
}

export default List;
