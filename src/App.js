import './App.css';
import Routing from './utils/routing'
import { connect } from 'react-redux';
function App(props) {
  return (
    <div className="App">
      <Routing loggedIn={props.loggedIn} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.isLoggedIn
  }

}
export default connect(mapStateToProps,null)(App);
