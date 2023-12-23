import MovieCard from "./MovieCard"


export default function Popular() {
    return (
        <>
        <h1 className="popular-header" id="popular">Popular</h1>
        <section className="popular" >
           
            {[1,2,3,4,5,6].map((_,index:number)=>{
                // @ts-ignore
                return <MovieCard MovieId={index} key={index}/>
            })}
        </section>
        </>
      )
}
