$(document).ready(function() {
    var $magic = $(".magic"),
        $scene = $(".scene"),
        magicWHalf = $magic.width() / 2;
    $scene.on("mousemove", function(e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      $magic.css({ left: x - magicWHalf, top: y - magicWHalf });
    });
  });