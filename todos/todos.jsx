import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './todos.scss';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemState :'active',//'active' or 'completed'
        }      
    }

    toggleState(item){
        console.log(item)
        if(item.state == 'active'){
            item.state = 'completed'
        }else{
            item.state = 'active'
        }
        this.setState({});
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item)=>{
                    if(this.props.filter == 'all' || (this.props.filter == item.state)){
                        return <li className={'item-'+item.state} onClick={this.toggleState.bind(this,item)}>{item.content}</li>
                    }   
                })}
            </ul>)         
    }
}

class TextInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value :''
        }      
    }

    updateTodosItem(){
        if(this.state.value == ''){
            return
        }
        this.props.onUpdateTodosItem(this.state.value)
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        let value = this.state.value
        return (  
            <div>
                <input type='text' value={value} onChange={this.handleChange.bind(this)}></input><button onClick={this.updateTodosItem.bind(this)}>Add Todo</button>
            </div>)         
    }
}

class FilterButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter :'all'//'all' or 'active' or 'completed'
        }      
    }

    onUpdateTodosFilter(event){
        this.props.onUpdateTodosFilter(event.target.childNodes[0].data)
        event.currentTarget.childNodes[1].disabled = event.currentTarget.childNodes[2].disabled = event.currentTarget.childNodes[3].disabled = false
        event.target.disabled = true
    }
    render() {
        return (
            <div onClick={this.onUpdateTodosFilter.bind(this)}>
                <span>Show:</span>
                <button>all</button>
                <button>active</button>
                <button>completed</button>
            </div>)         
    }
}

class ToDos extends React.Component {
    constructor(props){
        super(props);      
        this.state={
            items:[{
                content:'x',
                state:'active'
            }],
            filter:'all'
        }
    }

    onUpdateTodosItem(item){
        this.state.items.push({content:item,state:'active'})
        this.setState({})
    }

    onUpdateTodosFilter(item){
        this.setState({filter:item})
    }
    componentWillUpdate(){
        console.log(this.state.itemData)
    }
    render() {
        return (
        <div className="todos-container">
            <TextInput onUpdateTodosItem={this.onUpdateTodosItem.bind(this)}/>
            <Item items={this.state.items} filter={this.state.filter}/>
            <FilterButton onUpdateTodosFilter={this.onUpdateTodosFilter.bind(this)}/>
        </div>)
    }
}

ToDos.propTypes = {

}
export default ToDos