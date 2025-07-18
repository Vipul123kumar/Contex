import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Item from './Counter/Itejm.jsx'
import './index.css'
import Cart from './Counter/Cart.jsx'
import Home from './Counter/Home.jsx'

function App() {
  
  

  return (
    <Router>
      <div className='flex flex-col  items-center jusitfy-center  text-center text-1xl'>
        <Routes>
          <Route path="/item" element={
            <>
            <div>
            <Item name="Book" price={20000} image={'https://demoopc.aeipix.com/AX02/looka24/demo1/image/cache/catalog/Main-Banner-1-1903x840.jpg'} /> 
            <Item name="Pen" price={200}/> 
            <Item name="Car" price={30000}/>
            </div>
            <div className=''> <Cart/></div>
           
             </> 
              }
           />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* // <Item name="Book" price={20000} />
        //  <Item name="Pen" price={200} />
        //   <Item name="Car" price={30000} />
        //  <Cart/> */}
         
      </div>
        
    </Router>
  )
}

export default App
