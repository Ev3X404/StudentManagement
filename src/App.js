import Header from "./components/header";
import "./App.css";
import StudentList from "./components/studentlist";
import React, { useState } from "react";
import Addform from "./components/AddForm";

function App() {
  const [students, setStudents] = useState([]);

  function deleteStudents(id) {
    setStudents(students.filter((item) => item.id !== id));
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Addform students={students} setStudents={setStudents} />
        <StudentList students={students} deleteStudents={deleteStudents} />
      </main>
    </div>
  );
}

export default App;
