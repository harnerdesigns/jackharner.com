$(function(){


    $(".thing").click(function(e){

        e.preventDefault();
        var parent = $(this);
        if(parent.hasClass("is-open")){
            $(".things").removeClass("is-open");
            parent.removeClass("is-open");

        } else {

            $(".is-open").removeClass('is-open');
            $(".things").addClass("is-open");
            $(this).addClass("is-open");
            $("" + $(this).data("target")).addClass("is-open");
        }
    })


})  