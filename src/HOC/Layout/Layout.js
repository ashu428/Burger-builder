import React , {Component} from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.css';
import SideDrawer from '../../Components/Navigation/SIdeDrawer/SideDrawer';

class Layout  extends Component {

    state = {
        SideDrawerShow: false
    }

    SideDrawerHandler = () => {
        
        return(
            this.setState({SideDrawerShow:false})
        )

    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) =>{
            return{SideDrawerShow: !prevState.SideDrawerShow};
        })
    }

    render() {
        return(

            <Auxillary>

            <Toolbar DrawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer Clicked={this.SideDrawerHandler}
            Show={this.state.SideDrawerShow}/>
    
            <main className={classes.Content}>
                {this.props.children}
            </main>
    
        </Auxillary>

        )
    }
} 

   


export default Layout;