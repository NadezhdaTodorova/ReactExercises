import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import buildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Bacon', type: 'bacon' },
    {label: 'Chees', type: 'cheese' },
    {label: 'Meat', type: 'meat' },
];

debugger;
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctr => (
            <BuildControl 
            key={ctr.label}
            label={ctr.label}
            added={ () => props.ingredientAdded(ctr.type)} 
            removed={ () => props.ingredientRemoved(ctr.type)}
            disabled = {props.disabled[ctr.type]}/>
        ))}
        <button className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls; 