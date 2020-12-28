import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<>
			<footer className='site-footer'>
				<div className='container'>
					<div className='site-footer__inner'>
						<form className='footer__email-form' method='POST'>
							<h2 className='footer__email-heading'>
								Подпишитесь на нашу рассылку и узнавайте об акция
								быстрее
							</h2>
							<div className='footer__email-box'>
								<input
									className='footer__email-input'
									type='email'
									name='user_email'
									placeholder='Введите ваш e-mail:'
								/>
								<button
									className='footer__email-submit-btn'
									type='submit'>
									Отправить
								</button>
							</div>
						</form>

						<div className='info'>
							<h3 className='info__heading'>Информация</h3>
							<ul className='info__list'>
								<li className='info__item'>
									<Link className='info__link' to='/about'>
										О компании
									</Link>
								</li>
								<li className='info__item'>
									<Link className='info__link' to='/contacts'>
										Контакты
									</Link>
								</li>
								<li className='info__item'>
									<Link className='info__link' to='/requisites'>
										Реквизиты
									</Link>
								</li>
								<li className='info__item'>
									<Link className='info__link' to='/shops'>
										Магазины
									</Link>
								</li>
							</ul>
						</div>

						<div className='service-center'>
							<h3 className='service-center__heading'>
								Сервисный центр
							</h3>
							<ul className='service-center__list'>
								<li className='service-center__item'>
									<Link
										className='service-center__link'
										to='/delivery'>
										Доставка и самовывоз
									</Link>
								</li>
								<li className='service-center__item'>
									<Link className='service-center__link' to='/payment'>
										Оплата
									</Link>
								</li>
								<li className='service-center__item'>
									<Link
										className='service-center__link'
										to='/return-exchange'>
										Возврат-обмен
									</Link>
								</li>
								<li className='service-center__item'>
									<Link className='service-center__link' to='/news'>
										Новости
									</Link>
								</li>
							</ul>
						</div>

						<div className='footer-nav'>
							<h3 className='footer-nav__heading'>Интернет-магазин</h3>
							<div className='footer-nav__lists-wrapper'>
								<ul className='footer-nav__list'>
									<li className='footer-nav__item'>
										<Link className='footer-nav__link' to='/delivery'>
											Доставка и самовывоз
										</Link>
									</li>
									<li className='footer-nav__item'>
										<Link className='footer-nav__link' to='/payment'>
											Оплата
										</Link>
									</li>
									<li className='footer-nav__item'>
										<Link
											className='footer-nav__link'
											to='/return-exchange'>
											Возврат-обмен
										</Link>
									</li>
									<li className='footer-nav__item'>
										<Link className='footer-nav__link' to='/news'>
											Новости
										</Link>
									</li>
								</ul>
								<ul className='footer-nav__list'>
									<li className='footer-nav__item'>
										<Link
											className='footer-nav__link'
											to='/promotions'>
											Акции
										</Link>
									</li>
									<li className='footer-nav__item'>
										<Link
											className='footer-nav__link'
											to='/contractoffer'>
											Договор оферты
										</Link>
									</li>
									<li className='footer-nav__item'>
										<Link className='footer-nav__link' to='/policy'>
											Политика обработки персональных данных
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<p className='site-copyright'>Интернет-магазин автозапчастей</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
