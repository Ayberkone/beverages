import React, { Component } from 'react';
import { connect } from "react-redux";
//import { DrinkAction } from '../../actions';
import Drink from './Drink';
import Footer from './Footer';
import Header from './Header';
import { DrinkAction } from '../../actions';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drink: ''
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated "' + name + '" = ' + value);
    }

    addDrink = (e, drink) => {
        e.preventDefault()
        let tmp = this.props.drinkTypes.data;
        this.props.dispatch(DrinkAction.createDrinkType(tmp, drink));

        var form = document.getElementById("loginForm");
        form.reset();
    }

    render() {
        let drinkTypes = this.props.drinkTypes;
        let drink = this.state;

        return (
            <div className="App">
                <Header />

                <div className="container container-body mt-5 mb-5">
                    <div className="row">
                        {(drinkTypes.data) &&
                            drinkTypes.data.map((type, i) => (
                                <div key={i} className="col-md-6 p-4">
                                    <Drink type={type} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="row d-flex justify-content-center">
                        <form id="loginForm" className="well form-horizontal" onSubmit={e => this.addDrink(e, drink)} method="post">
                            <label htmlFor="drink">Icecek Adi</label>
                            <input type='text' name='drink' onChange={this.handleInputChange} />
                            <button type="submit" className='add-drink'>Ekle</button>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { drinkTypes } = state;
    return {
        drinkTypes
    };
}

export default connect(mapStateToProps)(Home);
