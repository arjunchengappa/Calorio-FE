import { Component } from 'react';
import './FoodItem.css'
import FoodItemDate from './FoodItemDate';


class FoodItem extends Component {
    render() {
        return (
            <div className='food-item'>
                <FoodItemDate consumedDate={new Date(this.props.item.consumed_date)}></FoodItemDate>
                <div className='food-item__description'>
                    <h2>{this.props.item.item.name}</h2>
                    <div className='food-item__calories'>{this.props.item.calories} cal</div>
                </div>
            </div>
        );
    }
}

export default FoodItem;