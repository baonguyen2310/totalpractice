import { ReactComponent as Logo } from '../assets/images/logo/youtube.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHouse,
    faMessage,
    faSquarePlus,
    faCompass,
    faHeart,
    faMicrophone
} from '@fortawesome/free-solid-svg-icons';

import headerYoutube from '../assets/css/headerYoutube.css';

const HeaderNavbarItem = (props) => {
    return (
        <li className="header__navbar-item">
            <a href="" className="header__navbar-item-link">
                <FontAwesomeIcon icon={props.icon} className="header__navabar-item-icon"/>
                {props.image && <img src={props.image} className="header__navbar-item-img"/> }
            </a>
        </li>
    )
};

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo className="header__logo-img" />
            </div>
            <div className="header__searchbar">
                <input type="text" className="header__searchbar-input" />
                <div className="header__searchbar-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>
            <nav className="header__navbar">
                <ul className="header__navbar-list">
                    <HeaderNavbarItem icon={faHouse} />
                    <HeaderNavbarItem icon={faMessage} />
                    <HeaderNavbarItem icon={faHeart} />
                    <HeaderNavbarItem icon={faCompass} />
                    <HeaderNavbarItem icon={faSquarePlus} />
                    <HeaderNavbarItem image={require("../assets/images/users/user1.jpg")} />
                </ul>
            </nav>

        </header>
    )
};

export default Header;