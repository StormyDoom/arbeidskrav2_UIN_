
export default function ShoppingItem({id, title, number, setShoppingList}){

    function handleNumberChange(e){
        const value = e.target.value
        setShoppingList(prev => prev.map(item => item.id === id ? {...item, number: value}: item))
    }

    return (
        <article className="products">
            <input type="checkbox"></input>
            <p>{title}</p>
            <input className="total-right" type="number" value={number} onChange={handleNumberChange}></input>
        </article>
    )
}