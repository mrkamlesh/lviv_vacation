import React, {Component} from 'react';

export default class AboutContent extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <span className="inform">
                    {this.props.content}
                <br /><br />
                    {this.props.content2}
                </span>
                <span className="titleInform">{this.props.title}</span>
            </div>
        )
    }
}