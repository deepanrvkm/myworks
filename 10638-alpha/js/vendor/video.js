var $video = $("#video");

$(".play").click(function(){
    $video[0].play();
    $(".play").addClass("play-hide");
    $(".play").removeClass("banner-content")
});
