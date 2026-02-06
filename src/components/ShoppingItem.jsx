export default function ShoppingItem({title, number}){
    return (
        <article className="products">
            <h2>{title}</h2>
            <p>{number}</p>
            <input type="checkbox"></input>
        </article>
    )
}