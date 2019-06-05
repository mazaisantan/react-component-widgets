import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './login.scss';

class Login extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <form className="login animate" /* action="/action_page.php" */>
            <span className="close" title="Close Modal">&times;</span>
            <div className="img-container">
                <img style={{ backgroundImage: "url(&quot;./img_avatar2.png&quot;)"}} src= {require('./img_avatar2.png')} alt="Avatar" className="avatar"/>
            </div>
        
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
        
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                
                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>
        
            <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        )
    }
}

Login.propTypes = {

}
export default Login