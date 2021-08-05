import React , {Component} from 'react';
import classes from './Modal.css';
import Auxillary from '../../../HOC/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps , nextState) {
        return nextProps.Show !== this.props.Show || nextProps.children !== this.props.children;
    }

   
    render() {
        return(
            <Auxillary>

        <Backdrop Show={this.props.Show}
        cancel={this.props.cancel}/>

        <div className={classes.Modal}>
            {this.props.children}
        </div>

    </Auxillary>

        )
    }
}

export default Modal;