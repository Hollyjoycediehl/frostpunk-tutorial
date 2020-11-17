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
    movement = -(topDistance * depth);
  }

 translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;



