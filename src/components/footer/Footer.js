import "./footer.scss";
import zuri from "../../assets/zuri.png";
import I4G from "../../assets/I4G.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={zuri} alt="zuri-logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="I4G-logo" />
    </div>
  );
};

export default Footer;
