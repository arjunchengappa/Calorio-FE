import './NavBar.css';

const NavBar = (props) => {
	const logoutHandler = () => {
		props.onLogout();
	}

	return (
		<nav className='navbar'>
			<ul>
				<li>Calorio</li>
				{ 
					props.user.userEmail && props.user.userPassword 
					? <li className='logout' onClick={logoutHandler}>Logout</li> 
					: '' 
				}
			</ul>
		</nav>
	);
}

export default NavBar;