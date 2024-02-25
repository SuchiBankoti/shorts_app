import React, { useEffect, useState } from 'react';
import './App.css';
import Short from './Components/Short';
import Welcome from './Welcome';

const videoSrcs = [
  {
    src: "https://cdn.pixabay.com/vimeo/891655462/cliff-192066.mp4?width=1280&hash=1611be45e7595eabe9f69caa8c16321f8b5e772d"
  }
  ,
  { src: "https://cdn.pixabay.com/vimeo/786403437/tiger-145320.mp4?width=640&hash=cbc28d222774e1e78c0c04b517af8d392473f1da" },
  { src: "https://cdn.pixabay.com/vimeo/906217105/grass-197946.mp4?width=1280&hash=a49a052f1a3f3519202983a253b4c830447bd1c0" },
  { src: "https://cdn.pixabay.com/vimeo/890134722/volcano-191354.mp4?width=1280&hash=e8c1d141db70f295e22ebaec6a2884a258663ef9" }

]
function App() {
  const[open,setOpen]=useState(true)
  const [current,setCurrent]=useState(0)

  useEffect(() => {
    const handleScroll = (offset) => {
      window.scrollBy(0, offset);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const offset = e.key === 'ArrowUp' ? -window.innerHeight + 20 : window.innerHeight - 20;
        handleScroll(offset);
        setCurrent((prev) => (e.key === 'ArrowUp' ? (prev === 0 ? prev : prev - 1) : prev === videoSrcs.length - 1 ? prev : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      
    };
  }, [setCurrent, videoSrcs]);
  
  // for mobile
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      let startY;
  
      const handleScroll = (offset) => {
        window.scrollBy(0, offset);
      };
  
      const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
      };
  
      const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const deltaY = startY - currentY;
  
        if (deltaY > 50) {
          handleScroll(-window.innerHeight);
          setCurrent((prev) => (prev === 0 ? prev : prev - 1));
        } else if (deltaY < -50) {
          handleScroll(window.innerHeight);
          setCurrent((prev) => (prev === videoSrcs.length - 1 ? prev : prev + 1));
        }
      };
  
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [setCurrent, videoSrcs]);
  
  

  return (
    <>
      {open && <Welcome setOpen={setOpen}/>}
      {
        !open &&
        <div className="App">
          {videoSrcs.map((obj, i) =>
            <Short src={obj.src} key={i} i={i} current={current} />)}
      </div>
      }
    
    </>
  );
}

export default App;
