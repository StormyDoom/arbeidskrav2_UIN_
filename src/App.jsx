import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import ShoppingItem from './components/ShoppingItem'

function App() {
  
  const ShoppingProducts = [
    {
      id: 0,
      title: "Melk",
      number: "2"
    },
    {
      id: 1,
      title: "Egg",
      number: "1"
    }
  ]

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm />
      <ShoppingList />
      <ShoppingItem />
    </main>
  )
}

export default App
