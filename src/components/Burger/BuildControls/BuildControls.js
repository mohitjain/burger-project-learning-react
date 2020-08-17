import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: 'salad' },
    { label: "Bacon", type: 'bacon' },
    { label: "Cheese", type: 'cheese' },
    { label: "Meat", type: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.currentPrice.toFixed(2)}</strong></p>
            {
                controls.map( control => {
                    return <BuildControl
                        key={control.label}
                        label={control.label}
                        ingredientAdded={() => props.ingredientAdded(control.type)}
                        ingredientRemoved={() => props.ingredientRemoved(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                })
            }

            <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
        </div>
    );
};

export default buildControls;
