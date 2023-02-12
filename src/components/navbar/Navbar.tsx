import { ReactElement } from 'react';
import './navbar.css';
import { NavbarProps } from './navbar.types';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar({ links }: NavbarProps): ReactElement {
	return (
		<div className="navbar">
			{links.map((link, index) => (
				<NavLink
					className={({ isActive }) => {
						return ` ${isActive ? '--active-link' : 'link '}`;
					}}
					key={index}
					to={link.url}
				>
					{link.label}
				</NavLink>
			))}
		</div>
	);
}

Navbar.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
};

export default Navbar;
