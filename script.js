

//window.onload = localStorage.clear();
window.onload = showId();

var gameMenu = document.getElementById("BullsandCows");
var nameEdit = document.getElementById('nameEdit');
var imgEdit = document.getElementById("imgEdit");
var show = document.getElementById("nameShow");
var showI = document.getElementById("showImg");
var agent = document.getElementById("agent");
var farmer = document.getElementById("farmer");
var farmerCase = document.getElementById("farmercase"); // For agents game (Mistake swithced with agentss game mode)
var showTick = document.getElementById("tickets");
var showagentsCase = document.getElementById("agentscase"); //For farmers game (mistake swithced with the farmers game mode)
var showStore = document.getElementById("showShop");
var congrats = document.getElementById("congrats");
var scoreHitTheBull = document.getElementById("scoreHitTheBull");
var scoreNumber = document.getElementsByClassName("score");
var holdMoney = {"money": ""};

function openEdit(){
    gameMenu.style.display = "none";
    show.style.display = "none";
    showI.style.display = "none";
    agent.style.display = "none";
    farmer.style.display = "none";
    showTick.style.display = "none";
    farmerCase.style.display = "none";
    showagentsCase.style.display = "none";
    showStore.style.display = "none"
    document.getElementById("finishHitTheBullBtn").style.display = "none"
    document.getElementById("scoreShow").style.display = "none"
    document.getElementById("showHittheBull").style.display = "none";
    document.getElementById("showHitTheBullGame").style.display = "none";
    document.getElementById("congrats").style.display = "none";
    document.getElementById("showBullFarmerCow").style.display = "none";
    document.getElementById("BullFarmerCowGameBoard").style.display = "none"
    congrats.style.display = "none"
    if(nameEdit.style.display == "inline"){
        nameEdit.style.display = "none";
        imgEdit.style.display = "none";
    } else {
        nameEdit.style.display = "inline";
        imgEdit.style.display = "inline";
    }

}


//Отваря и затваря подменю за въвеждане на име
function showPlayerNameInput(){
    if(show.style.display == "inline"){
        show.style.display = "none"
    } else {
        show.style.display = "inline";
    }
    
}


