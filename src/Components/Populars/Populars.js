import './Populars.css';
import ProductsSlider from '../ProductsSlider/ProductsSlider.js';

function Populars() {
	return (
		<>
			<h2 className='populars__heading'>Популярные товары</h2>
			<ul className='populars__nav-list nav list-unstyled'>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link active'
						data-bs-toggle='pill'
						href='#test'>
						запчасти
					</a>
				</li>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link'
						data-bs-toggle='pill'
						href='#test'>
						автохимия
					</a>
				</li>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link'
						data-bs-toggle='pill'
						href='#test'>
						шины и диски
					</a>
				</li>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link'
						data-bs-toggle='pill'
						href='#test'>
						автоэлектроника
					</a>
				</li>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link'
						data-bs-toggle='pill'
						href='#test'>
						инструменты
					</a>
				</li>
				<li className='populars__nav-item'>
					<a
						className='populars__nav-link'
						data-bs-toggle='pill'
						href='#test'>
						аксессуары и другое
					</a>
				</li>
			</ul>

			<ProductsSlider />
		</>
	);
}

export default Populars;
