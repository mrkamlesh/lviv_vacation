import React, {Component} from 'react';
import sleep from '../../img/sleep.svg';
import food from '../../img/food.svg';
import cinema from '../../img/cinema.svg';
import { connect } from 'react-redux';
import { fetchHotels, fetchRestaraunts, fetchEntertainments } from '../../actions/actionsData';
import {clickedEntertainments, clickedHotels, clickedRestaraunts, justClick} from '../../actions/actionClicked';

class MainIcons extends Component {

    //Function for enable animation and fetch hotels
    handleHotels(){
        if(this.props.hotelClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }

        if(this.props.entClicked){
            this.props.dispatch(clickedEntertainments());
        }

        if(this.props.restClicked){
            this.props.dispatch(clickedRestaraunts());
        }
        this.props.dispatch(clickedHotels());
        this.props.dispatch(fetchHotels(this.props.budget-this.props.price));
    }


    
    //Function for enable animation and fetch restaurants
    handleRest(){
        if(this.props.restClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }

        if(this.props.hotelClicked){
            this.props.dispatch(clickedHotels());
        }

        if(this.props.entClicked){
            this.props.dispatch(clickedEntertainments());
        }

        this.props.dispatch(clickedRestaraunts())
        this.props.dispatch(fetchRestaraunts(this.props.budget-this.props.price));
    }


    handleEnt(){
        if(this.props.entClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }
        
        if(this.props.hotelClicked){
            this.props.dispatch(clickedHotels());
        }

        if(this.props.restClicked){
            this.props.dispatch(clickedRestaraunts());
        }

        this.props.dispatch(clickedEntertainments());
        this.props.dispatch(fetchEntertainments(this.props.budget-this.props.price));
    }

    render() {
        return (
            <>
                <div className="icons">
                    <div  onClick={()=>this.handleHotels()} className={['images', this.props.clicked && 'is-inf-images', this.props.hotelClicked && 'is-element-choose'].join(' ')} >
                        <img src={sleep} alt="Sleep" />
                    </div>

                    <div onClick={()=>this.handleRest()} className={['images', this.props.clicked && 'is-inf-images', this.props.restClicked && 'is-element-choose'].join(' ')} >
                        <img src={food} alt="Eat" />
                    </div>

                    <div onClick={()=>this.handleEnt()} className={['images', this.props.clicked && 'is-inf-images', this.props.entClicked && 'is-element-choose'].join(' ')}> 
                        <img src={cinema} alt="Hang_out" />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    route: state.data.route,
    clicked: state.click.clicked,
    hotelClicked: state.click.clickedHotels,
    restClicked: state.click.clickedRestaraunts,
    entClicked: state.click.clickedEntertainment,
    budget: state.data.budget,
    items: state.data.items,
    price: state.data.price
});


export default connect(mapStateToProps)(MainIcons);