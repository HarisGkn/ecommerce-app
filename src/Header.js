import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBaskerIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'
import { useStateValue } from './StateProvider'

function Header(){

    const [{basket}, dispatch] = useStateValue();

    console.log("my basket", basket)

    return(
        <nav className="header">
            <img className="header__logo" src={logo} alt="logo" ></img>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />

            </div>
            <div className="header__nav">
            {/* first link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, user</span>
                    <span className="header__optionLineTwo">Sing In or Sign Out</span>
                </div>
            </Link>
            {/* second link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">orders</span>
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