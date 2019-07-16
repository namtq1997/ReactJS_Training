import React, {Component} from 'react';
import './ReactItem.css';

class ReactItem extends Component{
    render (){
        const { item } = this.props;
        let className = 'ReactItem';
        if (item.isComplete) {
            className += ' ReactItem-complete'
        }
        return (
            <div className = {className}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default ReactItem;