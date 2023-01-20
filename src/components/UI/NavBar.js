import './NavBar.css';

const NavBar = (props) => {
    const logoutHandler = () => {
        props.onLogout(0);
    }

    return (
        <nav className='navbar'>
            <ul>
                <li>Calorio</li>
                { props.loginFlag ? <li className='logout' onClick={logoutHandler}>Logout</li> : '' }
            </ul>
        </nav>
    );
}

export default NavBar;