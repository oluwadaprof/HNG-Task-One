import "./profile.scss";
import tobi from "../../assets/tobi.jpg";
import dot from "../../assets/dot.png";
import share from "../../assets/share.png";

const Profile = () => {
  return (
    <div className="profile">
      <p id="slack" >Pandora</p>
      <div>
        <img className="profile__img" id="profile__img" src={tobi} alt="Tobi" />
        <p id="twitter">@oluwadaprof</p>
      </div>
      <img className="share" id="profile__img" src={share} alt="share__btn" />
      <img className="dot" id="profile__img" src={dot} alt="dot__btn" />
    </div>
  );
};

export default Profile;
