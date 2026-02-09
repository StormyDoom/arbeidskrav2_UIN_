export default function AddForm(){
    return (
        <form className="form">
            <label>Vare</label>
            <input name="title" type="text" placeholder="Egg.." required></input>
            <label>Antall</label>
            <input name="number" type="number" placeholder="2" min="1" required></input>
            <button className="submit-btn">Legg til vare</button>
        </form>
    )
}