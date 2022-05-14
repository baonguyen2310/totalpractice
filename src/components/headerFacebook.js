import { ReactComponent as Logo } from '../assets/images/logo/facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHouse,
    faListDots,
    faCommentDots,
    faBell,
    faCaretDown,
    faTv,
    faStore,
    faPeopleGroup,
    faGamepad
} from '@fortawesome/free-solid-svg-icons';

import styles from '../assets/css/headerFacebook.css';

const HeaderPageItem = (props) => {
    return (
        <li className="header__page-item">
            <a href="#" className="header__page-item-link" onClick={handleClickPage}>
                <FontAwesomeIcon icon={props.icon} className="header__page-item-icon" />
            </a>
        </li>
    );
};

const getParentElement = (childElement, typeParent) => {
    while (childElement.parentElement.nodeName !== typeParent) {
        childElement = childElement.parentElement;
    }

    return childElement.parentElement;
}

const handleClickPage = (e) => {    //Đôi khi nhấn vào child thì e sẽ là child
    e.preventDefault();
    console.log(e.target, e.target.parentElement.tagName);
    const parent = getParentElement(e.target, "LI");
    console.log(parent);

    const itemIcons = document.getElementsByClassName("blue-item");
    Array.from(itemIcons).forEach((itemIcon) => {
        itemIcon.classList.remove("blue-item");
    });

    parent.classList.add("blue-item");
};

const HeaderMenuItem = (props) => {
    let icon = <FontAwesomeIcon icon={props.icon} className="header__menu-item-icon" />;
    if (props.img) {
        icon = <img src={props.img} className="header__menu-item-icon" />
    }
    return (
        <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
               {icon} 
            </a>
        </li>
    );
};

const HeaderFacebook = () => {
    return (
        <header className="header">
            <div className="header__left">
                <div className="header__logo">
                    <Logo className="header__logo-img" />
                </div>
                <div className="header__searchbar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="header__searchbar-icon" />
                    <input type="text" className="header__searchbar-input" placeholder='        Tìm kiếm trên Facebook' />
                </div>
            </div>
            <nav className="header__page">
                <ul className="header__page-list">
                    <HeaderPageItem icon={faHouse} />
                    <HeaderPageItem icon={faTv} />
                    <HeaderPageItem icon={faStore} />
                    <HeaderPageItem icon={faPeopleGroup} />
                    <HeaderPageItem icon={faGamepad} />
                </ul>
            </nav>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <HeaderMenuItem img={require("../assets/images/users/user1.jpg")} />
                    <HeaderMenuItem icon={faListDots} />
                    <HeaderMenuItem icon={faCommentDots} />
                    <HeaderMenuItem icon={faBell} />
                    <HeaderMenuItem icon={faCaretDown} />
                </ul>
            </div>
        </header>
    );
}

export default HeaderFacebook;