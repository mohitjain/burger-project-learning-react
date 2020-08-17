import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}><span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}</li>
    });

    return (
        <div>
            <Aux>
                <h3>Your Order Summary</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout</p>
            </Aux>
        </div>
    );
};

export default orderSummary;
