export function createTable(obj) {
    let tr = document.createElement('tr');
    let tdTitle = document.createElement('td');
    let tdDescr = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdTime = document.createElement('td');
    let btnClass = document.createElement('button');
    let completed = obj.completed;

    tdTitle.textContent = obj.title;
    tdDescr.textContent = obj.description;
    tdDate.textContent = new Date().getFullYear();
    tdTime.textContent = new Date().getHours() + ':' + new Date().getMinutes();

    btnClass.classList.add('btnClass');

    if (completed == true) {
        btnClass.textContent = 'Выполнено'
        btnClass.classList.add('btnClass1');
    } else {
        btnClass.textContent = 'Не выполнено'
        btnClass.classList.add('btnClass2');
    }

    btnClass.onclick = () => {
        if (btnClass.classList.contains('btnClass1')) {
            btnClass.textContent = 'Не выполнено';
            btnClass.classList.remove('btnClass1');
            btnClass.classList.add('btnClass2');
        } else if (btnClass.classList.contains('btnClass2')) {
            btnClass.textContent = 'Bыполнено';
            btnClass.classList.remove('btnClass2');
            btnClass.classList.add('btnClass1');
        };
    };

    tr.append(tdTitle, tdDescr, tdDate, tdTime, btnClass);

    return tr
}