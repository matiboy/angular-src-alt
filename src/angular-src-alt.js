angular.module('RaSrcAlt',['ng']).directive('raSrcAlt', function() {
  return {
    scope: true,
    link: function(scope, element, attr) {
      var alt = attr.raSrcAlt;
      var fn = function() {
        console.log('not getting in here are we...?');
        attr.$set('src', alt);
      };
      element.on('error', fn);
      scope.$on('$destroy', function() {
        element.off('error', fn);
      });
    }
  }
});
