var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image1New = uploadImage(image1, randomNumber1);
var image2New = uploadImage(image2, randomNumber2);
var displayWinner = document.getElementById("title");
if (randomNumber1 > randomNumber2) {
    displayWinner.textContent = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    displayWinner.textContent = "Player 2 wins!";
}
else {
    displayWinner.textContent = "everyone lost";
}
function uploadImage(img, randNumber) {
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
