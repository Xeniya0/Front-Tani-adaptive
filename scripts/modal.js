$(document).ready(function(){
    $('.register').click(function(event){
        $('.special').toggleClass('open');
        $('body').toggleClass('lock');
    });
    
    $('.modal_close, .modal_window').click(function(event){
        $('.special').toggleClass('open');
        $('body').toggleClass('lock');
    });

});


