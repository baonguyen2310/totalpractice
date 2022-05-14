import styles from '../assets/css/header.css';
//import logo from '../assets/images/logo/instagram.png';
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

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/actions';

const HeaderNavbarItem = (props) => {
    return (
        <li className="header__navbar-item">
            <a href="" className="header__navbar-item-link">
                <FontAwesomeIcon icon={props.icon} className="header__navbar-item-icon" />
                {props.text}
                {props.image && <img src={props.image} className="header__navbar-item-img" />}
            </a>
        </li>
    );
};

const Header = () => {
    /* Test
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state);
        return state.counterReducer.counter;
    })

    const handleTest = useCallback(() => {
            dispatch(increment(2));
    }, []);

    const handleChange = (e) => {
        setState(e.target.value);
    }*/

    return (
        <header className="header">
            {/*Test
            <span>{state}</span>
            <input type="text" value={state} onChange={handleChange} />
            <br />
            <span>{counter}</span>
            <button onClick={handleTest}>Tăng</button>
            */}
            <div className="header__row">
                <div className="header__logo">
                    <img
                        src={require("../assets/images/logo/instagram.png")}
                        alt="header logo instagram"
                        className="header__logo-img"
                    />
                </div>
                <div className="header__searchbar">
                    <input type="text" className="header__searchbar-input" />
                    <div className="header__searchbar-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="header__searchbar-icon"/>
                    </div>
                </div>
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                        <HeaderNavbarItem icon={faHouse} />
                        <HeaderNavbarItem icon={faMessage} />
                        <HeaderNavbarItem icon={faSquarePlus} />
                        <HeaderNavbarItem icon={faCompass} />
                        <HeaderNavbarItem icon={faHeart} />
                        <HeaderNavbarItem image={require("../assets/images/users/user1.jpg")} />
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;