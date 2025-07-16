import React, { useState,useEffect} from "react";
import  { useContext } from "react";
import { ItemContext } from "../Context/CounterContext.jsx";
const Cart=()=>
{
    const Items=useContext(ItemContext)
    
    const [counts,setCount]=useState([]);
//     useEffect(() => {
//     if (Items && Items.item && Items.item.length > 0) {
//       setCount(Items.item.map(() => 1));
//     }
//   }, [Items.item]);

useEffect(() => {
  if (Items && Items.item) {
    setCount(prevCounts => {
      const newCounts = [...prevCounts];

      // If new items are added, initialize their counts
      while (newCounts.length < Items.item.length) {
        newCounts.push(1); // default quantity
      }

      return newCounts;
    });
  }
}, [Items.item]);


    const handleplus=(index,price)=>
    {
        const newcount=[...counts]
        newcount[index]=newcount[index]+1; 
      setCount(newcount);  
      Items.setTotal(Items.total+price) 
    } 
       const handleminus=(index,price)=>
    {
        const newcount=[...counts]
        newcount[index]=newcount[index]-1; 
      setCount(newcount); 

      Items.setTotal(Items.total-price)
      
    }
    // const handlereset=()=>
    // {
    //   setCount(1);
    // }

    return(
        <div className="bg-red p-4 rounded shadow-md">
            <h2>cart</h2>
            
            {Items && Items.item.map((item,index)=>
              
                    
          <li key={index}>
            {item.name}-{item.price} <button onClick={()=>handleplus(index,item.price)}>+</button> <button onClick={()=>handleminus(index,item.price)}>-</button> <span>{counts[index]?? 0}</span> </li> 
          
            )
            
            }
             {/* <button onClick={()=>handlereset}>Reset</button> */}
              
            
             
              <p>total={Items.total}</p>
        </div>
    )
}
export default Cart