const items = document.querySelectorAll(".grid-item");

items.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  item.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  item.addEventListener("drop", (event) => {
    const id = event.dataTransfer.getData("text");
    const draggedItem = document.getElementById(id);
    event.target.appendChild(draggedItem);
  });
});