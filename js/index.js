console.log("Your index.js file is loaded correctly!");


$("#Skillset").on("click", function(){
    $("#myModal").show();
});

$("#close").on("click", function(){
    $("#myModal").hide();
});

$(function() {
		$('.zoom').on('click', function() {
			$('.imagepreview').attr('src', $(this).attr('src'));
			$('#imagemodal').modal('show');   
		});		
});



$(document).ready(function () {


    if ($(window).scrollTop() > 145) {
        $("#navbar").css('opacity', '100');
    }
    $(document).on('scroll', function () {
        if ($(window).scrollTop() < 145) {
            $("#navbar").css('opacity', '0');
            $('.back-to-top').css('opacity', '0');
        }
        if ($(window).scrollTop() > 145) {
            $("#navbar").css('opacity', '100');
            $('.back-to-top').css('opacity', '100');
        }
    });

    $(".purpleHover").hover(
        function () {
            $("#colorRow1").addClass("purple");
            $("#textRow1").addClass("white").removeClass("backgroundBack");
        }
    )

    $(".purpleHover").mouseout(
        function () {
                $("#colorRow1").removeClass("purple");
                $("#textRow1").removeClass("white").addClass("backgroundBack");;
            }
    )


    $("#hoverRow1").hover(
        function () {
            $("#colorRow1").addClass("purple");
            $("#textRow1").addClass("white").css("backgroundBack");
        }
    )

    $("#hoverRow1").mouseout(
        function () {
                $("#colorRow1").removeClass("purple");
                $("#textRow1").removeClass("white").addClass("backgroundBack");;
            }
    )

        $("#hoverRow2").hover(
        function () {
            $("#colorRow2").addClass("pastel");
            $("#textRow2").addClass("white").removeClass("backgroundBack");
        }
    )

    $("#hoverRow2").mouseout(
        function () {
                $("#colorRow2").removeClass("pastel");
                $("#textRow2").removeClass("white").addClass("backgroundBack");;
            }
    )

        $("#colorRow3").hover(
        function () {
            $("#colorRow3").addClass("purple");
                $("#textRow3").css("background-color", "white");
        }
        )
    
      $("#textRow3").hover(
          function () {
               $("#textRow3").css("background-color", "white");
          })

    $("#colorRow3").mouseout(
        function () {
            $("#colorRow3").removeClass("purple");
             $("#textRow3").css("background-color", "#F7F8FA");
            }
    )
});

