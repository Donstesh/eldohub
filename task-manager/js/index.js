let form = document.querySelector("form");
let itemsList = document.querySelector("#items-list");
//let deleteBtns = document.querySelectorAll('span');

const deleteItem = e => {
  e.preventDefault();
  let item = e.target.parentNode.parentNode;
  itemsList.removeChild(item);
  countItems();
}

//deleteBtn.addEventListener('click', deleteItem);
// deleteBtns.forEach(deleteBtn => {
//   deleteBtn.addEventListener('click', deleteItem);
// })

const countItems = () => {
  let count = document.querySelector('#count')
  count.textContent = itemsList.children.length;
  //console.log(itemsList.children.length);
}

const addItem = (e) => {
  e.preventDefault();
  let newItem = document.querySelector("#new-item");
  if (newItem.value.length) {
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = newItem.value;
    let span = document.createElement("span");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");
    span.className = "delete-icon";
    span.addEventListener('click', deleteItem);
    span.appendChild(icon);
    li.appendChild(span);
    itemsList.appendChild(li);
  countItems();
    form.reset();
  } else {
    console.log("empty");
  }
};

form.addEventListener("submit", addItem);
countItems();

// let deleteIcon = document.querySelectorAll(".delete-icon");

// const deleteItem = (e) => {
//   console.log("here");
//   let liItem = document.querySelector(".item");
//   itemsList.removeChild(liItem);
// };

// deleteIcon.forEach((icon) => {
//   icon.addEventListener("click", deleteItem);
// });