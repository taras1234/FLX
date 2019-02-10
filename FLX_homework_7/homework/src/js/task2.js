let play = confirm('Do you want to play a game?');
while(play){
  let number = 5;
  let randomNumber = Math.floor(Math.random()*number) + 1;
  let allPrize = 0;
  let maxPrize = 10;
  let nowPrize = 10;
  let startEtemp = 0;
  let endEtemp = 3;
  let nextLevel = true;
  while(startEtemp<3 && nextLevel){
    let playerNumber = prompt(`  Enter a number from 0 to ${number}
    Attempts left: ${endEtemp}
    Total prize: ${allPrize}$
    Possible prize on current attempt: ${nowPrize}$`);
    if(Number(playerNumber) === randomNumber && !isNaN(parseFloat(playerNumber))) {
      allPrize += maxPrize;
      startEtemp = 0;
      endEtemp = 3;
      number *= 2;
      maxPrize *= 3;
      nowPrize = maxPrize;
      randomNumber = Math.floor(Math.random() * number) + 1;
      nextLevel = confirm(`Congratulation! Your prize is: ${allPrize} Do you want to continue?`);
    } else {
      endEtemp--;
      startEtemp++;
      nowPrize = Math.floor(maxPrize / 2 );
    } 
  }
    alert( `Thank you for a game. Your prize is:  ${allPrize}`);
    play = confirm('Do you want to try again?');
}
if(!play) {
  alert('You did not become a millionaire, but can.');
} 