// Въвежда и записва името
function submitName(){
    var playerNameTxt = document.getElementById("playerNameTxt");
    var playerIds = {"name": ""};
    playerIds.name = playerNameTxt.value;

    var myJSON = JSON.stringify(playerIds);
    localStorage.setItem("nameJSON", myJSON);

    showId()
    showPlayerNameInput();
    
}
// Извежда Запомненото име
function showId(){
    if(localStorage.nameJSON !== undefined){
        var text = localStorage.getItem("nameJSON");
        var obj = JSON.parse(text);
        welcome.innerHTML = "Welcome " + obj.name;
    }
    
    if(localStorage.imageJSON !== undefined){
        var pic = localStorage.getItem("imageJSON");
        var picObj = JSON.parse(pic);
        document.getElementById('holder').src = picObj;
    }
    
    if(localStorage.FarmerTicket !== undefined){
        var fTicket = localStorage.getItem("FarmerTicket");
        var fTicketObj = JSON.parse(fTicket);
        document.getElementById("farmerTicket").style.display = fTicketObj.displayf;
        document.getElementById("xxxAgent").style.display = "none"
    }

    if(localStorage.AgentTicket !== undefined){
        var fAgent = localStorage.getItem("AgentTicket");
        var aTicketObj = JSON.parse(fAgent);
        document.getElementById("agentTicket").style.display = aTicketObj.displayAg;
        document.getElementById("xxxFarm").style.display = "none"
    }
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money)
        document.getElementById("money").innerHTML= moneyValue.money;
    }
    if(localStorage.BaCTic !== undefined){
        var BAC = localStorage.getItem("BaCTic");
        document.getElementById("BaCTicketInTicketsMenu").style.display = JSON.parse(BAC).BaCt;
        if(JSON.parse(BAC).BaCt == "inline"){
            document.getElementById("xxxBAC").style.display = "none"
            document.getElementById("BaCPack").style.display = "none"
            document.getElementById("haveBaCT").innerHTML = "You have it already"
        }
    }
    //Rocking Bull
    if(localStorage.RBItem !== undefined){
        var RBtext = localStorage.getItem("RBItem");
        document.getElementById("RockingBullTicketMenu").style.display = JSON.parse(RBtext).RB;
        if(JSON.parse(RBtext).RB == "inline"){
            document.getElementById("RockingBullPack").style.display = "none"
            document.getElementById("haveRockingBull").innerHTML = "You have it already"
            document.getElementById("xxxRB").style.display = "none"
        }
    }
    // PaperCow
    if(localStorage.PCItem !== undefined){
        var PCtext = localStorage.getItem("PCItem");
        document.getElementById("PaperCowTicketMenu").style.display = JSON.parse(PCtext).PC;
        if(JSON.parse(PCtext).PC == "inline"){
            document.getElementById("PaperCowPack").style.display = "none"
            document.getElementById("havePaperCow").innerHTML = "You have it already"
            document.getElementById("xxxPC").style.display = "none"
        }
    }
    //Scissors Farmer
    if(localStorage.SFItem !== undefined){
        var SFtext = localStorage.getItem("SFItem");
        document.getElementById("ScissorsFarmerTicketMenu").style.display = JSON.parse(SFtext).SF;
        if(JSON.parse(SFtext).SF == "inline"){
            document.getElementById("ScissorsFarmerPack").style.display = "none"
            document.getElementById("haveScissorsFarmer").innerHTML = "You have it already"
            document.getElementById("xxxSF").style.display = "none"
        }
    }
    // Retire
    if(localStorage.RetItem !== undefined){
        var Rettext = localStorage.getItem("RetItem");
        document.getElementById("RetireTicketMenu").style.display = JSON.parse(Rettext).Ret;
        if(JSON.parse(Rettext).Ret == "inline"){
            document.getElementById("RetirePack").style.display = "none"
            document.getElementById("haveRetire").innerHTML = "You have it already"
            document.getElementById("xxxRet").style.display = "none"
        }
    }
    if(localStorage.HitTheBullTicketItem !== undefined){
        var HTBT = localStorage.getItem("HitTheBullTicketItem");
        var HTBTObj = JSON.parse(HTBT)
        document.getElementById("hitTheBullTicketMenu").style.display = HTBTObj.displayHtBt;
        document.getElementById("xxxHTB").style.display = "none"
    }

    if(localStorage.BFCTItem !== undefined){
        document.getElementById("BullFarmerCowTicketMenu").style.display ="inline";
        document.getElementById("xxxBFC").style.display = "none"
    }

    if (localStorage.length >=2){
        document.getElementById("HiMsg").style.display = "none"
        document.getElementById("pickGame").style.display = "inline"
        document.getElementById("ticketButton").style.display = "inline"
        document.getElementById("shop").style.display = "inline"
    }
    if(localStorage.length >= 12){
        document.getElementById("RetireTheGame").style.display = "inline"
    }
    if (localStorage.length <2){
        document.getElementById("pickGame").style.display = "none"
        document.getElementById("ticketButton").style.display = "none"
        document.getElementById("shop").style.display = "none"
    }
}



//Показва и скрива подменю за профилна снимка
function playerImg(){
    if(showI.style.display == "inline"){
        showI.style.display = "none"
    } else {
        showI.style.display = "inline";
    }
}



var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var output = document.getElementById('output');
canvas.width = 300;
canvas.height = 300;
window.onload = init;
var pos = {
    x: 0
    , y: 0
};
var bgColor = "black";
var bgC = document.getElementById('bgColor');
bgC.addEventListener('change', function () {
    bgColor = event.target.value;
})


document.getElementById('save').addEventListener('click', function () {
    var dataURL = canvas.toDataURL();
    //document.getElementById('holder').src = dataURL;

    var playerPic = {"image": ""};
    playerPic.image = document.getElementById('holder').src;
    playerPic = dataURL;

    var myJSON = JSON.stringify(playerPic);
    localStorage.setItem("imageJSON", myJSON);
    showId();
    playerImg();
    openEdit();
})


document.getElementById('clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function init() {
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousemove', sPos);
    canvas.addEventListener('mouseenter', sPos);
}

function draw(e) {
    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    sPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = bgColor;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function sPos(e) {
    pos.x = e.pageX  - 10 ;
    pos.y = e.pageY - 225;
}




// Качване на снимка

var imgLoader = document.getElementById('imgLoader');
    imgLoader.addEventListener('change', upImage, false);
function upImage() {
    var r = new FileReader();
    r.readAsDataURL(event.target.files[0]);
    r.onload = function (e) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
    }
}





// GAME START

