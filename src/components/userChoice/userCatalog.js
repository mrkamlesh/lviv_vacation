import React from 'react';
import ItemOfCatalog from '../Catalog/itemOfCatalog';
import {connect} from "react-redux";
import Navbar from '../Navbar/Navbar';
import {deleteChoice} from '../../actions/actionsData';

class userCatalog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleting: false
        };
    }

    handleDelete(data){
        //set state for delete animation
        this.setState(() => {
             return {deleting: true};
        });
        this.props.dispatch(deleteChoice(data));

        setTimeout(()=>this.setState(() => {
             return {deleting: false};
        }), 2000);

    }


    render() {
        return (
            <>
            <Navbar />
            <div className="userCatalog basketWindow">
            <p className="nameOfBuilding">Your choice:</p>
                <div className="hotelsOffers">
                    {this.props.userItems.map(i => (
                        <ItemOfCatalog key={i.id} id={i.id} description={i.description} destination={i.destination} smoking={i.smoking} WiFi={i.WiFi} 
                        rating={i.rating} whatIsIt={i.whatIsIt} name={i.name} mobilePhone={i.mobilePhone} img={i.image} price={i.price}
                        handle={()=>this.handleDelete(i)} deleting={this.state.deleting} selected={[this.props.deleting && 'is-delete'].join(' ')} classBtn="fa fa-times user"/>        
                    ))
                    }
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    userItems: state.data.userItems
});

export default connect(mapStateToProps)(userCatalog);