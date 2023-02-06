import './FoodItems.css'
import FoodItem from './FoodItem'
import FoodItemFilter from './FoodItemFilter'

const FoodItems = (props) => {
  const filterHandler = (newFilterDate) => {
    props.onFilterChange(newFilterDate)
  }

  return (
    <div className='food-items'>
      <FoodItemFilter onFilter={filterHandler} ></FoodItemFilter>
      {props.foodItems.length === 0
        ? (
        <div className='expenses-list__fallback'>No Food Items Found</div>
          )
        : (
            props.foodItems.map(foodItem =>
          <FoodItem item={foodItem} key={foodItem.id}></FoodItem>)
          )}
    </div>
  )
}

export default FoodItems
