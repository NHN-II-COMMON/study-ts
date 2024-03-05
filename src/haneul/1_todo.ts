// duplicate function impl error 자꾸 떠서 즉시실행함수 사용..
(function () {
    // 변수, 함수(파라미터, 반환값)에 대한 타입 지정..
    let todoItems: { id: number; title: string; done: boolean }[];
  
    // api
    function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
      const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
      ];
      return todos;
    }
  
    // crud methods
    function fetchTodos(): { id: number; title: string; done: boolean }[] {
      const todos: { id: number; title: string; done: boolean }[] = fetchTodoItems();
      return todos;
    }
  
    function addTodo(todo: { id: number; title: string; done: boolean }): void {
      todoItems.push(todo);
    }
  
    function deleteTodo(index: number): void {
      todoItems.splice(index, 1);
    }
  
    function completeTodo(index: number, todo: { id: number; title: string; done: boolean }): void {
      todo.done = true;
      todoItems.splice(index, 1, todo);
    }
  
    // business logic
    function logFirstTodo(): object {
      return todoItems[0];
    }
  
    function showCompleted(): object[] {
      return todoItems.filter((item) => item.done);
    }
  
    // TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
    function addTwoTodoItems(): void {
      // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
      const todo = {
        id: 4,
        title: '새 할 일',
        done: false,
      };
      addTodo({ ...todo });
  
      todo.id = 5;
      addTodo({ ...todo });
    }
  
    // NOTE: 유틸 함수
    function log(): void {
      console.log(todoItems);
    }
  
    // unused error 없게끔 다 호출함..
    todoItems = fetchTodos();
    addTwoTodoItems();
    deleteTodo(todoItems.length - 1);
    logFirstTodo();
  
    completeTodo(0, todoItems[0]);
    showCompleted().forEach((todo) => console.log(todo));
    log();
  })();
  