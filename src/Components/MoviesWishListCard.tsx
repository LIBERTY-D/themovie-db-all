import React, { useState ,useContext} from "react";
import setImage from "../Reusables/SetImage.js"
import {eventContext }  from "../ContextApi/Events.js"

interface MovieObj{
  id:number;
  title:string;
  poster_path:string;
  release_date:string;
  
}
interface Icart{
  cart:MovieObj[];
}
interface IMovie{
  id:number;
  title:string;
  poster_path:string;
  release_date:string;
  

}

interface IMovieDetail{
    movie:IMovie;
    key:number;
}
const MovieWishListCard:React.FC<Icart> = ({cart}) => {
  const [] = useState<MovieObj[]>([])
 

  return (
    <div className="wishlist">
      <h2>Movie Wishlist</h2>
      <div className="wishlist-container">
      {cart !=null && cart.map((movie:IMovie,index:number) => (
        <MovieDetail movie={movie} key={movie.id}/>
      ))}
      </div>
    </div>

  );
};

const MovieDetail:React.FC<IMovieDetail>=({movie})=>{
  const api  =  useContext(eventContext)
    const removeFromWishlist =():void=>{
      // @ts-ignore
        let items:MovieObj[] = api.cartItem;
        items = items.filter(userMovie=>movie.id!=userMovie.id)
        localStorage.setItem("my-card-item-234567890",JSON.stringify(items))
        // @ts-ignore
        api.setCartItem(items);
        
    };
 
    return  (
    <div className="movie">
        <img src={setImage(movie.poster_path)} alt={`Movie Poster - ${movie.title}`} />
    <div>
       <span>{movie.title}</span>
       <p>Release Year: {movie.release_date}</p>
      <button onClick={() => removeFromWishlist()}>Remove</button>
    </div>
    </div>
  )
    }
export default MovieWishListCard;
