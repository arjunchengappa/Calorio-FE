import { Component } from "react";
import TopFoodItem from "./TopFoodItem";

class TopFoodItems extends Component {
    constructor() {
        super();
        this.state = {
            topFoodItems: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/top-food-items')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    topFoodItems: data.top_food_items
                });
            });
    }

    render() {
        return (
            <div className='food-items'>
                {this.state.topFoodItems.length === 0 ? (
                    <div className='expenses-list__fallback'>No Food Items Found</div>
                ) : (
                    this.state.topFoodItems.map((foodItem, index) => 
                        <TopFoodItem item={foodItem} rank={index} key={foodItem.id}></TopFoodItem>)
                )}
            </div>
        );  
    }
}

export default TopFoodItems;