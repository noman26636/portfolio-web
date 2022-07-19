import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Me from "../../img/me.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import ThumbUp from "../../img/thumbup.png"
import Crown from "../../img/crown.png"

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I Am</span>
          <span>Noman Monis</span>
          <span>
            Front end Developer with high level of Experience in web designing
            and development, producing the Quality work.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="github image" />
          </a>
          <img src={LinkedIn} alt="linkedIn image" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Me} alt="Me" />
        <div>
            <FloatingDiv image={ThumbUp}/>
            {/* <FloatingDiv image={Crown}/>           */}
          </div>
      </div>
    </div>
  );
}

export default Intro;
