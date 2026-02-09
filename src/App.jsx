import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import ShoppingItem from './components/ShoppingItem'
import './style/style.css'
import { useState } from 'react'

// Har jobbet med ToDos prosjekt fra forelesning og samarbeidet/jobbet med Fride Standal.

function App() {
  
  const ShoppingProducts = [
    {
      id: 0,
      title: "Melk",
      number: "2",
      isSelected: false,
    },
    {
      id: 1,
      title: "Egg",
      number: "1",
      isSelected: true
    }
  ]

  const [shoppinglist, setShoppingList] = useState(ShoppingProducts)
  

  return (
    <main id="container">
      <h1>Handleliste</h1>
      <AddForm />
      <ShoppingList ShoppingProducts={shoppinglist} setShoppingList={setShoppingList}/>
    </main>
  )
}

export default App
