function open_nav() {
    document.getElementById("my_sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function close_nav() {
    document.getElementById("my_sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
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

function toggle_accordion(event) {
    event.currentTarget.classList.toggle("active");
    event.currentTarget.nextElementSibling.classList.toggle("show");
}