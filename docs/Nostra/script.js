//Offer button action
var offer = document.querySelector(".offer");
var close = document.querySelector("#close");
//Navigation bar action
var navicon = document.querySelector(".navicon");
var nav = document.querySelector(".Navbar_side");
var closeside = document.querySelector("#close_side");
//Slider action
var rightbtn = document.querySelector("#next");
var leftbtn = document.querySelector("#previous");
var sliderimage = document.querySelector(".image_container")
var margin = 0
//Like button action
var likebtns = document.querySelectorAll(".fa-heart");
//Scroll to new arrival section action
var newarrivalLinks = document.querySelectorAll("a[href='#newarrival']");
var newarrivalSection = document.querySelector(".newarrival");
//Scroll to most wanted section action
var mostWantedLinks = document.querySelectorAll("a[href='#mostwanted']");
var mostWantedSection = document.querySelector(".mostwanted");

// Functionality to show and hide the offer section
close.addEventListener("click", function () {
    offer.style.display = "none";
});

// Functionality to show and hide the navigation bar
navicon.addEventListener("click", function () {
    nav.style.left = 0;
});
closeside.addEventListener("click", function () {
    nav.style.left = "-40%";
});

// Functionality to slide images left and right
rightbtn.addEventListener("click", function () {
    margin = margin + 100

    if (margin > 200) {
        margin = 0
        sliderimage.style.marginLeft = 0;
    }
    else {
        sliderimage.style.marginLeft = "-" + margin + "vw";
    }
});

// Functionality to toggle heart icon between regular and solid for all like buttons
likebtns.forEach((likebtn) => {
    likebtn.addEventListener("click", function () {
        if (likebtn.classList.contains("fa-regular")) {
            likebtn.classList.remove("fa-regular");
            likebtn.classList.add("fa-solid");
            likebtn.style.color = "red";
        } else {
            likebtn.classList.remove("fa-solid");
            likebtn.classList.add("fa-regular");
            likebtn.style.color = "black";
        }
    });
});

// Functionality to scroll to the "newarrival" section when the "New Arrival" anchor tag is clicked
newarrivalLinks.forEach((newarrivalLink) => {
    newarrivalLink.addEventListener("click", function (event) {
        console.log(window.location.href);
        if (nav.style.left == "0px") {
            nav.style.left = "-40%";
        }
        event.preventDefault(); // Prevent default anchor behavior
        newarrivalSection.scrollIntoView({ behavior: "smooth" });
        window.scrollBy(0, -40);
    });
});

// Functionality to scroll to the "mostwanted" section when the "Most Wanted" anchor tag is clicked
mostWantedLinks.forEach((mostWantedLink) => {
    mostWantedLink.addEventListener("click", function (event) {
        if (nav.style.left == "0px") {
            nav.style.left = "-40%";
        }
        event.preventDefault(); // Prevent default anchor behavior
        mostWantedSection.scrollIntoView({ behavior: "smooth" });
        window.scrollBy(0, -40);
    });
});
