import React, { useState } from "react";
import "./ToDoStatic.scss";

const ToDoStatic = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edtId, setEdtId] = useState("");
  const [err, setErr] = useState("");

  const handleTask = (e) => {
    setTask(e);
    if (list.includes(e)) {
      setErr("Given Task is already added , So please add different Task");
    } else {
      setErr("");
    }
  };

  const handleAdd = () => {
    if (task !== "" && !list.includes(task)) {
      setList([...list, task]);
      setTask("");
    } else {
      setErr("Please Enter valid and different Task");
    }
  };

  const handleEdit = (i) => {
    if (edtId === "") {
      setEdtId(i);
      setTask(list[i]);
      const listCloneE = [...list];
      listCloneE.splice(i, 1);
      setList([...listCloneE]);
      setErr("");
    } else {
      setErr(
        "Please update previous selected Task then select another Task to Edit "
      );
    }
  };

  const handleUpdate = () => {
    // setList(list.splice(EdtId, 1, Task));
    if (task !== "" && !list.includes(task)) {
      // const listCloneU = [...list];
      // listCloneU.splice(edtId, 1, task);
      // setList([...listCloneU]);

      const listCloneU = [...list.slice(0, edtId), task, ...list.slice(edtId)];
      setList([...listCloneU]);
      setEdtId("");
      setTask("");
    } else {
      setErr("Please enter valid and Different task");
    }
  };

  const handleDelet = (i) => {
    const listCloneD = [...list];
    const deletItem = listCloneD.filter((_, index) => {
      return i !== index;
    });
    setList(deletItem);
    setErr("");
  };

  return (
    <>
      <div className="main-container">
        {/* Input Section */}
        <h2 id="heading-static">To Do App Static</h2>

        <div className="input-todo">
          <input
            type="text"
            placeholder="Please Enter Your ToDo"
            className="input"
            value={task}
            onChange={(e) => handleTask(e.target.value)}
          />
          {edtId !== "" ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleAdd}> Add </button>
          )}
        </div>

        {/* Error Section */}
        <div className="error">{err}</div>

        {/* Read Data */}
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
