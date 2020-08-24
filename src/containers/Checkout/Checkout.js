import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route} from "react-router";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
        price: 0,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0].split("=")[0] === 'price'){
                price = +param[0].split("=")[1];
            }else{
                ingredients[param[0].split("=")[0]] = +param[0].split("=")[1];
            }

        }
        this.setState({ ingredients: ingredients, price: price} );
    }

    onCheckoutCancel = () => {
        this.props.history.goBack();
    }
    onCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancel={this.onCheckoutCancel}
                    onCheckoutContinue={this.onCheckoutContinue}
                />
                <Route
                    path={this.props.match.path + '/contact-data' }
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.price}/>)}
                />
            </div>
        );
    }
}

export default Checkout;