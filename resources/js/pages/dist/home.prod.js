"use strict";$(document).ready(function(){require("@fancyapps/fancybox/dist/jquery.fancybox"),require("@fancyapps/fancybox/dist/jquery.fancybox.min.css"),$("a.about-body-readmore").fancybox({transitionIn:"elastic",transitionOut:"elastic",speedIn:600,speedOut:200,overlayShow:!0}),$("#home-slider").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4e3,animateOut:"fadeOut",animateIn:"fadeIn",margin:0,lazyLoad:!0,nav:!1,dots:1,slideSpeed:800,smartSpeed:500,autoHeight:!0,mouseDrag:!0,touchDrag:!0,responsiveClass:!0,items:1,responsive:{0:{items:1,autoHeight:!0,mouseDrag:!1,touchDrag:!0},576:{items:1}}});require("mixitup")(".feature-container-body");$(".body-image").each(function(){$(this).owlCarousel({loop:!0,autoplay:!1,autoplayTimeout:4e3,margin:0,lazyLoad:!0,nav:!0,dots:!1,slideSpeed:800,smartSpeed:500,autoHeight:!0,mouseDrag:!0,touchDrag:!0,responsiveClass:!0,items:1,responsive:{0:{items:1,autoHeight:!0,mouseDrag:!1,touchDrag:!0},576:{items:1}}})}),$("#testmonials").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4e3,margin:20,nav:!1,dots:1,slideSpeed:800,smartSpeed:500,autoHeight:!0,mouseDrag:!0,touchDrag:!0,responsiveClass:!0,items:2,responsive:{0:{items:1,autoHeight:!0,mouseDrag:!1,touchDrag:!0},576:{items:2}}}),$("#Our_Parteners").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4e3,margin:60,nav:!1,dots:!1,slideSpeed:800,smartSpeed:500,autoHeight:!0,mouseDrag:!0,touchDrag:!0,responsiveClass:!0,items:5,responsive:{0:{items:1,autoHeight:!0,mouseDrag:!1,touchDrag:!0},576:{items:3},800:{items:5}}}),$(".counter").counterUp({delay:10,time:1e3})});