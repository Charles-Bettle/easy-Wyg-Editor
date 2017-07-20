$(function(){

    $('button').on('click',function(){
        if( $(this).hasClass('focus')){
        $(this).removeClass('focus');
        }
        else{
          $(this).addClass('focus');
        }
    });


   $('#ongletVisuel').mouseenter(function(){
      ($(this).css('top','0').css('padding','15px'))
   });
   $('#ongletVisuel').mouseleave(function(){
      ($(this).css('top','15px').css('padding','10px'))
   });
  
   $('#ongletCode').mouseenter(function(){
      ($(this).css('top','0').css('padding','15px'))
   });
   $('#ongletCode').mouseleave(function(){
      ($(this).css('top','15px').css('padding','10px'))
   });



    $('#ongletVisuel').on('click',function(){
        if( $('#visuel').hasClass('hidden')){
        $('#visuel').removeClass('hidden');
        $('#code').addClass('hidden');
        }
        else{
          $('#code').addClass('hidden');
        }
    });
      
    $('#ongletCode').on('click',function(){
        if( $('#code').hasClass('hidden')){
        $('#code').removeClass('hidden');
        $('#visuel').addClass('hidden');
        }
        else{
          $('#visuel').addClass('hidden');
        }
    });
});