//getting elements from html
const input = document.querySelector(".input textarea"),
  todolist = document.querySelector(".todolist"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");


  //Calling the function while adding, checking/unchecking and deleting the task
  function allTasks() {
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todolist.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todolist.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
  }
//Add tasks on list: typing value in text box & enter.
input.addEventListener("keyup", (e) => {
    let inputVal = input.value.trim(); //Function removes space of front & back of the inputed value.
    
    //If enter btn is clicked & typed value length is more than 0. 
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
              <input type="checkbox" />
              <span class="task">${inputVal}</span>
        </li>`;

        todolist.insertAdjacentHTML("beforeend", liTag); //inserting li element in to do list div
        input.value = ""; //removing value from texbox
        allTasks();
    }
}); 

//checking & unchecking the checkbox while clicking on the task
function handleStatus(e) {
    const checkbox =  e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}


//deleting tasks by clicking on the clear button/
clearButton.addEventListener("click", () => {
    todolist.innerHTML = "";
    allTasks();
})