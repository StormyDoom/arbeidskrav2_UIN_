
export default function ShoppingItem({checked, id, title, number, setShoppingList, setCheckedItems, checkedItems}){

    function handleNumberChange(e){
        const value = e.target.value
        setShoppingList(prev => prev.map(item => item.id === id ? {...item, number: value}: item))
    }

    function handleCheckboxChange(e){
        const value = e.traget.checked;
        setCheckedItems(prev => prev.map(item => item.id === id ? {...item, checked: value}: item))
    }

    return (
        <article className="products">
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange}></input>
            <p>{title}</p>
            <input className="total-right" type="number" value={number} onChange={handleNumberChange}></input>
        </article>
    )
}