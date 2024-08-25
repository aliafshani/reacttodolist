import React, { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

const TodoMainApp = () => {
  const [dataApp, setDataApp] = useState([]);

  const deleteItem = (id) => {
    setDataApp(dataApp.filter((item) => item.id != id));
  };

  const finishItem = (id) => {
    setDataApp((items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="todoMainApp">
      <h1>Todo</h1>
      <Header setDataApp={setDataApp} />
      {dataApp.map((item) => (
        <Todo
          key={item.id}
          item={item}
          finishItem={finishItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoMainApp;
