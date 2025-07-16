import React from 'react'
import Item from './Counter/Itejm.jsx'
import './App.css'
import Cart from './Counter/Cart.jsx'

function App() {
  
  

  return (
    <>
      <div>
        
        <Item name="Book" price={20000} />
         <Item name="Pen" price={200} />
          <Item name="Car" price={30000} />
         <Cart/>
         
      </div>
        
    </>
  )
}

export default App
