//Navigation bar action
var navicon = document.querySelector(".navicon");
var nav = document.querySelector(".Navbar_side");
var closeside = document.querySelector("#close_side");
//Scroll to new arrival section action
var newarrivalLinks = document.querySelectorAll(".newarrival");
//Scroll to most wanted section action
var mostWantedLinks = document.querySelectorAll(".mostwanted");
//clear all filters action
var filterbtn = document.querySelector(".filtericon");
var checkboxes = document.querySelectorAll(".filter_item input[type='checkbox']");
//search action
var search = document.querySelector(".search");
var products = document.querySelectorAll(".product_item");

console.log(checkboxes);

// Functionality to show and hide the navigation bar
navicon.addEventListener("click", function () {
    nav.style.left = 0;
});
closeside.addEventListener("click", function () {
    nav.style.left = "-40%";
});

// Functionality to scroll to the "newarrival" section when the "New Arrival" anchor tag is clicked
newarrivalLinks.forEach((newarrivalLink) => {
    newarrivalLink.addEventListener("click", function (event) {
        if (nav.style.left == "0px") {
            nav.style.left = "-40%";
        }
    });
});

// Functionality to scroll to the "mostwanted" section when the "Most Wanted" anchor tag is clicked
mostWantedLinks.forEach((mostWantedLink) => {
    mostWantedLink.addEventListener("click", function (event) {
        if (nav.style.left == "0px") {
            nav.style.left = "-40%";
        }
    });
});