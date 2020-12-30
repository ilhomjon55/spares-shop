import './SliderLg.css';

function SliderLg() {
	return (
		<>
			<div
				id='carouselExampleIndicators'
				className='carousel__wrapper carousel slide flex-shrink-0'
				data-bs-ride='carousel'>
				<ol className='carousel-indicators'>
					<li
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={0}
						className='active'
					/>
					<li
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={1}
					/>
					<li
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={2}
					/>
				</ol>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src='img/slider-lg.png'
							className='d-block w-100'
							alt='...'
							width='800'
							height='370'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='img/slider-lg.png'
							className='d-block w-100'
							alt='...'
							width='800'
							height='370'
						/>
					</div>
					<div className='carousel-item'>
						<img
							className='d-block w-100'
							src='img/slider-lg.png'
							srcSet='img/slider-lg@2x.png'
							alt='...'
							width='800'
							height='370'
						/>
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					/>
					<span className='visually-hidden'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					/>
					<span className='visually-hidden'>Next</span>
				</a>
			</div>
		</>
	);
}

export default SliderLg;
