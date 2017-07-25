$(function(){//DÉBUT INTERACTION ONGLET VISUEL ET CODE

    //INTERACTION DES BOUTONS BOLD & ITALIC
    $('.btn-Action-Typo').on('click',function(){
        if( $(this).hasClass('focus')){
        $(this).removeClass('focus');
        }
    });

(function () {

    document.getElementById('visuel')
    //on assigne un gestionnaire d'événemenbt à la cible
    //L'événement contextmenu est déclenché lors d'un click du bouton droit de la souris
        .addEventListener('contextmenu', rightClickHandler, false);
    //on écrit la function rightClickHandler
    function rightClickHandler(event) {
        event.preventDefault();

        //on met dans une variable la chaine de de caractère entouré de la balise existante
        var recupBalise = event.target;
        console.log(recupBalise);
        if(!recupBalise){
            //si nous n'obtenons pas la balise ( ex <stron> ) voulu on retourne faux
            return false;
        }
        //ici on pourra ajouter un cas 'DU NOM DE NOTRE STYLE' si on veut gérer d'autres cas
        //La Node.nodeName propriété en lecture seule renvoie le nom du nœud actuel en tant que chaîne
        switch (recupBalise.nodeName.toUpperCase()) {
            case 'STRONG':
                //on ajoute la classe focus si on clique sur un texte qui contient du strong
                $('.bold').addClass('focus');
                // console.log('c\'est un strong !');
                break;
            case 'EM':
                //on ajoute la classe focus si on clique sur un texte qui contient du em
                $('.italic').addClass('focus');
                // console.log('c\'est un em !');
                break;
        
            default:
                $('.bold').removeClass('focus');
                $('.italic').removeClass('focus');
                break;
        }
        return false; // pour empecher le menu contextuel de Chrome/Firefox/IE/... de s'ouvrir
    }
})();

    //INTERACTION DES BOUTONS LIST UL & LIST OL
    $('.listUl').on('click',function(){
        if($(this).hasClass('focus')){
            $('.listUl').removeClass('focus');
        }
        else{
            $('.listUl').addClass('focus');
            $('.listOl').removeClass('focus');
        }
    });
    $('.listOl').on('click',function(){
        if($(this).hasClass('focus')){
        $('.listOl').removeClass('focus');
        }
        else{
            $('.listOl').addClass('focus');
            $('.listUl').removeClass('focus');
        }
    });

    //INTERACTION DES BOUTONS D'ALIGNEMENTS
    $('.textAlignLeft').on('click',function(){
        if($(this).hasClass('focus')){
            $('.textAlignLeft').removeClass('focus');
        }
        else{
            $('.textAlignLeft').addClass('focus');
            $('.textAlignCenter').removeClass('focus');
            $('.textAlignRight').removeClass('focus');
            $('.textJustify').removeClass('focus');
        }
    });
    $('.textAlignCenter').on('click',function(){
        if($(this).hasClass('focus')){
        $('.textAlignCenter').removeClass('focus');
        }
        else{
            $('.textAlignCenter').addClass('focus');
            $('.textAlignLeft').removeClass('focus');
            $('.textAlignRight').removeClass('focus');
            $('.textJustify').removeClass('focus');
        }
    });
    $('.textAlignRight').on('click',function(){
        if($(this).hasClass('focus')){
            $('.textAlignRight').removeClass('focus');
        }
        else{
            $('.textAlignRight').addClass('focus');
            $('.textAlignCenter').removeClass('focus');
            $('.textAlignLeft').removeClass('focus');
            $('.textJustify').removeClass('focus');
        }
    });
    $('.textJustify').on('click',function(){
        if($(this).hasClass('focus')){
        $('.textJustify').removeClass('focus');
        }
        else{
            $('.textJustify').addClass('focus');
            $('.textAlignCenter').removeClass('focus');
            $('.textAlignRight').removeClass('focus');
            $('.textAlignLeft').removeClass('focus');
        }
    });

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

    //INTERACTION BOUTON ERASE
    $('.eraseBtn').on('click',function(){
        var tryToTest = getSelection();
        document.execCommand("insertHTML", false, tryToTest);
    });

});//FIN INTERACTION ONGLET VISUEL ET CODE


//ON EXECUTE UNE FONCTION POUR MODIFIER LE TEXTE SELON LE BOUTON OU ON CLIQUE
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



