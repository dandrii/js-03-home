document.querySelectorAll('.numbers button').forEach(el => {
    el.addEventListener('click', inputNumbers);
});

document.querySelectorAll('.operators button').forEach(el => {
    el.addEventListener('click', inputOperators);
});

document.getElementById('result').addEventListener('click', result);

document.getElementById('cancel').addEventListener('click', remove);

function inputNumbers(ev) {
    document.getElementById("message").value += ev.target.dataset.tab;
}

function inputOperators(ev) {
    // let w = (document.getElementById("message").value.slice(0, 1))
    document.getElementById("message").value += ev.target.dataset.tab;
}

function result(ev) {
    let res = eval(document.getElementById("message").value);
    document.getElementById("message").value = res;
}

function remove(ev) {
    document.getElementById("message").value = ev.target.dataset.tab;
}
