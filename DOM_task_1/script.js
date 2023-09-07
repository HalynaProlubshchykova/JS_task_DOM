const list = document.getElementById("list");
const items = list.getElementsByTagName("li");
const output =
  items[0].textContent + ", " + items[4].textContent + ", " + items[1].textContent + ", " + items[3].textContent + ", " + items[2].textContent;
alert(output);
