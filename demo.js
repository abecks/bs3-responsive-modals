// throttled onresize handler https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

$(function(){
	$("myModal").on('show.bs.modal', function(){
		
	});
})