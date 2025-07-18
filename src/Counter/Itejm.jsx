import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../Context/CounterContext.jsx'
const Item = (props) => {
    const Items= useContext(ItemContext)
    
  return ( 
    <div className='bg-blue-200 p-4 m-2 rounded shadow-md gap-2 w-70 '>
     <h2>{props.name}</h2>
     <h3>price$:{props.price}</h3>
     <img src={props.image} alt='not find' />
     <button className=' bg-blue-500 rounded w-30 p-2 m-2' onClick={()=>
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
