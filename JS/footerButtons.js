function changeBGColor(theme) {
    var arr = document.getElementsByClassName('section');
    for(i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = theme;
    }
}

function changeFontSize(i) {
    document.body.style.fontSize = i + 'px';
}