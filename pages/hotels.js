import Header from '../components/header';
import PageTitle from '../components/page-title';
import hotels from '../data/hotels.json';
import Card from '../components/card'

export default function HotelsPage() {
    return (
        <>
            <Header />
            <PageTitle title={"Our Wedding & Honeymoon Hotels Suggestions"}/>
            <div className="hotels-page-wrap">
                {hotels.map((hotel) => {
                    const { id, imgUrl, name, description, price, link } = hotel;
                    return (
                        <Card imgUrl={imgUrl}
                            title={name}
                            text={description}
                            price={price}
                            link={link}
                            key={id}
                        />)
                })}
            </div>
        </>
    )
}