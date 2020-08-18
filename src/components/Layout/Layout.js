import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });

        //this.setState({ showSideDrawer: !this.state.showSideDrawer });
        //It won't work 'cause of the asynchronous nature of it. We must use the 'prevState'
        //as above. The clean way to setting the state when it depends on the old state.

    }

    render() {
        return <Aux>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                    <main className={classes.Content}>
                        { this.props.children }
                    </main>
                </Aux>
    }

};

export default Layout;