function pickGame(){
    nameEdit.style.display = "none";
    imgEdit.style.display = "none";
    show.style.display = "none";
    showI.style.display = "none";
    agent.style.display = "none";
    farmer.style.display = "none";
    showTick.style.display = "none";
    farmerCase.style.display = "none";
    showagentsCase.style.display = "none";
    document.getElementById("finishHitTheBullBtn").style.display = "none"
    document.getElementById("scoreShow").style.display = "none"
    showStore.style.display = "none";
    document.getElementById("congrats").style.display = "none"
    document.getElementById("showHittheBull").style.display = "none";
    document.getElementById("showBullFarmerCow").style.display = "inline"
    document.getElementById("BullFarmerCowGameBoard").style.display = "none"
    if (gameMenu.style.display == "inline"){
        gameMenu.style.display = "none";
        document.getElementById("showHitTheBullGame").style.display = "none"
        document.getElementById("showBullFarmerCow").style.display = "none"
    } else {
        gameMenu.style.display = "inline";
        document.getElementById("showHitTheBullGame").style.display = "inline"
        document.getElementById("showBullFarmerCow").style.display = "inline"
    }

}


function bullsAndCows(){
    document.getElementById("playersOffer").style.display = "inline"
    document.getElementById("showHitTheBullGame").style.display = "none"
    document.getElementById("revealNum").value = "Reveal the number"
    gameMenu.style.display = "none";
    document.getElementById("offersOutput").innerHTML = ""
    chooseMode();   
}

function chooseMode(){
    document.getElementById("showBullFarmerCow").style.display = "none";
    if(agent.style.display == "inline"){
        agent.style.display = "none";
        farmer.style.display = "none";
    } else {
        agent.style.display = "inline";
        farmer.style.display = "inline";
    }
}




function playAsFarmer(){
    agent.style.display = "none";
    farmer.style.display = "none";
    farmerCase.style.display = "inline";
    document.getElementById("offersButton").style.display = "inline"

    randomArr= [];

    for (let x = 0; x < 4; x++ ){
        var randomNum = Math.floor(Math.random()*10);
        randomArr.push(randomNum)
    }

    playersOffer(randomArr);

}


var counter = -1;
function playersOffer(r){
    var offersOutput = document.getElementById("offersOutput");
    var playersOffer = document.getElementById("playersOffer");;
    var splitNum = playersOffer.value.toString().split("");
    counter++;
    var bull = 0;
    var cows = 0;
    var copyR = [];

    for (let i = 0 ; i < 4; i++){
        if(Number(r[i]) == Number(splitNum[i])){
            bull++;
            copyR[i] = "B";
            splitNum[i] = "B";
        } else {
            copyR [i] = Number(r[i]);
        }
    }

    for (var x = 0; x < 4; x++){
        for (var y = 0; y < 4; y++){
            if (copyR[x] !== "B" ){
                if(Number(copyR[x] == Number(splitNum[y]))){
                    copyR[x] = "C";
                    splitNum[y] = "C";
                    cows++;
                }else {
                    copyR[x] = Number(r[x]);
                }
            }
        }
    }
    
   
 if (counter !== 0){
    offersOutput.innerHTML += "For: " + playersOffer.value + " You have:  Bulls: " + bull + " Cows: " + cows +  "<br>";
 }
 
 if (bull == 4){
    document.getElementById("xxxAgent").style.display = "none"
    if(localStorage.FarmerTicket !== undefined){
        offersOutput.innerHTML += "<br>" + "YOU WIN" + "<br>" + "YOU ALREADY HAVE AN AGENT TICKET" + "<br>FOR WINNING THE GAME YOU RECEVE 300 $$$"
     } else {
        offersOutput.innerHTML += "<br>" + "YOU WIN" + "<br>" + "YOU GOT AN AGENT TICKET" + "<br>FOR WINNING THE GAME YOU RECEVE 300 $$$"
     }
     var FarmerTicketId = {"displayf" : "inline"};
     var myJSONfarmer = JSON.stringify(FarmerTicketId);
     localStorage.setItem("FarmerTicket", myJSONfarmer);
     document.getElementById("farmerTicket").style.display = "inline";     
     document.getElementById("offersButton").style.display = "none"
     if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money)
        holdMoney.money = Number(moneyValue.money) + 300;
        document.getElementById("money").innerHTML= moneyValue.money + 300;
    } else {
        holdMoney.money = Number(holdMoney.money) + 300;
        document.getElementById("money").innerHTML = 300;
    }
     localStorage.setItem("addMoney", JSON.stringify(holdMoney))
     showId()
     
 }
    
    console.log(r);
    console.log(splitNum);
    console.log(bull)
}

