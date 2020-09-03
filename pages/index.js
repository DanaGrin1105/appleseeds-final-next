import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/Home.module.css';
import HomepageMain from '../components/homepage-main'
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dream Wed | Homepage</title>
      </Head>
      <Header />
      <HomepageMain/>
      <Footer/>
    </>
  )
}
