'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('animationCtrl', function ($scope, $rootScope) {
    var gift = new Raphael("gift", 310, 300);

    /* Check if the colors have been predefined */
    if($rootScope.bowColor) {
        //not undefined
    } else {
        $rootScope.bowColor = "#E74C3C"
    }

    if($rootScope.backgroundColor) {
        document.body.style.background = $rootScope.backgroundColor;
    } else {
        document.body.style.background = "#ccc";
    }

    /* Basic styles */
    var boxBaseAttr = {fill: '#fff',stroke: '#282828',"stroke-width": '7',"stroke-miterlimit": '10','stroke-opacity': '1'};
    var bowAttr = {fill: $rootScope.bowColor,stroke: '#282828',"stroke-width": '7',"stroke-miterlimit": '10','stroke-opacity': '1'};
    var shadowAttr = {opacity: '0.2',fill: '#0A0A0A','stroke-width': '0','stroke-opacity': '1'};
    var lightAttr = {opacity: '0.2',fill: '#FFFFFF','stroke-width': '0','stroke-opacity': '1'};
    var circleAttr = {opacity: '0.05',fill: '#FFFFFF','stroke-width': '0','stroke-opacity': '1','transform': 's0'};

    var questionAttr = {fill: '#fff',stroke: '#282828',"stroke-width": '7',"stroke-miterlimit": '10','stroke-opacity': '1'};

    /* Paths for the box */
    var boxBase = gift.path("M270,288.4H41c-6.6,0-12-5.4-12-12l0-140.8l253,0 l0,140.8C282,283,276.6,288.4,270,288.4z").attr(boxBaseAttr);
    var boxTop = gift.path("M255.8,67.3l-200.3,0c-37.1,0-53,12.3-52,52.1v4.2 c0,6.6,5.4,12,12,12h280.3c6.6,0,12-5.4,12-12v-4.2C307.8,85.4,297.2,67.3,255.8,67.3z").attr(boxBaseAttr);

    /* Paths for the ribbon */
    var bowLeft = gift.path("M23.1,73c-5.5-3.7-6.3-9.2-2.5-14.7L54.3,8.7 C58,3.3,65.5,1.9,71,5.6L113,34.2l0,33.7c0,0-60.4,0-70.3,0C33.4,67.9,23.1,73,23.1,73z").attr(bowAttr);
    var bowMiddle = gift.path("M125,15.6h60c6.6,0,12,5.5,12,12.1v40.1h-84V27.8 C113,21.1,118.4,15.6,125,15.6z").attr(bowAttr);
    var bowRight = gift.path("M287,73c5.5-3.7,6.3-9.2,2.5-14.7L255.8,8.7 c-3.7-5.5-11.2-6.9-16.7-3.2L197,34.2l0,33.7c0,0,60.4,0,70.3,0C276.7,67.9,287,73,287,73z").attr(bowAttr);
    var bowVertical = gift.rect(126.7, 135.6, 57.7, 152.8).attr(bowAttr);
    var bowLid =  gift.rect(113, 67.9, 84, 67.7).attr(bowAttr);

    /* Paths for the shadows */
    var shadowLid = gift.path("M304.1,107.2c0,6.6-8.3,12-16.2,12H23.4c-7.9,0-16.2-5.4-16.2-12l-3.7,0l0,16.3 c0,6.6,6.5,12,14.4,12h275.4c7.9,0,14.4-5.4,14.4-12l0-16.3L304.1,107.2z").attr(shadowAttr);
    var shadowTop = gift.rect(29, 135.6, 253, 21.7).attr(shadowAttr);
    var shadowBottom = gift.path("M278.9,260.1c0,6.6-6.9,12-13.5,12H45.5c-6.6,0-13.5-5.4-13.5-12l-3.1,0l0,16.3 c0,6.6,5.4,12,12,12h229c6.6,0,12-5.4,12-12l0-16.3L278.9,260.1z").attr(shadowAttr);

    /* Paths for the light */
    var lightMiddle = gift.path("M183.8,85.1h-30c-2.1,0-3.8-1.7-3.8-3.7v0c0-2.1,1.7-3.8,3.8-3.8h30c2.1,0,3.7,1.7,3.7,3.8v0 C187.5,83.4,185.9,85.1,183.8,85.1z").attr(lightAttr);
    var lightMiddleSmall = gift.path("M133.9,85.1h-6.5c-2.1,0-3.8-1.7-3.8-3.7v0c0-2.1,1.7-3.8,3.8-3.8h6.5c2.1,0,3.8,1.7,3.8,3.8 v0C137.6,83.4,135.9,85.1,133.9,85.1z").attr(lightAttr);
    var lightMiddleTop = gift.path("M165.5,38h-20.2c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h20.2c2.1,0,3.8,1.7,3.8,3.8 v0C169.2,36.3,167.5,38,165.5,38z").attr(lightAttr);
    var lightLeft = gift.path("M62.2,14.4c1.2-1.7,3.5-2.1,5.2-1l27.9,19.3c1.7,1.2,2.1,3.5,1,5.2c-1.2,1.7-3.5,2.1-5.2,1 L63.2,19.6C61.5,18.4,61,16.1,62.2,14.4z").attr(lightAttr);
    var lightRight = gift.path("M248.6,14.4c-1.2-1.7-3.5-2.1-5.2-1l-27.9,19.3c-1.7,1.2-2.1,3.5-1,5.2c1.2,1.7,3.5,2.1,5.2,1 l27.9-19.3C249.3,18.4,249.7,16.1,248.6,14.4z").attr(lightAttr);

    /* Box with question mark */
    var startBox = Raphael.transformPath("M55.8,67.8H15.5c-6.6,0-12-5.4-12-12V15.5 c0-6.6,5.4-12,12-12h40.3c6.6,0,12,5.4,12,12v40.3C67.8,62.4,62.4,67.8,55.8,67.8z");
    var boxAnimate = gift.path(startBox).attr({fill: "url('http://wiki.tockdom.com/w/images/thumb/c/c8/CTGP_Revolution_Question_Block_Cup.png/64px-CTGP_Revolution_Question_Block_Cup.png')",stroke: '#282828',"stroke-width": '7',"stroke-miterlimit": '10','stroke-opacity': '1', 'href': 'http://www.google.com/'}).transform("t120,150").toBack();
    /*var boxAnimate = gift.path(startBox).attr({fillfit: "url('http://wiki.tockdom.com/w/images/thumb/c/c8/CTGP_Revolution_Question_Block_Cup.png/64px-CTGP_Revolution_Question_Block_Cup.png')",stroke: '#282828',"stroke-width": '7',"stroke-miterlimit": '10','stroke-opacity': '1'}).transform("t120,150").click(function () {window.location = "http://www.google.com/"; }).toBack();*/
    var startBoxAnimated = Raphael.transformPath("M35.7,67.8L35.7,67.8c-0.3,0-0.5-0.2-0.5-0.5V4 c0-0.3,0.2-0.5,0.5-0.5l0,0c0.3,0,0.5,0.2,0.5,0.5v63.3C36.2,67.6,35.9,67.8,35.7,67.8z");

    /* Paths for the paper */
    var paper = gift.rect(56, 188, 200, 100).attr(boxBaseAttr).toBack();

    /* Paths for background circles */
    var frontCircle = gift.circle(150, 150, 300).attr(circleAttr).toBack();





    /* Combine paths into sets */
    var boxLid = gift.set();
    boxLid.push(
        boxTop,
        bowLeft,
        bowMiddle,
        bowRight,
        bowLid,
        shadowLid,
        lightMiddleTop,
        lightLeft,
        lightRight,
        lightMiddle,
        lightMiddleSmall
    );

    var boxBottom = gift.set();
    boxBottom.push (
        boxBase,
        bowVertical,
        shadowTop,
        shadowBottom
    );

    var boxFull = gift.set();
    boxFull.push (
        boxTop,
        bowLeft,
        bowMiddle,
        bowRight,
        bowLid,
        shadowLid,
        lightMiddleTop,
        lightLeft,
        lightRight,
        lightMiddle,
        lightMiddleSmall,
        boxBase,
        bowVertical,
        shadowTop,
        shadowBottom,
        paper,
        frontCircle,
        boxAnimate
    );

    /* Animate on hover */
    var initialShadowHeight = shadowTop.attr("height");
    var initialPaperHeight = paper.attr("height");

    function animationStarted() {
        boxAnimate.animate({
            /*path: startBoxAnimated,*/
            path: startBox,
            transform: "t120,30"
        }, 900, "bounce"/*, animationInitial*/);
    }

    function animationInitial() {
        boxAnimate.animate({
            path: startBox
        }, 900, "bounce"/*, animationStarted*/);
    }

    var hoverFunc = function() {
        boxLid.animate({transform: "t0,-150"}, 800, 'bounce');
        shadowTop.animate({height: "0"}, 800, 'bounce');
        paper.animate({height: "288", y: "0"}, 500, 'backIn');

        frontCircle.animate({transform: "s1.3"}, 800, "bounce");

        animationStarted();
    };
    var hideFunc = function() {
        boxLid.animate({transform: "t0, 0"}, 800, 'bounce');
        shadowTop.animate({height: initialShadowHeight}, 800, 'bounce');
        paper.animate({height: initialPaperHeight, y: "188"}, 500, 'backOut');

        frontCircle.animate({transform: "s0"}, 800, "bounce");

        boxAnimate.stop();

        boxAnimate.animate({
            path: startBox,
            transform: "t120,150"
        }, 900, "bounce");
    };
    boxFull.hover(hoverFunc, hideFunc);







});
