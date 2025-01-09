import { Link } from "react-router-dom"
import { navLink } from "../data/dummydata"
import logo from '../data/images/logo.png'
import { useState } from "react"
import { Menu } from "@mui/icons-material"

export const Header = () => {
 const [responsive,setResponsive] = useState(false)
  return (
  <>
  <header>
    <div className="container flexsb">
        <div className="logo">
          <img src={logo} alt="" data-aos="zoom-in-right"/>
        </div>
        <div className={responsive ? 'hiddenMenu' : 'nav' }>
          {navLink.map((links,i)=>(
            <Link key={i} to={links.url} >
              {links.text}
            </Link>
          ))}
        </div>
        <button className="toggle" onClick={()=>{setResponsive(!responsive)}}>
          <Menu className="icon"></Menu>
        </button>
    </div>
  </header>
  </>
  )
}
