export default function AddForm(){
    return (
        <form>
            <label htmlFor="producttitle">Vare</label>
            <input name="title" type="text" placeholder="Egg.." required></input>
            <label htmlFor="totaltitle">Antall</label>
            <input name="total" type="number" placeholder="2" min="1" required></input>
            <button>Legg til vare</button>
        </form>
    )
}