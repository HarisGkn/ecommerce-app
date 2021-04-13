import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBaskerIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header(){

    const [{basket,loggedInUser}, dispatch] = useStateValue();

    //console.log("my basket", basket)
    const logoutUser = () => {
        if(loggedInUser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src={logo} alt="logo" ></img>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />

            </div>
            <div className="header__nav">
            {/* first link */}
            <Link to={!loggedInUser && "/login"} className="header__link">
                <div onClick={logoutUser} className="header__option">
                    <span className="header__optionLineOne">Hello, {loggedInUser ? loggedInUser.email : 'guest'}</span>
                    <span className="header__optionLineTwo">{loggedInUser ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            
            </div>
            {/* basket icon(also displays number of items) */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBaskerIcon/>
                    {/* number of items */}
                    <span className="header_optionLineTwo header__productCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;