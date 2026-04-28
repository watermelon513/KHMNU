let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Firefox_logo,_2019.svg') {
        myImage.setAttribute('src', 'images/Firefox_logo,_2019.svg');
    } else {
        myImage.setAttribute('src', 'images/Firefox_logo,_2019.svg');
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
        myHeading.innerHTML = 'Mozilla - це потужно, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla - це потужно, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}