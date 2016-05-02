/**
 * @ngdoc module
 * @name material.components.accordian
 * @description accordian module!
 */
/**
 * @ngdoc directive
 * @module material.components.accordian
 * @name mdaccordianLeft
 *
 * @restrict A
 *
 * @description
 * The md-accordian-left directive allows you to specify custom behavior when an element is accordiand
 * left.
 *
 * @usage
 * <hljs lang="html">
 * <div md-accordian-left="onaccordianLeft()">accordian me left!</div>
 * </hljs>
 */
/**
 * @ngdoc directive
 * @module material.components.accordian
 * @name mdaccordianRight
 *
 * @restrict A
 *
 * @description
 * The md-accordian-right directive allows you to specify custom behavior when an element is accordiand
 * right.
 *
 * @usage
 * <hljs lang="html">
 * <div md-accordian-right="onaccordianRight()">accordian me right!</div>
 * </hljs>
 */
/**
 * @ngdoc directive
 * @module material.components.accordian
 * @name mdaccordianUp
 *
 * @restrict A
 *
 * @description
 * The md-accordian-up directive allows you to specify custom behavior when an element is accordiand
 * up.
 *
 * @usage
 * <hljs lang="html">
 * <div md-accordian-up="onaccordianUp()">accordian me up!</div>
 * </hljs>
 */
/**
 * @ngdoc directive
 * @module material.components.accordian
 * @name mdaccordianDown
 *
 * @restrict A
 *
 * @description
 * The md-accordian-down directive allows you to specify custom behavior when an element is accordiand
 * down.
 *
 * @usage
 * <hljs lang="html">
 * <div md-accordian-down="onSwipDown()">accordian me down!</div>
 * </hljs>
 */

angular.module('material.components.accordian', ['material.core'])

 




                 
      .directive("mdAccordian",    function() {
          return {
              restrict: 'EA',
              
              scope: {
                  JSONSource: '@'
              },
              

              
              controller: "accordianCtrl",
              link: function ($scope, element, attrs, $sce) {
    var tempTitle = attrs.title;

                  $scope.title =  tempTitle;
                  $scope.content = attrs.content;
                  

                  
              },

              template:  '<div ng-click="myFunc()">{{   title  }} </div> <div ng-show="showMe">   {{ content  }}   {{ JSONSource }} </div>'
              
          }
      })




                .controller('accordianCtrl', function ($scope, $mdMedia, $sce) {

                    $scope.dog = function ($scope) {

                        alert('dog  is barking...');
                    }

                    $scope.JSONSource = "";
                        $scope.showMe = false;
                        $scope.myFunc = function () {
                            $scope.showMe = !$scope.showMe;
                        }

                    
                    $scope.$mdMedia = $mdMedia;
                    
                });
            


    
