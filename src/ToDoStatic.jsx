import React, { useState } from "react";
import "./ToDoStatic.scss";

const ToDoStatic = () => {
  const [Task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [EdtId, setEdtId] = useState("");

  const handleTask = (e) => {
    setTask(e);
  };

  const handleAdd = () => {
    if (Task !== "") {
      setList([...list, Task]);
    } else {
      setTask("Please Enter valid Task");
    }
    setTask("");
  };

  const handleEdit = (i) => {
    setEdtId(i);
    setTask(list[i]);
  };

  const handleUpdate = () => {
    // setList(list.splice(EdtId, 1, Task));
    const listCloneU = [...list];
    listCloneU.splice(EdtId, 1, Task);
    setList([...listCloneU]);
    setEdtId("");
    setTask("");
  };

  const handleDelet = (i) => {
    const listCloneD = [...list];
    const deletItem = listCloneD.filter((_, index) => {
      return i !== index;
    });
    setList(deletItem);
  };

  return (
    <>
      <div className="main-container">
        <h2 id="heading-static">To Do App Static</h2>

        <div className="input-todo">
          <input
            type="text"
            placeholder="Please Enter Your ToDo"
            className="input"
            value={Task}
            onChange={(e) => handleTask(e.target.value)}
          />
          {EdtId !== "" ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleAdd}> Add </button>
          )}
        </div>

        <div className="list">
          {list
            ? list.map((value, i) => {
                return (
                  <div className="itemWrap" key={i}>
                    <div className="listItems">{value}</div>
                    <div className="btns">
                      <button onClick={() => handleEdit(i)}>Edit</button>
                      <button onClick={() => handleDelet(i)}>Delete</button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ToDoStatic;
