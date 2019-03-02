import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.props.username.user}
          </p>
          <button onClick={() => this.props.updateUser('kim')}>
            update
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer,
  username: state.userReducer
})

// 액션을 dispatch하는 function을 props로 내려받기
// const mapActionToProps = (dispatch) => ({
//   modifyUser: (name) => dispatch(updateUser(name))
// })


export default connect(mapStateToProps, {updateUser})(App);
