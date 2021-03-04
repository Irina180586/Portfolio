console.log("Your index.js file is loaded correctly!");


$("#Skillset").on("click", function(){
    $("#myModal").show();
});

$("#close").on("click", function(){
    $("#myModal").hide();
});



// $(document).ready(function () {
//     if ($(window).scrollTop() > 145) {
//         $("#navbar").css('opacity', '100');
//     }
//     $(document).on('scroll', function () {
//         if ($(window).scrollTop() < 145) {
//             $("#navbar").css('opacity', '0');
//             if($(window).scrollTop() < 500){
//                 console.log('ther');
//             $('#back-to-top').fadeOut("slow");
//             }
//         }
//         if ($(window).scrollTop() > 145) {
//             $("#navbar").css('opacity', '100');
//             if ($(window).scrollTop() > 500) {
//                 console.log('ere');
//                 // $('#back-to-top').fadeIn("slow");
//             }
//         }
//     });
// });

