import { useState } from "react";
import "./AddForm.css";
export default function Addform(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const { students, setStudents } = props;

  const [currentId, setCurrentId] = useState(1);

  function saveStudent(event) {
    event.preventDefault();
    if (!name || !age) {
      alert("กรุณาใส่ข้อมูลให้ครบ , Please enter all the information");
    } else {
      const newId = currentId.toString().padStart(4, "0");
      const newStudent = {
        id: newId,
        name: name,
        gender: gender,
        age: age,
      };
      setStudents([...students, newStudent]);
      setName("");
      setAge("");
      setGender("male");
      setCurrentId(currentId + 1);
    }
  }

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <div>
          <label>ชื่อนักเรียน</label>
          <input
            type="text"
            // name="name"
            className="input-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>อายุ</label>
          <input
            className="input-age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          ></input>

          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
          </select>
        </div>
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  );
}
