import FoodItem from "./FoodItem";

const TopFoodItems = (props) => {
    return (
        <div className='food-items'>
            {props.foodItems.length === 0 ? (
                <div className='expenses-list__fallback'>No Food Items Found</div>
            ) : (
                props.foodItems.map(foodItem => 
                    <FoodItem item={foodItem} key={foodItem.id}></FoodItem>)
            )}
        </div>
    );
}

export default TopFoodItems;