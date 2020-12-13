/*unhiding the session part will enable browser session storage, try it.*/

    /*if (!sessionStorage.isVisited) {
      sessionStorage.isVisited = 'true';*/
      var progress = 0;
      document.onreadystatechange = function() {
          if (document.readyState == "interactive") {
              var allElement = $("*");
              var length = allElement.length;
              for (var i = 0; i < length; i++) {
                  set_element(allElement[i], length);
              }
          }
      }
  
      function set_element(element, totalElement) {
          var percentage = 100 / totalElement;
          if ($(element).length == 1) {
  
              $("#fill").animate({
                  width: progress + percentage + "%"
              }, 500, function() {
                  if (document.getElementById("fill").style.width == "100%") {
                      $(".loadingPage").fadeOut(500);
                  }
              });
              progress = progress + percentage;
          }
      }
      /*unhide this else part too to enable browser cookie*/
      /*}else {
          $(".loadingPage ").hide();
  }*/