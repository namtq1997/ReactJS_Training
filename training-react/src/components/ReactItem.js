import React, {Component} from 'react';
import classNames from 'classnames';
import './ReactItem.css';

class ReactItem extends Component{
    constructor(props) {
        super(props);

        this.onItemClick =  this.onItemClick.bind(this);
    }

    onItemClick() {
        this.props.item.isComplete = !this.props.item.isComplete;
    }

    render (){
        const {item} = this.props;
        
        return (
            <div onClick = {this.onItemClick} className = {classNames('ReactItem', {
                'ReactItem-complete': item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default ReactItem;