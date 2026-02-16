
export default function ShoppingItem({checked, id, title, number, setShoppingList, setCheckedItems, checkedItems}){

    //Denne funksjonen er noe vi har gjort lignende med på Legodudes for å få handlekurven til å fungere

    function handleNumberChange(e){
        const value = e.target.value
        setShoppingList(prev => prev.map(item => item.id === id ? {...item, number: value}: item))
    }

    //Dette er en funksjon jeg har fått fra CoPilot og som ligner veldig på den andre funksjonen min. Lenke til samtalen: https://copilot.microsoft.com/shares/mQMC1viPcW1eLxMjWgduG OBS: Dette er en chat som jeg har prøvd å kopiere fra Windows panel til chat på CoPilot nettsiden. Det går ikke ann å kopiere lenke fra CoPilot Windows panel. Jeg har også lagt til en PDF hvor det er skjermbilder av resultatet og prompt fra CoPilot.

    function handleCheckboxChange(e){
        const value = e.target.checked;
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