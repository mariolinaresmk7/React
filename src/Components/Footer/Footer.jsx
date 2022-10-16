import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="row footer">
      <p className="icon-title ">
        <Link to={"/"} className="span-title" style={{ textDecoration: "none", color: "#F4F6F7" }}>H2 <span>gamers</span></Link>
      </p>
      <p>gamers por naturaleza</p>
      <p>© 2022 Copyright: Linares Mario</p>
    </div>
  );
};
export default Footer;
