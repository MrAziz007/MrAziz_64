import { createGrid } from "./components/cletki.js";
import { createTable } from "./components/table.js";

let btnCreate = document.querySelector('.btnCreate');
let vid1 = document.querySelector('.vid1');
let vid2 = document.querySelector('.vid2');
let table = document.querySelector('table');
let dspGrid = document.querySelector('.dspGrid');
let btnClose = document.querySelector('.btnClose');
let modal = document.querySelector('.modal');
let form = document.forms[0];

let objb = {};

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
    .then(data => {
        reload(data, 'box-table', createTable);
        reload(data, 'dspGrid', createGrid);
    })
    .catch(error => console.log(error))

function reload(arr, place, Component) {
    let box = document.querySelector(`.${place}`)
    box.innerHTML = '';
    for (let item of arr.slice(192)) {
        let elem = Component(item)
        box.append(elem);
    }
}

vid1.onclick = () => {
    vid2.classList.remove('vid1');
    vid1.classList.add('vid1');
    table.classList.remove('unactive');
    dspGrid.classList.add('unactive');
};

vid2.onclick = () => {
    vid1.classList.remove('vid1');
    vid2.classList.add('vid1');
    table.classList.add('unactive');
    dspGrid.classList.remove('unactive');
};

btnCreate.onclick = () => {
    modal.style.display = 'block';
};

btnClose.onclick = () => {
    modal.style.display = 'none';
};

form.onsubmit = (e) => {
    e.preventDefault();
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        objb[key] = value;
    });
    modal.style.display = 'none';
    form.reset()

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        body: JSON.stringify(objb),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            let tableBox = document.querySelector('.box-table');
            let gridBox = document.querySelector('.dspGrid');
            let tableRow = createTable(data);
            let gridItem = createGrid(data);

            tableBox.append(tableRow);
            gridBox.append(gridItem);
            console.log(data)
        })
        .catch(error => console.log(error))
};