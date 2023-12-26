let btn = document.querySelector("button");
let inp = document.querySelector("input");

let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    savaData();
});

// Event Delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        savaData();
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(del of delBtns) {
//     del.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//         // console.log("Element Deleted");
//     });
// }


function savaData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

