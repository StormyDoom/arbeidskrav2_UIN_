import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ShoppingProducts, setShoppingList}){
    return (
        <section className="shopping-list">
            {ShoppingProducts.map((item) => <ShoppingItem key={item.id} title={item.title} number={item.number} setShoppingList={setShoppingList} isSelected={item.isSelected}/>)}
        </section>
    )
}