let skills = [
  { "Linux, Git": 90 },
  { "OOP Paradigm": 90 },
  { "C++, Python": 70 },
  { "TCL/TK Script": 100 },
  { "DB, SQL": 80 },
  { "HTML5, CSS3": 85 },
  { JavaScript: 70 },
  { "Node.js": 60 },
  { "Agile Dev": 90 }
];

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
function theDomHasLoaded(e) {
  let elem = document.querySelector("#skills");
  for (let obj of skills) {
    let [pair] = Object.entries(obj);
    div = document.createElement("div");
    div.innerHTML = `
        <span>${pair[0]}</span>
        <ul class="skill-bar">
            <li style="width: ${pair[1]}%;">
            </li>
        </ul>`;
    elem.appendChild(div);
  }
}
