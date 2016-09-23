//自适应屏幕高度
$("#left,#right").css({
    "min-height":$(window).height()
})
// 信息框居中
function boxCenter(doc){
    var $doc=$(doc);
    var windowWidth = ($("body").width()-$doc.width())*0.5;
    var windowHeight = $("body").height(),      //获取当前窗口高度
    scrollHeight = $(document).scrollTop(),    //相对滚动条上侧的偏移值
    dialogBoxHeight = $doc.height() + 2,
    dialogBoxTop = windowHeight * 0.5,      //动态top值
    dialogBoxMarTOP = 0 - (dialogBoxHeight/2) + scrollHeight;   //动态margin-top值
    $doc.css({"left" : windowWidth + "px","top" : dialogBoxTop + "px", "margin-top":dialogBoxMarTOP + "px"  });
}