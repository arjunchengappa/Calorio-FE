import './FoodItem.css'
import FoodItemDate from './FoodItemDate';

const  FoodItem = (props) => {
    return (
        <div className='food-item'>
            <FoodItemDate consumedDate={new Date(props.item.consumedDate)}></FoodItemDate>
            <div className='food-item__description'>
                <h2>{props.item.foodItemName}</h2>
                <div className='food-item__calories'>{props.item.foodItemCalories} cal</div>
            </div>
        </div>
    );
}

export default FoodItem;