import React, { Component } from 'react';
import Auxillary from '../../../../HOC/Auxillary/Auxillary';
import Button from '../../../UI/Button/Button';


class Summary extends Component {
   // this could be a futional component
    render() {

        const itemsList = Object.keys(this.props.ingredients)
            .map(igkey => {
                return <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {this.props.ingredients[igkey]}
                </li>
            });

        return (
            <Auxillary>

                <div>
                    <h3>Your Order Summary</h3>
                    <p>Your Burger Consist Of Following Items</p>
                    {itemsList}
                    <h4>Total Price : {this.props.totalPrice}$</h4>
                    <p>Proceed To Checkout ??</p>
                    <Button btnType="Danger" clicked={this.props.Danger}>Cancel</Button>
                    <Button btnType="Success" clicked={this.props.Success}>Continue </Button>

                </div>

            </Auxillary>

        );
    }
}

export default Summary;