document.getElementById("resetAdminsGame").addEventListener("click", function(){
    playAsFarmer();
    offersOutput.innerHTML = "";
    document.getElementById("offersButton").style.display = "inline"
    document.getElementById("guesses4Num").value = "";
    document.getElementById("guesses4Num1").value = "";
    document.getElementById("guesses4Num2").value = "";
    document.getElementById("guesses4Num3").value = "";
    document.getElementById("revealNum").value = "Reveal the number";
    document.getElementById("playersOffer").value = "";
    document.getElementById("playersOffer").style.display = "inline"
})

document.getElementById("revealNum").addEventListener("click", function(){
    document.getElementById("revealNum").value = randomArr;
    document.getElementById("playersOffer").style.display = "none"
    document.getElementById("offersButton").style.display = "none";
    document.getElementById("offersOutput").innerHTML = "Start a new game :D"
})


function showTickets(){
    gameMenu.style.display = "none";
    nameEdit.style.display = "none";
    imgEdit.style.display = "none";
    show.style.display = "none";
    showI.style.display = "none";
    agent.style.display = "none";
    farmer.style.display = "none";
    farmerCase.style.display = "none";
    showagentsCase.style.display = "none";
    document.getElementById("finishHitTheBullBtn").style.display = "none"
    document.getElementById("scoreShow").style.display = "none"
    document.getElementById("congrats").style.display = "none"
    showStore.style.display = "none"
    document.getElementById("showHittheBull").style.display = "none";
    document.getElementById("showHitTheBullGame").style.display = "none";
    document.getElementById("showBullFarmerCow").style.display = "none"
    document.getElementById("BullFarmerCowGameBoard").style.display = "none"
    if(showTick.style.display == "inline"){
        showTick.style.display = "none";
    } else{
        showTick.style.display = "inline";
    }
}




// FARMERS GAME

function startFarmersMode(){
    agent.style.display = "none";
    farmer.style.display = "none";
    showagentsCase.style.display = "inline";    

}


 function StartGame(){
     var numHolder = document.getElementById("numHolder")
     var numHolderOutput = document.getElementById("numHolderOutput");
     var startFarmerBtn = document.getElementById("startFarmerBtn");
     var showFarmersModeMenu = document.getElementById("showFarmersModeMenu")
     var numHolderC = numHolder.value.toString().split("").length;
     if(numHolderC == 4){
        numHolder.style.display = "none";
        numHolderOutput.style.display = "inline";
        numHolderOutput.innerHTML = numHolder.value;
        startFarmerBtn.style.display = "none";
        showFarmersModeMenu.style.display = "inline";
        theNumbers = [];
        yourAnswer(theNumbers);
     } else {
         document.getElementById("4Dmsg").innerHTML = "You need 4 digit number"
     }
     
 }
var q = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var yourResult = ["X","X","X","X"];


