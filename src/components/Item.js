export default function Item({ item, onCheckBox }) {
  return (
    <div className="item">
      <input
        id={item.id}
        type="checkbox"
        onChange={() => onCheckBox(item.id)}
        checked={item.checked}
      />
      <label htmlFor={item.id} className={item.checked ? "checked" : ""}>
        {item.name}
      </label>
    </div>
  );
}
