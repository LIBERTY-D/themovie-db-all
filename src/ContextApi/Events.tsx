import  { createContext, useEffect, useState } from 'react'
// @ts-ignore

export const eventContext = createContext();

    

export  function Events({children}:any) {
    const [element,setElement] =  useState();
    const[inputValue,setInputValue] = useState("---mmm---holder---");
    const[cartItem,setCartItem] = useState([])



 
  return (
    <eventContext.Provider value={{element,setElement,inputValue,setInputValue,cartItem,setCartItem}}>
        {children}
    </ eventContext.Provider>
  )
}
