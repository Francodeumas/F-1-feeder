(function(){

    'use strict';

    
   var logics = {
        switchURL : function(element){
            if(!element.id){
                element = element.parentNode;
            }
           history.pushState('','pages','/#'+element.id+'page')
        }
   }    
    
    
    
    var events = {
    
        clickEvent : function(){
            var menulists = document.getElementById('menulists');
            menulists.addEventListener('click',function(event){
                logics.switchURL(event.target);
            });
        }
    }
    
    events.clickEvent();
})();