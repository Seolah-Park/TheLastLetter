// scripts.js
window.signature = {
  initialize: function() {
    $('.signature svg').each(function() {
      var paths = $('path, circle, rect', this);
      var delay = 0;
      paths.each(function() {
        var path = $(this);
        var length = path[0].getTotalLength();
        var speed = length < 100 ? 20 : Math.floor(length);
        delay += speed + 100;
        path.css('transition', 'none')
            .attr('data-length', length)
            .attr('data-speed', speed)
            .attr('data-delay', delay)
            .attr('stroke-dashoffset', length)
            .attr('stroke-dasharray', length + ',' + length);
      });
    });
  },

  animate: function() {
    $('.signature svg').each(function() {
      var paths = $('path, circle, rect', this);
      paths.each(function() {
        var path = $(this);
        var length = path.attr('data-length');
        var speed = path.attr('data-speed');
        var delay = path.attr('data-delay');
        path.css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear')
            .attr('stroke-dashoffset', '0');
      });
    });
  }
};

$(document).ready(function() {
  window.signature.initialize();

  $('button').on('click', function() {
    window.signature.initialize();
    setTimeout(function() {
      window.signature.animate();
    }, 500);
  });
});

$(window).on('load', function() {
  window.signature.animate();
});
