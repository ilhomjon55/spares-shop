import { useState } from 'react';
import { products } from '../../Data/data.js';
import './SearchBar.css';

function SearchBar() {
	const [searchBy, setSearchBy] = useState('producer');
	const [inputSearch, setInputSearch] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);

	const searchQuery = new RegExp(inputSearch, 'gi');

	const handleSearchBtnSubmit = (evt) => {
		evt.preventDefault();

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
	};

	return (
		<>
			<div className='search__btns-wrapper nav'>
				<button
					className='search__btn active'
					type='button'
					value='producer'
					data-bs-toggle='pill'
					onClick={handleClickSearchBtn}>
					Поиск по марке
				</button>
				<button
					className='search__btn'
					type='button'
					value='title'
					data-bs-toggle='pill'
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
