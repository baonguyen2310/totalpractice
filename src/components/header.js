import styles from '../assets/css/header.css';
//import logo from '../assets/images/logo/instagram.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className="header">
                <div className="header__logo">
                    <img
                        src={require("../assets/images/logo/instagram.png")}
                        alt="header logo instagram"
                        className="header__logo-img"
                    />
                </div>
                <div className="header__searchbar">
                    <input type="text" className="header__searchbar-input" />
                    <button className="header__searchbar-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                link
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                link
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                link
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                link
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                link
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
};

export default Header;