describe('RaSrcAlt directive', function() {
  var element;
  var scope;
  var timeout;
  var validUrl = 'http://i.kinja-img.com/gawker-media/image/upload/s--N4B2MXlJ--/c_fit,fl_progressive,q_80,w_636/17se622r1w7q5jpg.jpg'
  var invalidUrl = 'http://something.com/a_random_image_name.png';
  var altImage = 'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/face-monkey-256.png';
  beforeEach(module('RaSrcAlt'));

  beforeEach(inject(function($rootScope, $compile, $timeout) {
    scope = $rootScope;
    timeout = $timeout;
    element = angular.element('<img ng-src="{{url}}" ra-src-alt="'+altImage+'">');
    $compile(element)($rootScope);
  }));

  it('should keep original src value if valid', function(done) {
    scope.url = validUrl;
    scope.$digest();
    // Give it time to realize whether the img exists
    timeout(function() {
      expect(element.attr('src')).toBe(validUrl);
      done();
    },1000);
  });

  it('should fall back to alternative image if not found', function(done) {
    scope.url = invalidUrl;
    scope.$digest();
    // Give it time to realize whether the img exists
    timeout(function() {
      expect(element.attr('src')).toBe(altImage);
      done();
    },1000);
  });
});
