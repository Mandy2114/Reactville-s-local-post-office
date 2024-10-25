import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/mailboxes"></Link>
        </li>
        <li>
          <Link to="/new-mailbox"></Link>
        </li>
      </ul>
    </Nav>
) }

export default NavBar;