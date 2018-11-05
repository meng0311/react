import React,{Component} from 'react';

class ToDoItem extends Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
    }
    render(){
        return (
            <p><input type = "checkbox" className = "items" onClick = {this.deleteItem}/>{this.props.content}</p>
            
        )
    }
    deleteItem(){
        // this.props.delete(this.props.count);
    }
}

export default ToDoItem;