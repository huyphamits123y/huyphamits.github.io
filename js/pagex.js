$(document).ready(function(){
    $("#gototop").hide()
    

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
          $("#gototop").show("slow")
        else
          $("#gototop").hide("slow")



    })
    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },1000);
    })

})
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('section').addClass('sticky');
        }
        else
        {
         $('section').removeClass('sticky');
        }

    });
});