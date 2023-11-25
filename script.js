

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("product");
    group = ul.getElementsByTagName("group");
    for (i = 0; i < li.length; i++) {
        a = h3[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            group[i].style.display = "";
        } else {
            group[i].style.display = "none";
        }
    }
}