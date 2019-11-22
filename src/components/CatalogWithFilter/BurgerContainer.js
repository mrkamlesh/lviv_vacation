import React, {Component} from 'react';

class BurgerContainer extends Component{
    render() {
        return (
        <div className="burger-cont">
            <button onClick={this.props.clickBurger} className="showFilterMenu"><i className="fas fa-sliders-h"></i></button>
            {this.props.loggedIn && 
                <div className="align-basket">
                  <div className="basket" onClick={this.props.handleOpenModal}>
                    <i className="fas fa-shopping-basket"></i>
                    <div className="counter"><p>{this.props.amntUsers}</p></div>
                  </div>
                </div>}
        </div>
        )
    }
}


export default BurgerContainer;