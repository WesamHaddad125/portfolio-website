import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
// Material UI icons https://mui.com/components/material-icons/
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Wesam</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 (937)789-5653</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>wesam.haddad14@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
