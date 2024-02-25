import React, { useEffect, useRef, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./Short.css";

export default function Short(props) {
  const { src, i, current } = props;
  const videoRef = useRef(null);
  const videoBoxRef=useRef(null)
  const [like, setLike] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    const videoBoxElement = videoBoxRef.current;
    const handleMouseOver = () => {
      setControlsVisible(true);
    };
    const handleMouseOut = () => {
      setControlsVisible(false);
    };

    videoBoxElement.addEventListener("mouseover", handleMouseOver);
    videoBoxElement.addEventListener("mouseout", handleMouseOut);

  }, []);
  

  useEffect(() => {
    const videoElement = videoRef.current;
    if (i === current && videoElement) {
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.currentTime = 0
    }
  }, [i, current]);

    
  return (
    <div className="video-box" ref={videoBoxRef}>
      {
        window.innerWidth < 500 ?
        <video
        controls
        className="video"
            ref={videoRef}
            onTouchStart={() => setControlsVisible(true)}
            onTouchEnd={() => setControlsVisible(false)}
        autoPlay         
      >
        <source src={src} type="video/mp4" />
          </video> :
           <video
           controls
           className="video"
           ref={videoRef}
           onMouseOver={() => setControlsVisible(true)}
           onMouseOut={() => setControlsVisible(false)}
         >
           <source src={src} type="video/mp4" />
         </video>
          
       }      
        
      <FaThumbsUp
        onClick={() => setLike(prev => !prev)}
        className="like-btn"
        style={{ color: like ? 'red' : 'white', visibility: controlsVisible ? 'visible' : 'hidden' }}
      />
      <div
        className="title"
        style={{visibility: controlsVisible ? 'visible' : 'hidden' }}
      >
        {src.split('/')[5].split('-')[0]}
      </div>
    </div>
  );
}
