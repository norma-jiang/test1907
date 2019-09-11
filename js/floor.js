$("#loucen").find("li").click(function(){
    // console.log($(this).index());
    var index = $(this).index();
    var t = $(".floor").eq(index)[0].offsetTop;

    // document没有动画animate方法，html有
    $("html").animate({
        scrollTop:t
    })
})
$("#loucen").find("p").click(function(){
    $("html").animate({
        scrollTop:0
    })
})
$("html").mousewheel(function(){
    var top = $("#loucen").children("p").offset().top;
    if(top>800){
        $("#loucen").find("i").css({
            display:"block",
            cursor: "pointer"
        }).stop().animate({
            opacity:1
        },1000)
    }else{
        $("#loucen").find("i").stop().animate({
            opacity:0
        },1000).css({display:"none",cursor: ""})
        
    }
})
