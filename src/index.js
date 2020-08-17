document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    let task = document.getElementById('new-task-description').innerHTML;
    let taskList = document.getElementById('tasks');
    taskList.appendChild(task)
    
  });
  
  
  
});
