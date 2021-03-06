import { useRouter } from 'next/router';
import weddingPackages from '../../data/wed-packages.json'

const Wedpackage = ({ weddingPackages }) => {
  const router = useRouter()
  const { wedPackage } = router.query;
  console.log(wedPackage)
  const weddingPackage = weddingPackages.find((wedPack) => wedPack.id === wedPackage)
  const { name, moreInfo, imgUrl } = weddingPackage;

  return (
      <div>
          <h1>{ name }</h1>
          <img src={ imgUrl }/>
          <p><b>This package includes:</b></p>
          <ul>
          { moreInfo.includes.map(i => <li>{i}</li>)}
          </ul>
          <p><b>Please provide us with the following:</b></p>
          <ul>
          { moreInfo.provide.map(i => <li>{i}</li>)}
          </ul>
      </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      weddingPackages
    }
  }
}

export async function getStaticPaths() {
  const paths = weddingPackages.map((wedPack) => ({
    params: { wedPackage: wedPack.id }
  }));
  return {
    paths,
    fallback: false
  };
}

export default Wedpackage