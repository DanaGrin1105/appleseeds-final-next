import { withRouter } from 'next/router'
import stlyes from '../styles/HomepageMain.module.css'

class HomepageMain extends React.Component {
  routeToEventPlanner = () => {
    this.props.router.push('/event-planner')
  }
  render() {
    return (
      <main className={stlyes.main}>
        <div className="welcome">
          <p className="welcome-text">
            Welcome to <em>Seychelles</em> - the paradise islands in the Indian Ocean! <br></br> 
        One of the most exclusive destinations for eloping, with its untouched nature, the variety of stunning colors, the turquoise waters, the white powdersanded beaches and the lush vegetation – <em> the Seychelles</em> are just breathtaking and offer an awesome scenery for wedding.</p>
        </div>
        <div className="start">
          <button type="button" onClick={this.routeToEventPlanner}>Take the first step to make your dream come true</button>
        </div>
      </main>
    );
  }
}

export default withRouter(HomepageMain)