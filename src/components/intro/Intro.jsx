import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/photo.jpeg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ezgi Elouzeh</h1>
          <h3>Software <span>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
