
import SliderCard from "../Components/SliderCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from "react";
import { moviesContext}   from "../ContextApi/MakeMoviesAvailable"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 2000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Slider() {
  const moviesCont =  useContext(moviesContext)
  return (

      <>
     {/* <button className="slider_left_btn" onClick={()=>handleSlider()}><FaChevronLeft/></button> */}
    <section className="slider_container">
      <Carousel   responsive={responsive}
                autoPlay={ true}
                autoPlaySpeed={3000}
                infinite={true}
                transitionDuration={500}  
             
                >

       {// @ts-ignore
       moviesCont.data!=null&&moviesCont.data.map((movie,index)=>{
        return  <SliderCard movie={movie} key={index}/>
       })}
       </Carousel>
    </section>
    {/* <button className="slider_right_btn" onClick={()=>handleSlider()}><FaChevronRight/></button> */}
     </>

  )
}
