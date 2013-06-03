var plugin_insert=(function ($) {
    $.fn.wordMasking = function (colorOptions) {
		var defaultColor={
			'default':'#fcc',
			'background':'#fff',
			'text':'#000'
		}
		var color = $.extend(defaultColor, colorOptions);
		
		return $(this).css({
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
});
if(!window.jQuery)
{
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "http://code.jquery.com/jquery.js";
	script.onload = function(){plugin_insert(jQuery)};
	document.getElementsByTagName('head')[0].appendChild(script);
}
else
{
	plugin_insert(jQuery);
}