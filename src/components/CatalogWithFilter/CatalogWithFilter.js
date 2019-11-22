import React from 'react';
import Catalog from '../Catalog/Catalog';
import { WrapperComponent } from '../FilterMenu/filterMenu';
import BurgerContainer from './BurgerContainer';
import { connect } from 'react-redux';
import Basket from "../userChoice/modal";
import FilterMenuModal from '../FilterMenu/modalWindowFilter';

class CatalogWithFilter extends React.Component {

    constructor () {
      super();

      //state for show and hide modal window
      this.state = {
        showModal: false,
        drawerOpen: false,
        closeBurger: false
      };
      
      //bind function for changing modal state
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }

    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

   

    drawerToggleClickHandler = () => {
      this.setState(function(prevState) {
        return {
          drawerOpen: !prevState.drawerOpen,
          closeBurger: !prevState.closeBurger
          };
      })
    };

    closeFilterMenu = () => {
      this.setState(function(prevState) {
        return {
          drawerOpen: !prevState.drawerOpen,
          closeBurger: !prevState.closeBurger
        }
      });
    }

    render() {
      let classNameFilterMenu = "delete-margin";
      let smallScreen = "small-screen";
      let FilterModalWindowOpen = "";
      if(!this.state.drawerOpen) {
        classNameFilterMenu = "main-container";
        FilterModalWindowOpen = "modal-window-filter-menu";
        smallScreen = "small-screen";
      }
      
      return (
        <div className="mainContent">
          
          <BurgerContainer clickBurger={this.drawerToggleClickHandler} closeBurger={this.state.closeBurger} 
            loggedIn={this.props.loggedIn} handleOpenModal={this.handleOpenModal} amntUsers={this.props.userItems.length}
          />
      
          <FilterMenuModal showFilterModal={this.state.drawerOpen} closeFilterMenu={this.closeFilterMenu}/>
          <div className={FilterModalWindowOpen}>
            <WrapperComponent smallscreen={smallScreen}/>
          </div>
          <main className={classNameFilterMenu}>
            <div className="wave-block">
            {this.props.overBudget && <div className="budget-warning">You don't have enough money! Please change your budget</div>}
            <WrapperComponent />
              <Catalog />
            </div>
          </main>
          <Basket showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  userItems: state.data.userItems,
  loggedIn : state.authentication.loggedIn,
  overBudget: state.budget.overBudget
});

export default connect(mapStateToProps)(CatalogWithFilter);