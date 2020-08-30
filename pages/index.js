import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dream Wed</title>
      </Head>

      <main className={styles.main}>
        <h1>Hello Dream Wed</h1>
        <nav>
          <ul>
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
      </main>

    </div>
  )
}
