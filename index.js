const entryForm = document.getElementById("entry-form");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox")[0];
const submitButton = document.getElementsByClassName("button")[0];
const entriesNav = document.getElementById("entries-nav");
const entryDisplay = document.getElementById("entry-display");

let entryCount = 1;

const entries = [];

function addEntryToDom(event) {
  event.preventDefault();
  let entry = {};
  let date = new Date();
  entry.title = `Entry ${entryCount}`;
  entry.entry = entryTextbox.value;
  entry.date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  entry.time = `${date.getHours()}:${date.getMinutes()}`;
  entries.push(entry);
  console.log(entries);
  entryTextbox.value = "";
}

function addButtonToNavigation(event) {
  event.preventDefault();
  let newButton = document.createElement("button");
  newButton.classList.add("nav-button");
  newButton.textContent = `Entry: ${entryCount}`;
  entryCount++;
  entriesNav.append(newButton);
  newButton.addEventListener("click", () =>
    displayEntry(newButton.textContent[newButton.textContent.length - 1] - 1)
  );
}

function displayEntry(entryNumber) {
  entryDisplay.innerHTML = `
    <h2>${entries[entryNumber].title}</h2> 
    <h3>${entries[entryNumber].date}</h3>
    <p>${entries[entryNumber].time}</p>
    <p>${entries[entryNumber].entry}</p>
  `;
}

entryForm.addEventListener("submit", addEntryToDom);
entryForm.addEventListener("submit", addButtonToNavigation);

entryForm.addEventListener("keypress", (e) => {
  let d = new Date().toDateString();
  console.log(d);
});