function yourAnswer(theNumbers){
    document.getElementById("4Dmsg").innerHTML = ""
    var numsArray = theNumbers;
    var holeHolder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var newHoldeHolder = [];
    var offerFiller = [];
    var yourBulls = document.getElementById("yourBulls");
    var offersOutput2 = document.getElementById("offersOutput2");
    if(numsArray.length > 4){
        for(let i = numsArray.length; i>4 ; i--){
            numsArray.pop();
        }
    }
    if(numsArray.length < 4){
        offersOutput2.innerHTML = "The offer is:" + q + q + q + q;
        if(Number(yourBulls.value) !== 0){
            for(let i = 0; i < Number(yourBulls.value); i++){
                if (q == 0){
                    numsArray.push(q + 9);
                } else {
                    numsArray.push(q-1);
                }
                
            }

        }
        
    } else {
        for (let x = 0; x < holeHolder.length; x++){ 
            for (let y = 0; y < numsArray.length; y++){
                if(holeHolder[x] == numsArray[y]){
                    holeHolder[x] = "M"

                }
            }
        }
        for( let i = 0; i < holeHolder.length; i++){
            if(holeHolder[i] !== "M"){
                newHoldeHolder.push(holeHolder[i])
            }
        }
        console.log(newHoldeHolder)

        for(let x = 0; x < 3; x++){
            let randNum = Math.floor(Math.random()*newHoldeHolder.length)
            offerFiller.push(newHoldeHolder[randNum])
        }
        console.log("Offers filler:" + offerFiller)

        if (yourResult[0] == "X"){
            offersOutput2.innerHTML ="The offer is:" + numsArray[p1] +  ","+ offerFiller;
            if(Number(yourBulls.value) !== 0){
                yourResult[0] = numsArray[p1 -1 ];
                for(let x = 0 ; x<4 ; x++){
                    if(yourResult[x] == undefined){
                        yourResult[x] = numsArray[3]
                        console.log("hi")
                    }
                }
                offersOutput2.innerHTML = "The offer is:" +offerFiller[0] +"," + offerFiller[1] + "," +offerFiller[0] + "," +offerFiller[2];
            }
                p1++
        } else if (yourResult[0] !== "X" && yourResult[1] === "X"){
            offersOutput2.innerHTML ="The offer is:" + offerFiller[0] +"," + numsArray[p2] + "," +offerFiller[1] + "," +offerFiller[2];
                if(Number(yourBulls.value) !== 0){
                    yourResult[1] = numsArray[p2-1];
                    for(let x = 0 ; x<4 ; x++){
                        if(yourResult[x] == undefined){
                            yourResult[x] = numsArray[3]
                            console.log("hi")
                        }
                    }
                    offersOutput2.innerHTML ="The offer is:" +offerFiller[0] +"," + offerFiller[1] + "," +offerFiller[0] + "," +offerFiller[2];
                }
                p2++
                    
        } else if (yourResult[0] !== "X" && yourResult[1] !== "X" && yourResult[2] == "X"){
            offersOutput2.innerHTML ="The offer is:" + offerFiller[0] +"," + offerFiller[1] + "," + numsArray[p3] + "," +offerFiller[2];
                    if(Number(yourBulls.value) !== 0){
                        yourResult[2] = numsArray[p3-1];
                        for(let x = 0 ; x<4 ; x++){
                            if(yourResult[x] == undefined){
                                yourResult[x] = numsArray[3]
                                console.log("hi")
                            }
                        }
                        offersOutput2.innerHTML ="The offer is:" + offerFiller[0] +"," + offerFiller[1] + "," + offerFiller[2] + "," + offerFiller[1];
                    }
                    p3++
        }else {
            for(let x = 0 ; x < yourResult.length; x++){
                if(yourResult[x] !== "X"){
                    offersOutput2.innerHTML = "The offer is:" + yourResult;
                } else {
                    offersOutput2.innerHTML ="The offer is:" + offerFiller[0] +"," + offerFiller[1] + "," + offerFiller[2] + "," + numsArray[p4];
                    if(Number(yourBulls.value) !== 0){
                        yourResult[3] = numsArray[p4-1];
                        for(let x = 0 ; x<4 ; x++){
                            if(yourResult[x] == undefined){
                                yourResult[x] = numsArray[3]
                                console.log("hi")
                            }
                        }
                        console.log("Check" + p4)
                    }
                    p4++
                }
            }
        }

        console.log(yourResult)
        if(Number(yourBulls.value) == 4){
            document.getElementById("xxxFarm").style.display = "none"
            if(localStorage.AgentTicket !== undefined){
                offersOutput2.innerHTML ="The offer is:" + yourResult + "<br>YOU HAVE THE FARM TICKET..SO NO TICKET<br>FOR COMPLETING THE GAME YOU RECEVE 200 $$$"
            } else {
                offersOutput2.innerHTML ="The offer is:" + yourResult + "<br>YOU GOT A FARM TICKET<br>FOR COMPLETING THE GAME YOU RECEVE 200 $$$"
            }
            document.getElementById("yourAnswerButton").style.display = "none"
            var AgentTicketId = {"displayAg" : "inline"};
            var myJSONagent = JSON.stringify(AgentTicketId);
            localStorage.setItem("AgentTicket", myJSONagent);
            document.getElementById("agentTicket").style.display = "inline";
            if(localStorage.addMoney !== undefined){
                var money = localStorage.getItem("addMoney");
                var moneyValue = JSON.parse(money)
                holdMoney.money = Number(moneyValue.money) + 200;
                document.getElementById("money").innerHTML= moneyValue.money + 200;
            } else {
                holdMoney.money = Number(holdMoney.money) + 200;
                document.getElementById("money").innerHTML = 200;
            }
             localStorage.setItem("addMoney", JSON.stringify(holdMoney))
             showId();
        }
    

    }

    if(p1 == 4 || p2 == 4|| p3 == 4|| p4 == 4 ){
        p1 = 0
        p2 = 0
        p3 = 0
        p4 = 0
    }
    if (q == 9){
        q = 0;
    } else {
        q++;
    }
    document.getElementById("yourBulls").value = "0"
    document.getElementById("yourCows").value = "0"
    console.log(numsArray)
    
}



