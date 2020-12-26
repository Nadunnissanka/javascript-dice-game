function randomOne(){
    var randomnumber1 = Math.floor((Math.random() * 6) + 1);

    var randomImageNameOne = "img/dice"+ randomnumber1 +".png";

    document.querySelector(".dice-img-1").setAttribute("src",randomImageNameOne);

    return randomnumber1;
}

function randomTwo(){
    var randomnumber2 = Math.floor((Math.random() * 6) + 1);

    var randomImageNameTwo = "img/dice"+ randomnumber2 +".png";

    document.querySelector(".dice-img-2").setAttribute("src",randomImageNameTwo);

    return randomnumber2;
}

function main(){
    randomOne();
    randomTwo();
    var a = randomOne();
    var b = randomTwo();
    //console.log(a);
    //console.log(b);
    if(a > b){
        document.querySelector("#winner").innerHTML="Player One Win!";
    }else if(b > a){
        document.querySelector("#winner").innerHTML="Player Two Win!";
    }else{
        document.querySelector("#winner").innerHTML="Draw"; 
    }
}
