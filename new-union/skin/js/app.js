$(function () {
    $("a").focus(function () {  //去掉边线
        $(this).blur();
    });
    share()//分享   
	nav();	
	showimg();
	$("#top").click(function() {
	$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	/*产品展示-切换图*/
    $(".slideBox").slide({ mainCell: ".bd2 ul", titCell: ".hd2 li", autoPlay: true, interTime: 5000,});
	/*产品展示*/
    $(".slideTxtBox").slide({});
	/*客户案例*/
    $(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, vis: 3 });//客户案例
	//首页选中状态
	$(".ewmbtn").click(function(){
		$("body .ewmbox").show();
		layout(1);
	});
	$(".ewmbox .close").click(function(){
		$(".ewmbox").hide();
		layout(0);
	});
});
$('#toolbar dd').bind({
        'mouseenter': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(true, true).animate({ 'width': 220 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.show().animate({ 'right': 65 }, 200);
            }
        },
        'mouseleave': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(false, false).animate({ 'width': 0 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.hide().animate({ 'right': 90 }, 230);
            }
        }
    });
function nav() {
    //导航条鼠标滑过;
    $(".nav ul li").hover(function () {
        $(this).children("a").addClass("hover");
        $(this).siblings().children("a").removeClass("hover");
        /*$(this).children("dl").slideDown();  */      
    },
	function () {
	    $(this).children("a").removeClass("hover")
	    /*$(this).children("dl").hide();*/
	    $(".nav ul li a").removeClass("hover"); //状态保存
	    $(".nav ul li a").each(function (i) {
	        if ($(this).attr("href") != "/") {
	            if (window.location.href.indexOf($(this).attr("href")) > -1) {
	                $(this).addClass("hover");

	            }


	        }
	    });
	});
	

}
function showimg() {
    if (!$("#showimg").length) { return false; }
    $('#showimg').banqh({
        box: "#showimg",//总框架
        pic: "#bigimg",//大图框架
        pnum: "#smallimg",//小图框架
        prev_btn: ".prev",//小图左箭头
        next_btn: ".next",//小图右箭头
        autoplay: true,//是否自动播放
        interTime: 5000,//图片自动切换间隔
        delayTime: 400,//切换一张图片时间
        order: 0,//当前显示的图片（从0开始）
        picdire: true,//大图滚动方向（true为水平方向滚动）
        mindire: true,//小图滚动方向（true为水平方向滚动）
        min_picnum: 3,//小图显示数量
        pop_up: false//大图是否有弹出框
    });
}

function share(){
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}
function layout(u){
	var $obj = $('<div class="dialog-layout"></div>');
	if(u == 0){
		$('.dialog-layout').remove();
	}else{
		if(!$('.dialog-layout').length){
			$obj.appendTo('body').show();
		}
	}
}