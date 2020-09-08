import Link from 'next/link';

class Header extends React.Component {
  state = {
    isHambugerOpen: false
  }
  toggleMenu  = () => {
    this.setState({ isHambugerOpen: !this.state.isHambugerOpen })
  } 


    render() {
      return (
        <>
        <div className="hamburger" onClick={ this.toggleMenu } >
          =
        </div>
        <nav className={`menu-nav ${ this.state.isHambugerOpen ? '' : 'hide-menu' }`}>
          <ul className="navbar">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/wedding-packages">
                <a>Wedding Packages</a>
              </Link>
            </li>
            <li>
            <Link href="/hotels">
                <a>Hotels</a>
              </Link>
            </li>
            <li>
            <Link href="/event-planner">
                <a>Event Planner</a>
              </Link>
            </li>
            <li>
            <Link href="/info">
                <a>Info</a>
              </Link>
            </li>
            <li>
            <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <a>Contact</a>
              </Link> 
            </li>
          </ul>
        </nav>
        </>
      );
    }
  }

  export default Header