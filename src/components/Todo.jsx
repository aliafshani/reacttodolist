import React from "react";

const Todo = ({ item, finishItem, deleteItem }) => {
  return (
    <div className="Todo">
      <h4 className={item.status ? "finisher" : ""}>{item.title}</h4>
      <div>
        <button onClick={() => deleteItem(item.id)} className="btn delete">
          delete
        </button>
        <button onClick={() => finishItem(item.id)} className="btn finish">
          finish
        </button>
      </div>
    </div>
  );
};

export default Todo;
