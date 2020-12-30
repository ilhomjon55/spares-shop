import './Home.css';
import SliderLg from '../../Components/SliderLg/SliderLg.js';
import UrgentProduct from '../../Components/UrgentProduct/UrgentProduct.js';

function Home() {
	return (
		<>
			<section className='hero'>
				<div className='container d-flex justify-content-between align-items-start'>
					<SliderLg />
					<UrgentProduct />
				</div>
			</section>
		</>
	);
}

export default Home;
