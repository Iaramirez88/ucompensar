$(document).ready(function(){
    $(".list-menu2 li a").hover(function(){
      $(".sub-menu", this).toggleClass( "d-block" );
    });
    $(".menu-btn").click(function(){
      $("#menu1").toggleClass( "d-block" );
      $("#menu2").toggleClass( "d-block" );
    });
  });