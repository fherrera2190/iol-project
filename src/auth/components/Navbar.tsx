import { Link } from "react-router-dom";
import logo from "../../assets/images/iol-logo-v7.svg";

export const Navbar = () => {
  return (
    <div className="border border-bottom shadow-sm">
      <div className="container">
        <Link to="/" style={{ width: "170px", height: "42px" }}>
          <img src={logo} alt="IOL" className="my-2" />
        </Link>
      </div>
    </div>
  );
};
