
let menu = document.querySelector(".Menu");
let icon = document.querySelector(".Icon");

icon.addEventListener("click",function() {
  if (this.classList.contains("fa-bars")){
    this.classList = "fas fa-times Icon";
    menu.style.right = 0;
  } else {
    this.classList = "fas fa-bars Icon";
    menu.style.right = "-340px";
  }

})



$(function () {

    $(".Item1").click(function () {
        $(".MainBox1").show();
        $(".MainBox2").hide();
        $(".MainBox3").hide();
        $(".MainBox4").hide();
        $(".MainBox5").hide();
        $(".MainBox6").hide();

        $(".Item1").addClass("active");
        $(".Item2").removeClass("active");
        $(".Item3").removeClass("active");
        $(".Item4").removeClass("active");
        $(".Item5").removeClass("active");
        $(".Item6").removeClass("active");
    });
    
    $(".Item2").click(function () {
      $(".MainBox1").hide();
      $(".MainBox2").show();
      $(".MainBox3").hide();
      $(".MainBox4").hide();
      $(".MainBox5").hide();
      $(".MainBox6").hide();

      $(".Item1").removeClass("active");
      $(".Item2").addClass("active");
      $(".Item3").removeClass("active");
      $(".Item4").removeClass("active");
      $(".Item5").removeClass("active");
      $(".Item6").removeClass("active");
    });
    //
    $(".Item3").click(function () {
      $(".MainBox1").hide();
      $(".MainBox2").hide();
      $(".MainBox3").show();
      $(".MainBox4").hide();
      $(".MainBox5").hide();
      $(".MainBox6").hide();

      $(".Item1").removeClass("active");
      $(".Item2").removeClass("active");
      $(".Item3").addClass("active");
      $(".Item4").removeClass("active");
      $(".Item5").removeClass("active");
      $(".Item6").removeClass("active");
    });
     //
     $(".Item4").click(function () {
       $(".MainBox1").hide();
       $(".MainBox2").hide();
       $(".MainBox3").hide();
       $(".MainBox4").show();
       $(".MainBox5").hide();
       $(".MainBox6").hide();
       
       $(".Item1").removeClass("active");
       $(".Item2").removeClass("active");
       $(".Item3").removeClass("active");
       $(".Item4").addClass("active");
       $(".Item5").removeClass("active");
       $(".Item6").removeClass("active"); 
      });
      //
     $(".Item5").click(function () {
      $(".MainBox1").hide();
      $(".MainBox2").hide();
      $(".MainBox3").hide();
      $(".MainBox4").hide();
      $(".MainBox5").show();
      $(".MainBox6").hide();
      
      $(".Item1").removeClass("active");
      $(".Item2").removeClass("active");
      $(".Item3").removeClass("active");
      $(".Item4").removeClass("active");
      $(".Item5").addClass("active");
      $(".Item6").removeClass("active"); 
     });
     //
     $(".Item6").click(function () {
      $(".MainBox1").hide();
      $(".MainBox2").hide();
      $(".MainBox3").hide();
      $(".MainBox4").hide();
      $(".MainBox5").hide();
      $(".MainBox6").show();
      
      $(".Item1").removeClass("active");
      $(".Item2").removeClass("active");
      $(".Item3").removeClass("active");
      $(".Item4").removeClass("active");
      $(".Item5").removeClass("active");
      $(".Item6").addClass("active"); 
     });
     //
});