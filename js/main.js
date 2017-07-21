$(function(){

    //INTERACTION DES BOUTONS D'ALIGNEMENTS

    //INTERACTION DES BOUTONS BOLD & ITALIC

    $('.btn-Action-Typo').on('click',function(){
        if( $(this).hasClass('focus')){
        $(this).removeClass('focus');
        }
        else{
          $(this).addClass('focus');
        }
    });

    //INTERACTION DES BOUTONS LIST UL & LIST OL

    $('.listUl').on('click',function(){
        if($('this').hasClass('focus')){
            $('.listOl').removeClass('focus')
        }
        else{
            $('.listUl').removeClass('focus')
        }
    });
    $('.listOl').on('click',function(){
        if($('.listOl').hasClass('focus')){
        $('.listUl').removeClass('focus')
        }
        else{
            $('.listOl').removeClass('focus')
        }
    });

    //FIN INTERACTION DES BOUTONS D'ALIGNEMENTS

    //DEBUT INTERACTION ONGLET VISUEL ET CODE

    $('#ongletVisuel').on('click',function(){
        if( $('#visuel').hasClass('hidden')){
            $('.ongletVisuel').addClass('fixTop');
            $('.ongletCode').removeClass('fixTop'); 
            $('#visuel').removeClass('hidden');
            $('#code').addClass('hidden');
        }
        else{
          $('#code').addClass('hidden');
          $('.ongletVisuel').addClass('fixTop');
        }
    });
      
    $('#ongletCode').on('click',function(){
        if( $('#code').hasClass('hidden')){
            $('.ongletCode').addClass('fixTop');
            $('.ongletVisuel').removeClass('fixTop'); 
            $('#code').removeClass('hidden');
            $('#visuel').addClass('hidden');
        }
        else{
            $('#visuel').addClass('hidden');
            $('.ongletCode').addClass('fixTop');    
        }
    });

});

    //FIN INTERACTION ONGLET VISUEL ET CODE


//J'INITIALISE MA VARIABLE = P
var recupOptionDuSelect = 'p';

//RÉCUPÉRATION DE L'OPTION CONTENANT LE HEADING
$('#selection').change(function(event) {
    recupOptionDuSelect = ($('#selection').val());
    document.execCommand('formatBlock', false, '<'+recupOptionDuSelect+'>');
    console.log(recupOptionDuSelect);
}); 


//ON EXECUTE UNE METHODE POUR MODIFIER LE TEXTE SELON LE BOUTON OU ON CLIQUE
$('button').on('click',function(){
    var check = $(this).data('command');
    document.execCommand(check);
    console.log(check);
})



//CETTE FONCTION PERMET D'ENVOYER LE CLEAN A LA VERSION HTML
$('#ongletCode').on('click',function(){  
    //JE RÉCUPÈRE LE CONTENU HTML DANS CODE ET JE LE STOCK DANS UNE VARIABLE
    var visuelContent = document.getElementById('visuel').innerHTML;
    //JE RÉCUPÈRE LA DIV #VISUEL
    var codeContent=document.getElementById('code');
    //J'INJECTE LE TEXTE DE CODE DANS MES BALISES RECUP DU SELECT
    codeContent.textContent="<"+recupOptionDuSelect+">"+visuelContent+"</"+recupOptionDuSelect+">";

});

