import './NewFoodItem.css'

import NewFoodItemForm from './NewFoodItemForm';

const NewFoodItem = (props) => {
    const addFoodItemHandler = (enteredItemData) => {
        props.onAddFoodItem(enteredItemData);
    };

    return (
        <div className="new-food-item">
            <NewFoodItemForm onAddFoodItem={addFoodItemHandler}></NewFoodItemForm>
        </div>
    );
};

export default NewFoodItem;