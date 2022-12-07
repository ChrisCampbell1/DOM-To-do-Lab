//cashed elements
const inputElement = document.querySelector("#input")
const buttonElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("#todo-list")
const resetElement = document.querySelector("#reset-button")

//console.log tests
//console.log(todoItems)


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

ulElement.addEventListener("click", handleClick)

//helper functions
function handleClick(evt){
  console.log("click handled")
  evt.target.remove()
}
