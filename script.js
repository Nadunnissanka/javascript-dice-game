function diceeOne(){
    var randomNumber1 = Math.floor((Math.random()*6)+1);
    // console.log(randomNumber1);
    switch(randomNumber1)
    {
        case 1:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice1.png");
            return randomNumber1;
            break;
        case 2:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice2.png");
            return randomNumber1;
            break;
        case 3:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice3.png");
            return randomNumber1;
            break;
        case 4:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice4.png");
            return randomNumber1;
            break;
        case 5:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice5.png");
            return randomNumber1;
            break;
        case 6:
            document.querySelector(".dice-img-1").setAttribute("src","img/dice6.png");
            return randomNumber1;
            break;
        default:
            alert("Code is invalid! Please Check the code!!");
            break;
    }
    return randomNumber1;
}

function diceeTwo(){
    var randomNumber2 = Math.floor((Math.random()*6)+1);
    //console.log(randomNumber2);
    switch(randomNumber2)
    {
        case 1:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice1.png");
            return randomNumber2;
            break;
        case 2:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice2.png");
            return randomNumber2;
            break;
        case 3:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice3.png");
            return randomNumber2;
            break;
        case 4:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice4.png");
            return randomNumber2;
            break;
        case 5:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice5.png");
            return randomNumber2;
            break;
        case 6:
            document.querySelector(".dice-img-2").setAttribute("src","img/dice6.png");
            return randomNumber2;
            break;
        default:
            alert("Code is invalid! Please Check the code!!");
            break;
    }
}

function main(){
    diceeOne();
    diceeTwo();
    if(diceeOne() > diceeTwo()){
        console.log("player one win");
        document.querySelector("#winner").innerText = "Player One";
    }else{
        console.log("player two win");
        document.querySelector("#winner").innerText = "Player Two";
    }

}