import "./intro.scss"
import { init } from 'ityped'
import {useEffect, useRef} from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      // showCursor: false,
      // backDelay: 1500,
      // backSpeed: 60,
      showCursor: true,
      strings: ['Software Developer', 'Graphic & Web Designer', 'Educational Technologist' ] })
  }, [])


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/IMG_9059 (1).jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ezgi Elouzeh</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
