angular.module('replaceDirective', []);

angular.module('replaceDirective').directive('thirdPartyDirective', function() {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: '3rd-party-directive.html',
    link: function(scope, elem, attr) {
      scope.data = {
        name: "I am a 3rd-party-directive and I am not touchable!"
      };
    }
  };
});


// uncomment the following code to replace above directive in fly
// angular.module('replaceDirective').directive('thirdPartyDirective', ['$compile', function($compile) {

//     return {
//       restrict: 'E',
//       link: function(scope, elem, attr) {
//         // create the template in fly
//         var template = '<custom-directive></custom-directive>';
//         // create a new scope
//         var newScope = scope.$new();
//         // destroy the current scope if the current scope is not root scope or the new scope is not created by the current scope
//         //scope.$destroy();
//         // compile the in fly template
//         var compiled = $compile(template)(newScope);
//         // replace the current element by the newly compiled element
//         elem.replaceWith(compiled);
//       }
//     };
//   }])
//   .directive('customDirective', ['$timeout', function($timeout) {

//     return {
//       restrict: 'E',
//       scope: {},
//       templateUrl: 'custom-directive.html',
//       link: function(scope, elem, attr) {
//         $timeout(function() {
//           scope.data = {
//             name: "I am a custom directive!!"
//           };
//         });
//       }
//     };
//   }]);