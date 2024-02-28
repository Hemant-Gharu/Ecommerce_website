import styles from "../styles/header.module.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from '../assets/logo.png'
function Header() {
 
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.navLeft}>
          <img src={logo} alt="logo" className={styles.logo} />
          <ul className={styles.navLeftItems}>
            <li>Laptop</li>
            <li>Smartphone</li>
            <li>Smartwatch</li>
          </ul>
        </div>
        <div className={styles.search}>
          <button>
            <IoSearch className={styles.searchIcon} />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <ul className={styles.navbar}>
          <li>Home</li>
          <li>About</li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaUserAlt />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
