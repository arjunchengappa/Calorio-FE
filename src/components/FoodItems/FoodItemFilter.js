import './FoodItemFilter.css';
import { useState } from 'react';

const FoodItemFilter = (props) => {
	const [filterDate, setFilterDate] = useState(new Date().toISOString().slice(0, 10));
	const filterChangeHandler = (event) => {
		setFilterDate(event.target.value);
		props.onFilter(event.target.value);
	}
	return (
		<div className='food-item-filter'>
			<div className='food-item-filter__control'>
				<label>Filter by year</label>
				<input 
					type='date' 
					min='2020-01-01' 
					onChange={filterChangeHandler} 
					value={filterDate} 
				/>
			</div>
		</div>
	);
	};

export default FoodItemFilter;