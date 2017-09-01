;$(".center").on("click","span",function(){
	var idx=$(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	$(".main").find("ul").eq(idx).show().siblings().hide();
})