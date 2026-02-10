import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>React Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/write">Write</Link>
      </div>
    </div>
  );
}

export default Navbar;
