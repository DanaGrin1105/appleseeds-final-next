class Card extends React.Component {
    render() {
        const { imgUrl, title, text, price, link } = this.props;
        return (
            <div className="card">
                <img src={imgUrl} />
                <div className="description">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <h4>From: {price}</h4>
                <button type="button">{link}</button>
            </div>
        );
    }
}

class Cards extends React.Component {
    render() {
        return (
            <div className="main">
                <Card imgUrl={"img-fast-track.jpg"} title={"Fast Track"} text={"fast fast fast"} price={"$ 550"} link={"link"} />
                <Card imgUrl={"img-simplicity.jpg"} title={"Simplicity Special"} text={"simple simple simple"} price={"$ 750"} link={"link"} />
                <Card imgUrl={"img-signature.jpg"} title={"Signature"} text={"signature signature signature"} price={"$ 950"} link={"link"} />
            </div>
        );
    }
}

export default Cards