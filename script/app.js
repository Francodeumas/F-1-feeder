(function(){

    'use strict';

    
   var logics = {
       
       getPage : function(url){
           var xhttp = new XMLHttpRequest();
           xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                document.getElementsByClassName('top-content')[0].innerHTML = this.responseText;
            }
           }
           xhttp.open('GET','views/'+url+'.html',true);
           console.log('views/'+url+'.html');
           xhttp.send();
       },
       switchPage : function(){
         var url = location.href.split('#')[1];
           this.getPage(url);
       },
        switchURL : function(element){
            if(!element.id){
                element = element.parentNode;
            }
           history.pushState('','pages','/#'+element.id+'page');
           this.switchPage();    
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
    logics.switchURL(document.getElementById('drivers'));  // Default page when page loads first time
})();