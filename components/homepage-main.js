import stlyes from '../styles/HomepageMain.module.css'
class HomepageMain extends React.Component {
    render() {
      return (
        <main className={ stlyes.main }>
            <video className={ stlyes['bg-video'] } autoPlay="true" loop="true" >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>
            <div className="welcome">
        <h1>Make your dream come true</h1>
        <p className="welcome-text">
          bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
            </div>
            <div className="start">
              <button type="button">Your dream journey starts here</button>
            </div>
        </main>
      );
    }
  }

  export default HomepageMain