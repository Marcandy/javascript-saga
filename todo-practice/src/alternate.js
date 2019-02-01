//build a child with button for adding
// build a render list component
// build parent

class Todo extend Component {
  
    state = {
      allTodo: [
        {content: 'hello', id: 1}
      ],
      inputTodo: ''
      
    }
    
    
    handleChange (e) {
      this.setState({
        inputTodo: e.target.value
      })
    }
  
    addTdodo () {
      cont len = this.state.todo.length
      // need to create a new array and setState
      this.state.allTodo.push(
        {content: this.state.inputTodo
          id: len +1
        })
    }
  
    removeTodo(id) {
      const newList = this.state.allTodo.filter((todo)=>{
        return todo.id !== id;
      })
      this.setState{
        allTodo: newList;
      }
    }
    render() {
      
      return(
        
        <div>
          <TodoList 
            allTodo={allTodo}
            removeTodo={this.remove}/>
        
          <AddTodo
            handleChange={this.handleChange}
            addTodo={this.addTodo}
          />
            
        </div>
      );
    }
  }
  
  
  const TodoList = ({allTodo, removeTodo}) => {
    
    mapTodo = allTodo.map((todo) => {
      return (
        <span 
          key={todo.id} // need to use arrow function to pass id
          onClick={() => { removeTodo(todo.id) }
          >
          {todo.content}
        </span>
      )
    })
    return (
      {mapTodo}
    )
  }
  
  
  const AddTodo = ({handleChange, addTodo}) => {
    
    return (
      <div>
        <input onchange={handleChange} />
        <button type='submit' onClick={addTodo}>
          Add Todo
        </button>
      </div>
    )
  }
  
  
  
  
  