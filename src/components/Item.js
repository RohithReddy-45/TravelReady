export default function Item({ item, onDeleteItem, onToggleItem }) {
  const isChecked = item.packed;
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={isChecked}
          onChange={() => onToggleItem(item.id)}
          checked={isChecked}
        />
        <span style={isChecked ? { textDecoration: "line-through" } : {}}>
          {item.itemQuantity} {item.itemDescription}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
