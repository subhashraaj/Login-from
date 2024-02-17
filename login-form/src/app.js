import "./app.css";
import { useState } from "react";

let invalidEmail = "none";
let invalidPassword = "none"
let invalidCfnPwd = "none";
let borderColors = [null, "blue","green", "red"]

const emailvalue = document.querySelector(".email").value


const validateEmail = (emailvalue) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(emailvalue).toLowerCase());
}

export const App = () => {
    const [inputValue, checkMail] = useState(0);
    const checkEmail = () => {
        if (!validateEmail(emailvalue)){
            changeBoderColor(3);
            checkMail(invalidEmail="block");
        }
    }
    
        const [index, setIndex] = useState(0);
        const changeBoderColor = (index) => {
            setIndex(index)
    }

    return (
        <div>
            <form>
                <label>Email:</label>
                <input style={{borderColor:borderColors[index]}} onClick={changeBoderColor} onBlur={checkEmail} className="email" type="email"></input>
                <p style={{display:invalidEmail}} className="invalid">Invalid email Format</p>
                <label>Password:</label>
                <input className="password" type="password"></input>
                <p style={{display:invalidPassword}} className="invalid">Password must be at least 8 charactes</p>
                <label>Confirm Password:</label>
                <input className="confirmPassword" type="password"></input>
                <p style={{display:invalidCfnPwd}} className="invalid">Password do not match</p>
                <button>Sign Up</button>
            </form>
        </div>
    )
}