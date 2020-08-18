import React from 'react';
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/Navigationitems";
import classes from './sideDrawer.module.css';
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";

const sideDrawer = (props) => {

    let attachClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(" ")}>
                <div className={classes.Logo}><Logo/></div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
