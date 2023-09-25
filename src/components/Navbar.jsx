import { Link, NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <span className="logo">MixMaster</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newslatter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
