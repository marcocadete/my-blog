$(window).on("load", function () {
    // Theme Selector
    // =============
    let themeSwitch = document.getElementById("mc-theme-switch");
    // function to set the given theme color
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if(localStorage.getItem('theme') === 'mc-theme--light') {
            themeSwitch.removeAttribute('checked')
            setTheme('mc-theme--light');
        } else {
            themeSwitch.setAttribute('checked', true)
            setTheme('mc-theme--dark');
        }
    }

    // Init theme toggle function
    toggleTheme();

    themeSwitch.addEventListener('click', function() {
        this.toggleAttribute("checked")
        if(this.checked) {
            setTheme("mc-theme--dark");
        } else {
            setTheme("mc-theme--light");
        }
    });


    // Spinner
    // =======
    // Remove spinner after the page has loaded
    // ----------------------------------------------/
    $(".mc-spinner").css("visibility", "hidden");

    // Slick slider
    // ============
    // 3rd party slider for the blogs featured images.
    // ----------------------------------------------/
    $(".mc-featured__slide").slick({
        arrows: false,
        autoplay: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            },
        ],
    });

    $(window).on("resize orientationchange", function () {
        $(".mc-featured__slide").slick("resize");
    });

    $(".mc-featured__btn-next").click(function () {
        $(".mc-featured__slide").slick("slickNext");
    });

    $(".mc-featured__btn-previous").click(function () {
        $(".mc-featured__slide").slick("slickPrev");
    });
});
