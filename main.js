const txtInput = document.getElementById("txtInput");
const btnSubmit = document.getElementById("btnSubmit");
const boxes = document.querySelectorAll(".box");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = txtInput.value;
  const newItem = `<p class="item" draggable="true">${inputValue}</p>`;
  boxes[0].innerHTML += newItem;
  txtInput.value = "";

  dragItem();
});

let drageItem = null;
function dragItem() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drageItem = item;
      item.style.opacity = 0.5;
    });

    item.addEventListener("dragend", function () {
      drageItem = null;
      item.style.opacity = 1;
    });
  });
}

boxes.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();

    box.style.backgroundColor = "#098";
    box.style.color = "#fff";
  });

  box.addEventListener("dragleave", function () {
    box.style.backgroundColor = "#fff";
    box.style.color = "#000";
  });

  box.addEventListener("drop", function () {
    box.append(drageItem);
    box.style.backgroundColor = "#fff";
    box.style.color = "#000";
    drageItem = null;
  });
});
