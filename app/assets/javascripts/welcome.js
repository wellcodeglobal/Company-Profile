(function () {
    function id(v) { return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading " + perc;
            if (c === tot) return doneLoading();
        }
        function doneLoading() {
            ovrl.style.opacity = 0;
            setTimeout(function () {
                ovrl.style.display = "none";
            }, 1200);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());
$(document).ready(function () {
    $(".section").css({ height: window.innerHeight });
    $(".puzzle").css({ height: $("#section-3").outerHeight() });
    var section2Height = $(".section").height();
    var halfSection2Height = section2Height / 4;
    $("#bg-height").css({ height: section2Height });
    $("#v-align").css({ top: halfSection2Height });
    $(".fullheight-146").css({ height: window.innerHeight - 146.48 });

    $("#ideas-box-1").hover(function () {
        $("#ideas-content-text-1").css("display", "block");
    }, function () {
        $("#ideas-content-text-1").css("display", "none");
    });
    $("#ideas-box-2").hover(function () {
        $("#ideas-content-text-2").css("display", "block");
    }, function () {
        $("#ideas-content-text-2").css("display", "none");
    });
    $("#ideas-box-3").hover(function () {
        $("#ideas-content-text-3").css("display", "block");
    }, function () {
        $("#ideas-content-text-3").css("display", "none");
    });
    $("#ideas-box-4").hover(function () {
        $("#ideas-content-text-4").css("display", "block");
    }, function () {
        $("#ideas-content-text-4").css("display", "none");
    });

    $("#ideas-bx-1").hover(function () {
        $("#ideas-content-txt-1").css("display", "block");
    }, function () {
        $("#ideas-content-txt-1").css("display", "none");
    });
    $("#ideas-bx-2").hover(function () {
        $("#ideas-content-txt-2").css("display", "block");
    }, function () {
        $("#ideas-content-txt-2").css("display", "none");
    });
    $("#ideas-bx-3").hover(function () {
        $("#ideas-content-txt-3").css("display", "block");
    }, function () {
        $("#ideas-content-txt-3").css("display", "none");
    });
    $("#ideas-bx-4").hover(function () {
        $("#ideas-content-txt-4").css("display", "block");
    }, function () {
        $("#ideas-content-txt-4").css("display", "none");
    });

    $("#ideas-b-1").hover(function () {
        $("#ideas-content-t-1").css("display", "block");
    }, function () {
        $("#ideas-content-t-1").css("display", "none");
    });
    $("#ideas-b-2").hover(function () {
        $("#ideas-content-t-2").css("display", "block");
    }, function () {
        $("#ideas-content-t-2").css("display", "none");
    });
    $("#ideas-b-3").hover(function () {
        $("#ideas-content-t-3").css("display", "block");
    }, function () {
        $("#ideas-content-t-3").css("display", "none");
    });
    $("#ideas-b-4").hover(function () {
        $("#ideas-content-t-4").css("display", "block");
    }, function () {
        $("#ideas-content-t-4").css("display", "none");
    });


    $("#ul-sidebar").children().children().click(function () {
        closeSidebar();
    });


    $('#anchor-1').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anchor-2').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anchor-3').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anchor-4').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });

    $('#anc-1').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anc-2').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anc-3').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#anc-4').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });

    $('#a-1').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#a-2').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#a-3').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });
    $('#a-4').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;
    });


    var ideasController = new ScrollMagic.Controller();
    var ideasScene = new ScrollMagic.Scene({
        triggerElement: "#section-2",
        reverse: false
    })
        .setClassToggle('.bg-desktop', 'opacity-90')
        .addTo(ideasController);
    var teamsController1 = new ScrollMagic.Controller();
    var teamsScene1 = new ScrollMagic.Scene({
        triggerElement: "#section-3",
        reverse: false
    })
        .setClassToggle('.box-desktop-1', 'opacity-100')
        .addTo(teamsController1);
    var teamsController2 = new ScrollMagic.Controller();
    var teamsScene2 = new ScrollMagic.Scene({
        triggerElement: ".box-desktop-1",
        offset: 200,
        reverse: false
    })
        .setClassToggle('.box-desktop-2', 'opacity-100')
        .addTo(teamsController2);
    var teamsController3 = new ScrollMagic.Controller();
    var teamsScene3 = new ScrollMagic.Scene({
        triggerElement: ".box-desktop-2",
        offset: 200,
        reverse: false
    })
        .setClassToggle('.box-desktop-3', 'opacity-100')
        .addTo(teamsController3);
    var worksController1 = new ScrollMagic.Controller();
    var worksScene1 = new ScrollMagic.Scene({
        triggerElement: "#section-4",
        reverse: false
    })
        .setClassToggle('.wrapper-desktop-top', 'slide-down')
        .addTo(worksController1);
    var worksController2 = new ScrollMagic.Controller();
    var worksScene2 = new ScrollMagic.Scene({
        triggerElement: ".wrapper-desktop-top",
        offset: 400,
        reverse: false
    })
        .setClassToggle('.wrapper-desktop-left', 'slide-right')
        .addTo(worksController2);
    var worksController3 = new ScrollMagic.Controller();
    var worksScene3 = new ScrollMagic.Scene({
        triggerElement: ".wrapper-desktop-top",
        offset: 400,
        reverse: false
    })
        .setClassToggle('.wrapper-desktop-right', 'slide-left')
        .addTo(worksController3);
    var worksController4 = new ScrollMagic.Controller();
    var worksScene4 = new ScrollMagic.Scene({
        triggerElement: ".wrapper-desktop-mid",
        offset: 400,
        reverse: false
    })
        .setClassToggle('.wrapper-desktop-bottom', 'slide-up')
        .addTo(worksController4);
    var footerController = new ScrollMagic.Controller();
    var footerScene = new ScrollMagic.Scene({
        triggerElement: ".wrapper-desktop-bottom",
        offset: 200,
        reverse: false
    })
        .setClassToggle('.footer-content', 'slide-up')
        .addTo(footerController);

    vertCarousel('.works-list', '.works-btn-prev', '.works-btn-next');

    function vertCarousel(listClass, prevClass, nextClass) {
        var item = 1,
            list = $(listClass),
            prev = $(prevClass),
            next = $(nextClass),
            titleCtr = 1;

        prev.on('click', function () {
            if (item > 1) {
                item = item - 1;
                titleCtr--;
                if (titleCtr == 1) {
                    $(".works-title").html("PWS");
                }
                if (titleCtr == 2) {
                    $(".works-title").html("e-Ticket");
                }
                if (titleCtr == 3) {
                    $(".works-title").html("Widji (Transaction Processing System)");
                }
                if (titleCtr == 4) {
                    $(".works-title").html("Nawar.in (Application for Auction System)");
                }
                if (titleCtr == 5) {
                    $(".works-title").html("Clickon Studio");
                }
                if (titleCtr == 6) {
                    $(".works-title").html("BBM (Blackberry Messenger)");
                }
                worksScroll();
            }
        });

        next.on('click', function () {
            if (item < 6) {
                item = item + 1;
                titleCtr++;
                if (titleCtr == 1) {
                    $(".works-title").html("PWS");
                }
                if (titleCtr == 2) {
                    $(".works-title").html("e-Ticket");
                }
                if (titleCtr == 3) {
                    $(".works-title").html("Widji (Transaction Processing System)");
                }
                if (titleCtr == 4) {
                    $(".works-title").html("Nawar.in (Application for Auction System)");
                }
                if (titleCtr == 5) {
                    $(".works-title").html("Clickon Studio");
                }
                if (titleCtr == 6) {
                    $(".works-title").html("BBM (Blackberry Messenger)");
                }
                worksScroll();
            }
        });

        function worksScroll() {
            var scrollDist = 0;
            for (var i = 1; i <= item - 1; i++) {
                scrollDist = scrollDist + list.children().eq(i - 1).outerHeight()
            }
            list.css('transform', 'translateY(-' + scrollDist + 'px)');
            if (item == 6) {
                next.prop('disabled', true);
            } else {
                next.prop('disabled', false);
            }
            if (item == 1) {
                prev.prop('disabled', true);
            } else {
                prev.prop('disabled', false);
            }
        }
    }
});

function openSidebar() {
    document.getElementById("menu-sidebar").style.width = "250px";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
    disableScroll();
}

function closeSidebar() {
    document.getElementById("menu-sidebar").style.width = "0";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
    enableScroll();
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


