import idPic from "./img/id.jpg";
import mailLogo from "./img/email.png";
import linkedInLogo from "./img/linkedin.png";

export default function Header(){
    return(
        <div className="profile">
            <div>
                <img className="profile-pic" src={idPic} alt="profile" ></img>
                <h1 className="profile-name">Aneeq Ahmadh</h1>
                <h3 className="profile-position">Full Stack Developer</h3>
                <small>shaneeqa.wordpress.com</small>           
            </div>
            <div>
                <button text="Email">
                    <img className="profile-icon" src={mailLogo} alt="email"></img>Email</button>
                <button  text="LinkedIn">
                    <img className="profile-icon" src={linkedInLogo} alt="linkedin"></img> LinkedIn</button>
            </div>
        </div>
    )
}