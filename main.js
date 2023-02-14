const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.querySelector("#task").value;
  const language = document.querySelector("#language").value;

  let generatedCode = "";

  // Hier den Code generieren, abhängig von der ausgewählten Sprache

  const codeContainer = document.createElement("div");
  codeContainer.textContent = generatedCode;

  document.body.appendChild(codeContainer);
});
