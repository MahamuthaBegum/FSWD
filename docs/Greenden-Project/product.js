var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
    even
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//Product Search Functionality

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

console.log(productlist)

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("#plantname").textContent;

        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"

        }
    }
})
