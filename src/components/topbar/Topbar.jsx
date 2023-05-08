import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar' id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">MAJEY.</a>

          <div className="itemContainer">
            <Person className="icon"/>
            <span>+254 713 849 900</span>            
          </div>

          <div className="itemContainer">
            <Mail className="icon"/>
            <span>kevinerick78@yahoo.com</span>            
          </div>
        </div>

        <div className="right">
          THIS SIS RIGHT
        </div>
      </div>
    </div>
  )
}
