import { useState } from 'react';
import './NewFoodItemForm.css'

const NewFoodItemForm = (props) => {
    const defaultDateString = new Date().toISOString().slice(0, 10);
    const [enteredItem, setEnteredItem] = useState({
        foodItemName: '',
        consumedDate: defaultDateString,
        foodItemCalories: '',
    });

    const itemNameChangeHandler = (event) => {
        setEnteredItem((prevState) => {
            return {...prevState, foodItemName: event.target.value}
        });
    }

    const itemDateChangeHandler = (event) => {
        setEnteredItem((prevState) => {
            return {...prevState, consumedDate: event.target.value}
        });
    }

    const itemCaloriesChangeHandler = (event) => {
        setEnteredItem((prevState) => {
            return {...prevState, foodItemCalories: event.target.value}
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddFoodItem({...enteredItem, consumedDate: new Date(enteredItem.consumedDate)});
        setEnteredItem({
            foodItemName: '',
            consumedDate: defaultDateString,
            foodItemCalories: '',
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-food-item__controls'>
                <div className='new-food-item__control'>
                    <label>Name</label>
                    <input 
                        type='text' 
                        onChange={itemNameChangeHandler}
                        value={enteredItem.foodItemName}
                        required
                    />
                </div>
                <div className='new-food-item__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2020-01-01' 
                        onChange={itemDateChangeHandler} 
                        value={enteredItem.consumedDate}
                    />
                </div>
                <div className='new-food-item__control'>
                    <label>Calories</label>
                    <input 
                        type='number' 
                        min='10' step='5' 
                        onChange={itemCaloriesChangeHandler}
                        value={enteredItem.foodItemCalories}
                        required
                    />
                </div>
            </div>
            <div className='new-food-item__actions'>
                <button type='submit'>Add Food Item</button>
            </div>
        </form>
    );
};

export default NewFoodItemForm;