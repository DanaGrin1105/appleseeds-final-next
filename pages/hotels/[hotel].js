import { useRouter } from 'next/router';
import hotels from '../../data/hotels.json'

const Hotel = () => {
  const router = useRouter()
  const { hotel: hotelId } = router.query;
  
  const hotel = hotels.find((hotel) => hotel.id === hotelId)
  console.log(hotels)
  const { name, moreInfo, imgUrl } = hotel;

  return (
      <div>
          <h1>{ name }</h1>
          <img src={ imgUrl }/>
          <p><b>This hotel includes:</b></p>
          {/* <ul>
          { moreInfo.includes.map(i => <li>{i}</li>)}
          </ul>
          <p><b>Please provide us with the following:</b></p>
          <ul>
          { moreInfo.provide.map(i => <li>{i}</li>)}
          </ul> */}
      </div>
  )
}

export default Hotel