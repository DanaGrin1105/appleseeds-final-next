import Header from '../components/header';
import PageTitle from '../components/page-title';
import weddingPackages from '../data/wed-packages.json';
import Card from '../components/card'

export default function WeddingPackagesPage() {
    return (
        <>
            <Header />
            <PageTitle title={"Our Wedding Packages"}/>
            <div className="wed-packages-wrap">
                {weddingPackages.map((weddingPackage) => {
                    const { id, imgUrl, name, description, price, path } = weddingPackage;
                    return (
                        <Card imgUrl={imgUrl}
                            title={name}
                            text={description}
                            price={price}
                            link={id}
                            key={id}
                            path={ "/wedding-packages" }
                            pageLink="[wedPackage]"
                        />)
                })}
            </div>
        </>
    )
}