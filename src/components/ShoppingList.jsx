import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ShoppingProducts, setShoppingList, setCheckedItems, checkedItems}){
    return (
        <section className="shopping-list">
            {ShoppingProducts.map((item) => <ShoppingItem key={item.id} id={item.id} title={item.title} number={item.number} checked={checkedItems.find(x => x.id === item.id)?.checked ?? false} setCheckedItems={setCheckedItems} setShoppingList={setShoppingList}/>)}
        </section>
    )
}