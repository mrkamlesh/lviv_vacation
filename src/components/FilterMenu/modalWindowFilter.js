import React from 'react';
import Modal from 'react-modal';
import { WrapperComponent } from '../FilterMenu/filterMenu';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement(document.querySelector("html"))
 
class FilterMenuModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.showFilterModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.props.showFilterModal}
          style={customStyles}
          contentLabel="Example Modal">
            <WrapperComponent showModalClass="showModalClass"/>
          <button onClick={this.props.closeFilterMenu} className="closeButtonFilterMenu"><i className="fas fa-times"></i></button>
        </Modal>
      </div>
    );
  }
}

export default FilterMenuModal;