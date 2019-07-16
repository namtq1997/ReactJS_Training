import React, {Component} from 'react';

class ReactItem extends Component{
    render (){
        return (
            <div className = "ReactItem">
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default ReactItem;