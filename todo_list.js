const add = document.getElementById("Add_button")
const todo_list = JSON.parse(localStorage.getItem("data")) || [];

let appendArea = document.getElementById("second_div2");
add.addEventListener("click", () => {
  const value = document.getElementById("input_field1").value;
  if (value.length) {
    todo_list.push(value);
    update_localstorage()
  }
  document.getElementById("input_field1").value=null;
});


let generateTodos = () => {
  return (appendArea.innerHTML = todo_list.map((x,index) => {
    return `
      <div id=todo_${index} class=todo>
        <textarea id="text_area_${index}" class="text_area"  disabled >${x}</textarea>

        <input type="button" id="Edit_button_${index}" class="Edit_button" onclick="Edit_function(${index})" name="edit" value="edit">

        <input type="button" id="Delete_button_${index}" class="Delete_button" onclick="Delete_function(${index})" name="delete" value="delete"></input>

        <input type="button" id="Update_button_${index}" class="Update_button" onclick="Update_function(${index})" name="update" value="update"></input>
      </div>
      `;
  }).join("")
  )
};

generateTodos();

function Delete_function(index){
  todo_list.splice(index,1)
  update_localstorage()
}

function Edit_function(index){
  document.getElementById(`text_area_${index}`).disabled=false;
}

function Update_function(index){
  const value=document.getElementById(`text_area_${index}`).value
  if(value.length){
    todo_list[index]=value
    update_localstorage()
  }else{
    Delete_function(index)
  }
  
}



function update_localstorage(){
  localStorage.setItem("data", JSON.stringify(todo_list))
  generateTodos()
}





