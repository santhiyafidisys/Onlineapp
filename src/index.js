import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styles from './Style.module.css';
import Login from './Login';
import Home from './Homepage';




class List extends React.Component {
    render() {
        return (
         <Router>
          <div className={styles.Header}>
            <div  className={styles.Navbar}>
              <ul className={styles.Navlink}>
                <li>
                  <Link to="/Home">Homepage</Link>
                </li>
                <li>
                  <Link classNames={styles.text} to="/Login">Login</Link>
                </li>
              </ul>
            </div>

               
            
           
   
             <Switch>
             <Route  path="/Home">
               <Home />
             </Route>
             {/* <Route path="/about">
               <About />
             </Route> */}
             <Route  path="/" component={Login} >
               <Login />
             </Route>

           </Switch>
         </div>
       </Router>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('root'))

