import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Ezgi Elouzeh</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>(201)981-4289</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>ezgisirip@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

    </div>
  )
}
