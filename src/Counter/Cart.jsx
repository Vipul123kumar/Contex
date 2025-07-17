import React, { useState,useEffect} from "react";
import "../index.css";
import  { useContext } from "react";
import { ItemContext } from "../Context/CounterContext.jsx";
const Cart=()=>
{
    const Items=useContext(ItemContext)
    
    const [counts,setCount]=useState([]);


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
    const handlereset=()=>
    {
      setCount([]);
      Items.setTotal(0);
      Items.setItem([]);
    }

    return(
        <div className=" w-70 bg-blue-500 rounded shadow-md  gap-2 p-2 m-2  ">
            <h2>cart</h2>
            
            {Items && Items.item.map((item,index)=>
              
                    
          <li className=" bg-white p-2 m-2 rounded  " key={index}>
             {item.name}-{item.price}
             <button className="bg-green-500 rounded  h-7 w-7 text-center text-2xl items-center m-auto  " onClick={()=>handleplus(index,item.price)}>+</button> 
            <button className="bg-red-500 rounded  h-7 w-7 text-center text-2xl items-center m-2 " onClick={()=>handleminus(index,item.price)}>-</button>
             <span className="bg-gray-500 text-1xl rounded h-4 w-7 p-2 m-2">{counts[index]?? 0}</span> </li> 
          
            )
            
            }
        
              
            
             
              <p className="text-2xl bg-gray-500 rounded w-50 p-2 m-auto text-center  ">total={Items.total}</p>
              <button className="text-1xl bg-red-500 rounded w-30 p-2 m-2 text-center " onClick={handlereset}>Reset All </button>
        </div>
    )
}
export default Cart