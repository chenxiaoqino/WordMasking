var color={
	'default':'#fcc',
	'background':'#fff',
	'text':'#000'
}
$('b').css({
	'background':color.default,
	'color':color.default
}).hover(
	function(){$(this).css({
	'background':color.background,
	'color':color.text
	});},
	function(){$(this).css({
	'background':color.default,
	'color':color.default
	});}
);