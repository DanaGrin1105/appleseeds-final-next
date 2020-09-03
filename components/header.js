import Link from 'next/link';

class Header extends React.Component {
    render() {
      return (
        <nav>
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
            <Link href="/accommodation">
                <a>Accommodation</a>
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
      );
    }
  }

  export default Header