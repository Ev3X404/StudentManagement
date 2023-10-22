import studentLogo from "../image/student-logo.svg";
import "./header.css";
export default function Header() {
  return (
    <nav>
      <img src={studentLogo} alt="student-logo" className="logo" />
      <a href="#">Home</a>
    </nav>
  );
}
