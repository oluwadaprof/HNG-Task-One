import "./home.scss";
import BtnLink from "../../components/BtnLink/BtnLink";
import Icon from "../../components/Icon/Icon";
import Profile from "../../components/profile/Profile";

const Home = () => {
  return (
    <div>
      <Profile />
      <BtnLink />
      <Icon />
    </div>
  );
};

export default Home;
