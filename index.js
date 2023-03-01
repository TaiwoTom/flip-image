window.onload = function() {
    let output = document.querySelector( "output" );
    let input = document.querySelector( "input" );
    let imgArray = [];
    input.addEventListener( "change", () => {
        const file = input.files
        imgArray.push( file[ 0 ] )
        displayImages();
    } );
    function displayImages() {
        let images = "";
        imgArray.forEach( ( image, index ) => {
            images += `<div class="image">
<img src="${URL.createObjectURL( image )}" alt="image" id="img" class="m-4 border border-success"><br>
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
        } );
        output.innerHTML = images;
    }

}


function upBtn() {
    let upBtnImg = document.getElementById("img");
    upBtnImg.style.transform = "rotate(180deg)";
    upBtnImg.style.transition = "transform 0.8s";
    upBtnImg.style.transformStyle = "preserve-3d";
}

function downBtn() {
    let downBtnImg = document.getElementById("img");
    downBtnImg.style.transform = "rotate(360deg)";
    downBtnImg.style.transition = "transform 0.8s";
    downBtnImg.style.transformStyle = "preserve-3d";
}

function rightBtn() {
    let rightBtnImg = document.getElementById("img");
    rightBtnImg.style.transform = "rotateY(180deg)";
    rightBtnImg.style.transition = "transform 0.8s";
    rightBtnImg.style.transformStyle = "preserve-3d";
}

function leftBtn() {
    let leftBtnImg = document.getElementById("img");
    leftBtnImg.style.transform = "rotateY(360deg)";
    leftBtnImg.style.transition = "transform 0.8s";
    leftBtnImg.style.transformStyle = "preserve-3d";
}



