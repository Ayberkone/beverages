import React, { Component } from 'react';
import { connect } from "react-redux";
import { DrinkAction } from '../../actions';

class Drink extends Component {

    // Empty local storage if its a new day
    compareDays = () => {
        let local_storage = JSON.parse(localStorage.getItem('cgObject'))
        if (local_storage) {
            let currentDate = new Date().getTime()
            local_storage.map((item, i, arr) => {
                // This returns the local sotrages' last item
                if (arr.length - 1 === i) {
                    let difference_in_time = item.record_day - currentDate
                    if (difference_in_time / (1000 * 3600 * 24) > 0)
                        this.props.dispatch(DrinkAction.clearDrinks)
                }
            })
        }
    }

    componentDidMount() {
        this.compareDays()
    }

    componentDidUpdate() {
        this.compareDays()
    }

    // When beverage image clicked, update the list
    updateDrinkTime = (e, type) => {
        e.preventDefault();
        let tmp = this.props.drinks.data;
        this.props.dispatch(DrinkAction.updateDrink(tmp, type));
    };

    // When a user wants to delete a time
    deleteDrinkTime = (e, id) => {
        e.preventDefault();
        let tmp = this.props.drinks.data;
        this.props.dispatch(DrinkAction.clearDrinkTime(tmp, id));
    }

    render() {
        let drinks = this.props.drinks;
        const type = this.props.type;
        return (
            <div className="card">
                <div className="card-body">
                    <input type='image' className={'drink-image ' + type}
                        src={require('../../assets/images/coffee.png')} alt={type}
                        onClick={(e) => this.updateDrinkTime(e, type)} />
                    <p>{type}</p>
                    <div className="list-group clocks list-group-flush">
                        {(drinks.data) &&
                            drinks.data.map((drink, i) =>
                                (type === drink.type) &&
                                <div key={i} className="clock d-inline-flex justify-content-center align-items-center p-2">
                                    <p>{drink.time}</p>
                                    <img type='image' className='delete-button'
                                        alt={''}
                                        onClick={(e) => this.deleteDrinkTime(e, drink.id)}></img>
                                </div>

                            )}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { drinks } = state;
    return {
        drinks
    };
}

export default connect(mapStateToProps)(Drink);
