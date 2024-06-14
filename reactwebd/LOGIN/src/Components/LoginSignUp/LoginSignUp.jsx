import "./LoginSignUp.css"; // Add a semicolon at the end to terminate the statement
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useState } from "react";

const App = () => {
    const [action, setAction] = useState("Login");
  return (
    <div className="outer">
      <div className="container">
        <div className="Header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>}
          

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email-id" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "SignUp" ? <div></div> : <div className="forget-password">Lost Password? <span>Click Here!</span></div>}
    
        <div className="submit-cointainer">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("SignUp")}}>SignUp</div>
          <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
      </div>
      </div>
  );
};

export default App;
