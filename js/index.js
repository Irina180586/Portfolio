console.log("Your index.js file is loaded correctly!");


$("#Skillset").on("click", function(){
    $("#myModal").show();
});

$("#close").on("click", function(){
    $("#myModal").hide();
});



$(document).ready(function () {
    if ($(window).scrollTop() > 145) {
        $("#navbar").css('opacity', '100');
    }
    $(document).on('scroll', function () {
        if ($(window).scrollTop() < 145) {
            $("#navbar").css('opacity', '0');
          
                // console.log('ther');
            $('.back-to-top').css('opacity', '0');
            
        }
        if ($(window).scrollTop() > 145) {
            console.log("here");
            $("#navbar").css('opacity', '100');
            $('.back-to-top').css('opacity', '100');

            
        }
    });
});

