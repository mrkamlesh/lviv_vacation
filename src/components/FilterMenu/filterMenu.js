import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';

import { connect } from 'react-redux';
import {changeCheckboxAll, changeCheckboxHotel, changeCheckboxMotel, changeCheckboxHostel, changeCheckboxFlat, changeCheckboxByIncrease, changeCheckboxByDecrease} from '../../actions/actionFilterMenu';

export default class FilterMenu extends React.Component {
 
  render() {

    let firstField, secondField, thirdField, fourtField, fithField;
    const dispatch = this.props.dispatch;
    let smallScreenClass = `preferences`;

    if(this.props.showModalClass) {
      smallScreenClass = `preferences ${this.props.smallscreen} ${this.props.showModalClass}`;
    }

    const {checkAll, checkFlat, checkHostel, checkHotel, checkMotel, checkByDecrease, checkByIncrease} = this.props;


    if(this.props.hotelClicked) {
      firstField = 'Choose all';
      secondField = 'Hotel';
      thirdField = 'Motel';
      fourtField = 'Hostel';
      fithField = 'Flat';
      
    } else if(this.props.restClicked) {
      firstField = 'Choose all';
      secondField = 'Restaurants';
      thirdField = 'Cafes';
      fourtField = 'Snack-bars';
      fithField = 'Pubs'

    } else if(this.props.entClicked) {
      firstField = 'Choose all';
      secondField = 'Cinema';
      thirdField = 'Theatre';
      fourtField = 'Active Rest';
      fithField = 'Passive Rest'
    }

    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>

                <ItemForCheck content={firstField} checked={checkAll} dispatch={dispatch} action={changeCheckboxAll} propCheck={this.props}/>
                <ItemForCheck content={secondField}  checked={checkHotel} dispatch={dispatch} action={changeCheckboxHotel} propCheck={this.props}/>
                <ItemForCheck content={thirdField}  checked={checkMotel} dispatch={dispatch} action={changeCheckboxMotel} propCheck={this.props}/>
                <ItemForCheck content={fourtField} checked={checkHostel} dispatch={dispatch} action={changeCheckboxHostel} propCheck={this.props}/>
                <ItemForCheck content={fithField} checked={checkFlat} dispatch={dispatch} action={changeCheckboxFlat} propCheck={this.props}/>
                <hr style={{color: "red",
                border: "1px solid black",
                width: "100%"}}/>
                <ItemForCheck content="Sort by price increase" checked={checkByIncrease} dispatch={dispatch} action={changeCheckboxByIncrease}/>
                <ItemForCheck content="Sort by price decrease" checked={checkByDecrease} dispatch={dispatch} action={changeCheckboxByDecrease}/>
            </div>
            <ButtonFilter checkedItems={this.props}/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    checkAll: state.filter.checkAll,
    checkHotel: state.filter.checkHotel,
    checkMotel: state.filter.checkMotel,
    checkHostel: state.filter.checkHostel,
    checkFlat: state.filter.checkFlat,
    hotelClicked: state.click.clickedHotels,
    restClicked: state.click.clickedRestaraunts,
    entClicked: state.click.clickedEntertainment,
    checkByIncrease: state.filter.checkByIncrease,
    checkByDecrease: state.filter.checkByDecrease
  }
}

const WrapperComponent = connect(mapStateToProps)(FilterMenu)
export {WrapperComponent};