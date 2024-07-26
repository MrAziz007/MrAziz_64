export function createGrid(obj) {
    let elems = document.createElement('div');
    let Title = document.createElement('h3');
    let Descr = document.createElement('p');
    let boxTime = document.createElement('div');
    let date = document.createElement('p');
    let Time = document.createElement('p');
    let btnClass = document.createElement('button');
    let completed = obj.completed;

    Title.textContent = obj.title
    Descr.textContent = obj.description
    date.textContent = new Date().getFullYear();
    Time.textContent = new Date().getHours() + ':' + new Date().getMinutes();
    
    elems.classList.add('elems');
    btnClass.classList.add('btnClass');
    btnClass.classList.add('btnClass1');
    boxTime.classList.add('boxTime');

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

    boxTime.append(date, Time)
    elems.append(Title, Descr, boxTime, btnClass);

    return elems
}