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

// Functionality to filter products based on selected checkboxes and search input
function filterProducts() {
    var searchTerm = search.value.trim().toLowerCase();

    // Organize selected filters by key
    var selectedFilters = {};
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            if (!selectedFilters[checkbox.name]) {
                selectedFilters[checkbox.name] = [];
            }
            selectedFilters[checkbox.name].push(checkbox.value);
        }
    });

    products.forEach((product) => {
        var matchesFilters = true;

        // Check all selected filter groups
        for (var key in selectedFilters) {
            var productAttr = product.getAttribute(`data-${key}`) || "";
            
            // For each key, at least one selected value should match the product attribute
            var matchThisKey = selectedFilters[key].some((value) => {
                return productAttr.split(",").includes(value);
            });

            if (!matchThisKey) {
                matchesFilters = false;
                break;
            }
        }

        var productName = product.querySelector(".product_name").textContent.toLowerCase();
        var matchesSearch = productName.includes(searchTerm);

        // Show only if matches filters and search term
        if (matchesFilters && matchesSearch) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
}

// Checkboxes event
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        search.value = "";
        filterProducts();
    });
});

// Search input event
search.addEventListener("input", function () {
    filterProducts();
});

// Clear all filters button
filterbtn.addEventListener("click", function () {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    search.value = "";
    filterProducts();
});