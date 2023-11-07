import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Container>
                <a href="/">
                    <div className="fa fa-tasks navIcon"></div>
                </a>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;