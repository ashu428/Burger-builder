import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary/Auxillary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import axios from '../../axios-order';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Summary from '../../Components/UI/Modal/Summary/Summary';
import WithErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';





const IngredientsPrice = {

    salad: 2,
    cheese: 3,
    meat: 5,
    bacon: 5
}


class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        Baseprice: 7,
        Purchasable: false,
        Purchasing: false,
        Loading: false

    }

    componentDidMount() {
        axios.get('https://burger-builder-project-75575-default-rtdb.firebaseio.com/order/ingredients.json')
            .then(response => {

                this.setState({ ingredients: response.data })

            })
            .catch(error => {
                this.setState({ error: true })
            })
    }


    AddIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const UpdatedCount = oldCount + 1;
        const UpdatedIngredients = {
            ...this.state.ingredients
        };
        UpdatedIngredients[type] = UpdatedCount;

        const PriceAddition = IngredientsPrice[type];
        const OldPrice = this.state.Baseprice;
        const UpdatedPrice = PriceAddition + OldPrice;

        this.setState({ Baseprice: UpdatedPrice, ingredients: UpdatedIngredients })
        this.UpdatePurchaseState(UpdatedIngredients);
    }


    RemoveIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const UpdatedCount = oldCount - 1;
        const UpdatedIngredients = {
            ...this.state.ingredients
        };
        UpdatedIngredients[type] = UpdatedCount;

        const PriceSubstraction = IngredientsPrice[type];
        const OldPrice = this.state.Baseprice;
        const UpdatedPrice = OldPrice - PriceSubstraction;
        this.setState({ Baseprice: UpdatedPrice, ingredients: UpdatedIngredients })
        this.UpdatePurchaseState(UpdatedIngredients);

    }

    UpdatePurchaseState(ingredients) {



        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ Purchasable: sum > 0 })

    }

    PurchaseHandler = () => {
        return (
            this.setState({ Purchasing: true })
        );
    }

    CancelHandler = () => {
        return (
            this.setState({ Purchasing: false })
        );
    }

    ContinueHandler = () => {

        const QueryParams = [];

        for (let i in this.state.ingredients) {
            QueryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        const QueryString = QueryParams.join('&');

        this.props.history.push({
            pathname:'/checkout',
            search: '?' + QueryString
        });

        // this.setState({ Loading: true });
        //
        //
        // const order = {
        //  ingredients: this.state.ingredients,
        //  totalPrice: this.state.totalPrice,
        // UserData: {
        //   Name: 'Max Sir',
        //  Serial: 'xyz',
        // Email: 'MaxMilliangmail.com',
        // Adress: {

        //     Street: 'Falkland',
        //   City: 'Liverpool',
        //   Country: 'England'
        //  }
        //}
        //  }


        // return (

        // axios.post('/order.json', order)
        //.then(response => {
        //     this.setState({ Loading: false, Purchasing: false });
        // })
        // .catch(error => {
        // this.setState({ Loading: false, Purchasing: false });
        //   })

        // );
    }


    render() {


        let OrderSummary = null;


        let burger = this.state.error ? <p>Something Went Wrong</p> : <Spinner />

        if (this.state.ingredients) {

            burger = (



                <Auxillary>



                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientsAdded={this.AddIngredientsHandler}
                        ingredientsRemoved={this.RemoveIngredientsHandler}
                        Price={this.state.Baseprice}
                        Purchasable={this.state.Purchasable}
                        ordered={this.PurchaseHandler} />

                </Auxillary>
            )

            OrderSummary = <Summary
                ingredients={this.state.ingredients}
                Danger={this.CancelHandler}
                Success={this.ContinueHandler}
                totalPrice={this.state.Baseprice} />
        }

        if (this.state.Loading) {
            OrderSummary = <Spinner />;
        }


        return (

            <Auxillary>
                {this.state.Purchasing ?
                    <Modal Show={this.state.Purchasing}
                        cancel={this.CancelHandler}>

                        {OrderSummary}

                    </Modal> : null}

                {burger}


            </Auxillary>
        )

    }
}

export default WithErrorHandler(BurgerBuilder, axios);