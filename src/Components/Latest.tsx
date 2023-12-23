import MovieCard from "./MovieCard"


export default function Latest() {
    return (
        <>
        <h1 className="latest-header" id="latest">Latest</h1>
        <section className="latest" >
           
            {[1,2,3,4,5,6].map((_,index:number)=>{
                // @ts-ignore
                return <MovieCard MovieId={index} key={index}/>
            })}
        </section>
        </>
      )
}
