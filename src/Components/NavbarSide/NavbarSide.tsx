import React,{useState} from 'react'
import './NavbarSide.css'



export default function NavbarSide(props : any) {

    const ToggleBtn = () => {
        props.modifytoggle(false)

        
    }

  return (

        <div className='nav-mobile'>
            <ul className='Nav-menu-mobile'>
                    <button onClick={ToggleBtn} className='btn-nav-close'>X</button>
                    <li className='mobile-item-navbar'>Home</li>
                    <li className='mobile-item-navbar'>Manga</li>
                    <li className='mobile-item-navbar'>Characters</li>
                    <li className='mobile-item-navbar'>Contact</li>
            </ul>
            <div className='author'>
                <p>by Zukimojito</p>
            </div>
        </div>


  )
}
