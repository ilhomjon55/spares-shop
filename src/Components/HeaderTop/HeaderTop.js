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

					<Link className='logo__link' to='/'>
						<img
							src='img/logo-img.png'
							alt='Site logo'
							width='100'
							height='50'
						/>
					</Link>

					<div className='header-top__right'>
						<div className='header-top__location-wrapper'>
							<img
								className='header-top__location-img'
								src='img/location.svg'
								alt='Location icon'
								width='20'
								height='20'
							/>
							<address className='header-top__location'>
								Санкт-Петербург, ул Большая Конюшенная, д 19
							</address>
						</div>

						<div className='header-top__btns'>
							<Link className='header-top__btn liked-btn' to='/liked'>
								<img
									src='img/like.svg'
									alt='Like icon'
									width='20'
									height='20'
								/>
							</Link>
							<Link className='header-top__btn profile-btn' to='/login'>
								<img
									src='img/profile.svg'
									alt='Profile icon'
									width='20'
									height='20'
								/>
							</Link>
							<Link
								className='header-top__btn korzinka-btn'
								to='/selected'>
								<img
									src='img/korzinka.svg'
									alt='korzinka icon'
									width='20'
									height='20'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderTop;
