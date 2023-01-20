import { useState } from "react";
import FoodItems from "./components/FoodItems/FoodItems";
import TopFoodItems from "./components/FoodItems/TopFoodItems"
import NewFoodItem from "./components/NewFoodItem/NewFoodItem";
import NavBar from "./components/UI/NavBar";
import UserRegistration from "./components/UserRegistration/UserRegistration";

const DUMMY_FOOD_ITEMS = [
  { id: 1, foodItemName: 'Noodles', consumedDate: new Date(2023, 0, 18, 12), foodItemCalories: 200},
  { id: 2, foodItemName: 'Pizza', consumedDate: new Date(2023, 0, 17, 12), foodItemCalories: 40},
  { id: 3, foodItemName: 'Cake', consumedDate: new Date(2023, 0, 19, 12), foodItemCalories: 230},
];

const App = () => {
  const [foodItems, setFoodItems] = useState(DUMMY_FOOD_ITEMS);
  const [loginFlag, setLoginFlag] = useState(0)

  const addNewItemHandler = (newItem) => {
    setFoodItems((prevState) => {
      return [newItem, ...prevState];
    });
  }

  const signInHandler = (flag) => {
    setLoginFlag(flag);
  }

  const logoutHandler = (flag) => {
    setLoginFlag(flag);
  }

  return (
    <div>
      <NavBar loginFlag={loginFlag} onLogout={logoutHandler}></NavBar>
      { loginFlag ? (
        <div>
          <NewFoodItem onAddFoodItem={addNewItemHandler}></NewFoodItem>
          <FoodItems foodItems={foodItems}></FoodItems>
        </div>
      ) : (
        <div> 
          <UserRegistration onSignIn={signInHandler}></UserRegistration>
          <TopFoodItems foodItems={foodItems}></TopFoodItems>
        </div>
      )}
      
    </div>
  );
}

export default App;
