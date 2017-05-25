$(function() {

    'use strict';

    /*******************************************************/
    //Меню
    /*******************************************************/
    var $headerNav = $('.header__nav'),
        $headerNavBtn = $('.header__nav-btn');

    $headerNavBtn.click(function() {
        var w = $(window).width(),
            $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $headerNav.slideDown(300);
        } else {
            $this.removeClass('active');
            $headerNav.slideUp(300);
        }
    });
    //Выключение при клике по ссылке
    $headerNav.on('click', 'a', function() {
        var w = $(window).width();
        if (w < 641) {
            $headerNavBtn.removeClass('active');
            $headerNav.fadeOut(500);
        }
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 640) {
            $headerNav.removeAttr('style');
            $headerNavBtn.removeClass('active');
        }
    });

    /*******************************************************/
    //First Screen Slider
    /*******************************************************/
    var $bannerItem = $('.banner__item');
    if ($bannerItem.length > 1) {
        $bannerItem.closest('.banner__slider').addClass('owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            navText: '<>',
            autoplayTimeout: 5000,
            autoplay: true,
            smartSpeed: 1200
        });
    }

    //---------------------------------------------
    //Сокрытие текста group list
    //---------------------------------------------
    var $groupListItem = $('.group__list-item').not(':first'),
        $groupListLink = $('<div class="group__list-link"><a>Читать дальше</a></div>');

    $groupListItem.hide();
    $('.group__list').after($groupListLink);

    $groupListLink.on('click', 'a', function() {
        var $this = $(this);
        if($this.hasClass('active')) {
            $this.removeClass('active').text('Читать дальше');
            $groupListItem.slideUp(400);
        } else {
            $this.addClass('active').text('Свернуть');
            $groupListItem.slideDown(400);
        }
    });

    /*******************************************************/
    //Single Page Nav
    /*******************************************************/
    $('.header__nav').singlePageNav({
        filter: ':not(.external)',
        updateHash: false,
        offset: $('.header').height(),
        threshold: 120,
        speed: 800,
        currentClass: 'active',
        easing: 'swing'
    });

    /*******************************************************/
    //gallery Page Nav
    /*******************************************************/

    $('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

    /*******************************************************/
    //Табы
    /*******************************************************/
    var $scheduleButtons = $('.schedule__buttons'),
        $scheduleItem = $('.schedule__item');
    $scheduleButtons.find('button').first().addClass('active');
    $scheduleItem.not(':first').hide();
    $scheduleButtons.on('click', 'button:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.schedule').find($scheduleItem).hide().eq($(this).index()).fadeIn(300);
    });


    /*******************************************************/
    //Chrome Smooth Scroll
    /*******************************************************/
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------
    //Full height body for IE
    //------------------------------------------------------

    var $body = $('body');
    function fullheight() {
        if($('html').hasClass('ie') || $('html').hasClass('gecko')) {
            $body.removeAttr('style');
            var windowHeight = $(window).height(),
                bodyHeight = $body.height();
            if (windowHeight >= bodyHeight) {
                $body.css({
                    'height' : windowHeight + 'px'
                });
            }
        }
    }
    fullheight();
    $(window).resize(function() {
        fullheight();
    });

    /*******************************************************/
    //Яндекс карты
    /*******************************************************/
    if (typeof ymaps != 'undefined') {
        ymaps.ready(function() {
            if ($('#map1').length) {
                var map1;
                map1 = new ymaps.Map('map1', {
                    center: [55.736399, 37.684096],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                    map1.geoObjects.add(new ymaps.Placemark(map1.getCenter(), {
                        balloonContentBody: [
                            'Большая Калитниковская улица, 34/3с2, Россия, Москва'
                        ].join('')
                    }, {
                    preset: 'islands#blueStretchyIcon'
                }));
                disableDrag(map1);
                $(window).resize(function() {
                    disableDrag(map1);
                });
            }
            if ($('#map2').length) {
                var map2;
                map2 = new ymaps.Map('map2', {
                    center: [55.742456, 37.684155],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                    map2.geoObjects.add(new ymaps.Placemark(map2.getCenter(), {
                        balloonContentBody: [
                            'Россия, Москва, Рабочая улица, 30с3'
                        ].join('')
                    }, {
                    preset: 'islands#blueStretchyIcon'
                }));
                disableDrag(map2);
                $(window).resize(function() {
                    disableDrag(map2);
                });
            }
            if ($('#map3').length) {
                var map3;
                map3 = new ymaps.Map('map3', {
                    center: [55.621172, 37.484777],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                    map3.geoObjects.add(new ymaps.Placemark(map3.getCenter(), {
                        balloonContentBody: [
                            'Россия, Москва, улица Генерала Тюленева, 19'
                        ].join('')
                    }, {
                    preset: 'islands#blueStretchyIcon'
                }));
                disableDrag(map3);
                $(window).resize(function() {
                    disableDrag(map3);
                });
            }
            if ($('#map4').length) {
                var map4;
                map4 = new ymaps.Map('map4', {
                    center: [55.701290, 37.683446],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                    map4.geoObjects.add(new ymaps.Placemark(map4.getCenter(), {
                        balloonContentBody: [
                            'Россия, Москва, улица Трофимова, 30к3'
                        ].join('')
                    }, {
                    preset: 'islands#blueStretchyIcon'
                }));
                disableDrag(map4);
                $(window).resize(function() {
                    disableDrag(map4);
                });
            }
            if ($('#map5').length) {
                var map5;
                map5 = new ymaps.Map('map5', {
                    center: [55.735459, 37.239088],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                    map5.geoObjects.add(new ymaps.Placemark(map5.getCenter(), {
                        balloonContentBody: [
                            'Россия, Московская область, Одинцовский район, сельское поселение Барвихинское, поселок дачного хозяйства Жуковка, коттеджный поселок Жуковка-1'
                        ].join('')
                    }, {
                    preset: 'islands#blueStretchyIcon'
                }));
                disableDrag(map5);
                $(window).resize(function() {
                    disableDrag(map5);
                });
            }
            function disableDrag(map) {
                var w = $(window).width();
                if (w < 768) {
                    map.behaviors.disable('drag');
                } else {
                    map.behaviors.enable('drag');
                }
            }
        });
    }


});
