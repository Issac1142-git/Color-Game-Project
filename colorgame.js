var numSquares = 6;
var colors = generaterandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("div span");
var h1= document.querySelector("h1");
var rgbdisplay = document.querySelector("h1 span");
var newColor = document.querySelector("#stripe button");
var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");
pickedColor = pickColor();


rgbdisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generaterandomColors(numSquares);
    pickedColor = pickColor();
    rgbdisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
        
});

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generaterandomColors(numSquares);
    pickedColor = pickColor();
    rgbdisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        
            squares[i].style.background = colors[i];
       
            squares[i].style.display = "block";
       
    }
})

newColor.addEventListener("click", function(){
    colors = generaterandomColors(numSquares);
    pickedColor = pickColor();
    rgbdisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    message.textContent = "";

    for(var i=0; i<squares.length; i++){
        squares[i].style.background =  colors[i];
    }

    h1.style.background = "steelblue";
})

for(var i=0; i<squares.length; i++){

    //add color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to square
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
    if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        newColor.textContent = "Play Again?";
    }else{
        this.style.backgroundColor = "#232323"
        message.textContent = "Try again!"
    }
    })
    
}



function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generaterandomColors(num){
    var arr = [];
    for(var i=0; i < num; i++){
        
        arr.push(randomColors());
        
    }
    return arr;
}


function randomColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b +")";
}