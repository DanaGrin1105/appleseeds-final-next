
class PageTitle extends React.Component {
    render() {
        const { title, imgUrl, subtitle } = this.props;
        return (
            <div className="page-title">
                <h1>{title}</h1>
                <img src={imgUrl} />
                <h2>{subtitle}</h2>
            </div>
        );
    }
}

export default PageTitle