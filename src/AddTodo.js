import React,{Component} from 'react';

class AddtoDo extends React.Component{
    
state={
    contrnt:''
}
handleChange=(e)=>{
    this.setState({
        content:e.target.value,
    })
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodos(this.state);
    this.setState({
        content:''
    })
}
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add Items </label>
                <input type="text" onChange={this.handleChange} value={this.state.content} />
                
            </form>
        </div>
        )
    }
} 
export default AddtoDo;