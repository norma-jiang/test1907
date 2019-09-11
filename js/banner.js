$(".banner-c").banner({
    items:$(".banner-c").find("img"),      //必选
    left:$(".banner-c").find("#left"),     //可选，传了就有功能，没传就没有功能
    right:$(".banner-c").find("#right"),   //可选，传了就有功能，没传就没有功能
    list:true,         //可选，默认为true
    autoPlay:true,     //可选，默认为true
    moveTime:200,
    delayTime:2000,     //可选，默认为3000
    index:0             //可选，默认为0
});