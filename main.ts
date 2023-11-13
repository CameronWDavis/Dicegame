// variables to get random number 1 - 6
let randomNumber1: number = Math.floor(Math.random() * 6) + 1;
let randomNumber2: number = Math.floor(Math.random() * 6) + 1;

//variable to get image elements
let image1 = document.getElementById("img1") as HTMLImageElement;
let image2 = document.getElementById("img2") as HTMLImageElement;

//variable to uplaod the new images
let image1New = uploadImage(image1, randomNumber1) as HTMLImageElement;
let image2New = uploadImage(image2, randomNumber2) as HTMLImageElement;

//variable to set winner
let displayWinner = document.getElementById("title") as HTMLHeadElement;

//this is a if else statement to see the winner
if (randomNumber1 > randomNumber2) {
  displayWinner.textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  displayWinner.textContent = "Player 2 wins!";
} else {
  displayWinner.textContent = "everyone lost";
}

//function will update a picture
function uploadImage(img: HTMLImageElement, randNumber: number) {
  switch (randNumber) {
    case 1:
      img.setAttribute("src", "images/dice1.png");
      return img;
    case 2:
      img.setAttribute("src", "images/dice2.png");
      return img;
    case 3:
      img.setAttribute("src", "images/dice3.png");
      return img;
    case 4:
      img.setAttribute("src", "images/dice4.png");
      return img;
    case 5:
      img.setAttribute("src", "images/dice5.png");
      return img;
    case 6:
      img.setAttribute("src", "images/dice6.png");
      return img;
    default:
      img.setAttribute("src", "images/dice1.png");
      return img;
  }
}
