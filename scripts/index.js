var myIndex = 0;
    SlideMove();
    
    function SlideMove() {
      var i;
      const  x = document.getElementsByClassName("slide");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(SlideMove, 2500);    
    }