import './FoodItemDate.css'

const FoodItemDate = (props) => {
    const consumedDate = {
        day: props.consumedDate.toLocaleString('en-US', {day: '2-digit'}),
        month: props.consumedDate.toLocaleString('en-US', {month: 'long'}).toUpperCase(),
        year: props.consumedDate.toLocaleString('en-US', {year: 'numeric'}),
    }
    return (
        <div className='food-date'>
                <div className='food-date__month'>{consumedDate.month}</div>
                <div className='food-date__day'>{consumedDate.day}</div>
                <div className='food-date__year'>{consumedDate.year}</div>
            </div>
    );
}

export default FoodItemDate;