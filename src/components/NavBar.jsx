import "./NavBar.css";
function NavBar() {
  return (
    <nav className="style">
      <div className="logo">
        <h1>
          <strong>Logo</strong>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#landing">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#product">product</a>
        </li>
        <li>
          <a href="#contact">conatct</a>
        </li>
        <li>login</li>
      </ul>
    </nav>
  );
}
export default NavBar;
