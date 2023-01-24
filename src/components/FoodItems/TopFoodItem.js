import { Component } from 'react';
import './TopFoodItem.css'

class TopFoodItem extends Component {
    render() {
        return (
            <div className='top-food-item'>
                <div className='top-food-item__counter'>
                    <div className='top-food-item__label'>Rank</div>
                    <div className='top-food-item__rank'>{this.props.rank + 1}</div>
                </div>
                <div className='top-food-item__description'>
                    <h2>{this.props.item.name}</h2>
                    <div className='top-food-item__calories'>{this.props.item.consumer_count} users</div>
                </div>
            </div>
        );
    }
}

export default TopFoodItem;