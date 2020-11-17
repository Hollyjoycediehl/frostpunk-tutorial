(function() {
  window.addEventListener(‘scroll’, function(event) {
    var layers, topDistance;
    topDistance = this.pageYOffset;
    return layers = document.querySelectorAll("[data-type='parallax']");
  });

}).call(this);

  var depth, layer, _i, _len;

  for (_i = 0, _len = layers.length; _i < _len; _i++) {
    layer = layers[_i];
    depth = layer.getAttribute(‘data - depth’);
  }


