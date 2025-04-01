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
          <a href="#landing-section">Landing</a>
        </li>
        <li>
          <a href="#about-us-section">About</a>
        </li>
        <li>
          <a href="#products-section">Products</a>
        </li>
        <li>
          <a href="#contact-us-section">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
