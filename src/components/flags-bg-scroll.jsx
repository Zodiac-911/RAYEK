import "../styles/login.css";
import flagsBG from "../assets/flags-background.png";

function FlagsBgScroll() {
  return (
    <div className="flags-container">
      <img className="flags-bg" src={flagsBG} alt="" />
      <img className="flags-bg" src={flagsBG} alt="" />
    </div>
  );
}
export default FlagsBgScroll;
