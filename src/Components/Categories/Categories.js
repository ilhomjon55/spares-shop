import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
	return (
		<>
			<ul className='categories__list list-unstyled'>
				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Автохимия</h2>
						<Link className='category__link' to='/autochemistry'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/chemistry.png'
						srcSet='img/chemistry.png 1x, img/chemistry@2x.png 2x'
						alt='Chemistry icon'
					/>
				</li>

				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Шины и диски</h2>
						<Link className='category__link' to='/spares'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/shina.png'
						srcSet='img/shina.png 1x, img/shina@2x.png 2x'
						alt='shina icon'
					/>
				</li>

				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Инструменты</h2>
						<Link className='category__link' to='/tools'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/tools.png'
						srcSet='img/tools.png 1x, img/tools@2x.png 2x'
						alt='Chemistry icon'
					/>
				</li>

				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Запчасти на ТО</h2>
						<Link className='category__link' to='/catalogto'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/to.png'
						srcSet='img/to.png 1x, img/to@2x.png 2x'
						alt='to icon'
					/>
				</li>

				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Автоэлектроника</h2>
						<Link className='category__link' to='/electrics'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/electrics.png'
						srcSet='img/electrics.png 1x, img/electrics@2x.png 2x'
						alt='electrics icon'
					/>
				</li>

				<li className='category__item'>
					<div className='category__info'>
						<h2 className='category__name'>Аксессуары и другое</h2>
						<Link className='category__link' to='/accessories'>
							<span className='category__link-txt'>Перейти</span>
							<img
								src='img/go-icon.svg'
								alt='Go icon'
								width='6'
								height='10'
							/>
						</Link>
					</div>
					<img
						src='img/accessories.png'
						srcSet='img/accessories.png 1x, img/accessories@2x.png 2x'
						alt='accessories icon'
					/>
				</li>
			</ul>
		</>
	);
}

export default Categories;
