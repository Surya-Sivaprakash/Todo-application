// Selecting the add-form id set to submit button.
const formSubmit = document.getElementById("add-form");

const listGroup = document.getElementById("items");
// adding event listener to the submit button
formSubmit.addEventListener("submit", submitFunction);

const body = document.body;

// creating a function to take input and append it to our new li element.

function submitFunction(e) {
  e.preventDefault();
  const inputItem = document.getElementById("item").value;
  const newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.append(document.createTextNode(inputItem));
  listGroup.append(newLi);

  // Clearing the input value once submitted

  document.getElementById("item").value = "";

  // Creating a delete button

  const btnButton = document.createElement("button");
  btnButton.className = "delete";

  btnButton.append(document.createTextNode("X"));

  // appending the delete button to li element
  newLi.append(btnButton);
  console.log(newLi);

  // adding eventListener to the delete button

  btnButton.addEventListener("click", deleteIt);

  // function that delete element
  function deleteIt(e) {
    newLi.remove();
  }
}

// Implementing search filter

const filter = document.getElementById("filter");
filter.addEventListener("keyup", searchFilter);

// Creating a searchfilter function
/* This function takes user input in and loops through all the li
 elements to see if there is a match.
*/
function searchFilter(e) {
  const text = e.target.value.toLowerCase();

  const allLiItems = document.querySelectorAll("li");
  Array.from(allLiItems).forEach(function (newItem) {
    const itemText = newItem.firstChild.textContent.toLowerCase();
    if (itemText.indexOf(text) != -1) {
      newItem.style.display = "block";
    } else {
      newItem.style.display = "none";
    }
  });
}
