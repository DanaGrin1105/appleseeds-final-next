import Header from './header';
import Multistep from 'react-multistep'

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Make your dream come true</h1>
        <p className="text-title">
          bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
        <Multistep showNavigation={true} steps={[{ name: '1', component: <div>step1</div> }, { name: '2', component: <div>step2</div> }, { name: '3', component: <div>step3</div> }]}/>
      </div>
    );
  }
}

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <div className="login-popup-wrapper">
          {/* <img src="img.png" /> */}
        </div>
        <p className="popup-text">pop-up text</p>
      </div>

    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="hp-wrapper">
          <video autoPlay="true" loop="true" >
            <source src="https://giphy.com/gifs/WWYSFIZo4fsLC/html5" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App