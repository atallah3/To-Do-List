 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

 function addTask() {
    if(inputBox.value === "") {
        alert("You must write somthing");
    }
    else {
        createList()
    }
    inputBox.value = ""
    saveTask()
 }


listContainer.addEventListener ("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTask()
},false);

 function createList() {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li) 
    createSpan(li);
 }

 function createSpan(li) {
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }

 function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTasks() {
   listContainer.innerHTML = localStorage.getItem("data");
 }
 showTasks();