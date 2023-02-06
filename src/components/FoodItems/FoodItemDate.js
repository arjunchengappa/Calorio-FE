import { Component } from 'react'
import './FoodItemDate.css'

class FoodItemDate extends Component {
  render () {
    const consumedDate = {
      day: this.props.consumedDate.toLocaleString('en-US', { day: '2-digit' }),
      month: this.props.consumedDate.toLocaleString('en-US', { month: 'long' }).toUpperCase(),
      year: this.props.consumedDate.toLocaleString('en-US', { year: 'numeric' })
    }
    return (
      <div className='food-date'>
        <div className='food-date__month'>{consumedDate.month}</div>
        <div className='food-date__day'>{consumedDate.day}</div>
        <div className='food-date__year'>{consumedDate.year}</div>
      </div>
    )
  }
}

export default FoodItemDate
