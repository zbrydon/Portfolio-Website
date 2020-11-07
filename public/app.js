function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

_iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);

window.onload = function () {
    if (_iOSDevice) {
        
        document.getElementById("Home").style.backgroundAttachment = "scroll";
        document.getElementById("About_Me").style.backgroundAttachment = "scroll";
        document.getElementById("Software").style.backgroundAttachment = "scroll";
    } else {
        document.getElementById("Home").style.backgroundAttachment = "fixed";
        document.getElementById("About_Me").style.backgroundAttachment = "fixed";
        document.getElementById("Software").style.backgroundAttachment = "fixed";
    }
}

var $aboutMeHeight = $('#About_Me');
var $softwareHeight = $('#Software');
var $contactHeight = $('#Contact');
var $navBar = $('.topnav');
var $aboutMe = $('.aboutMe');
var $software = $('.software');
var $contact = $('.contact');
var navPos = $navBar.offset().top;
var aboutPos = $aboutMe.offset().top;
var softPos = $software.offset().top;
var contPos = $contact.offset().top;
var menu = document.getElementById("menuIcon");
var menuWhite = document.getElementById("menuIconWhite");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$('#submit').on('click', () => {
    const fname = $('#fname').val();
    const lname = $('#lname').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();


    $.post('http://localhost:3000/send', { fname, lname, email, subject, message }).then((response) => {
        if (response.success) {

            document.getElementById("success").style.display = "block";
        }        
    }).catch(error => {
        if (error.status === 406) {
            document.getElementById("warning").style.display = "block";
        } else {
            document.getElementById("failure").style.display = "block";
        }
    });

});


