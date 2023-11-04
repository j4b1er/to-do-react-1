import Item from "./Item";

export default function Items({ data, onCheckBox, filterValue }) {
  return filterValue === "all"
    ? data.map((item) => (
        <Item item={item} onCheckBox={onCheckBox} key={item.id} />
      ))
    : filterValue === "active"
    ? data
        .filter((item) => item.checked !== true)
        .map((item) => (
          <Item item={item} onCheckBox={onCheckBox} key={item.id} />
        ))
    : data
        .filter((item) => item.checked !== false)
        .map((item) => (
          <Item item={item} onCheckBox={onCheckBox} key={item.id} />
        ));
}
