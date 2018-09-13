var Wrestlers = ["The Undertaker","Kurt Angle", "Kane", "Stone Cold", "Shawn Michaels", "Randy Savage", "The Rock", "Booker T", "Triple H", "Chyna"];
var WrestlersImg = ["assets/images/tu.jpeg","assets/images/ka.jpeg","assets/images/k.jpeg","assets/images/sc.jpeg","assets/images/sm.jpeg","assets/images/rs.jpeg","assets/images/tr.jpeg","assets/images/bt.jpeg","assets/images/th.jpeg","assets/images/c.jpeg"]
var WrestlersMusic = ["assets/images/tu.mp3","assets/images/ka.mp3","assets/images/k.mp3","assets/images/sc.mp3","assets/images/sm.mp3","assets/images/rs.mp3","assets/images/tr.mp3","assets/images/bt.mp3","assets/images/th.mp3","assets/images/c.mp3"]
var RandomWrestler = Math.floor(Math.random()*Wrestlers.length);
var SelectWrestler = Wrestlers[RandomWrestler].toLowerCase();
var WrestlerWordLength = SelectWrestler.length;
var Display = [WrestlerWordLength];
var Win = WrestlerWordLength;
var lettersArray = SelectWrestler.split('');
var lettersWinArray = SelectWrestler.split('')
var Chances = 10
var Output = "";
var Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
var totalWinCount = 0;
var lettersIncorrect = Alphabet.filter(function(element) {
  return lettersArray.indexOf(element) === -1;
  });

function reset() {
RandomWrestler = Math.floor(Math.random()*Wrestlers.length);
SelectWrestler = Wrestlers[RandomWrestler].toLowerCase();
WrestlerWordLength = SelectWrestler.length;
Display = [WrestlerWordLength];
Win = WrestlerWordLength;
lettersArray = SelectWrestler.split('');
lettersWinArray = SelectWrestler.split('')
Chances = 10
Output = "";
Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
lettersIncorrect = Alphabet.filter(function(element) {
  return lettersArray.indexOf(element) === -1;
  });
var ResetChances = document.getElementById('chancesremaining');
ResetChances.innerHTML = Chances;
var ResetAlreadyGuessed = document.getElementById('myList');
ResetAlreadyGuessed.innerHTML = "&nbsp;";
}

reset();


function populatelength() {
// Used to display word length
for (var i = 0; i < WrestlerWordLength; i++)
{
Display[i] = "_ ";
Output = Output + Display[i];
}
document.getElementById("game").innerHTML = Output;
Output = "";
}
populatelength();





document.onkeyup = function(event) {
var userInput = event.key;

// Used to display letters to users "hangman"
for (var g = 0; g < WrestlerWordLength; g++)
{
if (userInput.toUpperCase() == lettersArray[g].toUpperCase())
  {
    Display[g] = userInput.toUpperCase();

    function remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    remove(lettersWinArray,lettersArray[g]);
    Win = lettersWinArray.length;


  }
    Output = Output + Display[g];
}

document.getElementById("game").innerHTML = Output;
Output="";



// Used to display letters used
for (var w = 0; w < lettersIncorrect.length; w++)
{
if (userInput.toUpperCase() == lettersIncorrect[w].toUpperCase())
{
  Chances --;
  document.getElementById("chancesremaining").innerHTML = Chances;

  var node = document.createElement("text");
  var textnode = document.createTextNode((lettersIncorrect[w].toUpperCase()) + " ");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

  function remove(array, element) {
      const index = array.indexOf(element);

      if (index !== -1) {
          array.splice(index, 1);
      }
  }
  remove(lettersIncorrect,lettersIncorrect[w]);

  if (Chances == 0)
  {
    alert("You Lose! Try again.")
    location.reload();
  }
}
}
if (Win == 0)
{
var myImage = document.getElementById('mainImage');
myImage.setAttribute("src",WrestlersImg[RandomWrestler]);

var myMusic = document.getElementById('mainMusic');
myMusic.setAttribute("src",WrestlersMusic[RandomWrestler]);

var playMusic = document.getElementById('autoplay');
playMusic.autoplay = true;
playMusic.load();

var WinWrestler = document.getElementById('WinWrestler');
WinWrestler.innerHTML = SelectWrestler.toUpperCase();

totalWinCount++;
var WinStreak = document.getElementById('wins');
WinStreak.innerHTML = totalWinCount;

reset();
populatelength();
}

};
