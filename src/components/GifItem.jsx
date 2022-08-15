
export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} width="200px" height="200px" />
            <p>{title}</p>
        </div>
    )
}
