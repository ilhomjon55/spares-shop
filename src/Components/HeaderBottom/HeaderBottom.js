import { NavLink } from 'react-router-dom';
import './HeaderBottom.css';

function HeaderBottom() {
	return (
		<>
			<div className='header-bottom'>
				<div className='container'>
					<nav className='site__nav'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/catalog'>
									Каталог запчастей
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/catalogto'>
									Каталог ТО
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/spares'>
									Шины
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/disks'>
									Диски
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/batteries'>
									Аккумуляторы
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/autooil'>
									Автомасла
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/autolamps'>
									Автолампы
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link'
									activeClassName='active_nav'
									to='/accessories'>
									Аксессуары
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default HeaderBottom;
