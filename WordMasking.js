

var _WM_Initialize=function(){
	if(!window.jQuery)
	{
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "http://code.jquery.com/jquery-1.9.0.js";
		document.getElementsByTagName('head')[0].appendChild(script);
		script.onload=_WM_Initialize;
		return;
	}
		
	var color={
		'default':'#fcc',
		'background':'#fff',
		'text':'#000'
	}
	$('b').css({
		'background':color.default,
		'color':color.default
	}).hover(
		function(){
			$(this).css({
				'background':color.background,
				'color':color.text
			});
		},
		function(){
			$(this).css({
				'background':color.default,
				'color':color.default
			});
		}
	).bind("touchstart",function(){
			$(this).css({
				'background':color.background,
				'color':color.text
			});
	}).bind("touchend",function(){
			$(this).css({
				'background':color.default,
				'color':color.default
			});	
	});
}

window.onload=_WM_Initialize;
$(document).ready(function(){window.onload=null;_WM_Initialize();});