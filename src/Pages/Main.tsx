import { useContext ,useEffect,useState} from "react"
import Slider from "../Components/Slider"
import NavBar from "../Components/NavBar"
import Upcoming from "../Components/Upcoming"
import Popular from "../Components/Popular"
import Latest from "../Components/Latest"
import AudioPlay from "../Components/AudioPlay"
import SideBar from "../Components/SideBar"
import Overlay from "../Components/Overlay"
import BackToTopButton  from "../Components/BackToTop"
import Pager from "../Components/Pager"
import  useFetch from "../CustomHooks/useFetch.jsx"
import { moviesContext}   from "../ContextApi/MakeMoviesAvailable"
import { eventContext } from "../ContextApi/Events"// 
//@ts-ignore
const api_key = import.meta.env.VITE_MOVIE_API_THE_DB

export default function Main() {
  const moviesCont =  useContext(moviesContext)
  const eventCont =  useContext(eventContext)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [fetchedPages, setFetchedPages] =  useState<number>(0)
  const [searching,setSearching] = useState<boolean>(false)
 

  const url =  `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${currentPage}`
// @ts-ignore
  const queryUrL=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${eventCont.inputValue}&page=${currentPage}`


  const {data,loading,setData}  =  useFetch(url);
  const userQury=useFetch(queryUrL)
    
  useEffect(()=>{
    // @ts-ignore
    if(loading==false &&(eventCont.inputValue!=="---mmm---holder---" && eventCont.inputValue!="")){
      setSearching(true)
     
    }

},
// @ts-ignore
[eventCont.inputValue,searching])

useEffect(()=>{
    if(searching==true){
      1
      setData(userQury.data)
      setSearching(false)
    }else{
      setData(data)
    }
  return ()=>{
  }

},
[data,userQury.data,currentPage])

  useEffect(()=>{
    if(data!=null && loading==false){
      const total_pages = data.total_pages
      setFetchedPages(total_pages)
      
   
    }
    return ()=>{
      
    }
  },[currentPage,data,userQury.data])




  useEffect(()=>{
    if(loading==false){
      // @ts-ignore
      moviesCont.setMovies(data.results);
    }
    return ()=>{
      
    }
  },[loading])
  

  const handlePageChange = (newPage:number) => {
   
    setCurrentPage(newPage);
   
  };


  return (
    <main className="main">
       <NavBar/>
       <Slider/>
       <SideBar />
       {/* <Overlay/> */}
       {/* <AudioPlay/> */}
       <Upcoming upcomingMovies={data!=null &&data.results} searching={searching}/> 
       {/* <Popular/> */}
       {/* <Latest/> */}
       <Pager currentPage={currentPage}  totalPages={fetchedPages} handlePageChange={handlePageChange}/>
       
       <BackToTopButton/>
    </main>
  )
}
