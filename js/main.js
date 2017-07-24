$(function(){

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

    //INTERACTION DES BOUTONS D'ALIGNEMENTS

    //INTERACTION DES BOUTONS LINK

    $('.fa-link').on('click',function(){
        $('#modal-link').removeClass('hidden');
        $('#modal-link').removeClass('blur');
        $('.container').addClass('blur');
    })
    $('.fa-times').on('click',function(){
        $('#modal-link').addClass('hidden');
        $('#modal-link').addClass('blur');
        $('.container').removeClass('blur');
    })
    $('#submitCancel').on('click',function(){
        $('#modal-link').addClass('hidden');
        $('#modal-link').addClass('blur');
        $('.container').removeClass('blur');
    })

    //INTERACTION DU BOUTON IMAGE

    $('.fa-picture-o').on('click',function(){
        $('#modal-img').removeClass('hidden');
        $('#modal-img').removeClass('blur');
        $('.container').addClass('blur');
    })
    $('.fa-times').on('click',function(){
        $('#modal-img').addClass('hidden');
        $('#modal-img').addClass('blur');
        $('.container').removeClass('blur');
    })
    $('#submitCancel').on('click',function(){
        $('#modal-img').addClass('hidden');
        $('#modal-img').addClass('blur');
        $('.container').removeClass('blur');
    })

    //INTERACTION DU BOUTON ERASE

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
}); 

//ON EXECUTE UNE METHODE POUR MODIFIER LE TEXTE SELON LE BOUTON OU ON CLIQUE
//ON CHANGE LES BALISE B EN STRONG ET I EN ITALIC
$('button').on('click',function(){
    var check = $(this).data('command');
    document.execCommand(check);

    var root, elemsB, elemsI;

    root = document.getElementById('visuel');
    elemsB = root.getElementsByTagName('b');
    elemsI = root.getElementsByTagName('i');

    toArrayStrong(elemsB).forEach(function(elemB){
    var newElemStrong = document.createElement('strong');
    newElemStrong.textContent = elemB.textContent;
    elemB.parentNode.replaceChild(newElemStrong, elemB);    
    });
    toArrayItalic(elemsI).forEach(function(elemI){
    var newElemStrong = document.createElement('em');
    newElemStrong.textContent = elemI.textContent;
    elemI.parentNode.replaceChild(newElemStrong, elemI); 
    });

function toArrayStrong( arrayLike ){ 
    return [].slice.call( arrayLike );
    }
function toArrayItalic( arrayLike ){ 
    return [].slice.call( arrayLike );
    }
})

//CHANGEMENT DU HEADING D'UNE SELECTION
test = {
            tmpEl: document.createElement('div'),
            
			htmlToDom: function(htmlEl){
                //JE RÉCUPÈRE MON HEADING ( H1 H2 ETC )
                test.tmpEl.innerHTML = htmlEl;
                return test.tmpEl.children[0]
			},
			wrapSelection: function(htmlEl){
                //JE RÉPUÈRE LA SELECTION DU TEXTE ET JE STOCK DANS UNE VARIABLE AVEC GETSELECTION
                var selection = window.getSelection();

                //JE CRÉE UN FOR AVEC LA METHODE RANGE  ET UNE INCREMENTATION NEGATIVE
				for(var i = selection.rangeCount;i--;){
                    //J'INJECTE DANS UNE VARIABLE LE CONTENU 
                    var global = test.htmlToDom(htmlEl)
                    //J'INJECTE DANS UNE VARIABLE RANGE L'OBJET
                    //The Selection.getRangeAt() method returns a range object representing one of the ranges currently selected.
                    var range = selection.getRangeAt(i);
					global.appendChild(range.extractContents());
					range.insertNode(global);
				}
			},
			command: (name,argument)=>{ //HEADING,THIS.VALUE
				switch(name){
	                    case 'heading' :
						test.wrapSelection('<'+argument+'/>')	
						return;
				}
				if(typeof argument === 'undefined') {
        			argument = '';
    			}
				document.execCommand(name, false, argument);
			}
        }
        


//CETTE FONCTION PERMET D'ENVOYER LE CLEAN A LA VERSION HTML
$('#ongletCode').on('click',function(){  
    //JE RÉCUPÈRE LE CONTENU HTML DANS CODE ET JE LE STOCK DANS UNE VARIABLE
    var visuelContent = document.getElementById('visuel').innerHTML;
    //JE RÉCUPÈRE LA DIV #VISUEL
    var codeContent=document.getElementById('code');
    //J'INJECTE LE TEXTE DE CODE DANS MES BALISES RECUP DU SELECT
    codeContent.textContent=visuelContent;
    // codeContent.textContent="<"+recupOptionDuSelect+">"+visuelContent+"</"+recupOptionDuSelect+">";

});


$('#ongletVisuel').on('click',function(){ 
   var x=$('#code').text();
   $('#visuel').html(x);
});

