import React from 'react';
import Todos from './Todos';
import AddToDo from './AddTodo';
class App extends React.Component {
    state={
      todos:[
        {id:1,content:"Milk"},
        {id:2,content:"Chocolate"}
      ]
    }
   

deleteTodoo= (id) => {
  const todos=this.state.todos.filter(todo=>{
    return todo.id !==id;
  })
  this.setState({
    todos
  }
  )
}

addTodos=(todo)=>{
  todo.id=Math.random();
  let todos=[...this.state.todos,todo];
  this.setState({
    todos,
  })
}
  render(){
  return (
    <div className="App container">
     <h1 className="center blue-text">ToDO App</h1>
     <Todos todos={this.state.todos} deleteTodoo={this.deleteTodoo} />
     <AddToDo addTodos={this.addTodos} />
    </div>
  );
}
}

export default App;
