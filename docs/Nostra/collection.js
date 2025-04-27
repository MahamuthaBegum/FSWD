//Offer button action
var offer = document.querySelector(".offer");
var close = document.querySelector("#close");
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

// Functionality to filter products based on search input
search.addEventListener("keyup", function (event) {
    var searchValue = event.target.value.toLowerCase();
    products.forEach((product) => {
        var productName = product.querySelector(".product_name").textContent.toLowerCase();
        var matchesSearch = productName.includes(searchValue);
        var selectedFilters = Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => ({
            key: checkbox.name,
            value: checkbox.value,
            }));
        var matchesFilters = selectedFilters.every((filter) => {
            return product.getAttribute(`data-${filter.key}`) === filter.value;
        });
        if ((matchesSearch || searchValue === "") && (selectedFilters.length === 0 || matchesFilters)) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
});

// Functionality to clear all filters when the "Clear All" button is clicked
filterbtn.addEventListener("click", function () {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    products.forEach((product) => {
        product.style.display = "flex";
    });
});

// Functionality to filter products based on selected checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        search.value = "";
        var selectedFilters = Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => ({
                key: checkbox.name,
                value: checkbox.value,
            }));
        products.forEach((product) => {
            var matches = selectedFilters.some((filter) => {
                var productAttributes = product.getAttribute(`data-${filter.key}`)?.split(",") || [];
                return productAttributes.includes(filter.value);
            });
            if (selectedFilters.length === 0 || matches) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }
        });
    });
});