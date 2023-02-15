/* eslint-disable no-alert */
/* eslint-disable quotes */
const GRID_CONTAINER = document.getElementById("grid-container");
const GRID_BUTTON = document.querySelector("#choose-grid");
const GRID_CONTAINER_WIDTH = 320;
function askSize() {
  const customSize = parseInt(
    prompt("Enter size of grid, maximum 64 squares.", "16"),
    10
  );
  createNewGrid(customSize);
}
GRID_BUTTON.addEventListener("click", () => askSize());

function createNewGrid(size) {
  if (size > 64 || isNaN(size) || size < 1) {
    askSize();
  } else {
    GRID_CONTAINER.textContent = "";
    const width_height = GRID_CONTAINER_WIDTH / size;
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.toggle("grid-div");
      div.setAttribute(
        "style",
        `height:${width_height}px; width:${width_height}px;`
      );
      div.addEventListener("mouseover", addPaint);
      div.addEventListener("mousedown", addPaint);
      GRID_CONTAINER.appendChild(div);
    }
  }
}
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function addPaint(e) {
  if (e.type === "mouseover" && !mouseDown) {
  } else {
    e.target.classList.add("grid-div-painted");
  }
}
createNewGrid(16);
