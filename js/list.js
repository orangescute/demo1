$(function () {
    // 点击li不需要执行滚动事件
    var flag = true;
    // 显示电梯导航
    var toolTop = $(".goods").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function () {
        toggleTool();
        // 节流阀
        if (flag) {
            $(".floor .goods").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top){
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }

    });

    // 滚动到相对的位置
    $(".fixedtool li").click(function () {
        flag = false;
        var current = $(".floor .goods").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        },function(){
            flag = true;
        });
        // 点击li增加current
        $(this).addClass("current").siblings().removeClass();
    })
})