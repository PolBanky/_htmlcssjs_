'use strict';

var v_p1 = document.getElementById("_p1");        // HTML параграф
var v_input = document.getElementById("in");      // HTML Input
var v_cell01 = document.getElementById("cell01"); // HTML ячейка таблицы
var v_cell02 = document.getElementById("cell02"); // HTML ячейка таблицы

v_input.addEventListener("input",inp);  // Input

function inp() {
    v_cell01.innerHTML = v_input.value;
    v_cell02.innerHTML = v_input.value;
}

console.log('p1 inner HTML = ' + v_p1.innerHTML);
console.log('p1 client Height = ' + v_p1.clientHeight);
console.log('p1 length = ' + v_p1.innerHTML.length);
console.log(window);

