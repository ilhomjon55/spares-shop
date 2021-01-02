import './ProductsSlider.css';
import ProductItem from '../ProductItem/ProductItem.js';
import { products } from '../../Data/data.js';
import Carousel from 'tiny-slider-react';

function ProductsSlider() {
	const settings = {
		lazyload: true,
		nav: false,
		mouseDrag: true,
		loop: true,
		items: 4,
		gutter: 20,
	};

	return (
		<>
			<div className='products__slider-wrapper'>
				<Carousel settings={settings}>
					{products.slice(0, 10).map((product) => {
						return (
							<ProductItem
								key={product.id}
								title={product.title}
								cost={product.cost}
								currency={product.currency}
								imgSource={product.img}
							/>
						);
					})}
				</Carousel>
			</div>
		</>
	);
}

export default ProductsSlider;
