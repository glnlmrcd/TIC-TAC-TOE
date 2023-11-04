var mb = document.querySelectorAll(".mbox"); // get all elements/buttons with class="buttons"

var btn_clear = document.querySelector("#clear"); //querySelector for ID

var cSign = "X";
var cColor = "lightblue";
var nClicks = 0;

// Assign onclick events to all the buttons using a for loop
for ( var i = 0; i < mb.length; i++ ) {  // aButtons.length is the number of elements
    mb[i].onclick = function() {
        this.innerHTML = cSign;
		this.disabled = true;
		this.style.backgroundColor = cColor;
		
		if ( cSign == "X" ) {
			cSign = "O";
			cColor = "#FFC0CB";
		}
		else {
			cSign = "X";
			cColor = "lightblue";
		}
		nClicks++;
		Check();
    }    
}



btn_clear.onclick = function() {
        Clear();
}



function Clear() {
	for ( var i = 0; i < mb.length; i++ )  {
		mb[i].style.backgroundColor = "white";
		mb[i].innerHTML = (i+1)+"";
		mb[i].disabled = false;
        nClicks = 0;
        
	}
	
}



function Check() {
if (mb[0].innerHTML == "X" && mb[1].innerHTML == "X" && mb[2].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[3].innerHTML == "X" && mb[4].innerHTML == "X" && mb[5].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[6].innerHTML == "X" && mb[7].innerHTML == "X" && mb[8].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[0].innerHTML == "X" && mb[3].innerHTML == "X" && mb[6].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[1].innerHTML == "X" && mb[4].innerHTML == "X" && mb[7].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[2].innerHTML == "X" && mb[5].innerHTML == "X" && mb[8].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[0].innerHTML == "X" && mb[4].innerHTML == "X" && mb[8].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}

if (mb[2].innerHTML == "X" && mb[4].innerHTML == "X" && mb[6].innerHTML == "X") 
{
    alert("X wins");
    DisableButtons()
}


if (mb[0].innerHTML == "O" && mb[1].innerHTML == "O" && mb[2].innerHTML == "0") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[3].innerHTML == "O" && mb[4].innerHTML == "O" && mb[5].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[6].innerHTML == "O" && mb[7].innerHTML == "O" && mb[8].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[0].innerHTML == "O" && mb[3].innerHTML == "O" && mb[6].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[1].innerHTML == "O" && mb[4].innerHTML == "O" && mb[7].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[2].innerHTML == "O" && mb[5].innerHTML == "O" && mb[8].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[0].innerHTML == "O" && mb[4].innerHTML == "O" && mb[8].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}

if (mb[2].innerHTML == "O" && mb[4].innerHTML == "O" && mb[6].innerHTML == "O") 
{
    alert("O wins");
    DisableButtons()
}



if (nClicks == 9) {
    alert("It's a tie!");
    DisableButtons()
}

}

function DisableButtons() {
    for (var i = 0; i < mb.length; i++) {
        if (mb[i] !== btn_clear) {
            mb[i].disabled = true;
        }
    }
}