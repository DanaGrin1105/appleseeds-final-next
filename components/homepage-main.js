import stlyes from '../styles/HomepageMain.module.css'
class HomepageMain extends React.Component {
  render() {
    return (
      <main className={stlyes.main}>
        <div className="welcome">
          <p className="welcome-text">
            Welcome to Seychelles - the paradise islands in the Indian Ocean! Destination weddings are getting more and more popular among couples of all ages.
        One of the most exclusive destinations for eloping is definitely the Seychelles with its untouched nature, the variety of stunning colors, the turquoise waters, the white powdersanded beaches and the lush vegetation – they are just breathtaking and offer an awesome scenery for your special day.</p>
        </div>
        <div className="start">
          <button type="button">Take the first step to make your dream come true</button>
        </div>
      </main>
    );
  }
}

export default HomepageMain