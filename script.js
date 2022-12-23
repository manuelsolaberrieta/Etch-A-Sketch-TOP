const GRID_CONTAINER = document.getElementById("grid-container");
const GRID_BUTTON = document.querySelector("#choose-grid");
const GRID_CONTAINER_WIDTH = GRID_CONTAINER.offsetWidth;

GRID_BUTTON.addEventListener("click", () => askSize());

function askSize() {
  let customSize = parseInt(prompt("Enter size of grid, maximum 100 squares."));
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
        div.addEventListener("mouseover", (e) => {
          e.target.classList.add("grid-div-painted");
        });
        GRID_CONTAINER.appendChild(div);
      }
    }
  }
}

createNewGrid(16);
