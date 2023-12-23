
import { useEffect,useRef,useState } from "react"
import audio  from "../assets/audio.mp3"
import {FaPause, FaPlay,FaRedo} from "react-icons/fa"


export default function AudioPlayer() {
 
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

    const pauseAudio = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const replayAudio = () => {
      audioRef.current.currentTime = 0;
      playAudio();
    };

      useEffect(() => {
          playAudio();
        return () => {
        
        };
      }, []); 

  return (
  <div className='audio' style={{float:"right"}}>
                <audio ref={audioRef}  >
                  <source src={audio} type="audio/mp3" />
              </audio>
            <div className="audio-btns">
              {/* <button onClick={playAudio}><FaPlay/></button>
              <button onClick={ pauseAudio }><FaPause/></button>
              <button onClick={replayAudio}><FaRedo/></button> */}
            </div>
            
    </div>
  )
}
