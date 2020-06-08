const div = dom.find("#test>.red")[0];
console.log(div);
const divList = dom.find(".red");
console.log(divList);
dom.style(div, "color", "red");

dom.each(divList, (n) => console.log(n));
