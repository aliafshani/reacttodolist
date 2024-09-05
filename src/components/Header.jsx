import React, { useState } from "react";

const Header = ({ setDataApp }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!title) return;

    let newTAsk = {
      id: Date.now(),
      title: title,
      status: false,
    };

    setDataApp((item) => [...item, newTAsk]);

    setTitle("");
  };
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="header">
      <form onSubmit={submitHandler} action="">
        <input
          className=""
          onChange={onChangeHandler}
          value={title}
          type="text"
        />
        <button className="px-3">add</button>
      </form>
    </div>
  );
};

export default Header;
