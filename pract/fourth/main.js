let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/js-logo.png') {
        myImage.setAttribute('src', 'images/react-logo.png');
    } else {
        myImage.setAttribute('src', 'images/js-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Будь ласка, введіть своє ім\'я.');

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'JavaScript - це круто, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'JavaScript - це круто, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}