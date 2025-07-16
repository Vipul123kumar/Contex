import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../Context/CounterContext.jsx'
const Item = (props) => {
    const Items= useContext(ItemContext)
    
  return ( 
    <div>
     <h2>{props.name}</h2>
     <h3>price$:{props.price}</h3>
     <button onClick={()=>
      {
        Items.setItem([...Items.item,{name:props.name, price:props.price},])
        console.log(Items.item);
        
        Items.setTotal(Items.total + props.price)
      }
     }>Add to Cart</button>
    </div>
  )
}

export default Item
