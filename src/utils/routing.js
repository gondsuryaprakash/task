import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import DashBoard from '../screen/dashboard'
import LoginPage from '../screen/login'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
const Routing = (props) => {
    const history=useHistory()
    useEffect(() => {
        if(props.loggedIn|| localStorage.getItem("user"))
        {
            history.push('/')
        }
        else{
            history.push('/login')
        }
       
    }, [props.loggedIn,localStorage.getItem("user")])
    return (
    
        <Switch>
          <Route exact path='/' component={DashBoard}></Route>
          <Route exact path='/login'>
              <LoginPage></LoginPage>
          </Route>
        </Switch>
      
    )
  }
export default Routing