import React from 'react';


export default class ItemForCheck extends React.Component {
 
  render() {

    // console.log("------------>>>>>>>>>>>>" ,this.props.propCheck);
    return (
      
      <div>
        <label className="check-item">

        <input type="checkbox" className="checkbox"  id="checkbox" checked={this.props.checked} onChange={(event) => this.props.dispatch(this.props.action(event.target.checked))}/>

        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}

