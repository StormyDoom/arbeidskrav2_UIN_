
export default function ShoppingItem({title}){
    return (
        <article className="products">
            <input type="checkbox"></input>
            <p>{title}</p>
            <input className="total-right" name="total" type="number" min={1} placeholder="1"></input>
        </article>
    )
}