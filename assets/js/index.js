border = 1;
console.log(border);

function cambiarBorde() {
    if (border == 1) {
        document.getElementById('image').style.border = '5px solid red';
        border = 0;

    } else {
        document.getElementById('image').style.border = 'none';
        border = 1;
    }

}