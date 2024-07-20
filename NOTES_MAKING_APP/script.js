
const addnote=document.querySelector(".add");
const saveBtn=document.querySelector("#sym1");
const deleteBtn=document.querySelector("#sym2");
const main=document.querySelector(".main");

addnote.addEventListener("click",function(){
    addNote();
})

// function addNote(){
    
// const note=document.getElementsByClassName("note");
//    document.getElementById("note").insertAdjacentHTML("afterend",`
//     <div class="note" id="note">
//             <div class="nav">
//                 <button id="sym1"><i class="fa-solid fa-floppy-disk"></i></button>
//                 <button id="sym2"><i class="fa-solid fa-trash"></i></button>
//             </div>
//             <textarea name="text" id="text">

//             </textarea>
//         </div>`);
   
//    console.log("hii");
// }

// function del(){
//  document.getElementById("nav").parentNode.remove(document.getElementsByClassName("note"));
  
// }
function saveNotes(){
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (new_note) => {
            data.push(new_note.value)
        }
    )
    console.log(data);

    if(data.length===0)
    {
        localStorage.removeItem(notes);
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

const addNote=(text="")=>{
    const new_note=document.createElement("div");
    new_note.classList.add("note");
    new_note.innerHTML=`<div class="note" id="note">
            <div class="nav" id="nav">
                <button id="sym1"><i class="fa-solid fa-floppy-disk"></i></button>
                <button id="sym2" onclick=del() ><i class="fa-solid fa-trash"></i></button>
            </div>
            <textarea name="text" id="text"> ${text}</textarea>
        </div>`;

    new_note.querySelector("#sym2").addEventListener("click",function(){
        new_note.remove();
        saveNotes();
    });

    new_note.querySelector("#sym1").addEventListener("click",function(){
        saveNotes();
    });

    new_note.querySelector("textarea").addEventListener("focusout",function(){
        saveNotes();
    });
  main.appendChild(new_note);
  saveNotes();

}
