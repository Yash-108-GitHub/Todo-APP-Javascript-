input = document.querySelector("input");
btn = document.querySelector("button");
list = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    //adding delete btn
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete me";
    delBtn.classList.add("delete");//adds class named delete

    item.appendChild(delBtn);
    list.appendChild(item);
    input.value="";
})


//delete btn
// let delBtns = document.querySelectorAll(".delete")
// for(delBt of delBtns){
//     delBtn.addEventListener("click", function() {
//         let parent = this.parentElement; //<li> is parent of button
//         parent.remove();
//     })
// }

//delete task
list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})