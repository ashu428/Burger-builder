import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Auxillary from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error:null
        }
        componentWillMount() {

            this.resInterceptors = axios.interceptors.response.use(res => res , error => {
                this.setState({error:error});
            })

        }


        componentWillUnmount() {

            axios.interceptors.response.eject(this.resInterceptors);

        }

        errorConfirmedHandler =() => {

            return(
                this.setState({error:null})
            )

        }

        render() {
            return (

                <Auxillary>

                   { this.state.error ?<Modal Show={this.state.error}
                    cancel={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message :null}
                    </Modal>:null }

                    <WrappedComponent {...this.props} />

                </Auxillary>


            )
        }
    }
}

export default withErrorHandler;