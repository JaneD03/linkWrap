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
