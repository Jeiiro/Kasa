export default function Banners({title, showTitle=true, className}) {
    return (
        <div className={className}>
        {showTitle && <h1 className="Main-title">{title}</h1>}
      </div>
    )
}