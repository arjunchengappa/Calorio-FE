import './FoodItems.css'
import FoodItem from './FoodItem';
import FoodItemFilter from './FoodItemFilter';
import { useState } from 'react';

const FoodItems = (props) => {
    const [filterDate, setFilterDate] = useState(new Date().toISOString().slice(0, 10));

    const filterHandler = (newFilterDate) => {
        setFilterDate(newFilterDate);
    }

    const checkItem = (item) => {
        return item.consumedDate.toISOString().slice(0, 10) === filterDate;
    }

    const filterdFoodItems = props.foodItems.filter(checkItem);

    return (
        <div className='food-items'>
            <FoodItemFilter onFilter={filterHandler} ></FoodItemFilter>
            {filterdFoodItems.length === 0 ? (
                <div className='expenses-list__fallback'>No Food Items Found</div>
            ) : (
                filterdFoodItems.map(foodItem => 
                    <FoodItem item={foodItem} key={foodItem.id}></FoodItem>)
            )}
        </div>
    );
}

export default FoodItems;