import {createContext, useState} from 'react'
export const ItemContext=createContext(null)
 export const ItemProvider=(props)=>
{
    const [item,setItem]=useState([])
    const[total,setTotal]=useState(0)
    return(
        <ItemContext.Provider value={{item,setItem,total,setTotal}}>
            {props.children}
        </ItemContext.Provider>

    )
}
