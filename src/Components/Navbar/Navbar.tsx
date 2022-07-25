import React,{useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import NavbarSide from '../NavbarSide/NavbarSide';
import Hamburger from 'hamburger-react'
// import MangaEarth from '../../Assets/MangaEarth.png'

export default function Navbar() {

    const [ToggleMenu, setToggleMenu] = useState(false);
    const [BaseWidth, setBaseWidth] = useState(window.innerWidth);

    const setToggleNav = () => {
        setToggleMenu(!ToggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setBaseWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return() =>{
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    // navbarSide toggle props
    const modifyToggle = (e : boolean) => { 
        setToggleMenu(e)
    }

  return (
    <nav>

        {(BaseWidth > 600) && (
        <ul className='List-navbar'>
            {/* <img src={MangaEarth} alt="MangaEarth" className='img-navbar' /> */}
            <li className='Item-navbar'>Home</li>
            <li className='Item-navbar'>Manga</li>
            <li className='Item-navbar'>Characters</li>
            <li className='Item-navbar'>Contact</li>
        </ul>

        )}

        {/* Mobile */}

        {(ToggleMenu && BaseWidth < 600 && (
            <NavbarSide modifytoggle = {modifyToggle}/>
        ))}

        <button onClick={setToggleNav} className='btn-nav'>
            <Hamburger color="#000" toggled={ToggleMenu}  />
        </button>
 
    </nav>
  )
}
