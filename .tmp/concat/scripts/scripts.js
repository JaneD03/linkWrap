'use strict';

/**
 * @ngdoc overview
 * @name linkWrapApp
 * @description
 * # linkWrapApp
 *
 * Main module of the application.
 */

var app = angular.module('linkWrapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);
'use strict';

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: './views/main.html',
        data : {
            cssClassnames : 'landing'
        }
    })
    .state('animation', {
        url: '/animation',
        templateUrl: './views/animation.html'
    });


    /**
     * Default Route
     */
    $urlRouterProvider
        .otherwise('/');
}]);


(function () {
    'use strict';

    app.directive('routeCssClassnames', routeCssClassnames);

    function routeCssClassnames($rootScope) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr, ctrl) {

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                    var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                    // don't do anything if they are the same
                    if (fromClassnames != toClassnames) {
                        if (fromClassnames) {
                            elem.removeClass(fromClassnames);
                        }

                        if (toClassnames) {
                            elem.addClass(toClassnames);
                        }
                    }
                });
            }
        }
    }
    routeCssClassnames.$inject = ["$rootScope"];
}());
'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('mainCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.colors = [
        {"hex": "#1abc9c"},
        {"hex": "#16a085"},
        {"hex": "#2ecc71"},
        {"hex": "#27ae60"},
        {"hex": "#3498db"},
        {"hex": "#2980b9"},
        {"hex": "#9b59b6"},
        {"hex": "#8e44ad"},
        {"hex": "#34495e"},
        {"hex": "#2c3e50"},
        {"hex": "#f1c40f"},
        {"hex": "#f39c12"},
        {"hex": "#e67e22"},
        {"hex": "#d35400"},
        {"hex": "#e74c3c"},
        {"hex": "#c0392b"},
        {"hex": "#ffffff"},
        {"hex": "#ecf0f1"},
        {"hex": "#bdc3c7"},
        {"hex": "#95a5a6"},
        {"hex": "#7f8c8d"}
    ];

    $scope.backgroundColor = function(colorHex){
        $rootScope.backgroundColor = colorHex;
    };

    $scope.bowColor = function(colorHex){
        $rootScope.bowColor = colorHex;
    };

    $scope.showingOptions = false;

    $scope.showOptions = function (){
        $scope.showingOptions = !$scope.showingOptions;
        $rootScope.showingPreviewBox = false;
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.showingOptions = false;
        $rootScope.showingPreviewBox = false;
    });
}]);

'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('animationCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
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







}]);

'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('previewCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
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
}]);

app.controller("formCtrl", ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
    $scope.url = 'http://local.dev/personal/linkWrap/api/input.php';
    $scope.formsubmit = function(isValid) {
        $scope.randomNumber = Math.random().toString(36).substring(7);
        if (isValid) {
            $http.post($scope.url, {
                "link": $scope.link,
                "number": $scope.randomNumber,
                "bow": $rootScope.bowColor,
                "background": $rootScope.backgroundColor
            }).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;

                var earl = '/editperson/' + $scope.randomNumber;
                $location.path(earl);
            })
        }else{
            alert('Form is not valid');
        }
    }
}]);
angular.module('linkWrapApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/animation.html',
    "<div class=\"giftBox\" ng-controller=\"animationCtrl\"> <div id=\"gift\"></div> <div id=\"holder\"> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"colorOptions\" ng-class=\"{'showingOptions': showingOptions == true}\" ng-controller=\"previewCtrl\"> <div class=\"inner\"> <div class=\"backgorundColor colorSet\"> <span>Background color</span> <ul> <li ng-repeat=\"color in colors\"> <a href=\"\" style=\"background-color: {{color.hex}}\" ng-click=\"backgroundColorPreview(color.hex);\"></a> </li> </ul> </div> <hr> <div class=\"bowColor colorSet\"> <span>Gift color</span> <ul> <li ng-repeat=\"color in colors\"> <a href=\"\" style=\"background-color: {{color.hex}}\" ng-click=\"bowColorPreview(color.hex);\"></a> </li> </ul> </div> </div> <a ng-click=\"showOptions();\" class=\"options optionButton\"> <i class=\"glyphicon glyphicon-cog\"></i> </a> <div class=\"preview\" ng-style=\"{background: backgroundColor}\" ng-class=\"{'visible': showingPreviewBox == true}\"> <div id=\"gift\"></div> </div> <!--\n" +
    "  <a ui-sref=\"animation\" class=\"view optionButton\">\n" +
    "    <i class=\"glyphicon glyphicon-eye-open\"></i>\n" +
    "  </a>\n" +
    "  --> </div> <div class=\"inputWrap\"> <div class=\"container\"> <div class=\"row headerRow\"> <div class=\"col-lg-12\"> <h1>Wrap your links up as unique gifts</h1> <h3>Bow up your ordinary links to surprise someone.</h3> </div> </div> <div class=\"row inputRow\"> <div ng-controller=\"formCtrl\"> <form name=\"userForm\"> <input type=\"text\" placeholder=\"Your link here\" ng-model=\"link\" ng-model=\"link\"> <button type=\"submit\" ng-click=\"formsubmit(userForm.$valid)\" ng-disabled=\"userForm.$invalid\">Wrap it up!</button> </form> </div> </div> </div> </div>"
  );

}]);
