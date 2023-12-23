import AddToCart  from "../Components/AddToCart"
import { useState } from "react";
// @ts-ignore
import blank_movie from "../assets/blank_movie.webp"
import { genres } from "../Reusables/Genre.js";
import useFetch from "../CustomHooks/useFetch.jsx"
import setImage from "../Reusables/SetImage.js"


interface Ivideo{
  id:string;
  iso_639_1:string
  iso_3166_1:string;
  key:string;
  name:string;
  official:boolean;
  published_at:string;
  site:string;
  size:number;
  type:string;
}






export default function MovieCard({MovieId,movie}) {
const [watch,setWatch] = useState<Boolean>(false);

  const {id, poster_path,overview ,release_date
  ,title,vote_average,genre_ids} =  movie;
 // @ts-ignore
  const api_key =  import.meta.env.VITE_MOVIE_API_THE_DB

  let filteredGenres=  genres.filter((genre)=>genre_ids.includes(genre.id)).map((genre=>genre.name))
  
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
  const {data}=  useFetch(apiUrl)
  const [key,setKey] =  useState<string>("")

  const handleTrailer =()=>{
    let keyFiltered = data.results.filter((type:Ivideo)=>type.type=="Trailer")
    setWatch(true)
    setKey(keyFiltered[0].key)
  
  }

  const handleMouseOut = () => {
    setKey("")
    setWatch(false)
    
    
  };
  
  return (
  <section>
      <div className='card'>
      <div className='card_left'>
        <img src={poster_path?setImage(poster_path):blank_movie}/>
      </div>
      <div className='card_right'>
          <h1 className="movie_name">{title}</h1>
        <div className='card_right__details'>
          <ul>
            <li>Release Date - {release_date}</li>
             {/* <li>111 min</li> */}
            <li>{ filteredGenres.join(" ")}</li> *
          </ul>
          <div className='card_right__rating'>
            <div className='card_right__rating__stars'>
              <StarRating rating={vote_average|1} maxStars={vote_average|1}/>
            </div>
          </div>
          <div className='card_right__synopsis'>
            <p>{overview}</p>
       <ReadMore text={overview} maxLength={10}/>
          </div>
          <div className='card_right__button' onClick={handleTrailer}>
            WATCH TRAILER
          </div>
           <AddToCart MovieId={MovieId} />
          
        </div>
      </div>
   
     {watch &&<div className="frame" onMouseOut={handleMouseOut}>
     {/* <FaTimes style={{color:"red",fontSize:"30px",cursor:"pointer"}}/> */}
     
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${key}`}   allowFullScreen={true}  title="Movie Trailer">
      <p>Sorry, the video is not available.</p>
      </iframe>
      </div>}
    
    </div>
</section>)
}



const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated((prev) => !prev);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;
  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button className="read_more" onClick={toggleTruncate}>
          {isTruncated ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  );
};



const StarRating = ({ rating, maxStars  }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const isFullStar = index + 1 <= roundedRating;
        return (
          <span key={index} className={`star ${isFullStar ? 'full' : ''}`}>
            ★
          </span>
        );
      })}
    </div>
  );
};

