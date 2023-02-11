let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let burger = document.getElementById("burger");
let pizza = document.getElementById("pizza");
let hotdog = document.getElementById("hotdog");
let cookies = document.getElementById("cookies");
let coke = document.getElementById("coke");
let fries = document.getElementById("fries");
let popcorn = document.getElementById("popcorn");
let sushi = document.getElementById("sushi");
let icecream = document.getElementById("icecream");

burger.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали бургер за 15$");
        item = "1";
        tg.MainButton.show();
    }
});

pizza.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали пиццу за 20$");
        item = "2";
        tg.MainButton.show();
    }
});

hotdog.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали хот-дог за 10$");
        item = "3";
        tg.MainButton.show();
    }
});

cookies.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали печенье за 5$");
        item = "4";
        tg.MainButton.show();
    }
});

coke.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали кока-колу за 7$");
        item = "5";
        tg.MainButton.show();
    }
});

fries.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали картошку фри за 8$");
        item = "6";
        tg.MainButton.show();
    }
});

popcorn.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали попкорн за 13$");
        item = "7";
        tg.MainButton.show();
    }
});

sushi.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали суши за 18$");
        item = "8";
        tg.MainButton.show();
    }
});

icecream.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали мороженное за 5$");
        item = "9";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});