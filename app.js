const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        updateStorage();
        //store every keywords in the input field       
    } else if (e.target.tagName == "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

// when press the enter it goes to the new line
document.addEventListener("keydown",event=>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})