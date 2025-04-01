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
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>conatct</li>
        <li>login</li>
      </ul>
    </nav>
  );
}
export default NavBar;
