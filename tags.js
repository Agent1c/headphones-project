const contentDisplay = document.querySelector(".content");
let errerMessge = document.querySelector(".error-messege")

function createList(text) {
  // Create Ul and Li
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  // Append new created li to text para
  li.innerText = text;
  // Check for empty space
  if (!text) {
    return errerMessge.innerText = "Category must not be empty.";
  }
  
  ul.appendChild(li);
  contentDisplay.appendChild(ul)

  return li; //return li so it can be displayed.
}

createList("Laptop")
createList("Games")
createList() //error no categpry
createList("Cell Phones")
createList("Studio Equipments")