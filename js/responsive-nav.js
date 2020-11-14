$(document).ready(function(){ 
    $("a.desplegable").click(function(){
      if($('.navegador').is(":visible")){
          $('.navegador').slideUp();
      }else{
        $('.navegador').slideDown();
      }
    });
$(window).resize(function(){
    if($(this).width()>768){
        $(".navegador").show();
    } else{
        $(".navegador").hide();
    }
});
});