//   SHOP  
function showShop(){
    gameMenu.style.display = "none";
    nameEdit.style.display = "none";
    imgEdit.style.display = "none";
    show.style.display = "none";
    showI.style.display = "none";
    agent.style.display = "none";
    farmer.style.display = "none";
    showTick.style.display = "none";
    farmerCase.style.display = "none";
    showagentsCase.style.display = "none";
    document.getElementById("finishHitTheBullBtn").style.display = "none"
    document.getElementById("congrats").style.display = "none"
    document.getElementById("noMoneyMsg").style.display = "none";
    document.getElementById("showHittheBull").style.display = "none";
    document.getElementById("showHitTheBullGame").style.display = "none";
    document.getElementById("showBullFarmerCow").style.display = "none";
    document.getElementById("BullFarmerCowGameBoard").style.display = "none"
    document.getElementById("noMoneyRockingBull").style.display = "none"
    document.getElementById("noMoneyPaperCow").style.display = "none"
    if(showStore.style.display == "inline"){
        showStore.style.display = "none"
    } else {
        showStore.style.display = "inline"
    }
}
// BUY TICKETS
function takeBaCTicket(){
    
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money);
            if(Number(moneyValue.money) < 600){
                document.getElementById("noMoneyMsg").style.display = "inline"
                document.getElementById("noMoneyMsg").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
            } else {
                var BaCTicket = {"BaCt" : "inline"}
                localStorage.setItem("BaCTic", JSON.stringify(BaCTicket))
                document.getElementById("BaCTicketInTicketsMenu").style.display = "inline"
                holdMoney.money = Number(moneyValue.money) - 600;
                document.getElementById("money").innerHTML= moneyValue.money - 600;
                localStorage.setItem("addMoney", JSON.stringify(holdMoney))
                document.getElementById("BaCPack").style.display = "none"
                document.getElementById("haveBaCT").innerHTML = "You have it already"
                document.getElementById("xxxBAC").style.display = "none"
                showId()
            }
    } else {
        document.getElementById("noMoneyMsg").style.display = "inline"
        document.getElementById("noMoneyMsg").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
    }

}

function takeRockingBull(){
    
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money);
            if(Number(moneyValue.money) < 500){
                document.getElementById("noMoneyRockingBull").style.display = "inline"
                document.getElementById("noMoneyRockingBull").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
            } else {
                var RockingBull = {"RB" : "inline"}
                localStorage.setItem("RBItem", JSON.stringify(RockingBull))
                document.getElementById("RockingBullTicketMenu").style.display = "inline"
                holdMoney.money = Number(moneyValue.money) - 500;
                document.getElementById("money").innerHTML= moneyValue.money - 500;
                localStorage.setItem("addMoney", JSON.stringify(holdMoney))
                document.getElementById("RockingBullPack").style.display = "none"
                document.getElementById("haveRockingBull").innerHTML = "You have it already"
                document.getElementById("xxxRB").style.display = "none"
                showId();
            }
    } else {
        document.getElementById("noMoneyRockingBull").style.display = "inline"
        document.getElementById("noMoneyRockingBull").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
    }

}

function takePaperCow(){
    
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money);
            if(Number(moneyValue.money) < 500){
                document.getElementById("noMoneyPaperCow").style.display = "inline"
                document.getElementById("noMoneyPaperCow").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
            } else {
                var PaperCow = {"PC" : "inline"}
                localStorage.setItem("PCItem", JSON.stringify(PaperCow))
                document.getElementById("PaperCowTicketMenu").style.display = "inline"
                holdMoney.money = Number(moneyValue.money) - 500;
                document.getElementById("money").innerHTML= moneyValue.money - 500;
                localStorage.setItem("addMoney", JSON.stringify(holdMoney))
                document.getElementById("PaperCowPack").style.display = "none"
                document.getElementById("havePaperCow").innerHTML = "You have it already"
                document.getElementById("xxxPC").style.display = "none";
                showId();
            }
    } else {
        document.getElementById("noMoneyPaperCow").style.display = "inline"
        document.getElementById("noMoneyPaperCow").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
    }

}

