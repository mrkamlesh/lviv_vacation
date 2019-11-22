import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";
import { userService } from '../../services/userService';
import {isOverBudget} from '../../actions/userActions';

class Catalog extends React.Component {


    handleClick(id){
        let alreadyAdded = new Set(this.props.userItems.map(i => i.id));
        this.props.items.map(item => {
                if(Number(this.props.budget)-Number(this.props.price)-Number(item.price) >= 0)
                {
                    if(item.id === id && !alreadyAdded.has(id)){
                      this.props.dispatch(userService.postChoice(item));
                    }
                }
                else{
                    this.props.dispatch(isOverBudget(true));
                    setTimeout(()=>this.setState(() => {
                        this.props.dispatch(isOverBudget(false));
                   }), 3000);

                }

                return false;
            }
        )
    }

    render() {
        return (
            <div className="hotelsOffers">
                {console.log("here here here",this.props)}
                {this.props.filterItems.map((p, index) => {
                        return <ItemOfCatalog key={p.id} description={p.description} destination={p.destination} 
                        smoking={p.smoking} WiFi={p.wi_fi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}
                        mobilePhone={p.mobile_phone} img={p.image} price={p.price} handle={()=>this.handleClick(p.id)} classBtn="fa fa-plus"/>}
                )}
            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({

    userItems: state.data.userItems,
    filterItems: state.data.filterItems,
    items: state.data.items,
    checkAll: state.filter.checkAll,
    checkHotel: state.filter.checkHotel,
    checkMotel: state.filter.checkMotel,
    checkHostel: state.filter.checkHostel,
    checkFlat: state.filter.checkFlat,
    budget: state.data.budget,
    price: state.data.price,
});


export default connect(mapStateToProps)(Catalog);