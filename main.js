var input=document.getElementById("inputbox")
var btn=document.getElementById("btn")
var todo=document.getElementById("to-do")
var dle=document.getElementById("delete")



btn.addEventListener("click",function(){
    var li =document.createElement("li")
    li.innerHTML=input.value+"<button onclick= deleting(event) > delete</button>" 
    todo.append(li)
    input.value = "";


})

function deleting(event){
    event.target.parentElement.remove()

}