function takeScissorsFarmer(){
    
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money);
            if(Number(moneyValue.money) < 500){
                document.getElementById("noMoneyScissorsFarmer").style.display = "inline"
                document.getElementById("noMoneyScissorsFarmer").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
            } else {
                var ScissorsFarmer = {"SF" : "inline"}
                localStorage.setItem("SFItem", JSON.stringify(ScissorsFarmer))
                document.getElementById("ScissorsFarmerTicketMenu").style.display = "inline"
                holdMoney.money = Number(moneyValue.money) - 500;
                document.getElementById("money").innerHTML= moneyValue.money - 500;
                localStorage.setItem("addMoney", JSON.stringify(holdMoney))
                document.getElementById("ScissorsFarmerPack").style.display = "none"
                document.getElementById("haveScissorsFarmer").innerHTML = "You have it already"
                document.getElementById("xxxSF").style.display = "none";
                showId();
            }
    } else {
        document.getElementById("noMoneyScissorsFarmer").style.display = "inline"
        document.getElementById("noMoneyScissorsFarmer").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
    }

}

function takeRetire(){
    
    if(localStorage.addMoney !== undefined){
        var money = localStorage.getItem("addMoney");
        var moneyValue = JSON.parse(money);
            if(Number(moneyValue.money) < 1000){
                document.getElementById("noMoneyRetire").style.display = "inline"
                document.getElementById("noMoneyRetire").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
            } else {
                var Retire = {"Ret" : "inline"}
                localStorage.setItem("RetItem", JSON.stringify(Retire))
                document.getElementById("RetireTicketMenu").style.display = "inline"
                holdMoney.money = Number(moneyValue.money) - 1000;
                document.getElementById("money").innerHTML= moneyValue.money - 1000;
                localStorage.setItem("addMoney", JSON.stringify(holdMoney))
                document.getElementById("RetirePack").style.display = "none"
                document.getElementById("haveRetire").innerHTML = "You have it already"
                document.getElementById("xxxRet").style.display = "none"
                showId();
            }
    } else {
        document.getElementById("noMoneyRetire").style.display = "inline"
        document.getElementById("noMoneyRetire").innerHTML = "<br>YOU DONT HAVE ENOUGH $$$"
    }

}


document.getElementById("showHitTheBullGame").addEventListener("click", function(){
        document.getElementById("showHittheBull").style.display = "inline";
        document.getElementById("showGameBoard").style.display = "none";
        document.getElementById("showHitTheBullGame").style.display = "none";
        document.getElementById("showBullFarmerCow").style.display = "none";
        gameMenu.style.display = "none";
        document.getElementById("scoreShow").style.display = "inline"
        document.getElementById("startHitTheBullBtn").style.display = "inline"
        cScore = 0;
        hittingGame();
});
var ABull;
var barns = 6;
var timer;
var sCom;
var cOff = true;

function hittingGame(){
    var html = "<h1>Hit the Bull</h1>";
    for(var x = 0; x < barns; x++){
        html += '<div class="theFarm"><div class="barn"></div><div class="bull"></div></div>';
    }
    document.querySelector(".gameboard").innerHTML = html;
    ABull = document.querySelectorAll(".bull");
    for (var x = 0 ; x < ABull.length; x++){
        ABull[x].addEventListener("click", hitBull, false)
    }
}
function popup(){
    cOff = true;
    sCom = ABull[Math.floor(Math.random()*ABull.length)];
    sCom.classList.add("popup");
    timer = setTimeout(hidecBull, (600 + (Math.floor(Math.random()*5)*500)));
    
}

function hidecBull(){
    sCom.classList.remove("popup");
    popup();
}

