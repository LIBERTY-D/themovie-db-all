
import {FaCartPlus} from "react-icons/fa"
import { ChangeEvent, KeyboardEvent,useContext, useEffect, useRef, useState } from "react";
import { eventContext } from "../ContextApi/Events";

export default function NavBar() {
    const search = "search movie..."
    const [placeholder,setPlaceHolder] =  useState(search)
    const[query,setQuery] =  useState("");
    const api =  useContext(eventContext);
    const inputRef = useRef<HTMLInputElement>(null)
    
    const [isVisible,setIsVisible] =  useState<boolean>(false)
    const [scrollHeight, setScrollHeight] = useState<number>(0);





    useEffect(() => {
        const handleScroll = ():void => {
            const scrollElement = document.documentElement || document.body;
            const currentScrollHeight = scrollElement.scrollTop;
            setScrollHeight(currentScrollHeight);
         if(isVisible && scrollHeight>=2000){
            // @ts-ignore
            api.element.style.transform="translateX(1000px)"
            setIsVisible(false);
         }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return ():void => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isVisible,scrollHeight]); 
    
    const handlerCart=():void=>{
        // @ts-ignore
        if(api.element!==undefined && !isVisible){
            // @ts-ignore
            api.element.style.transform="translateX(0px)"
            setIsVisible(true);
        }else if(isVisible){
            // @ts-ignore
            api.element.style.transform="translateX(1000px)"
             setIsVisible(false);
        }
    }
    const handleEnter = (event:KeyboardEvent<HTMLInputElement>):void=>{
           if(event.key==="Enter" && query!=""){
            // @ts-ignore
            api.setInputValue(query)
            setQuery("")
            setPlaceHolder(search)
           
           }
    }

    const handleInput = (event:ChangeEvent<HTMLInputElement>):void=>{
        if(event.target.value!=""){
            setQuery(event.target.value)
        }
        
    }
          return (
            <nav  className="nav-bar">
             <div className="logo">
                <h2>MV-LI</h2>
             </div>
                <ul className="nav_container_ul">
                    {/* <a href="#latest"><li className="nav-item">Latest</li></a> */}
                    <a href="#upcoming"> <li className="nav-item">Upcoming</li></a>
                    {/* <a href="#popular"><li className="nav-item">Popular</li> </a> */}
                   
                    
                </ul>
                <div className="nav_container_input">
                    <input type="text" placeholder={placeholder} value={query} onKeyDown={handleEnter} onChange={handleInput} ref={inputRef} />
                </div>
                <div className="nav_container_cart" onClick={handlerCart} >
                     <FaCartPlus/>
                     
                     <p className="nav_item_count">{
                     // @ts-ignore 
                     api.cartItem!=null && api.cartItem.length}</p>
                </div>
            
            </nav>
     )
}

