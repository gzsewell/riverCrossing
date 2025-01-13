const form = document.querySelector("form");
const sheepInput = document.querySelector("#numSheep");
// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

let numSheepToAdd = 0;

sheepInput.addEventListener("change", function (e) {
  numSheepToAdd = e.target.value;
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (let i = 0; i < numSheepToAdd; i++) {
    state.start.push("sheep");
  }
  render();
  console.log("Num sheep to add ", numSheepToAdd);
});

/** Moves a sheep from start to target */
function moveSheep() {
  // TODO
  const sheepToMove = state.start.pop();
  state.target.push(sheepToMove);
  render();
}

// === Render ===

/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    li.addEventListener("click", function () {});
    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  const targetSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    li.addEventListener("click", function () {});
    return li;
  });

  const targetSheepBank = document.querySelector("#startingBank ul");
  targetBank.replaceChildren(...targetSheep);
  // TODO
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted
