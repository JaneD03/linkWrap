'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('previewCtrl', function ($scope, $rootScope) {
    var gift = new Raphael("gift", 150, 150);

    /* Check if the colors have been predefined */
    if($rootScope.bowColor) {
        //not undefined
    } else {
        $rootScope.bowColor = "#E74C3C"
    }

    /* On click change the background and bow color */
    $scope.backgroundColorPreview = function(colorHex){
        $rootScope.backgroundColor = colorHex;
        $scope.backgroundColor = colorHex;
        $rootScope.showingPreviewBox = true;
    };

    $scope.bowColorPreview = function(colorHex){
        $rootScope.bowColor = colorHex;
        $rootScope.showingPreviewBox = true;

        /* Basic styles */
        var boxBaseAttr = {fill: '#fff',stroke: '#282828',"stroke-width": '4',"stroke-miterlimit": '10','stroke-opacity': '1'};
        var bowAttr = {fill: $rootScope.bowColor,stroke: '#282828',"stroke-width": '4',"stroke-miterlimit": '10','stroke-opacity': '1'};
        var shadowAttr = {opacity: '0.2',fill: '#0A0A0A','stroke-width': '0','stroke-opacity': '1'};
        var lightAttr = {opacity: '0.2',fill: '#FFFFFF','stroke-width': '0','stroke-opacity': '1'};

        /* Paths for the box */
        var boxBase = gift.path("M129.2,144.4H26.7c-6.6,0-12-5.4-12-12l0-64.4  l126.5,0l0,64.4C141.2,139,135.8,144.4,129.2,144.4z").attr(boxBaseAttr);
        var boxTop = gift.path("M128.1,33.9L28,33.9c-18.5,0-26.5,6.2-26,26V62  c0,3.3,2.7,6,6,6h140.1c3.3,0,6-2.7,6-6v-2.1C154.1,42.9,148.8,33.9,128.1,33.9z").attr(boxBaseAttr);

        /* Paths for the ribbon */
        var bowLeft = gift.path("M11.8,36.8c-2.7-1.9-3.1-4.6-1.3-7.3L27.4,4.6  C29.3,1.9,33,1.2,35.7,3l21,14.3l0,16.9c0,0-30.2,0-35.1,0C17,34.2,11.8,36.8,11.8,36.8z").attr(bowAttr);
        var bowMiddle = gift.path("M62.8,8.1h30c3.3,0,6,2.7,6,6.1v20.1h-42V14.1  C56.8,10.8,59.5,8.1,62.8,8.1z").attr(bowAttr);
        var bowRight = gift.path("M143.7,36.8c2.7-1.9,3.1-4.6,1.3-7.3L128.1,4.6  c-1.9-2.7-5.6-3.4-8.3-1.6l-21,14.3l0,16.9c0,0,30.2,0,35.1,0C138.6,34.2,143.7,36.8,143.7,36.8z").attr(bowAttr);
        var bowVertical = gift.rect(63.6, 68, 28.8, 76.4).attr(bowAttr);
        var bowLid =  gift.rect(56.8, 34.2, 42, 33.8).attr(bowAttr);

        /* Paths for the shadows */
        var shadowLid = gift.path("M152.3,53.9c0,3.3-4.1,6-8.1,6H12c-4,0-8.1-2.7-8.1-6l-1.9,0L2,62c0,3.3,3.2,6,7.2,6h137.7  c4,0,7.2-2.7,7.2-6l0-8.2L152.3,53.9z").attr(shadowAttr);
        var shadowTop = gift.rect(14.7, 68, 126.5, 10.9).attr(shadowAttr);
        var shadowBottom = gift.path("M139.7,130.3c0,3.3-3.4,6-6.7,6H23c-3.3,0-6.8-2.7-6.8-6l-1.5,0l0,8.2c0,3.3,2.7,6,6,6h114.5  c3.3,0,6-2.7,6-6l0-8.2L139.7,130.3z").attr(shadowAttr);

        /* Paths for the light */
        var lightMiddle = gift.path("M92.1,42.8h-15c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h15c1,0,1.9,0.8,1.9,1.9v0  C94,41.9,93.2,42.8,92.1,42.8z").attr(lightAttr);
        var lightMiddleSmall = gift.path("M67.2,42.8h-3.3c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h3.3c1,0,1.9,0.8,1.9,1.9v0  C69.1,41.9,68.2,42.8,67.2,42.8z").attr(lightAttr);
        var lightMiddleTop = gift.path("M83,19.3H72.9c-1,0-1.9-0.9-1.9-1.9v0c0-1,0.9-1.9,1.9-1.9H83c1,0,1.9,0.9,1.9,1.9v0  C84.9,18.4,84,19.3,83,19.3z").attr(lightAttr);
        var lightLeft = gift.path("M31.3,7.4C31.9,6.6,33.1,6.4,34,7l13.9,9.6c0.8,0.6,1.1,1.8,0.5,2.6c-0.6,0.8-1.8,1.1-2.6,0.5  l-13.9-9.6C31,9.5,30.8,8.3,31.3,7.4z").attr(lightAttr);
        var lightRight = gift.path("M124.5,7.4c-0.6-0.8-1.8-1.1-2.6-0.5L108,16.6c-0.8,0.6-1.1,1.8-0.5,2.6  c0.6,0.8,1.8,1.1,2.6,0.5l13.9-9.6C124.9,9.5,125.1,8.3,124.5,7.4z").attr(lightAttr);
    };
});
