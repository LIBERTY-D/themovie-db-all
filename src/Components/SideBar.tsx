import { useContext, useEffect, useRef,useState } from "react"
import MovieWishListCard from "./MoviesWishListCard"
import {eventContext} from "../ContextApi/Events"

type  MovieObj={
  id:number;
  title:string;
  poster_path:string;
  release_date:string;
  
}

export default function SideBar() {
    const api =  useContext(eventContext)
  
    let  elementRef =  useRef()
    const [cart,setCart] =  useState<MovieObj[]>([])

    useEffect(()=>{
      // @ts-ignore
        api.setElement(elementRef.current);
    
        return()=>{

        }
    },[])

    useEffect(()=>{
      // @ts-ignore
      setCart(api.cartItem)
      // @ts-ignore
    },[api.cartItem])

  return (
    <aside className="sidebar" ref={elementRef}>
      {
        // @ts-ignore
        <MovieWishListCard  cart={cart} elementRef={
          
          elementRef}/>
        }
    </aside>
  )
}
