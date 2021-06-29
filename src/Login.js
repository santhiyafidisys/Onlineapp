import React from 'react';
import styles from './Style.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



class  Login extends React.Component  {
  constructor(props) {
    super(props);
    this.state={ email:'', pwd:''}
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  handleChangeEmail (event) {
    this.setState({email: event.target.email});
  }
  handleChangePassword (event) {
    this.setState({pwd: event.target.pwd});
  }
  handleClick(e) {
  console.log("click happened");
	alert('login successfully');
	e.preventDefault();
	// this.fetchApi();
  }  
	// fetchApi() {
	// 	fetch('/home')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 		console.log("homepage");
	// 		})
	// }
  render() {
    return (
      
      <Router>
        <div className={styles.loginpage}>
				<div>
            <img className={styles.image} src="theme-illustration.png" alt=" "/>
            </div>
          <div className={styles.loginfrom}>
              <form>
                <h4>Enter your Email id</h4>
                <input type="text" name="email" value={this.state.name}placeholder="email..."  onChange={this.handleChangeEmail} required/>
                <h4>Enter your Passwords</h4>
                <input type="password" name="password" value={this.state.pwd}placeholder="password"  onChange={this.handleChangePassword} required/>
              </form>
              
                <button type="button" onClick={this.handleClick}>click me</button>

              
            </div>

          </div>
        
  
      </Router>
    )

  }
  
}


export default Login;