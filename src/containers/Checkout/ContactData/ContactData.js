import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from "../../../components/UI/Button/Button";
import instance from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Mohit",
                address: {
                    street: "4103, Defence Colony",
                    zipcode: "126102",
                    country: "India"
                },
                email: "jain.mohit27@gmail.com",
                deliveryMethod: "fastest"
            }
        }

        instance.post("/orders.json", data)
            .then(response => {
                //this.setState({loading: false});
            })
            .catch(error => {
                //this.setState({loading: false});
               // console.log(error);
            })
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                <form>
                    <input type="text" name='name' placeholder="Your Name"/>
                    <input type="text" name='email' placeholder="Your Email"/>
                    <input type="text" name='street' placeholder="Your Street"/>
                    <input type="text" name='postal code' placeholder="Your Postal code"/>
                    <Button btnType='Success' clicked={this.orderHandler}> Order </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;