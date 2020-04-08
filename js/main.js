$(document).ready(function() {

    $("#toggle-menu").on('click', function() {
        $('body').toggleClass("show-menu");
        $(this).toggleClass("close-menu");
    });

    // $('.slide').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     speed: 5000,
    //     arrows:false,
    //     variableWidth: true,
    //     cssEase: 'linear',
    //     pauseOnHover: true,
    //     prevArrow:'.slider-pagenation .button-prev',
    //     nextArrow:'.slider-pagenation .button-next',

    //     // variableWidth: true.
    //     // autoplay: true,
    //     // autoplaySpeed: 0,
    //     // speed: 10000,
    //     // cssEase: 'linear',
    //     // slidesToShow: 1,
    //     // slidesToScroll: 1
    //   });

    $('.slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      variableWidth: true,
      cssEase: 'linear',
      arrows:false,
    });
          
    function slickPause() {
      //$('.slide').slick('slickPause');
    }

    slickPause();

    $('.slide').mouseover(function() {
      $('.slide').slick('slickPlay')
    });
    $('.slide').mouseout(function() {
        slickPause();
    });

    // Add smooth scrolling to all links
    $(".arrow-img a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});

// ===========================================================
// See tutorial at : 
// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
// ===========================================================

(function() {
  // Init
  var container = document.getElementById("img_container"),
      inner = document.getElementById("inner");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();