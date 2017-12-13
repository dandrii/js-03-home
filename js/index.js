document.querySelectorAll('.numbers button').forEach(el => {
    el.addEventListener('click', inputNumbers);
});

document.querySelectorAll('.operators button').forEach(el => {
    el.addEventListener('click', inputOperators);
});

document.querySelectorAll('.result button').forEach(el => {
    el.addEventListener('click', result);
});

function inputNumbers(ev) {
    return document.getElementById("message").value += ev.target.dataset.tab;
}

function inputOperators(ev) {
    if ((document.getElementById("message").value.length - 1) == '/||*||-||+')
    {
       // return document.getElementById("message").value.length - 1 = ev.target.dataset.tab;
       alert (11111);
    }
    else {
        return document.getElementById("message").value += ev.target.dataset.tab;
    }
}

function result(ev) {
    let res = eval(document.getElementById("message").value);
    document.getElementById("message").value = res;
}
