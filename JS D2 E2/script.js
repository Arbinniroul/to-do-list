const content=document.querySelector(".bar");
const btn=document.querySelector(".mbtn");
const lisContainer=document.getElementById("listcontainer");



function addContent()
{
    if(content.value===""){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=content.value;
        lisContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
   content.value="";
    saveData();
};
lisContainer.addEventListener("click",(e)=>{
  if(e.target.tagName=='LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName=='SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
},false)

function saveData(){
    localStorage.setItem("data",lisContainer.innerHTML);
}
function showList(){
    lisContainer.innerHTML=localStorage.getItem("data");
}
showList();