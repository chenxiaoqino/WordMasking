	if(!window.jQuery)
	{
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "http://code.jquery.com/jquery-1.9.0.js";
		document.getElementsByTagName('head')[0].appendChild(script);
		return;
	}
	
(function ($) {
    $.fn.wordMasking = function () {
	
		var color={
			'default':'#fcc',
			'background':'#fff',
			'text':'#000'
		}
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
	
})(jQuery);
