let hscore = 0, gscore = 0;
let gscore_dom = document.querySelector('.guest h2');
let hscore_dom = document.querySelector('.home h2');

function h_1() {
    hscore+=1;
    hscore_dom.textContent = hscore;
}
function h_2() {
    hscore+=2;
    hscore_dom.textContent = hscore;
}
function h_3() {
    hscore+=3;
    hscore_dom.textContent = hscore;
}

function g_1() {
    gscore += 1;
    gscore_dom.textContent = gscore;
}
function g_2() {
    gscore += 2;
    gscore_dom.textContent = gscore;
}
function g_3() {
    gscore += 3;
    gscore_dom.textContent = gscore;
}

function quit_func() {
    gscore = 0;
    hscore = 0;
    gscore_dom.textContent = gscore;
    hscore_dom.textContent = hscore;
}













