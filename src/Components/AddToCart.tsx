
import { FcLike } from "react-icons/fc";
import { useContext,useEffect,useState } from 'react';
import { eventContext } from "../ContextApi/Events";
import useFetch  from "../CustomHooks/useFetch.jsx"

// @ts-ignore
const apiKey = import.meta.env.VITE_MOVIE_API_THE_DB
       
type  MovieObj={
    id:number;
    title:string;
    poster_path:string;
    release_date:string;
    
}

export default function AddToCart({MovieId}) {

    const apiUrl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}`;
    const {data,loading}  =  useFetch(apiUrl)
    const [isVisible,setIsVisible] =  useState<boolean>(false)
    const api =  useContext(eventContext);
 


    const handlerCart=()=>{
        // @ts-ignore
        if(api.element!==undefined && !isVisible){
            // @ts-ignore
            api.element.style.transform="translateX(0px)"
            setIsVisible(true);
          
        }
        // else if(isVisible){
        //     api.element.style.transform="translateX(1000px)"
        //      setIsVisible(false);
        // }
    }

    const addMovieToCart = ()=>{

         handlerCart()
    //   fetch movie by this id and addit to cart
         const {title,poster_path,release_date} =  data;
         const item ={
            id:MovieId,
            title,poster_path,release_date 

         }
         // @ts-ignore
         api.setCartItem((prevState)=>{
            return fetchFromStorage(item);
         })
         
    }
    useEffect(()=>{
        // @ts-ignore
       api.setCartItem(JSON.parse(localStorage.getItem("my-card-item-234567890")))
    },[])


    const fetchFromStorage=(storage: MovieObj):MovieObj[]=>{
         let storageItems:string|null = localStorage.getItem("my-card-item-234567890")
         let items: MovieObj[]=[];
         if(storageItems==null){
            localStorage.setItem("my-card-item-234567890",JSON.stringify([storage]))
         }else{
            items = JSON.parse(storageItems)
            // @ts-ignore
            let  movie:MovieObj[]|undefined= items.find((movie)=>movie.id==storage.id);
            if(movie==undefined){
                items = JSON.parse(storageItems)
                 items.splice(0,0,storage)
                localStorage.setItem("my-card-item-234567890",JSON.stringify(items))
            }
          
          }
          return items;
}
  return ( 
    <div className="like-add">
        <FcLike onClick={()=>addMovieToCart()}/>
    </div>
  )
}
