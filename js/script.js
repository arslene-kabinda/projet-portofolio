const content = document.getElementById('container1__content')

const slogan = [ "I'm Front-End  web developper" ]   
let index1 = 0
let index2 = 0
window.setInterval(() => {
    if (index2 == slogan[index1].length) {
        index2 = 0;
        index1++;
        content.innerHTML = ``
    }
    if (index1 == slogan.length) {
        index1 = 0;

    }
    content.innerHTML += `${slogan[index1][index2]}`;
    index2++
}, 200);