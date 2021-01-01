import { useState } from 'react';
import { products } from '../../Data/data.js';
import './SearchBar.css';

function SearchBar() {
	const [searchBy, setSearchBy] = useState('producer');
	const [inputSearch, setInputSearch] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);

	const searchQuery = new RegExp(inputSearch, 'gi');

	const handleSearchBtnSubmit = () => {
		setFilteredProducts(
			products.filter((product) => {
				let condition;

				if (inputSearch) {
					condition = product[searchBy].match(searchQuery);
				}

				return condition;
			})
		);
	};

	const handleClickSearchBtn = (evt) => {
		setSearchBy(evt.target.value);
		if (searchBy === evt.target.value) {
			evt.target.classList.add('search__btn--active');
		} else {
			evt.target.classList.remove('search__btn--active');
		}
	};

	return (
		<>
			<div className='search__btns-wrapper'>
				<button
					className='search__btn search__btn--active'
					type='button'
					value='producer'
					onClick={handleClickSearchBtn}>
					Поиск по марке
				</button>
				<button
					className='search__btn'
					type='button'
					value='title'
					onClick={handleClickSearchBtn}>
					Поиск по названию товара
				</button>
			</div>

			<form
				className='search__form mb-3'
				onSubmit={handleSearchBtnSubmit}
				action='#'
				method='GET'
				autoComplete='off'
				spellCheck='false'>
				<input
					className='search__form-input'
					type='search'
					placeholder={`Введите ${
						searchBy === 'producer' ? 'марку' : 'названию'
					} автомобиля`}
					onChange={(evt) => setInputSearch(evt.target.value.trim())}
				/>

				<button className='search__submit-btn' type='submit'>
					искать
				</button>
			</form>

			<ul className='search__products-list list-group list-unstyled'>
				{filteredProducts.map((product) => {
					return (
						<li className='list-group-item' key={product.id}>
							{product.title}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default SearchBar;
