const entryForm = document.getElementById("entry-form");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox")[0];
const submitButton = document.getElementsByClassName("button")[0];
const entriesNav = document.getElementById("entires-nav");

function addEntryToDom(event) {
  event.preventDefault();
  let newEntryDiv = document.createElement("div");
  let newEntry = document.createElement("p");
  newEntryDiv.classList.add("diary-entry");
  newEntry.textContent = entryTextbox.value;
  newEntryDiv.append(newEntry);
  newEntryDiv.style.display = "none";
  entriesSection.append(newEntryDiv);
  entryTextbox.value = "";
}

function 

entryForm.addEventListener("submit", addEntryToDom);
