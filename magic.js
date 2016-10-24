
function open_nav(evt) {
    document.getElementById("my_sidenav").classList.toggle("show");// style.width = "250px";
    document.getElementById("main").classList.toggle("show");
    evt.currentTarget.classList.toggle("active");
}

function open_tab(evt, tab_name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("content");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("navlink");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}

function make_selected(evt) {
    var navlinks = document.getElementsByClassName("navlink");
    for (var i=0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

function toggle_accordion(event) {
    event.currentTarget.classList.toggle("active");
    event.currentTarget.nextElementSibling.classList.toggle("show");
}
