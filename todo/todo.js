var todo_list = document.getElementsByClassName("main__todo");

var submit = document.getElementById("submit");

submit.onclick = function (e) {
    e.preventDefault();
    var todo_item = document.createElement("div");
    todo_item.className = "todo_item"; 
    todo_list[0].appendChild(todo_item);      
    var form = document.querySelector(".input-form");
    var input_value = form[0].value;  
    if (input_value === ""){
         alert('Please enter text in the field');
    }
    else {    
        var todo_item_text = document.createElement("p");
        todo_item_text.innerHTML = input_value;
        todo_item.appendChild(todo_item_text);
    
        form[0].value = "";
    
        var todo_item_delete = document.createElement("div");
        todo_item_delete.className = "todo_item_delete";
        todo_item_delete.innerHTML = "X";
        todo_item.appendChild(todo_item_delete);
    
        var del = document.getElementsByClassName("main__todo");
          
    }    
}

var del = document.getElementsByClassName("main__todo");

del[0].onclick = function (e) {
    console.log(e);
    if(e.target.className.indexOf("todo_item_delete") > -1){
        e.target.parentElement.remove();
    }
    else {
    return false;
    }
}
