import "./studentlist.css";
import Item from "./item";
import { useState } from "react";

export default function StudentList(props) {
  const [show, setShow] = useState(true);
  const { students, deleteStudents } = props;

  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน {students.length}</h1>
          <button onClick={() => setShow(!show)} className="hide-btn">
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudents={deleteStudents} />
          ))}
      </ul>
    </>
  );
}
