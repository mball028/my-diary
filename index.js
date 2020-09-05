const entryForm = document.getElementById("entry-form");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox")[0];
const submitButton = document.getElementsByClassName("button")[0];
const titleTextbox = document.getElementsByClassName("title-textbox")[0];
const entriesNav = document.getElementById("entries-nav");
const entryDisplay = document.getElementById("entry-display");

if (JSON.parse(localStorage.getItem("entries"))) {
  document.onload = generateEntryButtons(
    JSON.parse(localStorage.getItem("entries"))
  );
}

entryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let entry = {};
  entry.entry = entryTextbox.value;
  entry.title = titleTextbox.value;
  entry.id = localStorage.length
    ? JSON.parse(localStorage.getItem("entries")).length + 1
    : 1;
  if (localStorage.length > 0 && entryTextbox.value.length > 0) {
    let entries = JSON.parse(window.localStorage.getItem("entries"));
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
  } else if (entryTextbox.value.length > 0) {
    let entries = [];
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  if (localStorage.length) {
    generateEntryButtons(JSON.parse(localStorage.getItem("entries")));
  }
});

function generateEntryButtons(entriesArray) {
  if (entriesArray == undefined || entriesArray.length < 1) {
    entriesNav.innerText = "";
  }
  if (entriesArray.length > 0) {
    entriesNav.innerText = "";
    entriesArray.forEach((entry) => {
      let entryButton = document.createElement("button");
      entryButton.classList.add("nav-button");
      entryButton.textContent = `${entry.title}`;
      entriesNav.append(entryButton);
      entryButton.addEventListener("click", () => console.log(entry));
    });
  }
}
