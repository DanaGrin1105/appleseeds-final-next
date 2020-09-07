import Link from 'next/link';

class Card extends React.Component {
    render() {
        const { imgUrl, title, text, price, link, pageLink, path } = this.props;
        return (
            <div className="card">
                <img src={imgUrl} />
                <div className="description">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <h4>From: {price}</h4>
                <Link href={`${path}/${pageLink}`} as={`${path}/${link}`}>
                    <a>More info</a>
                </Link>
            </div>
        );
    }
}

export default Card