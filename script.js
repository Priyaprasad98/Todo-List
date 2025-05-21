let todoList = JSON.parse(localStorage.getItem("storedTodos")) || [
  { name: "make dinner", date: "2025-04-21" },
  { name: "wash dishes", date: "2025-04-22" }
]; //save a data then use data to generate html : this data acts as example for user

renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList);
    const html = `
      <div>${todoList[i].name}</div> <div>${todoList[i].date}</div>
        <button onclick = "
        todoList.splice(${i},1);
        renderTodoList();
        " class="delete-button">Delete</button>`; //generating html
    todoListHTML += html;
  }
  document.querySelector(".js-render-todo").innerHTML = todoListHTML;
  localStorage.setItem("storedTodos", JSON.stringify(todoList));
}

function addTodo() {
  let inputName = document.querySelector(".js-input-name");
  let inputDate = document.querySelector(".js-input-date");
  let todoName = inputName.value;
  let todoDate = inputDate.value;
  if (todoName) {
    todoList.push({ name: todoName, date: todoDate });
    console.log(todoList);
    inputName.value = "";
    renderTodoList();
  }
}
