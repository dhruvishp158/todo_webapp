import React from 'react';
import dlt from './images/delete.png'
import delt from './images/images.jpg'
const Todos=({todos,deleteTodoo})=>{

    const todoList=todos.length?(
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodoo(todo.id)}}>{todo.content}</span>                    
                </div>
            )
        })
    ):(
        <p className="center">You have no more Todos</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;