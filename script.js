const GRID_CONTAINER = document.getElementById("grid-container");
const GRID_BUTTON = document.querySelector("#choose-grid");
const GRID_CONTAINER_WIDTH = 320;

GRID_BUTTON.addEventListener("click", () => askSize());

function askSize() {
  let customSize = parseInt(
    prompt("Enter size of grid, maximum 100 squares.", "16")
  );
  createNewGrid(customSize);
}

function createNewGrid(size) {
  if (size > 100 || isNaN(size) || size < 1) {
    askSize();
  } else {
    GRID_CONTAINER.textContent = "";
    let width_height = GRID_CONTAINER_WIDTH / size;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let div = document.createElement("div");
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
}
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function addPaint(e) {
  if (e.type === "mouseover" && !mouseDown) {
    return;
  } else {
    e.target.classList.add("grid-div-painted");
  }
}
createNewGrid(16);
