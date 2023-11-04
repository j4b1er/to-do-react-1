import InputItem from "./InputItem";
import Items from "./Items";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [dataList, setDataList] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  function handleSetDataSubmit(newItem) {
    setDataList([...dataList, newItem]);
  }

  function handleCheckBox(id) {
    setDataList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleFilters(e) {
    const filter = e.target.id;
    setFilterValue(filter);
  }

  return (
    <>
      <div className="to-do-app">
        <h1>Things to do</h1>
        <InputItem onSetDataSubmit={handleSetDataSubmit} />
        <Items
          data={dataList}
          filterValue={filterValue}
          onCheckBox={handleCheckBox}
        />
      </div>
      <Footer data={dataList} onFilters={handleFilters} />
    </>
  );
}