function hitBull(){
    event.target.classList.remove("popup");
    if(cScore == 19){
        document.getElementById("showHittheBull").style.display = "none";
        document.getElementById("congrats").style.display = "inline"
        if(localStorage.HitTheBullTicketItem !== undefined){
            document.getElementById("congrats").innerHTML = "Good Job<br>You already have 'Hit The Bull Ticket'<br> + 100$$$"
        } else {
            document.getElementById("congrats").innerHTML = "Good Job<br>You got 'Hit The Bull Ticket'<br> + 100$$$"
        }
        document.getElementById("finishHitTheBullBtn").style.display = "inline"
        document.getElementById("xxxHTB").style.display = "none"

        var HitTheBullTicket = {'displayHtBt' : "inline"};
        localStorage.setItem("HitTheBullTicketItem", JSON.stringify(HitTheBullTicket))
        document.getElementById("hitTheBullTicketMenu").style.display = "inline";

        if(localStorage.addMoney !== undefined){
            var money = localStorage.getItem("addMoney");
            var moneyValue = JSON.parse(money)
            holdMoney.money = Number(moneyValue.money) + 100;
            document.getElementById("money").innerHTML= moneyValue.money + 100;
        } else {
            holdMoney.money = Number(holdMoney.money) + 100;
            document.getElementById("money").innerHTML = 100;
        }
         localStorage.setItem("addMoney", JSON.stringify(holdMoney))
         showId();

    }
    if(cOff){
        cOff = false;
        cScore++
        document.querySelector(".score").innerHTML = cScore;
    }
    popup();
    
}

function StartHitTheBullGame(){
    document.getElementById("showGameBoard").style.display = "block";
    document.getElementById("startHitTheBullBtn").style.display = "none"
    popup();
}



document.getElementById("showBullFarmerCow").addEventListener("click", function(){
    document.getElementById("BullFarmerCowGameBoard").style.display = "inline"
    document.getElementById("showHitTheBullGame").style.display = "none"
    document.getElementById("BullsandCows").style.display = "none"
    document.getElementById("showBullFarmerCow").style.display = "none"
    document.getElementById("goBtn").style.display = "inline";
    document.getElementById("restartBFC").style.display = "none"
    restartBFC();
})
var outputBFC = document.getElementById("outputBFC");
function playBullFarmerCow(){
    
    var numBFC = Math.random();
    if(numBFC < 0.37){
        numBFC = "bull"
    } else if (numBFC < 0.67){
        numBFC = "farmer"
    } else {
        numBFC = "cow"
    }
    console.log(numBFC)

    var ps = document.getElementById("playersBFC");
    if (ps.value ===  numBFC){
        outputBFC.innerHTML += "Tie<br>"
    } else if(ps.value === "bull" && numBFC === "farmer" || ps.value === "cow" && numBFC === "bull" || ps.value === "farmer" && numBFC === "cow"){

        if(localStorage.BFCTItem !== undefined){
            outputBFC.innerHTML += "You Win<br>You already have Bull, Farmer, Cow Ticket <br> 100$$$ were added"
        } else {
            outputBFC.innerHTML += "You Win<br>You got Bull, Farmer, Cow Ticket <br> 100$$$ were added"
        }
        var BullfarmerCowTicket = {"displyBFCT" : "inline"}
        localStorage.setItem("BFCTItem", JSON.stringify(BullfarmerCowTicket))
        document.getElementById("BullFarmerCowTicketMenu").style.display = "inline"

        if(localStorage.addMoney !== undefined){
            var money = localStorage.getItem("addMoney");
            var moneyValue = JSON.parse(money)
            holdMoney.money = Number(moneyValue.money) + 100;
            document.getElementById("money").innerHTML= moneyValue.money + 100;
        } else {
            holdMoney.money = Number(holdMoney.money) + 100;
            document.getElementById("money").innerHTML = 100;
        }
         localStorage.setItem("addMoney", JSON.stringify(holdMoney))
         document.getElementById("xxxBFC").style.display = "none"
         showId();
    } else {
        outputBFC.innerHTML += "You Lose<br>"
    }
    console.log(ps.value)
    document.getElementById("goBtn").style.display = "none"
    document.getElementById("restartBFC").style.display = "inline"
}

function restartBFC(){
    document.getElementById("goBtn").style.display = "inline"
    document.getElementById("restartBFC").style.display = "none"
    outputBFC.innerHTML = "";
    document.getElementById("playersBFC").value = "";
}


function RetireAcc(){
    if(document.getElementById("RetireMsg").style.display == "inline"){
        document.getElementById("RetireMsg").style.display = "none"
    } else {
        document.getElementById("RetireMsg").style.display = "inline"
    }
}

document.getElementById("confurmRetire").addEventListener("click", function(){
    localStorage.clear();
    document.location.reload();
})