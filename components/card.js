import Link from 'next/link';

class Card extends React.Component {
    render() {
        const { imgUrl, title, text, price, link, pageLink, path } = this.props;
        const hasOnlyLink = link && (!pageLink && !path);
        return (
            <div className="card">
                <img src={imgUrl} />
                <div className="description">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <h4>From: {price}</h4>
                {hasOnlyLink
                    ? <a href={link}>More info</a>
                    : (
                        <Link href={`${path}/${pageLink}`} as={`${path}/${link}`}>
                            <a>More info</a>
                        </Link>
                    )}
            </div>
        );
    }
}

export default Card