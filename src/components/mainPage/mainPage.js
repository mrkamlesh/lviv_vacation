import React, {Component} from 'react';
import VideoContainer from '../video/video';
import MainContent from '../mainPage/mainInform';
import MainIcons from '../mainPage/icons';
import Navbar from '../Navbar/Navbar';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';
import { connect } from 'react-redux';
import { fetchBasket } from '../../actions/actionsData';

class MainBlock extends Component {

    componentDidMount(){
        if(this.props.loggedIn){
            this.props.dispatch(fetchBasket())
        }
    }

    render() {
        return (
            <>
            <div  className={['main_page', this.props.clicked && 'is-inf-open'].join(' ')}>
                <VideoContainer />
                <Navbar />

                <section className="choice"> 
                    <MainContent />
                    <MainIcons />
                </section>

                {this.props.clicked && <div className='inf-content'>
                    <CatalogWithFilter />
        </div> }
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.click.clicked,
    hotelClicked: state.click.clickedHotels,
    restClicked: state.click.clickedRestaraunts,
    entClicked: state.click.clickedEntertainment,
    loggedIn: state.authentication.loggedIn
});

export default connect(mapStateToProps)(MainBlock);