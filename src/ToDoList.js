import React,{Component} from 'react';
import ToDoItem from './ToDoItem'
import './need.css'

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:['a','b']
        }
    }

    
    render(){
        return (<div className = 'wrapper'>
            <h2 className = 'title'>React Todo</h2>
            <div className = "content"> {   
                this.state.list.map((item,index) => {
                   return (<ToDoItem className = "item" content = {item} count = {index} delete = {this.deleteItem.bind(this)}/>)
                })
                
            }
            <h4 className = 'side'>Task</h4>
            <input  className ='input' value = {this.state.inputValue} onChange = {this.handelInput.bind(this)}/>
            <button onClick = {this.handelBtnClick.bind(this)}>Save Task</button>
            </div>
            
            </div>);
    }
    handelInput(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handelBtnClick(e){
        this.setState({
            list :[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        const lists = this.state.list;
        lists.splice(index,1);
        console.log("lallals")
        this.setState({
            list:lists
        })
    }
}

export default ToDoList;