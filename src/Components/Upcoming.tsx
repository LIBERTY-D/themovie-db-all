import MovieCard from "./MovieCard"

export default function Upcoming({upcomingMovies,searching}) {
  
  return (
    
    <>
    <h1 className="upcoming-header" id="upcoming">{searching?"You Results":"Upcoming"}</h1>
    <section className="upcoming" >
       
        {upcomingMovies &&upcomingMovies.map((movie,index:number )=>{
         const {id
         } =  movie;
            return <MovieCard movie={movie} MovieId={id} key={index}/>
        })}
    </section>
    </>
  )
}
