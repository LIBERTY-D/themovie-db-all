import {FaStar} from "react-icons/fa"
import setImage from "../Reusables/SetImage.js"
import { genres } from "../Reusables/Genre.js";



export default function SliderCard({movie}) {
	const {id, backdrop_path,poster_path,overview ,genre_ids,release_date
		,title,vote_average} =  movie;
	
let filteredGenres=  genres.filter((genre)=>genre_ids.includes(genre.id)).map((genre=>genre.name))
   
  return (
    <>
      <div className="movie_slider_card">
	   <div className="container" style={{backgroundImage:`url("${setImage(poster_path)}")`}} >
		
		<div  className="cover">
			<div className="columntag">
				{filteredGenres.length>=0 && <div className="tag1">{filteredGenres[0]}</div>}
				{filteredGenres.length>=1 && <div className="tag2">{filteredGenres[1]}</div>}	
				{filteredGenres.length>=2&& <div className="tag3">{filteredGenres[2]}</div>}	
			 </div>		
			<div className="menu">
				<div className="title">{title}</div>
			{/* <div className="rating">
				IMDb <span className="fa fa-star"><FaStar/></span><span> 9.5/10</span>
			</div> */}
			</div>
		   </div>
		<div className="info">
			{/* <div className="cast">
				<h2>Cast:</h2>
				<a href="#">
            		<img src="https://pbs.twimg.com/profile_images/3408187873/3ac928389d4a3f78b8a1bfb8dd42cec3_normal.jpeg" alt="avatar1" />
          		</a>
          		<a href="#">
            		<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmOUINqtURdODeBjm2iNxmvzqGabPNqKShy7qZEoZQq7qB77y8" alt="avatar2" />
          		</a>
          		<a href="#">
            		<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRu-erGhZPhzH0Aq5s8UKFOQL0GNFVqnlN3C08Fayjm_R9nvuYHPQ" alt="avatar3" />
          		</a>
          		<a href="#">
            		<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcMYfmJLlUdRHLf9z7ED8BZa2uqDZKYHq-tR2uiYnidTkpdVVNag" alt="avatar4" />
          		</a>
			</div> */}
			<div className="text">
			{overview}
			</div>
		</div>
	    </div>
     </div>
        
    </>
  )
}
