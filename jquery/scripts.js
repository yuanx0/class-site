$(".dark-btn").click(function(){ 
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
});

$(".glow-btn").click(function(){ 
    $(".box").toggleClass("flow");
});

$(".spin-btn").click(function(){ 
    $(".box").toggleClass("spin");
});

$(".reveal-btn").click(function(){ 
    $(".chair").css({
        'opacity': "1"
    });
    $(".reveal-btn").hide();
});

$( ".drag" ).draggable();