document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    
    let node = document.createElement("Li")
    let new_node = document.createTextNode("hello")
    node.appendChild(new_node)
    node.appendChild("Hello")
    let task = document.getElementById('new-task-description').innerHTML;
    let taskList = document.getElementById('tasks');
    taskList.appendChild(node)
    
  });
  
  
  
});