//RÉCUPÉRATION DE L'OPTION CONTENANT LE HEADING
$('#visuel').one('click',function() {
    recupOptionDuSelect = ($('#selection').val());
    console.log(recupOptionDuSelect);
    document.execCommand('formatBlock', false, '<'+recupOptionDuSelect+'>');
    // if($('#visuel').has('br')){
    //     $("br").remove();
    // }
}); 

//CHANGEMENT DU HEADING D'UNE SELECTION
$('#selection').on('click',function(){

test = {
            tmpEl: document.createElement('p'),
            
			htmlToDom: function(htmlEl){
                test.tmpEl.innerHTML = htmlEl;
                return test.tmpEl.children[0]
			},
			wrapSelection: function(htmlEl){
                var selection = window.getSelection();
//rangeCount - Renvoie le nombre de « plages » dans la sélection.
				for(var i = selection.rangeCount;i--;){
                    var global = test.htmlToDom(htmlEl)
                    var range = selection.getRangeAt(i);
					global.appendChild(range.extractContents());
					range.insertNode(global);
				}
			},
			command: (name,argument)=>{
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
});
        
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


//colorpicker
function getSelectedText() {
  t = (document.all) ? document.selection.createRange().text : document.getSelection();

  return t;
}
//a verif ou integrer
var selection, selection_text;

$('#colorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
        $(colpkr).fadeIn(500);
            selection = getSelectedText();
            selection_text = selection.toString();
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
        
        $('#colorSelector div').css('backgroundColor', '#' + hex);
        $('#visuel').mouseup(function(){


            // How do I add a span around the selected text?

            var span = document.createElement('SPAN');
            span.setAttribute('style', 'color:#'+hex);
            span.textContent = selection_text;

            var range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(span);
        }); 
	}
});
//http://jsfiddle.net/Alfie/6V7hL/146/
// var colorpickerOptions = {
//     select: function (event, color) {
//         var color_in_hex_format = color.formatted;
//         $('[contenteditable]').html(function(){
//             return this.textContent.replace(selection,'<span style="color:#'+color_in_hex_format+'">'+selection+'</span>');
//         });
//         $('.colorpicker').css('background-color', '#' + color_in_hex_format);
//     } ,
//     inline: false
// };
// var selection = "";
// $('[contenteditable]').on('mouseup',function(){
// selection = getSelectionHtml();
// });
// $('.colorpicker').colorpicker(colorpickerOptions);
// function getSelectionHtml() {
//     var html = "";
//     if (typeof window.getSelection != "undefined") {
//         var sel = window.getSelection();
//         if (sel.rangeCount) {
//             var container = document.createElement("div");
//             for (var i = 0, len = sel.rangeCount; i < len; ++i) {
//                 container.appendChild(sel.getRangeAt(i).cloneContents());
//             }
//             html = container.innerHTML;
//         }
//     } else if (typeof document.selection != "undefined") {
//         if (document.selection.type == "Text") {
//             html = document.selection.createRange().htmlText;
//         }
//     }
//     return html;
// }








// var range=null;

// $(function(){

// $('#picker').colorPicker({
//     defaultColor: 0,
//     // index of the default color
//     columns: 13,
//     // number of columns 
//     click: function(c) {
//         //alert(this);
//         restoreSelection(range);
//         document.execCommand('ForeColor',false, c);
//     }
// });

// $('#output').mouseup(function(){
//     range = saveSelection();
// });

//     $('#output').keyup(function(){
//     range = saveSelection();
// });
    
// function saveSelection() {
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.getRangeAt && sel.rangeCount) {
//             return sel.getRangeAt(0);
//         }
//     } else if (document.selection && document.selection.createRange) {
//         return document.selection.createRange();
//     }
//     return null;
// }

// function restoreSelection(range) {
//     if (range) {
//         if (window.getSelection) {
//             sel = window.getSelection();
//             sel.removeAllRanges();
//             sel.addRange(range);
//         } else if (document.selection && range.select) {
//             range.select();
//         }
//     }
// }


//});
// function getSelected(){
//     if (window.getSelection) {
//         return window.getSelection();
//     }
//     else if (document.getSelection) {
//         return document.getSelection();
//     }
//     else {
//         var selec = document.selection && document.selection.createRange();
//             if (selec.text) { return select.text;}
//             return false
//     }
//     return false
// }

