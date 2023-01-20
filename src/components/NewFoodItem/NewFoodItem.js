import './NewFoodItem.css'

import NewFoodItemForm from './NewFoodItemForm';

const NewFoodItem = (props) => {
    const addFoodItemHandler = (enteredItemData) => {
        const newItem = {...enteredItemData, id: Math.random().toString()};
        props.onAddFoodItem(newItem);
    };

    return (
        <div className="new-food-item">
            <NewFoodItemForm onAddFoodItem={addFoodItemHandler}></NewFoodItemForm>
        </div>
    );
};

export default NewFoodItem;