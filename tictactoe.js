var tictac = ["X", "O"];
var checked = [null, null,null,null,null,null,null,null,null];
var toWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
var i=0;
var playerX= [];
var playerO= [];

var countTurns = 0;
var gameOver = false;

function xo(value){
	if((checked[value] === null) && (!gameOver)){
		var element = document.getElementById(value);
		element.innerHTML = tictac[i];
		i++;
		if(i === tictac.length){
			i=0;
		}
		if(element.innerHTML === "X"){
			playerX.push(element.id);
			checked[value] = "X";
			document.getElementById(element.id).classList.add("bgColorX");
		}else{
			playerO.push(element.id);
			checked[value] = "O";
			document.getElementById(element.id).classList.add("bgColorO");
		}
		countTurns++;
		winner();
	}
	else if(gameOver){
		restartBtn();
	}
	else{
		alert("You can't play here");
	}

	
}

function winner(){
	for(var a = 0; a<toWin.length; a++){
		var countWinnerX = 0;
		var countWinnerO = 0;
		
		for(var j = 0; j<toWin[a].length; j++) {
			if(playerX.indexOf(toWin[a][j].toString()) !== -1){
				countWinnerX++;
			}else if (playerO.indexOf(toWin[a][j].toString()) !== -1){
				countWinnerO++;
			}
		}

		if ((countWinnerX === 3) || (countWinnerO === 3)){
			//if(playerX === toWin[i][j])
			show("win");
			gameOver = true;
			break;
		}
		else if (countTurns === 9){
			show("draw");
			gameOver = true;
			break;	
		}
	}
}

function show(id){
	var div = ["hide", id];
	for(var a=0; a< div.length; a++){
		document.getElementById("victory").innerHTML =(tictac[(i+1)%2]);
		document.getElementById(div[a]).classList.add("show");
	}
}

function restartBtn(){
	playerO=[];
	playerX=[];
	for(var i = 0; i < 9; i++){
		document.getElementById(i.toString()).innerHTML = '';
		document.getElementById(i.toString()).classList.remove("bgColorX");
		document.getElementById(i.toString()).classList.remove("bgColorO");
	}
	var div = ["hide", "win", "draw"];
		for (var a=0; a < div.length; a++) {
			document.getElementById(div[a]).classList.remove('show');
			
		}


	countTurns = 0;
	gameOver = false;
	checked = [null, null,null,null,null,null,null,null,null];
}



