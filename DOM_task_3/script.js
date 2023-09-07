const body = document.createElement("body");
const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

main.classList.add("mainClass", "check", "item");

div.id = "myDiv";

p.textContent = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);
