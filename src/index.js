document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    
    let node = document.createElement("Li");
    let task = document.getElementById('new-task-description').value;
    let new_node = document.createTextNode("hello");
    node.appendChild(task);
    let taskList = document.getElementById('tasks');
    taskList.appendChild(node);
    
  });
  
  
  
});
