//Global
var removeLimit = $(window).outerHeight() / 2,
    moreOptionContent = $('.more-option-content'),
    pos = $(window).scrollTop(), // For scrolling direction
    options = {
        root: document.documentElement.body,
        rootMargin: '0px',
        threshold: 1.0
    },
    scrollTop = 0;

//scrollTops
var techSec = $('#tech-sec-set').offset().top;

$('.nav-lnk').click(function (e) {
    e.preventDefault();
    var dataValue = $(this).data('link');
    setTimeout(function () {
        $(window).scrollTop($('#' + dataValue).offset().top - 270);
        removeNavAnim();
    }, 400);


})

//Global utilities
function scrollDirection() {
    var scroll = $(window).scrollTop(),
        scrollDirection = "";
    if (scroll > pos) {
        scrollDirection = "down";
    } else {
        scrollDirection = "up";
    }
    pos = $(window).scrollTop();
    return scrollDirection;

}

function menuClick() {
    $('.more-icon').click(function (e) {
        moreOptionContent.addClass('menu-active');
        $('.more-option-dvd').addClass('nav-is-active');
    })
}


function removeNavAnim() {
    moreOptionContent.addClass('slide-up');
    $('.more-option-dvd').addClass('nav-is-hidden');
    setTimeout(function () {
        moreOptionContent.removeClass('menu-active slide-up');
        $('.more-option-dvd').removeClass('nav-is-active nav-is-hidden');
    }, 1000);
}


function removeNavMenu() {
    if ($(window).scrollTop() > removeLimit && scrollDirection() == "down" && $(window).outerWidth() >= 992) {
        removeNavAnim();
    }
}

function closeNavMenu() {
    $('.close').click(function (e) {
        e.preventDefault();
        removeNavAnim();
    })
}

function mobileMenuClick() {
    $('.mobileMenuClick .more-icon').click(function (e) {
        e.preventDefault();
        if ($(window).outerWidth() <= 992 && !$(this).hasClass('more-icon-active')) {
            moreOptionContent.addClass('menu-active');
            $(this).addClass('more-icon-active')
        }
        else if ($(window).outerWidth() <= 992 && $(this).hasClass('more-icon-active')) {
            moreOptionContent.removeClass('menu-active');
            $(this).removeClass('more-icon-active')
        }
    })
}

function scrollTriggerFn() {
    scrollTop = $(window).scrollTop();
    $('.scroll-trigger').each(function (i, val) {
        if (scrollTop >= $(this).offset().top - ((40 / 100) * $(this).offset().top)) {
            $(this).addClass('triggered');

        }



    });

}

function smoothScroll() {


    if ($(window).scrollTop() + $(window).height() > ($(document).height() - 150)) {

    }
    else {

        $('.scrollsection').css({ 'margin-top': ($(window).scrollTop() / 10) * -1 })
    }



}


$(window).on('load', function () {
    $('body').addClass('body-loaded');
});

$(document).ready(function () {
    // slidingPanelHeight();
    closeNavMenu();
    mobileMenuClick();
    /* Scroll animation are added here*/
    $(window).scroll(function () {
        /* Removing the nav menu while scrolling down  */
        removeNavMenu(); //Only when scrolling down. Not on close menu click
        //Scroll trigger 
        scrollTriggerFn();
        //SmoothScroll
        smoothScroll();

    });



    menuClick(); //Nav menu click function

    setTimeout(function () {
        $('.social-network-z-header').addClass('active-header-ico')
    }, 3400);
});

$(window).resize(function () {
    removeNavMenu();//Only when scrolling down. Not on close menu click
    scrollTriggerFn();
})

