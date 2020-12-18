


(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})
    // (jQuery);

    //Menu 
    (function (w, d, undefined) {

        var el_html = d.documentElement,
            el_body = d.getElementsByTagName('body')[0],
            header = d.getElementById('header'),
            menuIsStuck = function () {


                var wScrollTop = w.pageYOffset || el_body.scrollTop,
                    regexp = /(nav\-is\-stuck)/i,
                    classFound = el_html.className.match(regexp),
                    navHeight = header.offsetHeight,
                    bodyRect = el_body.getBoundingClientRect(),
                    scrollValue = 600;

                // si le scroll est d'au moins 600 et
                // la class nav-is-stuck n'existe pas sur HTML
                if (wScrollTop > scrollValue && !classFound) {
                    el_html.className = el_html.className + ' nav-is-stuck';
                    el_body.style.paddingTop = navHeight + 'px';
                }

                // si le scroll est inférieur à 2 et
                // la class nav-is-stuck existe
                if (wScrollTop < 2 && classFound) {
                    el_html.className = el_html.className.replace(regexp, '');
                    el_body.style.paddingTop = '0';
                }

            },
            onScrolling = function () {
                // on exécute notre fonction menuIsStuck()
                // dans la fonction onScrolling()
                menuIsStuck();
                // on pourrait faire plein d'autres choses ici 
            };

        // quand on scroll
        w.addEventListener('scroll', function () {
            // on exécute la fonction onScrolling()
            w.requestAnimationFrame(onScrolling);
        });

    }(window, document));


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})