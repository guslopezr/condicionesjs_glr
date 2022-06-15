/* Solución borde de color */

/*
let border = document.getElementById("image");
let noborder = 0;
*/


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


/*
function myFunction(element, color) {
    document.getElementById('image').border.style.borderColor = 'red';


}

*/