import { urgentItem } from '../../Data/data.js';
import './UrgentProduct.css';
import { useState, useEffect } from 'react';

function UrgentProduct() {
	const [minutes, setMinutes] = useState(20);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<>
			{urgentItem.map((item) => {
				return (
					<div className='urgent-item__wrapper flex-shrink-0'>
						<div className='urgent-item__price-box'>
							<span className='urgent-item__price--new'>
								{item.newCost} <span>{item.currency}</span>
							</span>
							<span className='urgent-item__price--old'>
								{item.oldCost}
							</span>
						</div>
						<div className='ugent-item__top text-center  '>
							<img
								className='urgent-item__img'
								src={item.img}
								alt={item.title}
								width='150'
								height='190'
							/>
							<h3 className='urgent-item__heading'>{item.title}</h3>
						</div>

						<div className='ugent-item__desc'>
							<p className='urgent-item__interval-title'>
								До конца акции осталось:
							</p>

							<div className='ugent-item__desc-inner'>
								<img
									className='urgent-item__timer-icon'
									src='img/Timer.png'
									alt='TImer icon'
									width='20'
									height='20'
								/>
								<div className='urgent-item__timer'>
									{minutes === 0 && seconds === 0 ? (
										`time is up`
									) : (
										<>
											<p className='urgent-item__timer-num'>
												00 : {minutes} :{' '}
												{seconds < 10 ? `0${seconds}` : seconds}
											</p>
											<p className='urgent-item__timer-text'>
												часов минут секунд
											</p>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
export default UrgentProduct;
