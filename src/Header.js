import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo"
                src={process.env.PUBLIC_URL + 'images/download.png'}/>
            </Link>
            
           <div className="header__search">
                <input className='header__searchinput' type="text"/>
                <SearchIcon className="header__searchIcon"/>
           <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className="option_line1">
                        Hello, {user? user?.email: "Guest"}
                    </span>
                    <span className="option_line2">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
                <Link to='/orders'>
                <div className='header_option'>
                    <span className="option_line1">
                        Returns
                    </span>
                    <span className="option_line2">
                       & Orders
                    </span>
                </div>
                </Link>
                <div className='header_option'>
                     <span className="option_line1">
                        Your
                    </span>
                    <span className="option_line2">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <AddShoppingCartIcon />
                    <span className="option_line1 Hedaer_basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>  
           </div>         
        </div>
    )
}

export default Header
