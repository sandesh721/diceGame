window.onload = function () {
  //dice 1
  const rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
  const diceNumber = `dice${rand}.png`;
  // random image adress
  console.log(diceNumber);
  const diceImage = `images/${diceNumber}`;
  console.log(diceImage);

  const imgRandom = document.querySelector(".first");
  console.log(imgRandom);
  imgRandom.setAttribute("src", diceImage);

  //dice 2
  const rand2 = Math.floor(Math.random() * 6) + 1;
  console.log(rand2);
  const diceNumber2 = `dice${rand2}.png`;
  // random image adress
  console.log(diceNumber2);
  const diceImage2 = `images/${diceNumber2}`;
  console.log(diceImage2);

  const imgRandom2 = document.querySelector(".second");
  console.log(imgRandom2);
  imgRandom2.setAttribute("src", diceImage2);

  if (rand < rand2) {
    document.querySelector(".players").innerHTML = "Player 2 won!!❤❤";
  } else if (rand > rand2) {
    document.querySelector(".players").innerHTML = "Player 1 won!!❤❤";
  } else {
    document.querySelector(".players").innerHTML = "Ohh!! It's a tie";
  }
};
