import React from 'react';
import { connect } from 'react-redux';
class ButtonFilter extends React.Component {
constructor(props) {
  super(props);

  this.clickButtonFilter = this.clickButtonFilter.bind(this);
}
 

  clickButtonFilter(e) {
    e.preventDefault();
    this.props.filterCheck(this.props);
    this.props.filterByPrice(this.props);
  }


  render() {
    return (
        <div className="check-item filter-button-container" >
            <input type="submit" value="Filter" className="filter-button" onClick={this.clickButtonFilter}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return   {
    items: state.data.items,
    filterItems: state.data.filterItems,
    clickedHotels: state.click.clickedHotels,
    clickedEntertainment: state.click.clickedEntertainment,
    clickedRestaraunts: state.click.clickedRestaraunts,
    checkByIncrease: state.filter.checkByIncrease,
    checkByDecrease: state.filter.checkByDecrease
  }
}

let mapDispachToProps = (dispach) => {
    return {
      filterCheck: (value) => {
        dispach({
          type: "FILTER_ITEMS",
          value: value
        });
      },

      filterByPrice: (value) => {
        dispach({
          type: "FILTER_BY_PRICE",
          value: value
        });
      }
    }
}


export default connect(mapStateToProps, mapDispachToProps)(ButtonFilter);