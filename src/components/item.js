import "./item.css";
export default function Item(props) {
  const { data, deleteStudents } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <div className="info">
          <div>รหัส : {data.id}</div>
          <div>ชื่อ : {data.name}</div>
          <div>อายุ : {data.age}</div>
          <div>เพศ : {data.gender === "male" ? "ชาย" : "หญิง"}</div>
        </div>
        <button onClick={() => deleteStudents(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
}
