import styles from '../assets/css/header.css';
import {ReactComponent as YourSvg} from '../assets/images/logo/piterest.svg';

const Header = () => {
    return (
        <header className="header">
                <div className="header__logo">
                    <YourSvg />
                </div>
                <div className="header__searchbar">
                    hehe
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