var bottom = $navBar.position().top + $navBar.outerHeight(true);
$(window).scroll(function () {
    var scrollPos = $(this).scrollTop();

    if (window.getComputedStyle(menu, null).display == "flex" || window.getComputedStyle(menu, null).display == "absolute" || window.getComputedStyle(menuWhite, null).display == "flex" || window.getComputedStyle(menuWhite, null).display == "absolute") {

        
        if (scrollPos + bottom - 12 < aboutPos && scrollPos + bottom > 0) {
            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconBlack").style.display = "flex";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("about_me").style.fontSize = "26px";
            document.getElementById("_software").style.fontSize = "26px";
            document.getElementById("_contact").style.fontSize = "26px";

            document.getElementById("iconBlack").style.padding = "10px 15px";
            document.getElementById("iconWhite").style.padding = "10px 15px";

            document.getElementById("menuIcon").style.display = "flex";
            document.getElementById("menuIconWhite").style.display = "none";

            document.getElementById("about_me").style.color = "black";
            document.getElementById("_software").style.color = "black";
            document.getElementById("_contact").style.color = "black";

        } else if (scrollPos + bottom - 12 > aboutPos && scrollPos + bottom < softPos) {

            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconWhite").style.display = "flex";
            document.getElementById("iconBlack").style.display = "none";

            document.getElementById("about_me").style.fontSize = "26px";
            document.getElementById("_software").style.fontSize = "26px";
            document.getElementById("_contact").style.fontSize = "26px";

            document.getElementById("iconBlack").style.padding = "10px 15px";
            document.getElementById("iconWhite").style.padding = "10px 15px";

            document.getElementById("menuIcon").style.display = "none";
            document.getElementById("menuIconWhite").style.display = "flex";

            document.getElementById("about_me").style.color = "white";
            document.getElementById("_software").style.color = "white";
            document.getElementById("_contact").style.color = "white";


        } else if (scrollPos + bottom - 12 > softPos && scrollPos + bottom < contPos) {
            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconBlack").style.display = "flex";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("about_me").style.fontSize = "26px";
            document.getElementById("_software").style.fontSize = "26px";
            document.getElementById("_contact").style.fontSize = "26px";

            document.getElementById("iconBlack").style.padding = "10px 15px";
            document.getElementById("iconWhite").style.padding = "10px 15px";

            document.getElementById("menuIcon").style.display = "flex";
            document.getElementById("menuIconWhite").style.display = "none";

            document.getElementById("about_me").style.color = "white";
            document.getElementById("_software").style.color = "white";
            document.getElementById("_contact").style.color = "white";
           
        } else if (scrollPos + bottom - 12 > contPos) {

            document.getElementById("myTopnav").style.backgroundColor = "#262626";
            document.getElementById("iconBlack").style.display = "flex";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("about_me").style.fontSize = "26px";
            document.getElementById("_software").style.fontSize = "26px";
            document.getElementById("_contact").style.fontSize = "26px";

            document.getElementById("iconBlack").style.padding = "10px 15px";
            document.getElementById("iconWhite").style.padding = "10px 15px";

            document.getElementById("menuIcon").style.display = "flex";
            document.getElementById("menuIconWhite").style.display = "none";

            document.getElementById("about_me").style.color = "white";
            document.getElementById("_software").style.color = "white";
            document.getElementById("_contact").style.color = "white";
        }
    } else {

        if (scrollPos + bottom - 12 < aboutPos && scrollPos + bottom > 0) {
            
            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconBlack").style.display = "none";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("iconBlack").style.width = "33.33%";
            document.getElementById("iconWhite").style.width = "33.33%";
            document.getElementById("about_me").style.width = "33.33%";
            document.getElementById("_software").style.width = "33.33%";
            document.getElementById("_contact").style.width = "33.33%";

            document.getElementById("iconBlack").style.padding = "16px 0px";
            document.getElementById("iconWhite").style.padding = "16px 0px";
            document.getElementById("about_me").style.padding = "16px 0px";
            document.getElementById("_software").style.padding = "16px 0px";
            document.getElementById("_contact").style.padding = "16px 0px";

            document.getElementById("about_me").style.borderRight = "none";
            document.getElementById("_software").style.borderRight = "none";

            document.getElementById("about_me").style.fontSize = "50px";
            document.getElementById("_software").style.fontSize = "50px";
            document.getElementById("_contact").style.fontSize = "50px";

            document.getElementById("about_me").style.color = "#0d0d0d";
            document.getElementById("_software").style.color = "#0d0d0d";
            document.getElementById("_contact").style.color = "#0d0d0d";


        } else if (scrollPos + bottom - 12 > aboutPos && scrollPos + bottom < softPos) {

            
            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconWhite").style.display = "flex";
            document.getElementById("iconBlack").style.display = "none";

            document.getElementById("iconWhite").style.width = "auto";
            document.getElementById("about_me").style.width = "auto";
            document.getElementById("_software").style.width = "auto";
            document.getElementById("_contact").style.width = "auto";

            document.getElementById("iconWhite").style.padding = "5px 16px";
            document.getElementById("about_me").style.padding = "16px 16px";
            document.getElementById("_software").style.padding = "16px 16px";
            document.getElementById("_contact").style.padding = "16px 16px";

            document.getElementById("about_me").style.borderRight = "1px solid #666666";
            document.getElementById("_software").style.borderRight = "1px solid #666666";

            document.getElementById("about_me").style.fontSize = "20px";
            document.getElementById("_software").style.fontSize = "20px";
            document.getElementById("_contact").style.fontSize = "20px";

            document.getElementById("about_me").style.color = "#f2f2f2";
            document.getElementById("_software").style.color = "#f2f2f2";
            document.getElementById("_contact").style.color = "#f2f2f2";


        } else if (scrollPos + bottom - 12 > softPos && scrollPos + bottom < contPos) {

            
            document.getElementById("myTopnav").style.backgroundColor = "transparent";
            document.getElementById("iconBlack").style.display = "flex";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("iconBlack").style.width = "auto";
            document.getElementById("about_me").style.width = "auto";
            document.getElementById("_software").style.width = "auto";
            document.getElementById("_contact").style.width = "auto";

            document.getElementById("iconBlack").style.padding = "5px 16px";
            document.getElementById("about_me").style.padding = "16px 16px";
            document.getElementById("_software").style.padding = "16px 16px";
            document.getElementById("_contact").style.padding = "16px 16px";

            document.getElementById("about_me").style.borderRight = "1px solid #666666";
            document.getElementById("_software").style.borderRight = "1px solid #666666";

            document.getElementById("about_me").style.fontSize = "20px";
            document.getElementById("_software").style.fontSize = "20px";
            document.getElementById("_contact").style.fontSize = "20px";

            document.getElementById("about_me").style.color = "#f2f2f2";
            document.getElementById("_software").style.color = "#f2f2f2";
            document.getElementById("_contact").style.color = "#f2f2f2";
        } else if (scrollPos + bottom - 12 > contPos) {

            
            document.getElementById("myTopnav").style.backgroundColor = "#262626";
            document.getElementById("iconBlack").style.display = "flex";
            document.getElementById("iconWhite").style.display = "none";

            document.getElementById("iconBlack").style.width = "auto";
            document.getElementById("about_me").style.width = "auto";
            document.getElementById("_software").style.width = "auto";
            document.getElementById("_contact").style.width = "auto";

            document.getElementById("iconBlack").style.padding = "5px 16px";
            document.getElementById("about_me").style.padding = "16px 16px";
            document.getElementById("_software").style.padding = "16px 16px";
            document.getElementById("_contact").style.padding = "16px 16px";

            document.getElementById("about_me").style.borderRight = "1px solid #666666";
            document.getElementById("_software").style.borderRight = "1px solid #666666";

            document.getElementById("about_me").style.fontSize = "20px";
            document.getElementById("_software").style.fontSize = "20px";
            document.getElementById("_contact").style.fontSize = "20px";

            document.getElementById("about_me").style.color = "#f2f2f2";
            document.getElementById("_software").style.color = "#f2f2f2";
            document.getElementById("_contact").style.color = "#f2f2f2";
        }
    }

    
});