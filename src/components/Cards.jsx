export default function Cards({data}) {
    return (
        <>
            <img className="bgCard" src={data.cover} alt={data.title} />
            <h2 className="locationTitle"> {data.title} </h2>
        </>
    )
}