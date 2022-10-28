import "./App.css";
import BtnLink from "./components/BtnLink/BtnLink";
import Footer from "./components/footer/Footer";
import Icon from "./components/Icon/Icon";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <BtnLink />
      <Icon />
      <Footer/>
    </div>
  );
}

export default App;
