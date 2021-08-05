import React , { Component }  from 'react';
import CheckoutSummary from '../../Components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients : {
            salad:0,
            cheese:0,
            bacon:0,
            meat:0
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);

        const ingredients = {}

        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }

        this.setState({ingredients:ingredients});
    }

    CancelHandler = () => {

        this.props.history.goBack('/');

    }

    ContinueHandler = () => {

        this.props.history.replace('/checkout/form')
    }
    render() {
        return(
            <div>

                <CheckoutSummary
                 ingredient={this.state.ingredients}
                 Cancelled={this.CancelHandler}
                 Continued={this.ContinueHandler}/>
                
            </div>
        )
    }
}

export default Checkout;