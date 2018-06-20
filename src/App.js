import React, { Component } from 'react';
import logo from './logo.svg';
import './Component.css';
import MySideNav from './components/MySideNav';
import {Grid} from 'react-bootstrap';
import Content from './components/Content';

class App extends Component {
state = {
    data: null,
    showSideNav: true
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };



  render() {
    return (
      <div >
        <Grid>
        <MySideNav showSideNav={this.state.showSideNav} />
        <Content showSideNav={this.state.showSideNav} 
        onSideBarCollapseToggle = {() => {
          this.setState({showSideNav:!this.state.showSideNav})
        }}/>
        </Grid>
      </div>
    );
  }
}

export default App;