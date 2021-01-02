import './ProductItem.css';

function ProductItem({ title, cost, currency, imgSource }) {
	return (
		<>
			<div className='product__wrapper flex-shrink-0'>
				<div className='product__wrapper-inner'>
					<div className='product__top text-center'>
						<img
							className='product__img'
							src={imgSource}
							alt={title}
							width='150'
							height='190'
						/>
						<h3 className='product__heading text-truncate'>{title}</h3>
					</div>

					<p className='product__cost'>
						{cost} {currency}
					</p>

					<div className='product__top-left-imgs'>
						<img
							src='img/sales-lenta.svg'
							alt='Like button'
							width='25'
							height='22'
						/>
					</div>

					<div className='product__top-right-imgs'>
						<button className='product__wrapper-btns'>
							<img
								src='img/like.svg'
								alt='Like button'
								width='25'
								height='22'
							/>
						</button>
						<img
							src='img/snejinka.svg'
							alt='Snejinka icon'
							width='28'
							height='31'
						/>
					</div>

					<div className='product__bottom-imgs'>
						<button className='product__wrapper-btns'>
							<img
								src='img/sales.png'
								alt='Sales icon'
								width='60'
								height='40'
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductItem;
