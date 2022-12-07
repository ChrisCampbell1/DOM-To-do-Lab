//cashed elements
const inputElement = document.querySelector("#input")
const buttonElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("#todo-list")
const resetElement = document.querySelector("#reset-button")
//const todoItem = document.querySelectorAll(".todo-item")

//console.log tests
console.log()


//event listeners
buttonElement.addEventListener("click", function(){
  const liElement = document.createElement("li")
  liElement.setAttribute("class", "todo-item")
  liElement.textContent = inputElement.value
  if(liElement.textContent){
  ulElement.appendChild(liElement)
  inputElement.value = ""
  }
})

resetElement.addEventListener("click", function(){
  ulElement.innerHTML = ""
  inputElement.value = ""
})

// can't get individual LIs to respond to the event listener, only the whole UL
// ulElement.addEventListener("click", function(){
//   ulElement.child.innerHTML = ""
// })
