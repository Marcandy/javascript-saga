var application = angular.module('application', []);

application.component('container', {
  controller: class {
    constructor () {
      this.todos = [];
    }
  },
  
  template: `
    <add-todo todos="$ctrl.todos"></add-todo>
    <todo-list todos="$ctrl.todos"></todo-list>
  `,
});


application.component('addTodo', {
  bindings: {
    todos: '=',
  },
  
  controller: class {
    constructor (saveTodo) {
      this.saveTodo = saveTodo;
      // saveTodo is a function
      // it takes 1 argument, a string representing todo
      // it return a Promise
      // the promise resolves to an ID from our server
      this.label = "Todo";
    }
    
    addTodo () {
      let todo = {
        id: '',
        content: this.todo
      }
      this.saveTodo().then((id) => {
        todo.id = id;
        this.todos.push(todo);
        this.todo = '';
      });
    }
  },
  
  template: `
    {{$ctrl.label}}: <input type="text" ng-model="$ctrl.todo" />
    <button ng-click="$ctrl.addTodo()">Add</button>
  `
});


application.component('todoList', {
  bindings: {
    todos: '='
  },
  
  //logic filter
  controller: class {
    
    removeTodo(remTodo) {
      let newTodos = this.todos.filter((todo) => {
        return todo.id !== remTodo.id;
      });
      this.todos = newTodos;
      console.log(this.todos, remTodo, newTodos);
    }
  },
  
  template: `
    <div style="margin-top: 20px;">
      <ul>
        <li ng-repeat="todo in $ctrl.todos">
          {{todo.content}} <button ng-click="$ctrl.removeTodo(todo)">Remove</button>
        </li>
      </ul>
    </div>
  `
});


// saveTodo function accepts todo text and returns a Promise that resolves with an id.
application.factory('saveTodo', function saveTodo ($q) {
  let id = 100;

  return function (todo) {
    const deferred = $q.defer();
    setTimeout(function () {
      deferred.resolve(id++)
    }, 1000);
    return deferred.promise;
  }
});


// Example of saveTodo written with standard JavaScript Promise
// Intended only for understanding the difference between standard
// JavaScript Promises and AngularJS promises.
application.factory('saveTodoPromise', function saveTodo () {
  let id = 100;

  return function (todo) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(id++);
      }, 1000);
    });
  }
});