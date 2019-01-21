import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Players from './components/Players/Players';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  particles: {    
    number: {
      value: 100,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}
const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    password: '',
    email: '',
    joined: new Date()
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState

  }


  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  onRouteChange = (route)=>{
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  render() {
    const { isSignedIn, imageUrl, route, box} = this.state; 
    return (
      <div className="App">
           <Particles className='particles'
             params={particlesOptions}
           />
           <Navigation isSignedIn={isSignedIn} onRouteChange= {this.onRouteChange}/>
           { route === 'home' 
              ? <div>
                <Players/>
                </div>               
              : (
                  route === 'signin' 
                  ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                  : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                  
                ) 
           }
      </div>
    );
  }
}

export default App;
