import React, {useState} from "react"
import imghidden from './images/show-password.png';
import imgshow from './images/view.png';

export default function Manager(props) {
    const[inputText , setInputText] = useState({
        url : "",
        user : "",
        pass : ""
    });
    
    function handleClick() {
        props.onClick(inputText);
        props.fakeClicks();
        setInputText({
            url : "",
            user : "",
            pass : ""
        })
    }
    function handleChange(event){
        const{name, value} = event.target;
        setInputText(prevInput=> {
           return {...prevInput, [name] : value}
           
        });
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    return(
        <div className="parent-container-div">
            <div className="container-div">
                <div>
                    <h1><span className="pass-me-div">&lt;</span>Pass<span className="pass-me-div">/&gt;</span>Me</h1>
                    <h3>Keep your <span>passwords</span> Secure!</h3>
                    <input name = "url" onChange={handleChange}  value = {inputText.url} type="text" placeholder="Enter website URL" />
                    <input   name = "user" onChange={handleChange} value={inputText.user} type="text" placeholder="UserName" />
                    <div className="password-container">
            <input
              name="pass"
              onChange={handleChange}
              value={inputText.pass}
              type={isPasswordVisible ? 'text'  : 'password'}
              placeholder="PassWord"
              
            />
            <button
              className="password-toggle-button"
              onClick={handleTogglePasswordVisibility}
              
            >
              <img
                src={isPasswordVisible ? imghidden : imgshow}
                alt={isPasswordVisible ? 'Hide password' : 'Show password'}
              />
            </button>
          </div>
                    
                </div>
                
            </div>
            <button onClick={handleClick} type="submit" className="submit-button">
                <div className="submit-btn">
                    <span className="submit-mouse-btn">
                    <lord-icon
                    
                    src="https://cdn.lordicon.com/uxehjwfw.json"
                    trigger="hover"
                    stroke="bold"
                    style={{"width": "40px", "height" : "30px"}}>
                </lord-icon>
                    </span>
                
                
                </div>
                
                Save</button>
            
        </div>

    );
}
