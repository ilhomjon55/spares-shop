import { Link } from 'react-router-dom';
import './HeaderBottom.css';

function HeaderBottom() {
	return (
		<>
			<div className='header-bottom'>
				<div className='container'>
					<nav className='site__nav'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<Link className='nav__link' to='/catalog'>
									Каталог запчастей
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/catalogto'>
									Каталог ТО
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/spares'>
									Шины
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/disks'>
									Диски
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/batteries'>
									Аккумуляторы
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/autooil'>
									Автомасла
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/autolamps'>
									Автолампы
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__link' to='/accessories'>
									Аксессуары
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default HeaderBottom;
