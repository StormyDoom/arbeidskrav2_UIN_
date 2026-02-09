export default function AddForm({ShoppingItem, setShopping, setShoppingList,}){
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        
        setShopping((prev) => ({...prev,[name]: value}))

        console.log({[name]: value})
    }

    const handleClick = (e)=>{
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setShoppingList((prev) =>([...prev, {id:uniqId,...ShoppingItem}]))
    }

    return (
        <form className="form" onSubmit={handleClick}>
            <label>Vare</label>
            <input name="title" type="text" placeholder="Egg.." required value={ShoppingItem.title} onChange={handleChange}></input>
            <label>Antall</label> 
            <input name="number" type="number" placeholder="2" min="1" required onChange={handleChange} value={ShoppingItem.number}></input>
            <button className="submit-btn">Legg til vare</button>
        </form>
    )
}