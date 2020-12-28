import { Link } from 'react-router-dom';
import './HeaderTop.css';

function HeaderTop() {
	return (
		<>
			<div className='header-top'>
				<div className='container'>
					<ul className='header-top__left-list'>
						<li className='header-top__left-item'>
							<Link className='header-top__left-link' to='shops'>
								Магазины
							</Link>
						</li>
						<li className='header-top__left-item'>
							<Link className='header-top__left-link' to='promotions'>
								Акции
							</Link>
						</li>
						<li className='header-top__left-item'>
							<Link
								className='header-top__left-link'
								to='deliverypayment'>
								Доставка и оплата
							</Link>
						</li>
					</ul>

					<Link className='logo__link' to='/home'>
						<img src='img/logo-img.png' alt='Site logo' />
					</Link>

					<div className='header-top__right'>
						<address className='header-top__location'>
							Санкт-Петербург, ул Большая Конюшенная, д 19
						</address>
						<div className='header-top__btns'>
							<Link className='header-top__btn liked-btn' to='/liked'>
								<img src='img/like.svg' alt='Like icon' />
							</Link>
							<Link className='header-top__btn profile-btn' to='/login'>
								<img src='img/profile.svg' alt='Profile icon' />
							</Link>
							<Link
								className='header-top__btn korzinka-btn'
								to='/selected'>
								<img src='img/korzinka.svg' alt='korzinka icon' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderTop;
